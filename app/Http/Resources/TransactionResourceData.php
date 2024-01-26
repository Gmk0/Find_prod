<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class TransactionResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'transaction_numero'=>$this->transaction_numero,
            'amount'=>$this->amount,
            'payment_method'=>$this->payment_method,
            'payment_token'=>$this->payment_token,
            'status'=>$this->status,
            'description'=>$this->description,
            'type'=>$this->type,
            'mission'=>$this->mission??null,
            'orders'=>$this->orders? Order::collection($this->orders):null,

            ];
    }
}
