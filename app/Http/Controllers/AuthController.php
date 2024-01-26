<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class AuthController extends Controller
{
    //

    public function register($codes = null)
    {

        return Inertia::render('Auth/Register',['code'=> $codes]);
    }
}
