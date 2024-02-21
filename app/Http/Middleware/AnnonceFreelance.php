<?php

namespace App\Http\Middleware;

use App\Models\Annonce;
use App\Models\AnnonceFreelance as ModelsAnnonceFreelance;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\Auth;
use Filament\Support\Facades\FilamentView;
use Filament\View\PanelsRenderHook;

class AnnonceFreelance
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        if (Auth::check()) {

            $model=ModelsAnnonceFreelance::whereJsonContains('freelances', Auth::user()->freelance->id)
                ->where('afficher', true)
                ->first();

            if($model)
            {
                FilamentView::registerRenderHook(
                    'panels::content.start',
                    fn (): View => view(
                        'annonce.annonce',[
                            'annonce'=>$model,
                            ]

                    )
                );

            }

        }

        return $next($request);
    }
}
