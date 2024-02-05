<?php

namespace App\Filament\Freelance\Resources\TransactionResource\Widgets;

use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class SoldeFreelance extends BaseWidget
{
    protected function getStats(): array
    {
        return [

            Stat::make('Total Revenu', auth()->user()->freelance->solde . ' $'),
            //
        ];
    }
}
