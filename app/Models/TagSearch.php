<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TagSearch extends Model
{
    use HasFactory;


    protected $fillable=['tag','category_id','afficher'];


    public function category()
    {
        return $this->belongsTo(Category::class);
    }
}
