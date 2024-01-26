<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class FreelanceAccessPanel
{
    public function handle(Request $request, Closure $next): Response
    {
        // Vérifiez si l'utilisateur est authentifié
        if (!Auth::check()) {
            return redirect('/');
        }

        // Récupérez l'utilisateur actuellement authentifié
        $user = Auth::user();

        // Vérifiez si l'utilisateur a une relation avec le modèle Freelance
        if (!$user->freelanceExit()) {
            return redirect()->route('register.etape.1')->with('error', 'Vous n\'avez pas accès à cette page');
        }

        if ($request->inertia()) {
            return Inertia::location($request->fullUrl());
        }

        return $next($request);
    }
}
