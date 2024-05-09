<?php

use App\Http\Controllers\Api\AuthController;
use App\Http\Controllers\Api\ChatController;
use App\Http\Controllers\Freelance\FreelanceController;
use App\Http\Controllers\Web\FreelanceController as WebFreelanceController;
use App\Http\Controllers\Web\ServiceController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;


Broadcast::routes(['middleware' => ['auth:sanctum']]);
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::controller(AuthController::class)->group(function () {

    Route::post('/auth/login',
        'login'
);
    Route::post('/auth/register', 'create');
});

Route::middleware('auth:sanctum')->group(function () {
    Route::controller(AuthController::class)->group(function () {
        Route::get('/user','fetchUser');
        Route::get('/logout', 'logout');
        Route::post('/verifyCode', 'verifyCode');

    });

    Route::controller(ChatController::class)->group(function () {

        Route::get('/getUserConversations', 'getUserConversations');
        Route::post('/createConversation', 'createConversation');

    });

    Route::controller(WebFreelanceController::class)->group(function () {

        Route::post('/likeMobile', 'LikeMobile');
    });



});

Route::get('/allServices',[ServiceController::class, 'AllservicesGetMobile']);

Route::get('/allFreelances',[FreelanceController::class, 'AllFreelancesGet'])->middleware(['auth:sanctum']);


Route::post('/SendMessage', [ChatController::class, 'SendMessage'])->middleware(['auth:sanctum']);
