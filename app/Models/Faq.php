<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class Faq extends Model
{
    use HasFactory;


    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable=['questions','reponses','publier'];


    protected $cast=[
        'publier'=>'boolean',
    ];

    public static function boot()
    {
        parent::boot();

        static::creating(function ($faq) {
            $faq->id = Str::uuid()->toString();

        });
    }
}
