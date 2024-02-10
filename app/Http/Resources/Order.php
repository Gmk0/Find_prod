<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class Order extends JsonResource
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
            'order_numero'=>$this->order_numero,
            'user'=>$this->user?->only(
                'name',
                'email',
                'profile_photo_url',
                'profile_photo_path'
            ),
            'service'=>$this-> service?->only('service_numero', 'title','level'),
            'total_amount'=>$this->total_amount,
            'quantity'=> $this->quantity,
            'transaction'=> $this->transaction,
            'progress' => $this->progress,
            'is_paid' => $this->is_paid,
            'status' => $this->status,
            'feedback'=>$this->feedback,
            'rapports'=>$this->rapports,
            'freelance'=>$this->service?->freelance->only('id','nom', 'nom_complet','prenom','identifiant'),
            'freelance_user'=>$this->service->freelance->user->only('id','name','email',
                'profile_photo_url',
                'profile_photo_path'),
            'created_at' => $this->created_at->format('Y-m-d'),

            ];
    }
}
