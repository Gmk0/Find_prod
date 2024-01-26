<?php

namespace App\Filament\Freelance\Resources\OrderResource\Pages;

use App\Filament\Freelance\Resources\OrderResource;
use Filament\Actions;
use Filament\Resources\Pages\ListRecords;
use App\Filament\Freelance\Resources\OrderResource\Widgets\OrderStat;
use Filament\Pages\Concerns\ExposesTableToWidgets;

class ListOrders extends ListRecords
{
    protected static string $resource = OrderResource::class;
    use ExposesTableToWidgets;

    protected function getHeaderWidgets(): array
    {
        return [OrderStat::class];
    }

    protected function getHeaderActions(): array
    {
        return [
           // Actions\CreateAction::make(),
        ];
    }

    public function getTabs(): array
    {
        return [
            null => ListRecords\Tab::make('All'),

            'Livré' => ListRecords\Tab::make()->query(fn ($query) => $query->whereHas('feedback', function($q){
                $q->where('etat','=','Livré');
            })),
            'shipped' => ListRecords\Tab::make()->query(fn ($query) => $query->where('status', 'shipped')),
            'delivered' => ListRecords\Tab::make()->query(fn ($query) => $query->where('status', 'delivered')),
            'cancelled' => ListRecords\Tab::make()->query(fn ($query) => $query->where('status', 'cancelled')),
        ];
    }
}
