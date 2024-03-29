<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Http\Resources\MissionResourceData;
use App\Models\AffichageElement;
use App\Models\Faq;
use App\Models\Message;
use App\Models\Mission;
use App\Models\Notification;
use App\Models\Order;
use App\Models\User;
use App\Models\UserSetting;
use App\Notifications\testNotify;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class ApiUserController extends Controller
{
    //

    public function fetchLastUserMessage($id)
    {
        // Récupération des derniers messages de l'utilisateur depuis la base de données
        $messages = Message::where('receiver_id', $id)
            ->latest()
            ->take(2)
            ->get()
            ->map(function ($message) {
                return [
                    'id' => $message->id,
                    'body' => $message->body,
                    'senderUser'=>$message->senderUser,
                    'created_at'=>$message->created_at
                ];
            });

        // Vérification s'il y a des messages
        if ($messages->isNotEmpty()) {
            return response()->json(['messages' => $messages], 200);
        }

        // Aucun message trouvé, retourner un code de réussite 203 (No Content)
        return response()->json([], 203);
    }

    public function fetchLastCommande($id)
    {
        // Récupération des derniers messages de l'utilisateur depuis la base de données

        $totalCommande = Order::where('user_id', $id)->where('status', 'completed')->count();
        $totalEnAttente = Order::where('user_id', $id)->where('status','!=', 'completed')->count();

        $status=[
            'total'=> $totalCommande,
            'totalEnAttente'=> $totalEnAttente,
            ];
        // Vérification s'il y a des messages

            return response()->json(['status' => $status], 200);


        // Aucun message trouvé, retourner un code de réussite 203 (No Content)

    }

    public function fetchLastNotification()
    {
        if(Auth::check())
        {
            $notifications = auth()->user()->unreadNotifications()->latest()->get();

            return response()->json(['notifications' => $notifications], 200);
        }else{

            return response()->json([], 203);
        }



    }
    public function ReadAllNotification()
    {
        if (Auth::check()) {

            try {
                $notifications = auth()->user()->unreadNotifications()->latest()->get();

                foreach ($notifications as $notification) {
                    $notification->markAsRead();
                }


                return response()->json([], 200);
            } catch (\Exception $e) {
                return response()->json([], 422);
            }
        } else {

            return response()->json([], 422);
        }
    }

    public function RemoveAllNotification()
    {
        if (Auth::check()) {

            try{
                $notifications = auth()->user()->unreadNotifications()->latest()->get();

                foreach ($notifications as $notification) {
                    $notification->delete();
                }


                return response()->json([], 200);

            }catch(\Exception $e){
                return response()->json([], 422);

            }

        } else {

            return response()->json([], 422);
        }
    }

    public function removeNotification($id)
    {
        try{
            $notification = Notification::find($id);

            $notification->read_at = now();

            $notification->update();

            return response()->json(['success' => true], 200);


        }catch(\Exception $e){

            return response()->json(['success' => false], 500);
        }


    }

    public function lastMissions()
    {
        try {
            $missions = Mission::where('status','=', 'pending')->where('masquer',false)->latest()->take(10)->get();

            return response()->json(['missions' => MissionResourceData::collection($missions)], 200);
        } catch (\Exception $e) {

            return response()->json(['success' => false], 500);
        }

    }

    public function fetchLastFaq()
    {


        $faqs = Faq::select('id','questions', 'reponses')->where('publier',true)->limit(4)->get();

        if($faqs !=null)
        {

            return response()->json(['faqs' => $faqs], 200);
        }else{
            return response()->json([], 204);

        }




    }

    public function getNotificationParametres()
    {
        try {


            $userSetting= auth()->user()->userSetting;

            if($userSetting == null)
            {
                $userSetting=new UserSetting();
                $userSetting->user_id = auth()->id();
                $userSetting->save();
            }


            return response()->json(['userSetting' => $userSetting], 200);
        } catch (\Exception $e) {

            return response()->json(['success' => false], 401);
        }



    }

    public function updateNotificationParametres(Request $request)
    {


        try {


            $userSetting = auth()->user()->userSetting;
            $userSetting->update($request->all());
        }catch(\Exception $e){

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }

    }


    public function fetchLastUserCommentaire()
    {
        try {
            $element = AffichageElement::latest()->first();

            // Vérifie si un élément a été trouvé
            if ($element) {
                return response()->json([
                    'success' => true,
                    'commentaire' => $element->commentaire_user,
                    'talk_about'=>$element->talk_about,
                    'about'=>$element->about,
                ]);
            } else {
                return response()->json([
                    'success' => false,
                    'message' => 'Aucun commentaire trouvé.'
                ]);
            }
        } catch (\Exception $e) {
            return response()->json([
                'success' => false,
                'message' => 'Une erreur est survenue : ' . $e->getMessage()
            ]);
        }
    }

    public function TestAll(Request $request)
    {


        try{

            $user=$request->user();




            $user->notify(new testNotify());


        }catch(\Exception $e){
            dd($e->getMessage());
        }
    }



}
