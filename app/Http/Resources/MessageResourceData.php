<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MessageResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [

            'id' => $this->id,
            'sender_id' => $this->sender_id,
            'receiver_id' => $this->receiver_id,
            'conversation_id' => $this->conversation_id,
            'body' => $this->body,
            'is_read' => $this->is_read,
            'file' => $this->file,
            'type' => $this->type,
            'service' => $this->service ? $this->service->only('id', 'service_numero', 'title', 'files') : null,
            'user_service' => $this->service ? $this->service->freelance->user->id : null,
            'order' => $this->order ?? null,
            'proposal' => $this->proposal ?? null,
            'proposal_user' => $this->proposal ? $this->proposal->freelance->user->id : null,
            'created_at' => $this->created_at

            ];
    }
}
