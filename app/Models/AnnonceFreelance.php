<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
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
        'freelances' => 'array',
        'afficher' => 'boolean',
    ];
}
