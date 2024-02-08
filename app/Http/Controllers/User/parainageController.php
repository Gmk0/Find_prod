<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResourceData;
use App\Models\FeedbackService;
use App\Models\Order;
use App\Models\Service;
use App\Models\Transaction;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Inertia\Inertia;

class parainageController extends Controller
{
    //

    public function getCodeUser(Request $request)
    {
        // Vous pouvez récupérer l'utilisateur actuellement authentifié ou
        // utiliser une logique spécifique pour récupérer l'utilisateur que vous souhaitez
        $user = $request->user();

        // Vérifiez si un utilisateur est authentifié
        if ($user) {
            // Renvoyer le code de parrainage de l'utilisateur au format JSON
            return response()->json(['referral_code' => $user->referral_code], 200);
        } else {
            // Renvoyer une réponse indiquant qu'aucun utilisateur n'est authentifié
            return response()->json(['message' => 'Aucun utilisateur n\'est authentifié.'], 401);
        }




    }

    public function generateCode(Request $request)
    {
        $user=auth()->user();



        if($user->referral_code !=null)
        {
            //return response()->json(['message' => 'Vous possedez deja un code'], 401);

        }else{
            $generatedCode= $this->generateReferralCode($user->name);

            $user->referral_code = $generatedCode;
            $user->save();

            //return response()->json(['referral_code' => $user->referral_code], 200);

        }
    }

    public function getAllUser()
    {
        // Vous pouvez récupérer l'utilisateur actuellement authentifié ou
        // utiliser une logique spécifique pour récupérer l'utilisateur que vous souhaitez
        $user = auth()->user();

        // Vérifiez si un utilisateur est authentifié
        if ($user->referrals !=null) {
            // Renvoyer le code de parrainage de l'utilisateur au format JSON
            return response()->json(['users' => $user->referrals], 200);
        } else {
            // Renvoyer une réponse indiquant qu'aucun utilisateur n'est authentifié
            return response()->json(['message' => 'Pas d\'utilisateur trouver.'], 401);
        }

    }

    private function generateReferralCode($name)
    {
        // Récupérez les trois premières lettres du nom
        $initials = Str::upper(Str::substr($name, 0, 3));

        // Ajoutez d'autres caractères si nécessaire pour garantir l'unicité
        $additionalChars = Str::upper(Str::random(5));

        // Combinez les initiales et les caractères supplémentaires
        $generatedCode = $initials . $additionalChars;

        return $generatedCode;
    }


    public function gift($id = null)
    {

        $user = User::find($id);

        if ($user->gift_used) {
            session()->flash('error', "woops vous avez deja utilisé l'offre");
            return redirect()->back();
        }

        $services=Service::where('is_gift',true)->get();


        return Inertia::render('User/Profile/GiftUser',['services'=>ServiceResourceData::collection($services)]);
    }

    public function getGift($service_numero)
    {
        $service = Service::where('service_numero', $service_numero)
        ->where('is_gift', true)
            ->first();

        if ($service == null) {
            return redirect()->back();
        }


        $commentaires = FeedbackService::whereHas('Order', function ($query) use ($service) {
            $query->whereHas('service', function ($q) use ($service) {
                $q->where('id', $service->id);
            });
        })->where('commentaires', '!=', null)->where('is_publish', 1)
        ->get()->map(function ($commentaire) {

            return [
                'commentaire' => $commentaire->commentaires,
                'satisfaction' => $commentaire->satisfaction,
                'user' => $commentaire->order->user?->only('id', 'name', 'profile_photo_path', 'profile_photo_url'),
            ];
        });


        $otherService = Service::where('id', '!=', $service->id)->where('is_gift', true)->take(6)->get();





        return Inertia::render(
            'User/Profile/GetOneGift',
            [
                'service' => ServiceResourceData::make($service),
                'otherService' => ServiceResourceData::collection($otherService),
                'commentaires' => $commentaires,
                'countReferrals'=> auth()->user()->countReferrals()

            ]
        );
    }

    public function getGiftPost(Request $request)
    {



        $user=User::find($request->id_client);

        if($user->gift_used)
        {
            return redirect()->back()->withErrors(['message' => "woops vous avez deja utilisé l'offre"]);
        }


        try{
            $service = Service::where('service_numero', $request->service_numero)->first();

            DB::beginTransaction();

            $payment = new Transaction();
            $payment->user_id = $request->id_client;
            $payment->amount = 0;
            $payment->payment_method = ['last4' => "Maxi", 'brand' => "free"];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->status = "completed";
            $payment->save();

            $order = Order::create([
                'service_id' => $service->id,
                'user_id' => auth()->user()->id,
                'total_amount' => 0,
                'quantity' => 1,
                'type' => 'service',
                'status' => 'completed',
                'transaction_id' =>  $payment->id,
            ]);

            $user->gift_used = true;
            $user->save();
            DB::commit();

            return redirect()->route('paiementStatus', ['transaction_numero' => $payment->transaction_numero]);
        }catch(\Exception $e){

            DB::rollback();
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

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
}
