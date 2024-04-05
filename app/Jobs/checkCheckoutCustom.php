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

class CheckCheckoutCustom implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    /**
     * Create a new job instance.
     */
    public function __construct(public Transaction $transaction)
    {
        //
    }

    /**
     * Execute the job.
     */
    public function handle(): void
    {
        //

        $checkout = new Paiement();
        $response = $checkout->checkStatus($this->transaction->transaction_numero);
        $response_user = $this->paiment_statusCustom($this->transaction->transaction_numero, $response['status']);

    }

    public function paiment_statusCustom($transaction_numero, $status)
    {
        try {



            $transaction = Transaction::where('transaction_numero', $transaction_numero)->first();
            if ($transaction == null) {
                return response()->json(['status' => 'error',]);
            }

            if ($status == 3) {
                $proposal = $transaction->proposal;
                $transaction->status = 'failed';
                $transaction->save();
                $proposal->transaction = null;
                $proposal->update();

                $oders = $transaction->orders;

                foreach ($oders as $order) {
                    $order->status = 'failed';
                    $order->save();
                }

                //return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
            } else if ($status == 2) {

                $proposal = $transaction->proposal;
                $transaction->status = 'completed';
                $transaction->save();
                $proposal->status = 'finished';
                $proposal->update();
                $oders = $transaction->orders;

                foreach ($oders as $order) {
                    $order->status = 'completed';
                    $order->notifyUser();
                    $order->save();
                }

                //return response()->json(['status' => 'success', 'transaction_numero' => $transaction->transaction_numero]);
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

               // return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
            }
        } catch (\Exception $e) {

            error_log($e->getMessage());
            return response()->json(['status' => 'error', 'transaction_numero' => $transaction->transaction_numero]);
          //  dd($e->getMessage());
        }
    }

}
