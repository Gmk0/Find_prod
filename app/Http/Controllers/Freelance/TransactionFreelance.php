<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\TransactionResourceData;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Inertia\Inertia;

class TransactionFreelance extends Controller
{
    //

    public function show()
    {

        $transactions = auth()->user()->transactions;

        return Inertia::render('Freelance/Transaction/TransactionListe',
        ['transactions' => TransactionResourceData::collection($transactions)]);
    }

    public function showTransaction($transaction_numero)
    {
        $transaction = auth()->user()->transactions->where('transaction_numero', $transaction_numero)->first();

        // dd($transaction);


        if(!$transaction)
        {
            return redirect()->back()->with(['error' => 'element indisponible']);
        }


        return Inertia::render('Freelance/Transaction/TransactionGestion',['transaction' => TransactionResourceData::make($transaction)]);

    }

    public function RetraitArgent()
    {

        $solde=auth()->user()->freelance->solde . '$';

        return Inertia::render('Freelance/Paiement/RetraitArgent',['solde' => $solde]);

    }

    public function showTransactionReleves()
    {
        $baseQuery = Transaction::where('user_id', auth()->id());


        $debitsQuery = clone $baseQuery;
        $creditsQuery = clone $baseQuery;
        $paymentsQuery = clone $baseQuery;
        $allQueery =  $baseQuery->get();

        return Inertia::render('Freelance/Paiement/Releves',
        [
                'debits' => $debitsQuery->where('status', 'completed')->where('type', '=', 'debiter')->sum('amount'),
                'credits' => $creditsQuery->where('status', 'completed')->where('type', '=', 'credit')->sum('amount'), // Assurez-vous que c'est bien 'credit' et non 'debit'
                'paiments' => $paymentsQuery->where('status', 'completed')->where('type', '=', 'paiement')->sum('amount'),
                'transactions' => TransactionResourceData::collection($allQueery),
            ]);
    }
}
