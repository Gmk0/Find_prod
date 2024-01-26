<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\MissionResponseResource\Pages;
use App\Filament\Freelance\Resources\MissionResponseResource\RelationManagers;
use App\Models\MissionResponse;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Actions\Action as ActionsAction;

class MissionResponseResource extends Resource
{
    protected static ?string $model = MissionResponse::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Missions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('freelance_id')
                    ->relationship('freelance', 'id')
                    ->required(),
                Forms\Components\Select::make('mission_id')
                    ->relationship('mission', 'title')
                    ->required(),
                Forms\Components\TextInput::make('response_numero')
                    ->required(),
                Forms\Components\Textarea::make('content')
                    ->required()
                    ->columnSpanFull(),
                Forms\Components\TextInput::make('budget')
                    ->required()
                    ->numeric(),
                Forms\Components\TextInput::make('status')

                    ->required(),
                Forms\Components\DateTimePicker::make('is_paid'),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('mission.title')

                    ->sortable(),

                Tables\Columns\TextColumn::make('budget')
                    ->money('usd', true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('status')
                ->badge()
                ->sortable()
                ->colors([
                    'success' => 'approved',
                    'warning' => 'rejected',
                    'info' => 'pending'
                ])
                    ->searchable(),
                Tables\Columns\TextColumn::make('mission.progress')
                 ->sortable(),

                     Tables\Columns\TextColumn::make('mission.feedbackMission.etat')
            ->badge()
            ->colors([
                'success' => 'Livré',
                'warning' => 'En attente de traitement',
                'primary' => 'En transit',
                'info'=>'En cours de préparation'
            ])
                ->searchable(),

                Tables\Columns\TextColumn::make('is_paid')
                    ->dateTime()
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
                //Tables\Actions\EditAction::make(),
                //->visible(fn (MissionResponse $record): bool => !$record->missionApproved() ? true : false),,

             ActionsAction::make('gestion')
                    ->url(fn (MissionResponse $record): string => static::getUrl('gestion', ['record' => $record]))
                    ->button()
                    ->outlined()
                ->color('success')
                ->icon('heroicon-m-pencil-square')

                 ->label('gestion')
                ->visible(fn(MissionResponse $record): bool =>$record->missionApproved() ? true : false),
                //Tables\Actions\DeleteAction::make(),
            ]);
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('freelance_id', auth()->user()->getIdFreelance());
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ManageMissionResponses::route('/'),
            'gestion' => Pages\GestionMission::route('/{record}/gestion'),
        ];
    }
}
