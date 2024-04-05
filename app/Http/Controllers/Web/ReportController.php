<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Barryvdh\DomPDF\Facade\Pdf;

class ReportController extends Controller
{
    //


    public function facture($facture)
    {

        try{

            $order = Transaction::where('transaction_numero', $facture)->first();
            if (!$order) {
                return redirect()->back()->withErrors(['message' => 'Une erreur s\'est produite.']);
            }
            if ($order->orders != null) {
                $pdf = Pdf::loadView('Report.Facture', ['transaction' => $order]);
               // return $pdf->download('facture.pdf');
                return $pdf->stream('facture.pdf');
            }
        }catch(\Exception $e)
        {
            dd($e->getMessage());
        }

    }
}
