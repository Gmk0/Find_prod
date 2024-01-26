<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Casts\AsArrayObject;

class UserSetting extends Model
{
    use HasFactory;


    protected $fillable = [
        'push_notifications_enabled',
        'email_notifications_enabled',
        'send_invoice_enabled',
        'number_notifications_enabled',
        'theme',
        'user_id',
        'addresse_facturation',
        'feedback_submitted',
        'feedback'
    ];


    protected $casts = [
        'push_notifications_enabled' => 'boolean',
        'email_notifications_enabled' => 'boolean',
        'send_invoice_enabled' => 'boolean',
        'number_notifications_enabled' => 'boolean',
        'feedback_submitted' => 'boolean',
        'feedback' => 'array',
        'user_id'=>'string',
        'addresse_facturation' => 'array',
    ];
}
