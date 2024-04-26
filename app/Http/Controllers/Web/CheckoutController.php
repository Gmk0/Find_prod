<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResourceData;
use App\Models\ClientLink;
use App\Models\Order;
use App\Models\Proposal;
use App\Models\coupon;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Tools\Paiement;
use App\Models\Transaction;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Session;
use App\Jobs\CheckTransactionStatus;
use App\Jobs\CheckCheckoutCustom;

class CheckoutController extends Controller
{
    //

    public function checkout()
    {
        $userSetting =auth()->user()->userSetting;
        return Inertia::render('Web/Checkout/Checkout',['userSetting' => $userSetting]);
    }

    public function checkoutStatus(Request $request)
    {
        $transaction_numero=$request->order_id;
        $checkout= new Paiement();
        $response=$checkout->checkStatus($transaction_numero);
        $response_user=$this->paiment_status($transaction_numero,$response['status']);
        $data = $response_user->getData(true);
        if($data['status'] ==='error')
        {
            return redirect()->back()->withErrors(['message' => "La transaction a échoué. Veuillez réessayer."]);

        }else{
            return redirect()->route('paiementStatus', ['transaction_numero' =>$transaction_numero]);

        }


    }
    public function checkoutStatusCustom(Request $request)
    {
        $transaction_numero = $request->order_id;
        $checkout = new Paiement();
        $response = $checkout->checkStatus($transaction_numero);

        $response_user = $this->paiment_statusCustom($transaction_numero, $response['status']);
        $data = $response_user->getData(true);
        if ($data['status'] === 'error') {
            return redirect()->back()->withErrors(['message' => "La transaction a échoué. Veuillez réessayer."]);
        } else {
            return redirect()->route('paiementStatus', ['transaction_numero' => $transaction_numero]);
        }
    }
    public function paiment_statusCustom($transaction_numero, $status)
    {
        try{



        $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        if ($transaction == null) {
            return response()->json(['status' => 'error',]);
        }

        if ($status == 3) {
            $proposal= $transaction->proposal;
            $transaction->status = 'failed';
            $transaction->save();
            $proposal->transaction_id=null;
            $proposal->update();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
        } else if ($status == 2) {

            $proposal = $transaction->proposal;
            $transaction->status = 'completed';

            $transaction->sendMail();
            $transaction->save();
            $proposal->status= 'finished';
            $proposal->update();
            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->notifyUser();
                $order->save();
            }

            return response()->json(['status' => 'success', 'transaction_numero' => $transaction->transaction_numero]);
        } else {


            $proposal = $transaction->proposal;


            $transaction->status = 'failed';
            $transaction->save();
            $proposal->transaction_id = null;
            $proposal->update();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);

        }
        }catch(\Exception $e){

           // dd($e->getMessage());
        }
    }

    public function paiment_status($transaction_numero,$status)
    {

        $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        if($transaction ==null)
        {
            return response()->json(['status' => 'error',]);

        }

        if ($status == 3) {
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return response()->json(['status'=>'error','transaction_numero'=>$transaction->transaction_numero]);


        } else if ($status == 2) {

            $transaction->status = 'completed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->notifyUser();
                $order->save();
            }

            return response()->json(['status' => 'success', 'transaction_numero' => $transaction->transaction_numero]);
        } else {
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
        }
    }

    function returnBrand($provider):String
    {
        if ($provider == 10) {
            return 'ORANGE MONEY';
        } else if ($provider == 17) {
            return 'AIRTEL MONEY';
        } else {
            return 'M-PESA';
        }
    }

    public function checkoutMaxi(Request $request)
    {

        try{

            DB::beginTransaction();

            $form =$request->form;
            $total =$request->total;
            $items =$request->items;
            $datas=[];
            $payment = new Transaction();
            $payment->user_id = auth()->id();
            $payment->amount = $total;
            $payment->payment_method = ['last4' => $form['numero'], 'brand' => $this->returnBrand($form['provider'])];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();

            foreach ($items as $key => $value) {

                $data = [
                    'service_id' =>$value['id'],
                    'user_id' => auth()->user()->id,
                    'total_amount' => $value['price'] * $value['quantity'],
                    'quantity' => $value['quantity'],
                    'type' => 'service',
                    'status' => 'pending',
                    'transaction_id' =>  $payment->id
                ];
                $datas[] =Order::create($data);
            }

            DB::commit();
            $callback =route('checkoutStatusMaxiService');
            $checkout = new Paiement();
            //$checkout->pa
            $response=$checkout->paidAvada($total,$form['numero'], $form['provider'],$callback, $payment->transaction_numero);
            // dd($url);

            CheckTransactionStatus::dispatch($payment)->delay(now()->addSeconds(30));
             return response()->json($response);


        }catch(\Exception $e){
            DB::rollBack();

            return response()->json(['error' => $e->getMessage()], 500);
           // dd($e->getMessage());

        }


    }

    public function paiment_maxi(Request $request)
    {




        $reference = $request->reference;
        $methode = $request->method;
        $status = $request->status;

        $transaction = Transaction::where('payment_token', $reference)->first();

        if($transaction==null)
        {

        }

        if($status=='failed')
        {
            $transaction->status = 'failed';
            $transaction->save();

            $oders= $transaction->orders;

            foreach($oders as $order)
            {
                $order->status='failed';
                $order->save();

            }

            return redirect()->route('panier')->with('error','une erreur s\'est produite');

        }else if($status == 'success'){

            $transaction->status = 'completed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->notifyUser();
                $order->save();
            }

            return redirect()->route('paiementStatus',['transaction_numero' => $transaction->transaction_numero]);
        }else{
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            return redirect()->route('panier')->with('error', 'une erreur s\'est produite');
        }



    }

    public function paiementStatus($transaction_numero)
    {

       // dd($transaction_numero);

       $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        return Inertia::render('Web/Checkout/Status',['transaction'=>TransactionResourceData::make($transaction)]);
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

    public function LinkCustomPaid($uniqueId)
    {

        // Recherchez le lien dans la base de données

        $clientLink = ClientLink::where('uniqueId', $uniqueId)->first();


        // Vérifiez si le lien correspond à un utilisateur authentifié
        if
        ($clientLink && Auth::check() && ($clientLink->user_id === Auth::id() || Auth::user()->isAdmin())) {
            // Utilisateur authentifié, redirigez vers la page appropriée

            $proposal=Proposal::find($clientLink->proposal_id);


            if($proposal->status =='finished')
            {
                //$clientLink->delete();

                session()->flash('error', 'Vous avez deja utiliser ce lien');
                return redirect()->back();
            }
            $service=$proposal->service;
            $userSetting = auth()->user()->userSetting;


            return Inertia::render('Web/Checkout/CheckoutCustom',
            ['userSetting' => $userSetting,
            'proposal' => $proposal,
            'user_id'=> $clientLink->user_id,
            //'service' => $service,

            ]);


            //return view('other.paiement-custom', ['proposal' => $clientLink->proposal]);
        }

        // Lien invalide ou non autorisé pour cet utilisateur
        abort(403, 'Accès non autorisé');

    }


    public function checkoutCustom(Request $request)
    {



        try {

            DB::beginTransaction();
            $form = $request->form;
            $total = $request->total;
            $user_id= $request->user_id;
            $payment = new Transaction();
            $payment->user_id = $user_id;
            $payment->amount = $total;
            $payment->payment_method = ['last4' => $form['numero'], 'brand' => "Mobile"];
            $payment->payment_token = $this->references();
            $payment->type = "paiement";
            $payment->save();

            $order=Order::create([
                'service_id' => $request->service_id,
                'user_id' => $user_id,
                'total_amount' => $request->total,
                'quantity' => 1,
                'type' => 'service',
                'status' => 'pending',
                'transaction_id' =>  $payment->id,
                ]);

            $proposal=Proposal::find($request->proposal_id);
            $proposal->transaction_id=$payment->id;
            $proposal->update();

            DB::commit();

            $callback = route('checkoutStatusMaxiService');
            $checkout = new Paiement();
            //$checkout->pa
            $response = $checkout->paidAvada($total, $form['numero'], $form['provider'], $callback, $payment->transaction_numero);

            return response()->json($response);


        } catch (\Exception $e) {
            DB::rollBack();
            error_log($e->getMessage());

            return response()->json(['error' => $e->getMessage()],500);
          //  return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }


    }



    public function applyCoupon(Request $request)
    {
       // dd($request->all());

        $coupon=$request->coupon;
        $items=$request->items;

        $service=Service::find($items[0]['id']);
        if(!$service->use_coupon)
        {

           return response()->json(['error' => 'Coupon inexistant ou non applicable à ce service'], 400);
        }

        $price=0;
        $couponModel=Coupon::where('coupon',$coupon)->first();

        if(!$couponModel)
        {
            return response()->json(['error' => 'Coupon inexistant ou non applicable à ce service'], 400);
        }
        if($items[0]['price'] < $service->basic_price)
        {
            return response()->json(['error' => 'Un coupon a déjà été utilisé sur ce prix'], 400);

        }

        $price= $items[0]['price'] * $items[0]['quantity']* $couponModel->pourcentage /100;
        $total= $items[0]['price'] * $items[0]['quantity']- $price;

        return response()->json(['prix'=> $total,'id'=> $items[0]['id'],'status'=>1,'reduction'=> $couponModel->pourcentage.' %']);

    }

}
