<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ContactFeedback extends Model
{
    use HasFactory;

    protected $fillable=['id', 'name', 'email','telephone', 'message','user_id'];



}
