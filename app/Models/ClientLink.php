<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Str;

class ClientLink extends Model
{
    use HasFactory;
    protected $fillable = ['user_id', 'uniqueID', 'proposal_id'];


    public $incrementing = false;
    protected $keyType = 'string';


    public static function boot()
    {
        parent::boot();

        static::creating(function ($link) {

            $link->id = Str::uuid()->toString();
            // $transaction->user_id = auth()->user()->id;

        });
    }


    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function proposal()
    {
        return $this->belongsTo(Proposal::class);
    }
}
