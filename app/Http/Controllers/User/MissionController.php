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

class MissionController extends Controller
{
    //


    public function missionsList()
    {
        $mission = auth()->user()->missions;
        //dd($mission);
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
            // $Response->notifyFreelance();

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





            if (!$conversation) {
                $conversation = new Conversation();
                $conversation->freelance_id = $request->freelance_id;
                $conversation->last_time_message = now();
                $conversation->status = 'pending';
                $conversation->save();
            }

            $createdMessage = Message::create([
                'sender_id' => auth()->user()->id,
                'receiver_id' => $request->freelance_user_id,
                'conversation_id' => $conversation->id,
                'body' => "conversation relater de la commande :". $request->mission_id,
                'is_read' => false,
                'type' => "text",


            ]);

            return redirect()->route('user.chat', $conversation->id);
        } catch (\Exception $e) {

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

    public function missionPaiementMaxi(Request $request)
    {

        $request->validate(
            ['response'=>'required',
                'adresse'=>'required',
                'ville'=>'required',
                'commune'=>'required',
                'pays'=>'required'
            ]);





        try {

            DB::beginTransaction();

            $userSeeting = auth()->user()->userSetting;

            $localisation=[
                'adresse'=> $request->adresse,
                'commune' => $request->commune,
                'ville' => $request->ville,
                'pays' => $request->pays,
                ];


            $userSeeting->addresse_facturation = $localisation;

            $userSeeting->save();

            $mission_response=MissionResponse::find($request->response);


            $numero = $request->numero;
            $nom = $request->nom;

            $total = $request->montant;
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => $request->numero, 'brand' => "maxicash"];
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


            $succesUrl
                = route('checkoutStatusMaxiMission');
            $faileurUrl =
                route('checkoutStatusMaxiMission');

            $cancelurl =
                route('checkoutStatusMaxiMission');
            $checkout = new Paiement();



            $url = $checkout->checkoutmaxi($total * 100, $numero, $payment->payment_token, $succesUrl, $cancelurl, $faileurUrl);

            // dd($url);

            return Inertia::location($url);


        } catch (\Exception $e) {

            DB::rollback();

            dd($e->getMessage());

           return redirect()->back()->withErrors(['messsge'=>'une erreur s\est produite']);
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

        public function statusPaiement($transaction_numero)
        {



        $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        return Inertia::render('User/Mission/MissionStatut', ['transaction' => TransactionResourceData::make($transaction)]);


        }

        public function checkoutStatusMaxiMission(Request $request)
        {
        $reference = $request->reference;
        $methode = $request->method;
        $status = $request->status;

        $transaction = Transaction::where('payment_token', $reference)->first();



        if ($status == 'failed') {
            $transaction->status = 'failed';
            $transaction->save();

            $mission = $transaction->mission;


            $missionResponse =MissionResponse::where('mission_id',$mission->id)
            ->where('status','approved')->first();

            //$mission->is_paid = now();
            $mission->transaction_id = null;

            $mission->save();


            return redirect()->route('user.missions.missionPaiement',[$mission->mission_numero, $missionResponse->response_numero])->with('error', 'une erreur s\'est produite');
        } else if ($status == 'success') {

            $transaction->status = 'completed';
            $transaction->save();


            $mission = $transaction->mission;
            $mission->is_paid = now();
            $mission->status= "active";
            $mission->save();

            $missionResponse= MissionResponse::where('mission_id',$mission->id)->where('status','approved')->first();

            $missionResponse->is_paid = now();
            $missionResponse->update();

            return redirect()->route('statusPaiementMission', ['transaction_numero' => $transaction->transaction_numero]);
        } else {
            $transaction->status = 'failed';
            $transaction->save();

            $mission = $transaction->mission;
            //$mission->is_paid = now();
            $mission->transaction_id = null;

            $mission->save();

            return redirect()->route('panier')->with('error', 'une erreur s\'est produite');
        }





        }

}
