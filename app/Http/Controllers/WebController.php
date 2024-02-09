<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\ContactFeedback;
use App\Models\Faq;
use App\Notifications\testNotify;
use App\Notifications\verificationPhone;
use Illuminate\Http\Request;
use Inertia\Inertia;

class WebController extends Controller
{
    //

    public function index(){



        $categories = Category::get()->map(function ($categories) {
            return [
                'id' => $categories->id,
                'name' => $categories->name,
                'slug'=>$categories->slug,
                'media' =>[
                    'url' => $categories->getFirstMediaUrl('categories'),
                    'name' => $categories->name],
            ];
        });



        return Inertia::render('Web/Home', ['categories' => $categories]);
    }
    public function about()
    {



        return Inertia::render('Web/About');
    }
    public function contact()
    {

        return Inertia::render('Web/Contact');
    }
    public function faq(){

        $faqs=Faq::where('publier',true)->get();
        return Inertia::render('Web/Faq',['faqs'=>$faqs]);
    }

    public function feedBack()
    {
        return Inertia::render('Web/FeedBack');
    }
    public function sendFedback(Request $request)
    {



        try{

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string',
            ]);

            // Ajouter l'ID de l'utilisateur s'il est authentifié
            if ($request->user()) {
                $validatedData['user_id'] = $request->user()->id;
            }
            $validatedData['type']='feedback';

            // Créer un nouveau feedback avec les données validées
            $feedback = ContactFeedback::create($validatedData);

        }catch(\Exception $e){

            return redirect()->back()->withErrors('message','une erreur s\'est produite');

        }


        //dd($request->user());

    }

    public function testPhone(Request $request)
    {
        //dd($request->all());

        try{

            $user=auth()->user();

            $user->notify(new testNotify());


        }catch (\Exception $e) {
            dd($e->getMessage());
        }

    }
    public function testPhone2(Request $request)
    {
        //dd($request->all());

        try {



            $basic  = new \Vonage\Client\Credentials\Basic("de581f86", "A93odxKDtmVixXwp");
            $client = new \Vonage\Client($basic);

            $response = $client->sms()->send(
                new \Vonage\SMS\Message\SMS("243813657847", 'FIND', $request->message)
            );

            $message = $response->current();

            if ($message->getStatus() == 0) {
                // echo "The message was sent successfully\n";
            } else {

                dd($message->getStatus());
                //echo "The message failed with status: " . $message->getStatus() . "\n";
            }
        } catch (\Exception $e) {
           // dd($e->getMessage());
        }
    }

    public function sendMessage(Request $request)
    {

        try {

            $validatedData = $request->validate([
                'name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'message' => 'required|string',
                'phone' => 'required',
            ]);

            // Ajouter l'ID de l'utilisateur s'il est authentifié
            if ($request->user()) {
                $validatedData['user_id'] = $request->user()->id;
            }
            $validatedData['type'] = 'contact';
            $validatedData['telephone']=$request->phone;

            // Créer un nouveau feedback avec les données validées
            $message = ContactFeedback::create($validatedData);


        } catch (\Exception $e) {

            return redirect()->back()->withErrors('message', 'une erreur s\'est produite');
        }

    }

}
