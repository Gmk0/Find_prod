<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\FreelanceResourceData;
use App\Http\Resources\RealisationResource;
use App\Http\Resources\ServiceResourceData;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Inertia\Inertia;
use App\Models\Freelance;
use Illuminate\Support\Facades\Request as RequestFacade;

class FreelanceController extends Controller
{
    //

    public function index()
    {

       // $this->subCategories = SubCategory::whereIn('id', $this->freelance->sub_categorie)->get();

        $freelances = Freelance::query();
        $data= RequestFacade::only('orderBy');
        $orderBy = $data? $data['orderBy'] : null;

        if($orderBy!=null){
            list($value, $order) = explode('-', $orderBy);
        }




        return Inertia::render('Web/Freelance/FindFreelance',[
            'filters'
            => RequestFacade::all('search', 'orderBy', 'category', 'sub_category', 'price', 'level', 'disponible', 'experience_annee'),

            'freelances'=> $freelances
                ->with('category')
                ->with('user')
                ->where('status_compte','=', 'actif')
                ->orderBy($value?? 'created_at', $order??'asc')
                ->filter(RequestFacade::only('search', 'category', 'sub_category', 'price', 'level', 'disponible', 'experience_annee'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($freelance) => [
                    'id' => $freelance->id,
                    'nom' => $freelance->nom,
                    'nomComplet'=>ucfirst($freelance->prenom).' '.$freelance->nom,
                    'prenom' => $freelance->prenom,
                    'level' => $freelance->level,
                    'identifiant' => $freelance->identifiant,
                    'sub_categorie' => $freelance->subcategories(),
                    'like' => $freelance->isFavorite(),
                    //'' => $contact->deleted_at,
                    'user' => $freelance->user ? $freelance->user->only('name', 'profile_photo_url', 'profile_photo_path') : null,
                    'category' => $freelance->category ? $freelance->category->only('name', 'id') : null,
                ]),

            ]);
    }

    public function portefolio($portefolio)
    {


        $freelance = Freelance::where('identifiant', $portefolio)->where('status_compte', '=', 'actif')->first();


        if($freelance !=null)
        {

            $services = $freelance->services;

            $realisations = $freelance->user->realisations;


            $realisationsWithMedia = $realisations->map(function ($realisation) {
                return [
                    'id' => $realisation->id,
                    'description' => $realisation->description,
                    'media' => $realisation->getMedia('realisations')->map(function ($media) {
                        return [
                            'url' => $media->getUrl(),
                            'alt' => $media->name,
                        ];
                    }),
                ];
            });








             return Inertia::render('Web/Freelance/Portefolio',
             ['freelance'=>FreelanceResourceData::make($freelance),
              'services'=>ServiceResourceData::collection($services),
              'realisations'=> $realisationsWithMedia,
             ]);

        }else{
            return redirect()->back();
        }

    }

    public function Like(Request $request)
    {
        //dd($request->all());

        $favorite = Favorite::where('user_id', auth()->id())
            ->where('freelance_id', $request->freelance)
            ->first();

        if ($favorite) {
            $favorite->delete();
        } else {
            Favorite::create([
                'user_id' => auth()->id(),
                'freelance_id' => $request->freelance,
            ]);
        }


    }



}
