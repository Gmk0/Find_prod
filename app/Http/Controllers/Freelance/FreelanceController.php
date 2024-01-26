<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FreelanceController extends Controller
{
    //

    public function Dashboard()
    {
        return Inertia::render('Freelance/Dashboard/Dashboard');
    }

}
