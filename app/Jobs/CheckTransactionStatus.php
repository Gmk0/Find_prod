<?php

namespace App\Jobs;

use App\Models\Transaction;
use App\Tools\Paiement;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class CheckTransactionStatus implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
     public $transaction ;
    public function __construct(Transaction $transaction)
    {
        //
        $this->transaction = $transaction;
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //

        $checkout = new Paiement();
        $response = $checkout->checkStatus($this->transaction->transaction_numero);
        $response_user = $this->paiment_status($this->transaction->transaction_numero, $response['status']);


    }

    public function paiment_status($transaction_numero, $status)
    {
        $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
        if ($transaction == null) {
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

            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
        } else if ($status == 2) {

            $transaction->status = 'completed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'completed';
                $order->notifyUser();
                $order->save();
            }

           // return response()->json(['status' => 'success', 'transaction_numero' => $transaction->transaction_numero]);
        } else {
            $transaction->status = 'failed';
            $transaction->save();

            $oders = $transaction->orders;

            foreach ($oders as $order) {
                $order->status = 'failed';
                $order->save();
            }

            //return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
        }
    }
}
