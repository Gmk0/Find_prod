<?php

namespace App\Http\Resources;

use App\Models\FeedbackService;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MissionResponseResource extends JsonResource
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
            'freelance_id'=>$this->freelance_id,
            'response_numero' => $this->response_numero,
            'mission_id' => $this->mission_id,
            'content' => $this->content,
            'budget' => $this->budget,
            'status' => $this->status,
            'is_paid' => $this->is_paid,
            'mission'=> $this->mission,
            'transaction' => $this->mission->transaction??null,
            'rapports'=> $this->mission->rapports ?? null,
            'feedbackmission' => $this->mission? $this->mission->feedbackmission: null,
            'freelance'=>$this->freelance->only('id','nom','prenom','level'),
            'freelance_user' => $this->freelance->user->only('id','name', 'email', 'profile_photo_url', 'profile_photo_path')
        ];
    }
}
