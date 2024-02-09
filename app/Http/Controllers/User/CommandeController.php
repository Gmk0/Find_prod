<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as OrderResources;
use App\Models\Commission;
use App\Models\Conversation;
use App\Models\FeedbackService;
use App\Models\Message;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Order;
use App\Models\Transaction;

use Illuminate\Support\Facades\DB;

class CommandeController extends Controller
{
    //

    public function commandesList()
    {

        $commandes = auth()->user()->orders;
        //dd($commandes);

        return Inertia::render(
            'User/Commande/CommandeUser',
            ['commandes' => OrderResources::collection($commandes)]
        );
    }

    public function commandesOne($order_numero)
    {

        $commande = Order::where('order_numero', $order_numero)->first();

        return Inertia::render(
            'User/Commande/CommandeGestion',
            ['commande' => OrderResources::make($commande)]
        );
    }

    public function sendFeeback(Request $request)
    {

        $request->validate(['feedback_id'=>'required']);

        try{
            $feedback = FeedbackService::findOrfail($request->feedback_id);
            $feedback->satisfaction = $request->satisfaction ? $request->satisfaction : 2;
            $feedback->commentaires = $request->description;
            $feedback->update();

        }catch(\Exception $e){
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }

    }

    public function debloquerPaiement(Request $request)
    {


        $request->validate(['order_id' => 'required']);


        $order= Order::FindOrFail($request->order_id);


        if($order->is_paid != null)
        {
            return redirect()->back()->withErrors(['message' => 'Vous avez deja debloquer ce paiement']);
        }







        DB::beginTransaction();
        try {


            $order->is_paid = now();
            $order->update();

            $freelance = $order->service->freelance;

            // Calculer 80% du montant total de la commande
            $amountToAdd = $order->total_amount * 0.80;
            $commissionAmount = $order->total_amount * 0.20;

            $freelance->solde += $amountToAdd;
            $freelance->save();

            // 20% de commission

            $transaction = Transaction::create([
                'user_id' => $freelance->user_id,
                'type' => 'debiter',
                'amount' => $amountToAdd,
                'description' => 'Débit pour la commande #' . $order->order_numero . ' après déduction de la commission',
                'status' => 'completed'

            ]);
            $commission = new Commission();
            $commission->order_id = $order->id;
            $commission->amount = $commissionAmount;
            $commission->user_id = $freelance->user_id;
            $commission->net_amount = $amountToAdd;
            $commission->percent = '30%';
            $commission->description = 'Commission de 30% prélevée sur la commande.';
            $commission->transaction_id = $transaction->id;
            $commission->save();



            DB::commit();

        } catch (\Exception $e) {



            DB::rollback();

            return redirect()->back()->withErrors(['message' => 'une erreur s\'est produite'. $e->getMessage()]);

        }
    }

    public function contacterUser(Request $request)
    {



        try {




            $conversation = Conversation::where('freelance_id', $request->freelance_id)
                ->whereHas('user', function ($query) {
                    $query->where('id', auth()->id());
                })
                ->first();





            if ($conversation==null) {
                $conversation = new Conversation();
                $conversation->user_id = auth()->id();
                $conversation->freelance_id= $request->freelance_id;
                $conversation->last_time_message = now();
                $conversation->status = 'pending';
                $conversation->save();
            }


            $order=Order::find($request->order);



            $createdMessage = Message::create([
                'sender_id' => auth()->user()->id,
                'receiver_id' => $request->freelance_user_id,
                'conversation_id' => $conversation->id,
                'body' => "conversation relater de la commande :<strong>". $order->order_numero. '</strong>',
                'is_read' => false,
                'type' => "text",
                'order_id' => $request->order,

            ]);

            return redirect()->route('user.chat', $conversation->id);

        } catch (\Exception $e) {



            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }
}
