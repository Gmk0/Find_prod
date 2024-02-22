<?php

namespace App\Http\Controllers\User;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationResourceData;
use App\Jobs\CheckUserActivityJob;
use App\Models\ClientLink;
use App\Models\Conversation;
use App\Models\Freelance;
use App\Models\Message;
use App\Models\Proposal;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Illuminate\Support\Facades\Event;
use Illuminate\Http\Response;

use Illuminate\Support\Facades\DB;


class ChatController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(string $id = null)
    {
        //

        $conversations= Conversation::where('user_id', auth()->id())
            ->orderBy('last_time_message', 'DESC')->get();

            if($id !=null)
            {
            $conversation = Conversation::findOrFail($id);

            if ($conversation != null) {
                foreach ($conversation->messages as $message) {
                    $message->where('receiver_id', auth()->id())->update(['is_read' => true]);
                }
            }


            }





         return Inertia::render('User/Chat/ChatComponent',
            [
                'conversations' => ConversationResourceData::collection($conversations),
                'chat' => fn () => $id ? Conversation::findOrFail($id) : null,
                'messages' => Message::where('conversation_id', $id)->orderBy('created_at', 'asc')->get()->map(function ($message) {
                    return [
                        'id' => $message->id,
                        'sender_id' => $message->sender_id,
                        'receiver_id' => $message->receiver_id,
                        'conversation_id' => $message->conversation_id,
                        'body' => $message->body,
                        'is_read' => $message->is_read,
                        'file' => $message->file,
                        'type' => $message->type,
                        'service' => $message->service ? $message->service->only('id','service_numero', 'title','slug', 'files') : null,
                        'user_service' => $message->service ? $message->service->freelance->user->only('id','slug'):null,
                        'order' => $message->order ?? null,
                        'proposal'=>$message->proposal??null,
                        'proposal_user' => $message->proposal ? $message->proposal->service->freelance->user->id : null,
                        'created_at' => $message->created_at

                    ];
                }),
                'user'=> fn () => $id ? Conversation::findOrFail($id)->freelance->user : null
            ]

         );
    }

    public function freelanceChat(string $id = null)
    {

        $conversations = Conversation::where('freelance_id', auth()->user()->freelance->id)
            ->orderBy('last_time_message', 'DESC')->get();

        if ($id != null) {
            $conversation = Conversation::findOrFail($id);

            if ($conversation != null) {
                foreach ($conversation->messages as $message) {
                    $message->where('receiver_id', auth()->id())->update(['is_read' => true]);
                }
            }
        }
           // dd($conversation);

        return Inertia::render(
            'Freelance/Chat/ChatComponent',
            [
                'conversations' => ConversationResourceData::collection($conversations),
                'chat' => fn () => $id ? Conversation::findOrFail($id) : null,
                'messages' => Message::where('conversation_id', $id)->orderBy('created_at', 'asc')->get()->map(function ($message) {
                            return [
                                'id'=>$message->id,
                                'sender_id'=> $message->sender_id,
                                'receiver_id' => $message->receiver_id,
                                'conversation_id' => $message->conversation_id,
                                'body' => $message->body,
                                'is_read' => $message->is_read,
                                'file' => $message->file,
                                'type' => $message->type,
                                'proposal' => $message->proposal ?? null,
                                'service' => $message->service ? $message->service->only('service_numero','title','files','user.id','slug') : null,
                                'user_service' => $message->service ? $message->service->freelance->user->only('id','slug'):null,
                                'order' =>$message->order ?? null,
                                    'proposal_user' => $message->proposal ? $message->proposal->service->freelance->user->id : null,
                                'created_at' => $message->created_at

                            ];
                        }),
                'user' => fn () => $id ? Conversation::findOrFail($id)->user : null
            ]

        );

    }

    public function createChat(Request $request)
    {


        $freelance = Freelance::find($request->freelance_id);

        $conversation = Conversation::where('freelance_id', $freelance->id)
            ->whereHas('user', function ($query) {
                $query->where('id', auth()->id());
            })
            ->first();
        // Si une conversation est trouvée, afficher la vue de la conversation
        if ($conversation === null) {
            // return redirect()->route('MessageUser');
            $conversation = new Conversation();
            $conversation->freelance_id = $freelance->id;
            $conversation->user_id = auth()->id();
            $conversation->last_time_message = now();
            $conversation->status = 'pending';
            $conversation->save();

            return redirect()->route('user.chat',$conversation->id);


        }else{

            return redirect()->route('user.chat', $conversation->id);
        }
    }

    public function SendMessage(Request $request)
    {
        // Vérifie s'il y a des fichiers téléchargés
        if ($request->hasFile('files')) {
            $filePaths = [];

            // Parcours des fichiers téléchargés
            foreach ($request->file('files') as $file) {
                // Sauvegarde le fichier dans le dossier public/uploads (ou un autre dossier de votre choix)
               // $filePath = $file->store('uploads', 'public');
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('uploads', $fileName, 'public'); // Enregistrer le fichier dans le dossier 'storage/app/missions' avec le nom d'origine
                $filesPaths[] = $path;

                // Ajoute le chemin du fichier au tableau pour enregistrement en base de données
                //$filePaths[] = $filePath;
            }
        }

        try{
            $createdMessage = Message::create([
                'sender_id' => Auth::user()->id,
                'receiver_id' => $request->user,
                'conversation_id' => $request->chat,
                'body' => $request->message ?? null,
                'is_read' => false,
                'type' => "file",
                'file' => $filesPaths ?? null, // Enregistre les chemins des fichiers dans la base de données
            ]);

            $conversation = Conversation::find($request->chat);
             $conversation->last_time_message= now();
            $conversation->save();




            $this->dispatchMessageSent(auth()->user(), $createdMessage,$conversation, $request->user);

            CheckUserActivityJob::dispatch($request->user, $createdMessage);

        }catch(\Exception $e){


            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
           // dd($e->getMessage());

        }


    }

    public function contactFreelance(Request $request)
    {

            try {
                $freelance = Freelance::find($request->freelance_id);

                $conversation = Conversation::where('freelance_id', $freelance->id)
                    ->whereHas('user', function ($query) {
                        $query->where('id', auth()->id());
                    })
                    ->first();
                // Si une conversation est trouvée, afficher la vue de la conversation
                if ($conversation === null) {
                    // return redirect()->route('MessageUser');
                    $conversation = new Conversation();
                    $conversation->freelance_id = $freelance->id;
                    $conversation->user_id = auth()->id();
                    $conversation->last_time_message = now();
                    $conversation->status = 'pending';
                    $conversation->save();
                }

                $createdMessage = Message::create([
                    'sender_id' => Auth::user()->id,
                    'receiver_id' => $request->user_id,
                    'conversation_id' => $conversation->id,
                    'body' => $request->body ?? null,
                    'is_read' => false,
                    'service_id' => $request->service_id,
                    'type' => "file",
                    'file' => null, // Enregistre les chemins des fichiers dans la base de données
                ]);

                $conversation->last_time_message = now();
                $conversation->save();

            CheckUserActivityJob::dispatch($request->user_id, $createdMessage);

                return response()->json(['chatId' => $conversation->id],200);
                    // return ()->back()->with(['chatid' => $conversation->id ]);



            }catch (\Exception $e) {

                        return response()->json(['error' => $e->getMessage()], 500);
                //return redirect()->back()->withErros(['message' => $e->getMessage()]);
            }

    }

    public function dispatchMessageSent($user, $message, $conversation, $receiverInstance)
    {
        broadcast(new MessageSent($user, $message, $conversation, $receiverInstance));


    }

    public function proposalPrice(Request $request)
    {



        $request->validate(['price' => 'required']);


        try {
            $freelance=User::find($request->freelance_user_id)->freelance;



            $propososal = new Proposal();
            $propososal->proposed_price = $request->price;
            $propososal->service_id =$request->service_id;
            //$propososal->freelance_id = $freelance->id;
            $propososal->save();

            $messagesChat = new Message();
            $body = "Je propose un prix de <span class='px-4 font-bold'>$" . $request->price . "</span>. pour ce service !";

           // $this->dispatch('close-modal', id: 'proposer-price');

           $message= $messagesChat->createWithProposal($propososal, Auth::user()->id,$request->freelance_user_id, $body,$request->chat_id);




            $conversation = Conversation::find($request->chat_id);



            $this->dispatchMessageSent(auth()->user(), $message, $conversation, $request->freelance_user_id);

            CheckUserActivityJob::dispatch($request->freelance_user_id, $message);

        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
            //dd($e->getMessage());
        }
    }

    public function declinePropasalUser(Request $request)
    {
        try {

            $proposal = Proposal::findOrFail($request->proposalId);

            $proposal->status = 'rejected';
            $proposal->update();
            $createdMessage = Message::create(
                [
                    'sender_id' => Auth::user()->id,
                    'receiver_id' => $request->user_id,
                    'conversation_id' => $request->chat_id,
                    'body' => 'Proposition de ' . $proposal->proposed_price . '$ refuser',
                    'proposal_id' => $proposal->id,
                    'is_read' => false,
                    'type' => "text",
                ]

            );


            $conversation = Conversation::find($request->chat_id);

            $this->dispatchMessageSent(auth()->user(), $createdMessage, $conversation, $request->user_id);

            CheckUserActivityJob::dispatch($request->user_id, $createdMessage);

        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
           // dd($e->getMessage());
        }
    }

    public function acceptPropasalUser(Request $request)
    {


            try {


                DB::beginTransaction();

                $propasal = Proposal::findOrFail($request->proposalId);

                $uniqueId = \Ramsey\Uuid\Uuid::uuid4()->toString();

                $propasal->status = "accepted";
                $propasal->save();
                $clientLink = new ClientLink();
                $clientLink->user_id = $request->user_id; // ID du client
                $clientLink->uniqueId = $uniqueId;
                $clientLink->proposal_id = $propasal->id;
                $clientLink->save();

                $lien = route('customLink.paid', ['uniqueId' => $uniqueId]);

                $createdMessage = Message::create(
                    [
                        'sender_id' => Auth::user()->id,
                        'receiver_id' => $request->user_id,
                        'conversation_id' => $request->chat_id,
                        'body' => 'Veuillez procéder au paiement en utilisant ce lien : <a class="px-4 text-lg font-bold" href="' . $lien . '">Paiement</a>',
                        // 'proposal_id' => $this->proposalChanged->id,
                        'is_read' => false,
                        'type' => "text",
                    ]
                );

                $conversation=Conversation::find($request->chat_id);

                $this->dispatchMessageSent(auth()->user(), $createdMessage, $conversation, $request->user_id);

            CheckUserActivityJob::dispatch($request->user_id, $createdMessage);

                DB::commit();

            }catch (\Exception $e) {

                DB::rollback();

                        return redirect()->back()->withErrors(['message' => $e->getMessage()]);
            // dd($e->getMessage());
            }

       // $this->sendLink($lien);

    }


    public function proposalGetPrice(Request $request)
    {

        $request->validate(['proposal_id' =>'required']);

        $proposal =Proposal::FindOrFail($request->proposal_id);

        if($proposal !=null)
        {

            return response()->json(['price' => $proposal->proposed_price], 200);
        }else{

            return response()->json(['message' => 'Resource not found'], 404);

        }



    }

    public function proposalChangePrice(Request $request)
    {
        try {

            $proposal = Proposal::findOrFail($request->proposalId);

            $proposal->status = 'pending';
            $proposal->proposed_price =$request->price;
            $proposal->update();
            $createdMessage = Message::create(
                [
                    'sender_id' => Auth::user()->id,
                    'receiver_id' => $request->user_id,
                    'conversation_id' => $request->chat_id,
                    'body' => "Je propose un prix de <span class='px-4 font-bold'>$" . $request->price . "</span>. pour ce service !",
                    'proposal_id' => $proposal->id,
                    'is_read' => false,
                    'type' => "text",
                ]

            );

            $conversation = Conversation::find($request->chat_id);

            $this->dispatchMessageSent(auth()->user(), $createdMessage, $conversation, $request->user_id);
            CheckUserActivityJob::dispatch($request->user_id, $createdMessage);
        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

           // dd($e->getMessage());
        }

    }



}
