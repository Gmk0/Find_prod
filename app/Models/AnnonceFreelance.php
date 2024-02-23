<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;
use Illuminate\Database\Eloquent\Model;

class AnnonceFreelance extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'color',
        'custom_color',
        'title',
        'body',
        'icon',
        'image',
        'link',
        'freelances',
        'type_freelance',
        'afficher',

    ];

    protected $casts = [

        'afficher' => 'boolean',
        'freelances'=>'array',
    ];



    public function freelances()
    {
        return $this->belongsToMany(Freelance::class, 'annonce_freelance_liason', 'annonce_freelance_id','freelance_id');
    }

}
