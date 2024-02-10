<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class AffichageElement extends Model
{
    use HasFactory;


    protected $fillable=['commentaire_user', 'about', 'talk_about'];

    protected $casts=[
            'commentaire_user'=> 'array',
            'array'=>'array',
        'tutorial'=>'array',
            'talk_about'=>'array',
        ];
}
