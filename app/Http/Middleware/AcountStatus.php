<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Filament\Support\Facades\FilamentView;

class AcountStatus
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        if (Auth::check()) {
            $status = [
                'status_compte' => Auth::user()->freelance->status_compte,
            ];

            FilamentView::registerRenderHook(
                'panels::content.start',
                fn (): View => view('acountStatus',
                ['status' => $status])
            );
        }
        return $next($request);
    }
}
