<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Str;

class Realisation extends Model implements HasMedia
{
    use HasFactory;

    use InteractsWithMedia;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable=['user_id', 'description', 'afficher'];


    protected $cast=[

        'user_id' => 'string',
        'afficher' => 'boolean',
        ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function registerMediaConversions(Media $media = null): void
    {
        $this
            ->addMediaConversion('preview')
            ->fit(Manipulations::FIT_CROP, 300, 300)
            ->nonQueued();
    }

    public static function boot()
    {
        parent::boot();

        static::creating(function ($realisation) {
            $realisation->id = Str::uuid()->toString();
            //$service->service_numero = 'SV' . date('YmdHms');
            $realisation->user_id = auth()->id();
        });
    }



}


