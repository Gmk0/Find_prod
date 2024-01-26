<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as OrderResource;
use App\Models\Order as ModelsOrder;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FreelanceAuth extends Controller
{
    //

    public function Dashboard()
    {
        return Inertia::render('Freelance/Dashboard/Dashboard',
        ['totalPercue'=> $this->totalCompleted(),
        'commandeEnAttente'=>$this->commandeEnAttente(),
        'commandeLivre'=>$this->commandeLivre(),
        'commandeTotal'=>$this->commandeTotal(),
        'commandes'=>$this->commandes(),
        'solde' => auth()->user()->freelance->solde . ' $',

        ]
        );
    }

    function commandes(){

        $freelance = auth()->user()->freelance->id;



        $order = ModelsOrder::whereHas('service.freelance', function ($query) use ($freelance) {
            $query->where('id', $freelance);
        })->orderBy('created_at', 'Desc')->get();

          return  OrderResource::collection($order);
    }


    function commandeTotal()
    {

        $freelance_id = auth()->user()->freelance->id;
        $total = ModelsOrder::whereHas('service', function ($query) use ($freelance_id) {
            $query->where('freelance_id', $freelance_id);
        })
            ->where('status', 'completed')
            ->count();
        return $total;
    }

    function commandeLivre()
    {

        $freelance_id = auth()->user()->freelance->id;
        $total = ModelsOrder::whereHas('service', function ($query) use ($freelance_id) {
            $query->where('freelance_id', $freelance_id);
        })->whereHas('feedback', function ($q) {
            $q->where('etat', '=', 'Livré');
        })
            ->where('status', 'completed')
            ->count();
        return $total;

    }
    function commandeEnAttente()
    {
        $freelance_id = auth()->user()->freelance->id;
        $total = ModelsOrder::whereHas('service', function ($query) use ($freelance_id) {
            $query->where('freelance_id', $freelance_id);
        })->whereHas('feedback', function($q){
            $q->where('etat','!=','Livré');
        })
        ->where('status', 'completed')
        ->count();
        return $total;

    }
    function totalCompleted()
    {


        $freelance_id = auth()->user()->freelance->id;
        $transactions = ModelsOrder::whereHas('service', function ($query) use ($freelance_id) {
            $query->where('freelance_id', $freelance_id);
        })->where('status', 'completed')
        ->sum('total_amount');


        $total =  number_format($transactions, 2, ',', ' ') . ' $';
        return $total;
    }
}
