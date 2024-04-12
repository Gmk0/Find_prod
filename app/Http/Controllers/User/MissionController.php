<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\{TransactionResourceData, MissionResourceData, MissionResponseResource};
use App\Models\Conversation;
use App\Models\Message;
use App\Models\Mission;
use App\Models\MissionResponse;
use App\Models\Transaction;
use App\Tools\Paiement;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;
use App\Jobs\CheckTransactionStatus;
use App\Models\Commission;
use App\Jobs\CheckUserActivityJob;
use App\Notifications\PaiementDebloquer;

class MissionController extends Controller
{
    //


    public function missionsList()
    {
        $mission =Mission::where('user_id',auth()->id())->orderBy('created_at', 'desc')->paginate(10);



        return Inertia::render(
            'User/Mission/MissionUser',
            ['missions' => MissionResourceData::collection($mission)]
        );
    }
    public function missionEdit($mission_numero)
    {
        $mission = Mission::where('mission_numero', $mission_numero)->first();
        return Inertia::render('User/Mission/MissionMod',['mission' => MissionResourceData::make($mission)]);
    }

    public function missionEditSave(Request $request)
    {




        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'budget' => 'required|numeric',
            'dateF' => 'required',
            'dateD' => 'required',
            'mission_id' => 'required',
            'category_id' => 'required'
        ]);

        $mission = Mission::findOrFail($request->mission_id);

        $filesPaths = $mission->files ?? []; // Récupération des anciens chemins des fichiers

        if ($request->hasFile('image')) {
            $files = $request->file('image');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('missions', $fileName, 'public'); // Enregistrer le fichier dans 'public/missions' avec le nom d'origine
                $filesPaths[] = '/missions/' . $fileName; // Enregistrer les nouveaux chemins des fichiers
            }
        }

        $mission->update([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'files' => $filesPaths, // Sauvegarde des chemins des fichiers dans la base de données
            'budget' => $request->budget,
            'begin_mission' => $request->dateD,
            'end_mission' => $request->dateF,
            'exigences' => $request->exigence,
            'masquer'=>$request->masquer,
        ]);






    }

    public function removeFileMission(Request $request)
    {

        $request->validate([
            'mission_id' => 'required', // Valide que l'ID de la mission est présent
            'file_index' => 'required', // Valide que l'index du fichier à supprimer est présent
        ]);

        $mission = Mission::findOrFail($request->mission_id);

        try{
            if (isset($mission->files[$request->file_index])) {
                $filePath = $mission->files[$request->file_index];

                if (Storage::disk('public')->exists($filePath)) {
                    Storage::disk('public')->delete($filePath); // Supprime le fichier du stockage

                    unset($mission->files[$request->file_index]); // Supprime le chemin du fichier de la liste des fichiers de la mission
                    $mission->save(); // Enregistre les modifications dans la base de données

                   // return "Fichier supprimé avec succès de la mission.";
                }
            }

        }catch(\Exception $e){

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }



        //return "Impossible de trouver ou de supprimer le fichier de la mission.";
    }

    public function candidature($mission_numero)
    {

        $missionsR =MissionResponse::whereHas('mission', function($q) use($mission_numero){

            $q->where('mission_numero',$mission_numero);
        })->get();



        return Inertia::render('User/Mission/MissionPostulation', ['missionResponces' => MissionResponseResource::collection($missionsR)]);
    }

    public function accepterMission(Request $request)
    {

        try {

            $response = MissionResponse::findOrfail($request->responce_id);
            $mission= $response->mission;
            $response->status = 'approved';
            $response->update();

            $mission->status = 'active';
            $mission->update();
            $response->notifyFreelance();

        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }
    public function refuserMission(Request $request)
    {
        try {

            $Response
            = MissionResponse::findOrfail($request->responce_id);
            $Response->status = 'rejected';
            $Response->update();
            // $Response->notifyFreelance();

        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function missionGestion($mission_numero , $mission_response)
    {


        $mission = Mission::where('mission_numero',$mission_numero)->first();


        $mission_response =MissionResponse::where('response_numero',$mission_response)->where('mission_id',$mission->id)->where('status', 'approved')->first();



        if (!$mission && !$mission_response) {
            return redirect()->back();
        }


        return Inertia::render('User/Mission/MissionGestion',['missionResponse'=>MissionResponseResource::make($mission_response)]);
    }

    public function contacterUser(Request $request)
    {



        try {



            $conversation = Conversation::where('freelance_id', $request->freelance_id)
                ->whereHas('user', function ($query) {
                    $query->where('id', auth()->id());
                })
                ->first();


                $mission=Mission::find($request->mission_id);

                if(!$mission){

                return redirect()->back()->withErrors(['message' => 'pas de mission disponible']);
                }





            if (!$conversation) {
                $conversation = new Conversation();
                $conversation->user_id = auth()->id();
                $conversation->freelance_id = $request->freelance_id;
                $conversation->last_time_message = now();
                $conversation->status = 'pending';
                $conversation->save();
            }

            $createdMessage = Message::create([
                'sender_id' => auth()->user()->id,
                'receiver_id' => $request->freelance_user_id,
                'conversation_id' => $conversation->id,
                'body' => "conversation relater de la mission : <strong> {$mission->title} </strong>",
                'is_read' => false,
                'type' => "text",
            ]);

            CheckUserActivityJob::dispatch($request->freelance_user_id, $createdMessage);


            return redirect()->route('user.chat', $conversation->id);
        } catch (\Exception $e) {

            //dd($e->getMessage());
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function missionPaiement($mission_numero, $mission_response)
    {

        $mission = Mission::where('mission_numero', $mission_numero)->first();


        $mission_response = MissionResponse::where('response_numero', $mission_response)->where('mission_id', $mission->id)->where('status', 'approved')->first();



        if (!$mission && !$mission_response) {
            return redirect()->back();
        }


        return Inertia::render('User/Mission/MissionPaiement', [
            'missionResponse' => MissionResponseResource::make($mission_response),
            'userSetting'=>auth()->user()->userSetting,
            ]);

    }

    public function deleteMission(Request $request)
    {
        $request->validate([
            'mission_id' => 'required',

        ]);

        try{
            $mission = Mission::findOrFail($request->mission_id);

            if ($mission->getApprovedMissionResponse() != null) {

                return redirect()->back()->withErrors(['message' =>"Impossible d'effacer la mission vous avez deja accepter une proposition"]);
            } else {
                $mission->delete();

                return redirect()->route('user.missions');
            }

        }catch(\Exception $e){

            return redirect()->back()->withErrors(['message' => "une erreur est survenue"]);


        };






    }
    function returnBrand($provider): String
    {
        if ($provider == 10) {
            return 'ORANGE MONEY';
        } else if ($provider == 15) {
            return 'AIRTEL MONEY';
        } else {
            return 'M-PESA';
        }
    }


    public function missionPaiementMaxi(Request $request)
    {
        try {

            DB::beginTransaction();
            $mission_response=MissionResponse::find($request->response);
            $form = $request->form;
            $total = $request->solde;
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => $request->numero, 'brand' => $this->returnBrand($form['provider'])];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();
           // $mission_response->is_paid = now();
           // $mission_response->update();
            $mission = $mission_response->mission;
            //$mission->is_paid = now();
            $mission->transaction_id = $payment->id;
            $mission->update();
            DB::commit();
            $callback= route('checkoutStatusMaxiMission');
            $checkout = new Paiement();
            $response = $checkout->paidAvada($total, $form['numero'], $form['provider'], $callback, $payment->transaction_numero);
           // CheckTransactionStatus::dispatch($payment)->delay(now()->addSeconds(30));
            return response()->json($response);

        } catch (\Exception $e) {

            DB::rollback();


            return response()->json(['message' => $e->getMessage()]);

          // return redirect()->back()->withErrors(['messsage'=>'une erreur s\est produite'. $e->getMessage()]);
        }
    }



     public function checkoutStatusMission(Request $request)
    {
        $transaction_numero=$request->order_id;


        $checkout= new Paiement();
        $response=$checkout->checkStatus($transaction_numero);
        //dd($response['status']);
        $response_user=$this->paiement_status($transaction_numero,$response['status']);

        $data = $response_user->getData(true);



        if($data['status'] ==='error')
        {
            return redirect()->back()->withErrors(['message' => "La transaction a échoué. Veuillez réessayer."]);

        }else{

            return redirect()->route('paiementStatus', ['transaction_numero' =>$transaction_numero]);

        }


    }



        public function statusPaiement($transaction_numero)
        {
            $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
            return Inertia::render('User/Mission/MissionStatut', ['transaction' => TransactionResourceData::make($transaction)]);
        }

        public function paiement_status($transaction_numero, $status)
        {
            $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
            if ($status == 3) {
                $transaction->status = 'failed';
                $transaction->save();
                $mission = $transaction->mission;
                $missionResponse =MissionResponse::where('mission_id',$mission->id)
                ->where('status','approved')->first();
                //$mission->is_paid = now();
                $mission->transaction_id = null;
                $mission->save();
            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);

            } else if ($status == 2) {
                $transaction->status = 'completed';
                $transaction->save();
                $mission = $transaction->mission;
                $mission->is_paid = now();
                $mission->status= "active";
                $mission->save();
               // $missionResponse= MissionResponse::where('mission_id',$mission->id)->where('status','approved')->first();
                //$missionResponse->is_paid = now();
               // $missionResponse->update();
            return response()->json(['status' => 'success', 'transaction_numero' => $transaction->transaction_numero]);

            } else {
                $transaction->status = 'failed';
                $transaction->save();
                $mission = $transaction->mission;
                //$mission->is_paid = now();
                $mission->transaction_id = null;
                $mission->save();
            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
            }
        }


    function references()
    {
        // Générer une chaîne aléatoire unique de 16 caractères
        $randomString = uniqid();
        // Extraire les 8 premiers caractères de la chaîne aléatoire pour obtenir l'ID unique de 8 caractères
        $uniqueId = substr($randomString, 0, 8);
        // Compteur pour incrémenter la fin de l'ID unique
        $counter = DB::table('transactions')->count() + 1;
        // Concaténer le compteur à la fin de l'ID unique
        return  $finalId = 'TR' . $uniqueId . $counter;
    }

    public function debloquerPaiement(Request $request)
    {


        $request->validate(['mission_id' => 'required']);





        $mission = Mission::FindOrFail($request->mission_id);
        $missionResponse=MissionResponse::FindOrFail($request->mission_response_id);




        if ($mission->is_paid == null) {
            return redirect()->back()->withErrors(['message' => 'le paiement n\'a pas encore ete effectuer']);
        }

        if ($missionResponse->is_paid != null) {
            return redirect()->back()->withErrors(['message' => 'le paiement a  ete effectuer']);
        }

        $transaction = $mission->transaction;

        if($transaction?->status !='completed')
        {
            return redirect()->back()->withErrors(['message' => 'le paiement n\'a pas encore ete effectuer']);

        }

        DB::beginTransaction();
        try {



            $missionResponse->is_paid = now();
            $missionResponse->update();
            $mission->status = 'completed';
            $mission->update();

            $freelance = $missionResponse->freelance;
            $user = $freelance->user;

            // Calculer 80% du montant total de la commande
            $amountToAdd = $transaction->amount * 0.80;
            $commissionAmount = $transaction->amount * 0.20;

            $freelance->solde += $amountToAdd;
            $freelance->save();

            // 20% de commission

            $transactionFait = Transaction::create([
                'user_id' => $freelance->user_id,
                'type' => 'debiter',
                'amount' => $amountToAdd,
                'description' => 'Débit pour la mission #' . $mission->mission_numero . ' après déduction de la commission',
                'status' => 'completed'

            ]);
            $commission = new Commission();
            $commission->mission_id = $mission->id;
            $commission->amount = $commissionAmount;
            $commission->user_id = $freelance->user_id;
            $commission->net_amount = $amountToAdd;
            $commission->percent = '20%';
            $commission->description = 'Commission de 20% prélevée sur la commande.';
            $commission->transaction_id = $transactionFait->id;
            $commission->save();


            $user->notify(new PaiementDebloquer($amountToAdd));

            DB::commit();
        } catch (\Exception $e) {



            DB::rollback();

            return redirect()->back()->withErrors(['message' => 'une erreur s\'est produite' . $e->getMessage()]);
        }
    }

}
