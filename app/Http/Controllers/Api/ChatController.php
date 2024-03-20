<?php

namespace App\Http\Controllers\Api;

use App\Events\MessageSent;
use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationResourceData;
use App\Models\Conversation;
use App\Models\Message;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    //

    public function getUserConversations(Request $request)
    {

        try{

            $user = $request->user();
            $conversations = Conversation::
            where('user_id', $user->id)
            ->get();

            return response()->json([
                'conversations_user' => ConversationResourceData::collection($conversations)
            ]);
        }catch(\Exception $e){

            return response()->json([
                'message' => $e->getMessage(),
                'status' => false
            ], 500);
        }

    }

    public function SendMessage(Request $request)
    {
        // Vérifie s'il y a des fichiers téléchargés
        $filesPaths = [];
        $fileName = '';

        if ($request->hasFile('files')) {
            // Parcours des fichiers téléchargés
            foreach ($request->file('files') as $file) {
                // Récupérer le nom original du fichier
                $fileName = $file->getClientOriginalName();
                // Enregistrer le fichier dans le dossier 'public/uploads' avec le nom d'origine
                $path = $file->storeAs('uploads', $fileName, 'public');
                $filesPaths[] = $path;
            }
        }

        try {
            // Création d'un nouveau message
            $createdMessage = Message::create([
                'sender_id' => $request->user()->id,
                'receiver_id' => $request->receiver_id,
                'conversation_id' => $request->chatId,
                'body' => $request->message ?? $fileName,
                'is_read' => false,
                'type' => "file",
                'file' => !empty($filesPaths) ? $filesPaths : null, // Enregistre les chemins des fichiers dans la base de données
            ]);

            // Mise à jour de la dernière heure de message de la conversation
            $conversation = Conversation::find($request->chatId);
            $conversation->last_time_message = now();
            $conversation->save();

            // Envoi de notifications ou exécution de tâches asynchrones
            $this->dispatchMessageSent(auth()->user(), $createdMessage, $conversation, $request->receiver_id);
            //CheckUserActivityJob::dispatch($request->user, $createdMessage);

            // Retourner une réponse JSON indiquant que le message a été créé avec succès
            return response()->json(['message' => $createdMessage,
            'conversation'=> ConversationResourceData::make($conversation) ], 200);
        } catch (\Exception $e) {
            // Gestion des erreurs
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }


    public function dispatchMessageSent($user, $message, $conversation, $receiverInstance)
    {
        broadcast(new MessageSent($user, $message, $conversation, $receiverInstance));
    }

}
