<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class coupon extends Model
{
    use HasFactory;
    public $incrementing = false;
    protected $keyType = 'string';



    protected $fillable=['coupon', 'pourcentage', 'date_expiration', 'nombre_utilisation'];

    protected $casts = [
        'id' => 'string',

    ];


    public static function boot()
    {
        parent::boot();


        static::creating(function ($conv) {
            $conv->id =
                Str::uuid()->toString();
        });
    }
}
