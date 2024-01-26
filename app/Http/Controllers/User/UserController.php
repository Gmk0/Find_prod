<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as ResourcesOrder;
use App\Http\Resources\{TransactionResourceData, MissionResourceData};
use App\Models\Mission;
use App\Models\Order;
use App\Models\Transaction;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Http\Resources\Order as OrderResources;

use Barryvdh\DomPDF\Facade\Pdf;

class UserController extends Controller
{

    public function dashboard()
    {

        $total = $this->total();

        $totalCommande =Order::where('user_id',auth()->id())->where('status','completed')->count();
        $totalTransaction =Transaction::where('user_id', auth()->id())->where('status','completed')->count();
        $missionAttente= Mission::where('user_id',auth()->id())->where('status','pending')->count();

        $commandes =auth()->user()->orders;


        return Inertia::render('User/Dashboard/Dashboard',
        [
        'depense'=> $total,
        'commandeTotal'=>$totalCommande,
        'transactionTotal'=>$totalTransaction,
        'missionAttente'=>$missionAttente,
        'commandes' => OrderResources::collection($commandes),
            ]);
    }


    public function total()
    {
        $dateDebut = Carbon::now()->startOfMonth();
        $dateFin = Carbon::now()->endOfMonth();

        $user_id = auth()->id();
        // Récupérer toutes les transactions qui ont eu lieu dans le mois en cours
        $transactions = Transaction::where('user_id', $user_id)
            ->where('status', 'completed')->sum('amount');

        $total = number_format($transactions, 2, ',', ' '). ' $';
        return $total;
    }










    public function commandesList()
    {

        $commandes= auth()->user()->orders;
        //dd($commandes);

        return Inertia::render('User/Commande/CommandeUser',
        ['commandes'=>ResourcesOrder::collection($commandes)]);
    }
    public function transactionsList()
    {
        $transactions = auth()->user()->transactions;

        return Inertia::render('User/Transaction/TransactionUser',
        ['transactions' => TransactionResourceData::collection($transactions)]);
    }

    public function transactionsListOne($transaction_numero)
    {
        $transaction = auth()->user()->transactions->where('transaction_numero', $transaction_numero)->first();

       // dd($transaction);

        return Inertia::render(
            'User/Transaction/TransactionOneUser',
            ['transaction' => TransactionResourceData::make($transaction)]
        );
    }



    public function facture($facture)
    {

        $order = Transaction::where('transaction_numero', $facture)->first();
        if (!$order) {
            return redirect()->back()->withErrors(['message' => 'Une erreur s\'est produite.']);
        }
        if ($order->orders != null) {
            $pdf = Pdf::loadView('Report.Facture', ['order' => $order]);
            return $pdf->download('facture.pdf');
        }
    }

    public function signalement()
    {

        return Inertia::render('User/Other/Signaler');

    }
    public function aide()
    {

        return Inertia::render('User/Other/Aide');
    }
    public function feedback()
    {

        return Inertia::render('User/Other/SendFeedback');
    }









    //
}
