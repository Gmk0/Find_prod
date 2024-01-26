<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use App\Models\UserSetting;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Inertia\Inertia;
use Inertia\Response as InertiaResponse;
use Illuminate\Support\Carbon;
use Illuminate\Support\Facades\DB;
use Laravel\Fortify\Features;
use Laravel\Jetstream\Agent;
use Laravel\Jetstream\Jetstream;

class ProfileController extends Controller
{
    //




    /**
     * Get the current sessions.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Support\Collection
     */
    public function sessions(Request $request)
    {
        if (config('session.driver') !== 'database') {
            return collect();
        }

        return collect(
            DB::connection(config('session.connection'))->table(config('session.table', 'sessions'))
                ->where('user_id', $request->user()->getAuthIdentifier())
                ->orderBy('last_activity', 'desc')
                ->get()
        )->map(function ($session) use ($request) {
            $agent = $this->createAgent($session);

            return (object) [
                'agent' => [
                    'is_desktop' => $agent->isDesktop(),
                    'platform' => $agent->platform(),
                    'browser' => $agent->browser(),
                ],
                'ip_address' => $session->ip_address,
                'is_current_device' => $session->id === $request->session()->getId(),
                'last_active' => Carbon::createFromTimestamp($session->last_activity)->diffForHumans(),
            ];
        });
    }

    /**
     * Create a new agent instance from the given session.
     *
     * @param  mixed  $session
     * @return \Laravel\Jetstream\Agent
     */
    protected function createAgent($session)
    {
        return tap(new Agent(), fn ($agent) => $agent->setUserAgent($session->user_agent));
    }


    public function show(Request $request): InertiaResponse
    {


        return Inertia::render('User/Profile/Profile',[
            ]);

    }

    public function parainage()
    {
        $codeParainage=auth()->user()->referral_code??null;
        $lienParainage='';

        if($codeParainage !=null)
        {
            $lienParainage=route('auth.register', $codeParainage);

        }


        return Inertia::render('User/Profile/Parainage',
        [
            'codeParainage'=> $codeParainage,
            'lienParainage'=> $lienParainage,
        ]);
    }

    public function notifications()
    {
        $notification=auth()->user()->userSetting;

        if($notification ==null)
        {
            $notification=New UserSetting();

            $notification->user_id=auth()->id();
            $notification->save();


        }

        return Inertia::render('User/Profile/NotificationSetting',['notification'=>$notification]);
    }
    public function security(Request $request)
    {


        $sessions= $this->sessions($request)->all();



        return Inertia::render('User/Profile/Security',['sessions'=>$sessions]);

    }
}
