<?php

namespace App\Filament\Freelance\Resources\OrderResource\Widgets;

use App\Filament\Freelance\Resources\OrderResource;
use App\Http\Resources\Order;
use App\Models\Order as ModelsOrder;
use Filament\Tables;
use Filament\Tables\Table;
use Filament\Widgets\TableWidget as BaseWidget;

class LastOrder extends BaseWidget
{
    protected int | string | array $columnSpan = 'full';
    protected int | string | array $title="Order";
    public function table(Table $table): Table
    {
        return $table
            ->query(ModelsOrder::whereHas('service',  function($q){
                $q->where('freelance_id',auth()->user()->freelance->id);
            })->OrderBy('created_at', 'Desc')->latest())
            ->columns([
            Tables\Columns\TextColumn::make('order_numero')
                ->searchable(),
            Tables\Columns\TextColumn::make('service.title')
            ->searchable(),

            Tables\Columns\TextColumn::make('total_amount')
            ->searchable()
            ->money('usd',true)
                ->sortable(),
            Tables\Columns\TextColumn::make('user.name')
            ->searchable(),
            Tables\Columns\TextColumn::make('status')
                ->badge()
                ->colors([

                    'primary' => 'pending',
                    'danger' => 'failed',
                    'success' => 'completed',

                ]),
                // ...
            ])->actions([
                Tables\Actions\Action::make('Gerer')
                    ->url(fn (ModelsOrder $record): string => OrderResource::getUrl('edit', ['record' => $record])),
            ]);
    }





}
