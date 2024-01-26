<?php

namespace App\Events;

use App\Http\Resources\ConversationResourceData;
use App\Http\Resources\MessageResourceData;
use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use App\Models\Message;
use App\Models\Conversation;
use App\Models\User;

class MessageSent implements ShouldBroadcast
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    /**
     * Create a new event instance.
     *
     * @return void
     */


    public $user;
    public $message;
    public $conversation;
    public $receiver_id;

    public function __construct(User $user, Message $message,Conversation  $conversation,  $receiver)
    {


        $this->user = $user;
        $this->message = $message;
        $this->conversation = ConversationResourceData::make($conversation);
        $this->receiver_id = $receiver;


    }

    public function broadcastWith()
    {

        return [
            'sender_id' => $this->user->id,
            'message' => MessageResourceData::make($this->message),
            'conversation' => $this->conversation,
            'receiver_id' => $this->receiver_id,
        ];
        # code...
    }


    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {



       // error_log($this->receiver_id);

        return new PrivateChannel('chat.' . $this->receiver_id);
    }
}
