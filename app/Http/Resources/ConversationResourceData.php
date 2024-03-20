<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ConversationResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'freelance_id'=> $this->freelance_id,
            'user_id' => $this->user_id,
            'status' => $this->status,
            'id' =>$this->id,
            'is_blocked' => $this->is_blocked,
            'last_time_message'=>$this->last_time_message,
            'created_at'=>$this->created_at,
            'allMessages' => $this->messages,
            'lastMessage' => $this->messages()->latest()->first(),
            'messagesNonLue'=> $this->messages()->where('receiver_id',auth()->id())->where('is_read',false)->count(),
            'user'=> $this->user,
            'freelanceUser' => $this->freelance->user,
            'freelance'=>FreelanceResourceData::make($this->freelance),
            ];
    }
}
