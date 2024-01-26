<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MissionResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id'=>$this->id,
            'title'=>$this->title,
            'mission_numero'=>$this->mission_numero,
            'category'=>$this->category->only('id','name'),
            'description'=>$this->description,
            'files'=>$this->files,
            'budget'=>$this->budget,
            'begin_mission'=>$this->begin_mission->format('d-m-Y'),
            'end_mission'=>$this->end_mission->format('d-m-Y'),
            'progress'=>$this->progress,
            'exigences'=>$this->exigences,
            'transaction'=>$this->transaction??null,
            'is_paid'=>$this->is_paid,
            'status'=>$this->status,
            'masquer'=>$this->masquer,
            'MissionResponses'=>$this->missionResponses,
            'missionApproved'=>$this->getApprovedMissionResponse() ? $this->getApprovedMissionResponse():null,
            'nombreResponses'=>$this->whenCounted('missionResponses'),
            'created_at'=>$this->created_at->format('d/m/Y'),
            'user' => $this->user->only('name', 'email', 'profile_photo_url', 'profile_photo_path'),
        ];
    }
}
