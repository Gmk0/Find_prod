<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Favorite;
use Illuminate\Http\Request;


use Inertia\Inertia;
use App\Models\Freelance;
use App\Models\Service;
use App\Models\SubCategory;
use Illuminate\Support\Facades\Request as RequestFacade;



class ServiceController extends Controller
{
    //

    public function Allservices(){


        $freelances = Freelance::query();
        $servicesBest = Service::query();


        return Inertia::render('Web/Service/ServiceAll',
        ['categories'=>Category::all(),
        'servicesBest'=>$servicesBest->with('freelance')
                    ->whereHas('freelance',function($q){
                        $q->where('status_compte', '=', 'actif');
                    })

                        ->take(10)
                        ->get()
                        ->map(function($service){
                            return [
                        'id' => $service->id,
                        'title' => $service->title,
                        'basic_price' => $service->basic_price,
                        'service_numero' => $service->service_numero,
                        'image' => $service->files,
                        //'sub_categorie' => $service->subcategories(),
                        'like' => $service->isFavorite(),
                        'orderCount' => $service->orderCount(),
                        'average' => $service->averageFeedback(),
                        'freelance' => $service->freelance ? $service->freelance->only('nom', 'prenom', 'identifiant', 'level') : null,
                        'user' => $service->freelance->user ? $service->freelance->user->only('name', 'profile_photo_path', 'profile_photo_url') : null,
                        'category' => $service->category ? $service->category->only('name', 'id') : null,

                                ];
                        }),
        'freelances'=> $freelances->with('category')
                    ->with('user')
                    ->where('status_compte', '=', 'actif')
                    ->orderBy('created_at', 'asc')
                    ->get()
                    ->map(function ($freelance) {
                        return [
                            'id' => $freelance->id,
                            'nom' => $freelance->nom,
                            'prenom' => $freelance->prenom,
                            'level' => $freelance->level,
                            'identifiant' => $freelance->identifiant,
                            'nomComplet' => ucfirst($freelance->prenom) . ' ' . $freelance->nom,
                            'sub_categorie' => $freelance->subcategories(),
                            'like' => $freelance->isFavorite(),
                            'user' => $freelance->user ? $freelance->user->only('name', 'profile_photo_url', 'profile_photo_path') : null,
                            'category' => $freelance->category ? $freelance->category->only('name', 'id') : null,
                        ];
                    })]
        );
    }

    public function likeService(Request $request)
    {


        $favorite = Favorite::where('user_id', auth()->id())
            ->where('service_id', $request->service)
            ->first();

        if ($favorite) {
            $favorite->delete();
        } else {
            Favorite::create([
                'user_id' => auth()->id(),
                'service_id' => $request->service,
            ]);
        }
    }
}
