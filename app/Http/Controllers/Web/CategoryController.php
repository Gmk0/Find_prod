<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResourceData;
use App\Models\Category;
use App\Models\FeedbackService;
use Illuminate\Http\Request;

use Inertia\Inertia;
use App\Http\Resources\FreelanceResourceData;
use App\Models\Freelance;
use App\Models\Service;
use App\Models\SubCategory;
use App\Models\User;
use Illuminate\Support\Facades\Request as RequestFacade;


class CategoryController extends Controller
{
    //

    public function index()
    {


        $categories = Category::get()->map(function ($categories) {
            return [
                'id' => $categories->id,
                'name' => $categories->name,
                'slug' => $categories->slug,
                'media' => [
                    'url' => $categories->getFirstMediaUrl('categories'),
                    'name' => $categories->name
                ],
            ];
        });

        return Inertia::render('Web/Category/index',[
            'categories' => $categories,
            'categoriesAll'=>Category::with('subCategories')->get()
            ]);
    }

    public function categoryName($category)
    {


        $categoryGet = Category::where('slug',$category)->first();

       if($categoryGet !=null)
       {

            $service= Service::query();
            $service->where('category_id', $categoryGet->id);

            return Inertia::render('Web/Category/CategoryName',
            [
                'filters' => RequestFacade::all('search', 'orderBy','sub_category', 'deliveryTime', 'price','priceMin', 'level', 'tag'),
                'services'=>$service->
                with('freelance')
                        ->whereHas('freelance', function ($q) {
                            $q->where('status_compte', '=', 'actif');
                        })

                        //->with('freelance.user')
                        //->orderBy('created_at', 'asc')
                ->where('is_publish', true)
                ->filter(RequestFacade::only('search', 'sub_category', 'orderBy', 'price', 'level', 'deliveryTime', 'priceMin', 'tag'))
                ->paginate(10)
                ->withQueryString()
                ->through(fn ($service) => [
                    'id' => $service->id,
                    'title' => $service->title,
                    'userSlug' => $service->userSlug(),
                    'slug' => $service->slug,
                    'basic_price' => $service->basic_price,
                    'service_numero' => $service->service_numero,
                    'image' => $service->files,
                    'is_gift'=>$service->is_gift,
                    //'sub_categorie' => $service->subcategories(),
                    'like' => $service->isFavorite(),
                    'orderCount'=>$service->orderCount(),
                    'average' => $service->averageFeedback(),
                        'media'=>$service->getMedia('services')->map(function ($media) {
                            return [
                                'url' => $media->getUrl(),
                                'alt' => $media->name,
                            ];
                        }),
                    'freelance' => $service->freelance ? $service->freelance->only('nom', 'prenom', 'identifiant','level') : null,
                    'user'=>$service->freelance->user ? $service->freelance->user->only('name', 'profile_photo_path', 'profile_photo_url','slug') : null,
                    'category' => $service->category ? $service->category->only('name', 'id','slug') : null,
                    'url_default' => $service->category->getFirstMediaUrl('categories') ?? null,
                ]),

                'subcategories'=> SubCategory::where('category_id', $categoryGet->id)
                        // Cette ligne compte le nombre de services associés à chaque sous-catégorie
                        ->get()
                        ->map(function ($subcategory) {
                            return [
                                'id' => $subcategory->id,
                                'name' => $subcategory->name,
                                'illustration' => $subcategory->illustration,
                                'service_count' => count($subcategory->services()), // Récupérez le comptage des services
                            ];
                        }),
                'categories'=>Category::get()->map(function($category){
                    return[
                        'id'=>$category->id,
                        'name'=>$category->name,
                        'slug' => $category->slug,
                        'illustrator'=>$category->illustration,
                        'servcies_counts'=>$category->services->count(),
                        ];
                }),
                'category'=> $categoryGet,
                'tags'=>$service->pluck('tags')
                ->map(function ($tag) {
                    // Vérifiez si $tag est une chaîne avant de la décoder
                    return is_string($tag) ? json_decode($tag, true) : $tag;
                })
                ->flatten() // Pour obtenir une collection à une seule dimension
                ->unique()
                ->all()
                ]);
       }else{

        return redirect()->back();

       }


    }
    public function SubCategoryName($category,$subcategory)
    {

        $categoryExist = Category::where('slug',$category)->exists();

        if(!$categoryExist){

            return redirect()->back();
        }

        $subcategoryElement = SubCategory::where('name', $subcategory)->first();

        if ($subcategoryElement != null) {

            $service = Service::query();
            $service->where('sub_category', 'like', '%' . $subcategoryElement->id . '%')->where('is_publish', true);



            return Inertia::render(
                'Web/Category/SubCategoryName',
                [
                    'filters' => RequestFacade::all('search', 'orderBy', 'deliveryTime', 'price', 'level', 'tag'),
                    'services' => $service->with('freelance')
                        ->whereHas('freelance', function ($q) {
                            $q->where('status_compte', '=', 'actif');
                        })
                        ->where('is_publish', true)
                        //->with('freelance.user')
                        //->orderBy('created_at', 'asc')
                        ->filter(RequestFacade::only('search','orderBy', 'price', 'level', 'deliveryTime', 'tag'))
                        ->paginate(10)
                        ->withQueryString()
                        ->through(fn ($service) => [
                            'id' => $service->id,
                            'title' => $service->title,
                            'slug' => $service->slug,
                            'userSlug' => $service->userSlug(),
                            'basic_price' => $service->basic_price,
                            'service_numero' => $service->service_numero,
                            'image' => $service->files,
                            'is_gift' => $service->is_gift,
                            //'sub_categorie' => $service->subcategories(),
                            'like' => $service->isFavorite(),
                            'orderCount' => $service->orderCount(),
                            'average' => $service->averageFeedback(),
                            'media' =>
                                $service->getMedia('services')->map(function ($media) {
                                    return [
                                        'url' => $media->getUrl(),
                                        'alt' => $media->name,
                                    ];
                                }),
                            'freelance' => $service->freelance ? $service->freelance->only('nom', 'prenom', 'identifiant', 'level') : null,
                            'user' => $service->freelance->user ? $service->freelance->user->only('name', 'profile_photo_path', 'profile_photo_url', 'slug') : null,
                            'category' => $service->category ? $service->category->only('name', 'id', 'slug') : null,
                            'url_default'=> $service->category->getFirstMediaUrl('categories')??null,
                        ]),

                    'subcategories' => SubCategory::where('category_id', $subcategoryElement->category_id)
                        // Cette ligne compte le nombre de services associés à chaque sous-catégorie
                        ->get()
                        ->map(function ($subcategory) {
                            return [
                                'id' => $subcategory->id,
                                'name' => $subcategory->name,
                                'illustration' => $subcategory->illustration,
                                'service_count' => count($subcategory->services()), // Récupérez le comptage des services
                            ];
                        }),

                    'subcategory' => $subcategoryElement,
                    'category'=> $subcategoryElement->category,
                    'tags' => $service->pluck('tags')
                    ->map(function ($tag) {
                        // Vérifiez si $tag est une chaîne avant de la décoder
                        return is_string($tag) ? json_decode($tag, true) : $tag;
                    })
                        ->flatten() // Pour obtenir une collection à une seule dimension
                        ->unique()
                        ->all()
                ]
            );
        } else {

            return redirect()->back();
        }


        //$category = Category::query();
        //return Inertia::render('Web/Category/SubCategoryName');
    }


    public function oneService($slugUser,$slug)
    {

        $service = Service::findBySlug($slug);





        if($service == null){
            return redirect()->back();
        }

        if(!$service->userSlug()==$slugUser){
            return redirect()->back();
        }

        $commentaires = FeedbackService::whereHas('Order', function ($query) use($service)   {
            $query->whereHas('service', function ($q) use($service) {
                $q->where('id', $service->id);
            });
        })->where('commentaires', '!=', null)->where('is_publish', 1)
        ->get()->map(function ($commentaire){

            return[
                'commentaire' => $commentaire->commentaires,
                'satisfaction' => $commentaire->satisfaction,
                'user' => $commentaire->order->user?->only('id','name','profile_photo_path','profile_photo_url'),
                ];

        });


        $otherService=Service::where('id','!=' ,$service->id)
            ->whereHas('freelance', function ($q) {
                $q->where('status_compte', '=', 'actif');
            })->where('category_id', $service->category_id)
            ->where('is_publish', true)->take(6)->get();



        return Inertia::render('Web/Service/OneService',
        [
            'service'=>ServiceResourceData::make($service),
            'otherService' => ServiceResourceData::collection($otherService),
            'commentaires'=>$commentaires,

        ]);
    }



    public function OtherPortefolio($slugUser)
    {

        $user = User::findBySlug($slugUser);

        if($user ==null)
        {
            return redirect()->back();
        }

        $freelance=$user->freelanceActiver;






        if ($freelance ==null) {

            return redirect()->back();
        }

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












            return Inertia::render(
                'Web/Freelance/Portefolio',
                [
                    'freelance' => FreelanceResourceData::make($freelance),
                    'services' => ServiceResourceData::collection($services),
                    'realisations' => $realisationsWithMedia,
                ]
            );

    }
}
