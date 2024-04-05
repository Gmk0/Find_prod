<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ClientLinkResource\Pages;
use App\Filament\Resources\ClientLinkResource\RelationManagers;
use App\Models\ClientLink;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class ClientLinkResource extends Resource
{
    protected static ?string $model = ClientLink::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('user_id')
                    ->required(),
                Forms\Components\TextInput::make('uniqueId')
                    ->required()
                    ->maxLength(255),
                Forms\Components\TextInput::make('proposal_id')
                    ->numeric(),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('user.name'),
                Tables\Columns\TextColumn::make('uniqueId')
                ->prefix('https://www.find-freelance/paiement-service/')
            ->copyable()
            ->copyMessage('lien  copier')
            ->copyableState(fn (ClientLink $record): string => "https://www.find-freelance.com/paiement-service/{$record->uniqueId}")
                    ->searchable(),
                Tables\Columns\TextColumn::make('proposal.proposed_price')
                    ->money('usd',true)
                    ->sortable(),
            Tables\Columns\TextColumn::make('proposal.status')

                ->sortable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
                //
            ])
            ->actions([

            ])
            ->bulkActions([

            ]);
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageClientLinks::route('/'),
        ];
    }
}
