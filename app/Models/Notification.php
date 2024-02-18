<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

use Illuminate\Support\Str;
class Notification extends Model
{
    use HasFactory;



    public $incrementing = false;
    protected $keyType = 'string';
    protected $fillable = [
        'notifiable_id',
        'type',
        'content',
        'data',
        'is_read',
    ];

    public static function boot()
    {
        parent::boot();
        static::creating(function ($notification) {

           // dd($notification);
            $notification->id = Str::uuid()->toString();

        });


    }




    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [

        'id' => 'string',
        'data' => 'array',
        'notifiable_id' => 'string',

    ];
}
