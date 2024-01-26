<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Models\Mission;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Http\Resources\MissionResourceData;
use App\Models\MissionResponse;
use Illuminate\Support\Facades\Request as RequestFacade;

class MissionFreelance extends Controller
{
    //

    public function show()
    {

        $missions=Mission::filter(RequestFacade::only('search', 'budget', 'category', 'begin_mission'))
        ->paginate(10);


        return Inertia::render('Freelance/Mission/MissionList',
        [
            'filter'=> RequestFacade::all('search', 'budget', 'category', 'begin_mission'),
            'missions'=> MissionResourceData::collection($missions)
            ]);
    }

    public function postuler($mission_numero)
    {

        $mission =Mission::where('mission_numero', $mission_numero)->where('status', 'pending')->first();

        $MissionResponse= MissionResponse::whereHas('mission',function($q) use($mission_numero){
            $q->where('mission_numero', $mission_numero);
        })->where('freelance_id', auth()->user()->freelance->id)->first();


        if(!$mission)
        {
            return redirect()->back();
        }
        return Inertia::render(
            'Freelance/Mission/MissionPostuler',
            [

                'mission' => MissionResourceData::make($mission),
                'missionResponse' => $MissionResponse,
            ]
        );

    }

    public function postulerSend(Request $request)
    {


        $request->validate(['message'=>'required', 'mission_id'=>'required', 'budget'=>'required']);


        try{

            $responseMission= MissionResponse::where('freelance_id', auth()->user()->freelance->id)
            ->where('mission_id',$request->mission_id)->first();

            if($responseMission !=null){
                $responseMission->content=$request->message;
                  $responseMission->budget=$request->budget;
                  $responseMission->update();


            }else{

            $response = MissionResponse::create([
                'mission_id' => $request->mission_id,
                'freelance_id' => auth()->user()->freelance->id,
                'content' => $request->message,
                'budget' => $request->budget,
            ]);
        }


        }catch(\Exception $e){

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }



    }
}
