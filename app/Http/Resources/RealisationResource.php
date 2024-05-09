<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class RealisationResource extends JsonResource
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
            'description'=>$this->description,
            "media"=> $this->getMedia('realisations')->map(function ($media) {
                return [
                    'url' => $media->getUrl(),
                    'alt' => $media->name,
                ];
            }),
           // "user"=>$this->user,
            ];
    }
}
