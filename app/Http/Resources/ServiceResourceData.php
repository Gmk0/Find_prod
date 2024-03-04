<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ServiceResourceData extends JsonResource
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
            'title' => $this->title,
            'slug' => $this->slug,
            'userSlug' => $this->userSlug(),
            'basic_price' => $this->basic_price,
            'service_numero' => $this->service_numero,
            'image' => $this->files,
            'files' => $this->files,
            'tag' => $this->tag,
            'description' => $this->description,
            'basic_support' => $this->basic_support,
            'basic_revision' => $this->basic_revision,
            'basic_delivery_time' => $this->basic_delivery_time,
            'premium_price' => $this->premium_price,
            'premium_support' => $this->premium_support,
            'premium_revision' => $this->premium_revision,
            'premium_delivery_time' => $this->premium_delivery_time,
            'extra_price' => $this->extra_price,
            'extra_support' => $this->extra_support,
            'extra_revision' => $this->extra_revision,
            'extra_delivery_time' => $this->extra_delivery_time,
            'example' => $this->example,
            'format' => $this->format,
            'need_service' => $this->need_service,
            'delivery_time_unit' => $this->delivery_time_unit,
            'sub_category' => $this->sub_category,
            'video_url' => $this->video_url,
            'like' => $this->like,
            'is_publish' => $this->is_publish,
            'category_id' => $this->category_id,
            'is_gift'=>$this->is_gift,
            //'sub_categorie' => $this->subcategories(),
            'likeUser' => $this->isFavorite(),
            'orderCount' => $this->orderCount(),
            'average' => $this->averageFeedback(),
            "media" =>
            $this->getMedia('services')->map(function ($media) {
                return [
                    'url' => $media->getUrl(),
                    'alt' => $media->name,
                ];
            }),
            'commandeEncours'=>$this->countElementEncours(),
            'freelance' => $this->freelance ? $this->freelance->only('id','nom' ,'prenom','identifiant','description', 'level') : null,
            'user' => $this->freelance->user ?? null,
            'category' => $this->category ? $this->category->only('name', 'id', 'slug') : null,
            'url_default' => $this->category->getFirstMediaUrl('categories') ?? null,
            ];
    }
}
