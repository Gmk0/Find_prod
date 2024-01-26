<?php

namespace App\Filament\Freelance\Resources\OrderResource\Widgets;

use App\Filament\Freelance\Resources\OrderResource\Pages\ListOrders;
use Filament\Widgets\Concerns\InteractsWithPageTable;
use Filament\Widgets\StatsOverviewWidget as BaseWidget;
use Filament\Widgets\StatsOverviewWidget\Stat;

class OrderStat extends BaseWidget
{

    use InteractsWithPageTable;

    protected function getTablePage(): string
    {
        return ListOrders::class;
    }


    protected function getStats(): array
    {
        return [
            Stat::make('Total commande', $this->getPageTableQuery()->count()),
            Stat::make('Commande Livré', $this->getPageTableQuery()->whereHas('feedback',function($q){$q->where('etat','=','Livré');})->count()),
            Stat::make('Commande en Attente', $this->getPageTableQuery()->whereHas('feedback', function ($q) {
                $q->where('etat', '!=', 'Livré');
            })->count()),
        ];
    }
}
