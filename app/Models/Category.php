<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Spatie\MediaLibrary\HasMedia;
use Spatie\MediaLibrary\InteractsWithMedia;
use Spatie\Image\Manipulations;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Illuminate\Support\Str;


class Category extends Model implements HasMedia
{
    use HasFactory;
    public $incrementing = false;
    protected $keyType = 'string';


    use InteractsWithMedia;
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'description',
        'illustration',
        'slug',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'id' => 'string',
    ];


    public static function boot()
    {
        parent::boot();


        static::creating(function ($model) {
            $model->id =
                Str::uuid()->toString();
        });
    }



    public function services()
    {
        return $this->hasMany(Service::class);
    }
    public function freelances(): HasMany
    {
        return $this->hasMany(Freelance::class);
    }

    public function subCategories(): HasMany
    {
        return $this->hasMany(SubCategory::class);
    }

    public function tags():HasMany
    {
        return $this->hasMany(TagSearch::class);
    }
}
