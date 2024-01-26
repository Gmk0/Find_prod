<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Symfony\Component\HttpFoundation\Response;

class FreelanceExist
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {

        // Vérifiez si l'utilisateur est authentifié
        if (!Auth::check()) {
            return redirect('/login');
        }
        // Récupérez l'utilisateur actuellement authentifié
        $user = Auth::user();

        if ($user->freelanceExit()) {
            return redirect()->to('freelance-gestion');
        }
        return $next($request);
    }
}
