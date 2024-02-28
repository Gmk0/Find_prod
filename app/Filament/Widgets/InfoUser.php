<?php

namespace App\Filament\Widgets;

use App\Models\Freelance;
use App\Models\Service;
use App\Models\User;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class InfoUser extends BaseWidget
{
    protected function getStats(): array
    {
        return [
            //
            Stat::make('Utilisateur',User::all()->count()),
            Stat::make('Freelance', Freelance::all()->count()),
            Stat::make('Services Creer', Service::all()->count()),
            Stat::make('Freelance non activer', Freelance::where('status_compte', 'en_attente')->count()),
        ];
    }
}
