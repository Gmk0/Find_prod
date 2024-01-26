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
            'message' => $this->messages()->latest()->first(),
            'messagesNonLue'=> $this->messages()->where('receiver_id',auth()->id())->where('is_read',false)->count(),
            'user'=> $this->user->only('name', 'email', 'profile_photo_url', 'profile_photo_path', 'last_activity', 'is_online'),
            'freelanceUser' => $this->freelance->user->only('name', 'email', 'profile_photo_url','last_activity', 'is_online')
            ];
    }
}
