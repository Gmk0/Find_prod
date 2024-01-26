<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\Order as ResourcesOrder;
use App\Models\FeedbackService;
use App\Models\Order;
use App\Models\Rapport;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CommandeFreelance extends Controller
{
    //

    public function show()
    {

        $freelance = auth()->user()->freelance->id;

        $order = Order::whereHas('service.freelance', function ($query) use ($freelance) {
            $query->where('id', $freelance);
        })->orderBy('created_at', 'Desc')->get();


        return Inertia::render('Freelance/Commande/CommandeListe',['commandes'=>ResourcesOrder::collection($order)]);
    }


    public function commmandeGestion($order_numero)
    {
        $freelance = auth()->user()->freelance->id;


        $order= Order::where('order_numero', $order_numero)
        ->whereHas('service.freelance', function ($query) use($freelance){
            $query->where('id', $freelance);
        })->first();


        if($order == null)
        {
            return redirect()->back();
        }
        return Inertia::render('Freelance/Commande/CommandeGestion', ['commande' => ResourcesOrder::make($order)]);

    }
    public function commandeGestion(Request $request)
    {

        $request->validate(['order_id' =>'required','progression'=>'required']);


        try{
            $order = Order::find($request->order_id)->update(['progress' => $request->progression]);

            $feedback = FeedbackService::where('order_id', $request->order_id)->first();


            $feedback->etat = $request->etat;
            $feedback->delai_livraison_estimee = $request->delai;
            $feedback->update();
            $feedback->notifyUser();

        }catch(\Exception $e){





            return redirect()->back()->withErrors(['message' => $e->getMessage()]);


        }

    }

    public function publishCommentaire(Request $request)
    {
        $request->validate(['order_id' => 'required']);

        try {

            $feedback = FeedbackService::where('order_id', $request->order_id)->first();
            $feedback->is_publish = !$feedback->is_publish;
            $feedback->update();

        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }


    }


    public function commandeRapport(Request $request)
    {

        $request->validate(['description' => 'required','order_id' => 'required']);

        try{
            $saved = Rapport::create($request->all());
        }catch(\Exception $e){

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }


    }
}
