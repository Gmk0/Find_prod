<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class UserResourceData extends JsonResource
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
            'name' => $this->id,
            'name'=>$this->name,
            'email'=>$this->email,
            'slug'=>$this->slug,
            'is_online'=>$this->is_online,
            'email_verified_at'=>$this->email_verified_at,
            'phone'=>$this->phone,
            'referral_code'=>$this->reference_code,
            'profile_photo_path'=>$this->profile_photo_path,
            'last_activity'=>$this->last_activity,
            'profile_url' => $this->getFilamentAvatarUrl(),


            ];
    }
}
