<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\FreelanceResourceData;
use App\Models\Freelance;
use Illuminate\Http\Request;
use Inertia\Inertia;

class FreelanceController extends Controller
{
    //

    public function Dashboard()
    {
        return Inertia::render('Freelance/Dashboard/Dashboard');
    }

    public function AllFreelancesGet()
    {
        try{
            $freelance = Freelance::where('status_compte', 'actif')->get();
            return response()->json(['allfreelances' => FreelanceResourceData::collection($freelance)]);

        }catch(\Exception $e){
            return response()->json(['error' => $e->getMessage()],500);
        }




    }

}
