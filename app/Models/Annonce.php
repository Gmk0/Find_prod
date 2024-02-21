<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Annonce extends Model
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
        'users',
        'afficher',
        'type',
    ];

    protected $casts = [
        'users' => 'array',
        'afficher' => 'boolean',
    ];




}
