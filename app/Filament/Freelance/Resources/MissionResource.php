<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\MissionResource\Pages;
use App\Filament\Freelance\Resources\MissionResource\RelationManagers;
use App\Models\Mission;
use Filament\Actions\Action;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Actions\Action as ActionsAction;
use Filament\Tables\Columns\Layout\Grid as LayoutGrid;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\Layout\Panel;
use Filament\Tables\Columns\Layout\Split;
use Filament\Tables\Columns\TextColumn;

class MissionResource extends Resource
{
    protected static ?string $model = Mission::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Missions';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                    ->required(),

            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->contentGrid([
                'md' => 1,
                'xl' => 1,
            ])
            ->columns([

            LayoutGrid::make(['md'=>2



            ])->schema([
                TextColumn::make('title')->description('titre')->searchable(),
                TextColumn::make('budget')->description('budget')->money('usd', true)->searchable(),
                TextColumn::make('description')->description('description')
            ->words()->columnSpanFull(),
                TextColumn::make('begin_mission')->description('Date debut')->date(),
                TextColumn::make('end_mission')->description('Date Fin')->date()

            ]),





            ])
            ->filters([
                //
            ])
            ->actions([
                //Tables\Actions\ViewAction::make(),
                //Tables\Actions\EditAction::make(),

                ActionsAction::make('Postuler')
            ->url(fn (Mission $record): string => static::getUrl('postuler', ['record' => $record]))
            ->button()
            ->icon('heroicon-m-pencil-square')
            ->outlined(),

            ActionsAction::make('Mission accepter')
            ->url(fn (Mission $record): string => static::getUrl('postuler', ['record' => $record]))
            ->visible(fn(Mission $record): bool =>$record->getApprovedMissionResponseUser() ? true : false)
            ->button()
            ->color('success')
            ->icon('heroicon-m-pencil-square')
            ->outlined(),
            ])
            ->bulkActions([

            ]);
    }



    public static function getRelations(): array
    {
        return [

            //
        ];
    }

    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->where('masquer',false)->where('status', 'pending');
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListMissions::route('/'),
            'postuler'=>Pages\PostulerMission::route('/{record}/postuler')
            //'create' => Pages\CreateMission::route('/create'),
            //'view' => Pages\ViewMission::route('/{record}'),
           // 'edit' => Pages\EditMission::route('/{record}/edit'),
        ];
    }
}
