<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\ConversationResourceData;
use App\Models\Conversation;
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
}
