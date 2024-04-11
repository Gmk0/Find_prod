<?php

use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Broadcast;

/*
|--------------------------------------------------------------------------
| Broadcast Channels
|--------------------------------------------------------------------------
|
| Here you may register all of the event broadcasting channels that your
| application supports. The given channel authorization callbacks are
| used to check if an authenticated user can listen to the channel.
|
*/

Broadcast::channel('App.Models.User.{id}', function ($user, $id) {
    return  $user->id ===  $id;
});

Broadcast::channel('chat.{receiver}', function (User $user, $receiver) {

    error_log($receiver);
    return  $user->id ===  $receiver;
});



Broadcast::channel('chat2', function ($user) {
    return Auth::check();
});
