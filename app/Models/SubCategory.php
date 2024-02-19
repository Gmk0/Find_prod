<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Support\Str;
use Spatie\Sluggable\HasSlug;
use Spatie\Sluggable\SlugOptions;


class SubCategory extends Model
{
    use HasFactory;
    use HasSlug;
    public $incrementing = false;
    protected $keyType = 'string';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'category_id',
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
        'category_id' => 'string',
    ];

    public function getSlugOptions(): SlugOptions
    {
        return SlugOptions::create()
            ->generateSlugsFrom('name')
            ->saveSlugsTo('slug')
            ->slugsShouldBeNoLongerThan(50);
    }

    public function category(): BelongsTo
    {
        return $this->belongsTo(Category::class);
    }

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
        $allServices = Service::all();

        // Filter services based on the subcategory attribute
        $relatedServices = $allServices->filter(function ($service) {
            // Assuming subcategory is already an array

            $subCategoryIds = $service->sub_category;
            if ($subCategoryIds != null) {
                return in_array($this->id, $subCategoryIds);
            }
        });

        return $relatedServices;
        // Récupérez tous les services dont l'attribut subcategory contient l'ID de cette sous-catégorie

    }

    public function getServicesAttribute()
    {

        $allServices = Service::all();

        // Filter services based on the subcategory attribute
        $relatedServices = $allServices->filter(function ($service) {
            // Assuming subcategory is already an array

              $subCategoryIds = $service->sub_category;
            if ($subCategoryIds != null) {
                return in_array($this->id, $subCategoryIds);
            }


           // return in_array($this->id, $subCategoryIds);
        });

        return $relatedServices;
    }


}
