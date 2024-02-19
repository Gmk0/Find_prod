<?php

namespace App\Http\Controllers;

use App\Helpers\SignatureCalculator;
use App\Http\Resources\ServiceResourceData;
use App\Models\Category;
use App\Models\Service;
use App\Models\SubCategory;
use Exception;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Storage;
use PhpParser\Node\Expr\Cast\String_;

class ApiController extends Controller
{
    //

    public function getCategories()
    {
        // Récupérez les catégories depuis la base de données
        $categories = Category::get()->map(function ($categories) {
            return [
                'id' => $categories->id,
                'name' => $categories->name,
                'slug' => $categories->slug,
                'subcategories' => $categories->subCategories ? $categories->subCategories : null,
                'illustration' => $categories->illustration,
                'media' => $categories->getMedia('categories')->map(function ($media) {
                    return [
                        'url' => $media->getUrl(),
                        'alt' => $media->name,
                    ];
                }),
            ];
        });

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['categories' => $categories], 200);
    }

    public function getByCategoryId($categoryId)
    {

        $subcategories = SubCategory::where('category_id', $categoryId)->get();
        return response()->json(['subcategories' => $subcategories], 200);
    }

    public function subcategoriesAll()
    {
        $subcategories = SubCategory::pluck('id','name','category_id');

        // Vous pouvez appliquer d'autres logiques de récupération ou de manipulation ici

        return response()->json(['subCategories' => $subcategories], 200);
    }

    public function search(Request $request)
    {

       try{


            $value  = $request->search;

            $results = [];
            $results = Service::Where('title', 'like', '%' . $value . '%')
                    ->orWhereHas('category', function ($query) use ($value) {
                        $query->where('name', 'like', '%' . $value . '%');
                    })
                ->limit(10)
                ->get();


            $results = ServiceResourceData::collection($results);

            return response()->json(['results' => $results], 200);

       }catch (\Exception $e){

            return response()->json(['error' => $e->getMessage()]);


       }

      ;
    }


    public function paidTest(Request $request)
    {

        $order = 'CMD' . date('YmdHms');
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            'provider_id' => 10,
            'customer_id' => '243844720350',
            'order_id' => $order,
            'amount' => 1000.00,
            'currency' => 'CDF',
            'country' => 'CD',
            'callback_url' => route('callbackPaid')
        ];
        $secretKey = env('SecretID');
        $signature = SignatureCalculator::calculateSignature($postData, $secretKey);
        $postData['signature'] = $signature;
        $publicId = env('PublicId');
        $url = 'https://api.unipesa.tech/' . $publicId . '/payment_c2b';

        try {
            $response = Http::post($url, $postData);

            dd($response->json());


            if ($response->successful()) {

               // dd($response->json());
            } elseif ($response->failed()) {

            }
        } catch (\Exception $e) {
            // Handle the exception here
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }

    public function paidTest2(Request $request)
    {
        $publicId = env('PublicId');
        $postData = [
            'merchant_id' => env('MerchantAvadaID'),
            "order_id"=> "order_3444298767545",
            'signature'=> "5900d631647163de6488bfe6b184ad07b1c2144dfd9448714209f37648597f172ecfe82c04f2c5c458d29de545f04e268343ca47ad983437c3b3d8a3e4e9484d"

        ];
        $url = 'https://api.unipesa.tech/' . $publicId . '/status';

        $response = Http::post($url, $postData);


        dd($response->json());

    }

}
