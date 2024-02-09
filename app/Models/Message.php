<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Message extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'sender_id',
        'receiver_id',
        'conversation_id',
        'body',
        'is_read',
        'file',
        'type',
        'service_id',
        'order_id',
        'proposal_id',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'integer',
        'conversation_id' => 'integer',
        'file' => 'array',
        'service_id' => 'string',
        'proposal_id' => 'integer',
        'order_id' => 'string',
        'receiver_id' => 'string',
        'sender_id' => 'string',
        'is_read' => 'boolean',
        'created_at'=> 'datetime',
    ];

    public function user(): BelongsTo
    {
        return $this->belongsTo(User::class);
    }

    public function freelance(): BelongsTo
    {
        return $this->belongsTo(Freelance::class);
    }





    public function senderUser(): BelongsTo
    {
        return $this->belongsTo(User::class, 'sender_id');
    }

    public function receiver(): BelongsTo
    {
        return $this->belongsTo(User::class, 'receiver_id');
    }

    public function conversation(): BelongsTo
    {
        return $this->belongsTo(Conversation::class);
    }

    public function service(): BelongsTo
    {
        return $this->belongsTo(Service::class);
    }

    public function order(): BelongsTo
    {
        return $this->belongsTo(Order::class);
    }

    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }

    public static function createWithProposal($proposal, $senderId, $receiverId, $body, $conversationId)
    {
        $message = new Message();
        $message->proposal()->associate($proposal);
        $message->sender_id = $senderId;
        $message->receiver_id = $receiverId;
        $message->conversation_id = $conversationId;
        $message->body = $body;
        $message->type = 'text';
        $message->save();
        return $message;
    }
}
