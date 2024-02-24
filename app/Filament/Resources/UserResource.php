<?php

namespace App\Filament\Resources;

use App\Filament\Resources\UserResource\Pages;
use App\Filament\Resources\UserResource\RelationManagers;
use App\Filament\Resources\UserResource\Widgets\UserOverview;
use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Filters\Filter;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class UserResource extends Resource
{
    protected static ?string $model = User::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'User';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('id')
                    ->required(),
                Forms\Components\TextInput::make('name')
                    ->required(),


                Forms\Components\TextInput::make('phone')
                    ->tel(),
                Forms\Components\TextInput::make('email')
                    ->email()
                    ->required(),
            Forms\Components\TextInput::make('referral_by')
                ,
            Forms\Components\TextInput::make('referral_code')
        ,
                Forms\Components\DateTimePicker::make('email_verified_at'),
                Forms\Components\DateTimePicker::make('phone_verified_at'),



                Forms\Components\FileUpload::make('profile_photo_path'),



            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('name')
                    ->searchable(),
                Tables\Columns\TextColumn::make('phone')
                    ->searchable(),
            Tables\Columns\TextColumn::make('slug')
                ->toggleable(isToggledHiddenByDefault: true)
                ->searchable(),
                Tables\Columns\TextColumn::make('email')
                    ->searchable(),
                Tables\Columns\TextColumn::make('email_verified_at')
                    ->dateTime()
                    ->sortable(),
                Tables\Columns\TextColumn::make('phone_verified_at')
                    ->dateTime()
                    ->sortable(),
            Tables\Columns\ImageColumn::make('referrals.name')->label('Parainé')
                ->circular()
                ->stacked()
                ->limit(10)
                ->limitedRemainingText()
            ->toggleable(isToggledHiddenByDefault: true)
            ,

            Tables\Columns\TextColumn::make('referrals_count')->label('Nombre d\'utilisateur Parainé')
            ->counts('referrals')
            ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\IconColumn::make('is_online')
                    ->boolean()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('last_activity')
                    ->dateTime()
                    ->sortable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('current_team_id')
                    ->numeric()
                    ->sortable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('google_id')
                    ->searchable()->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('facebook_id')
                    ->searchable()
                ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\ImageColumn::make('profile_photo_path')
                ->circular()
                    ->searchable(),
                Tables\Columns\TextColumn::make('created_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('updated_at')
                    ->dateTime()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('two_factor_confirmed_at')
                    ->dateTime()
                    ->sortable()
                ->toggleable(isToggledHiddenByDefault: true),
            ])
            ->filters([
            //
            Filter::make('is_online')->label('En ligne')
            ->query(fn (Builder $query): Builder => $query->where('is_online', true)),
            Filter::make('Freelance')->label('Freelance')
            ->query(fn (Builder $query): Builder => $query->whereHas('freelance')),
            Filter::make('Code')->label('Code Parainage')
            ->query(fn (Builder $query): Builder => $query->where('referral_code','!=',null)),

            ])

            ->actions([
                Tables\Actions\ViewAction::make(),
                Tables\Actions\EditAction::make(),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
            ]);
    }

    public static function getRelations(): array
    {
        return [
            //
            RelationManagers\ReferralsRelationManager::class,
        ];
    }
    public static function getEloquentQuery(): Builder
    {
        return parent::getEloquentQuery()->orderBy('created_at','desc');
    }

    public static function getWidgets(): array
    {
        return [
            UserOverview::class,
        ];
    }

    public static function getNavigationBadge(): ?string
    {
        return static::$model::count();
    }
    public static function getPages(): array
    {
        return [
            'index' => Pages\ListUsers::route('/'),
            'create' => Pages\CreateUser::route('/create'),
            'view' => Pages\ViewUser::route('/{record}'),
            'edit' => Pages\EditUser::route('/{record}/edit'),
        ];
    }
}
