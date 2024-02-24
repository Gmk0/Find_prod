<?php

namespace App\Filament\Resources\UserResource\RelationManagers;

use App\Models\User;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\RelationManagers\RelationManager;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Notifications\Notification;
use Illuminate\Database\Eloquent\Collection;

class ReferralsRelationManager extends RelationManager
{
    protected static string $relationship = 'referrals';

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\TextInput::make('email')
                    ->required()
                    ->maxLength(255),
            ]);
    }

    public function table(Table $table): Table
    {
        return $table
            ->recordTitleAttribute('email')
            ->columns([
                Tables\Columns\TextColumn::make('email'),
                 Tables\Columns\TextColumn::make('name'),
            Tables\Columns\TextColumn::make('phone'),
            Tables\Columns\ImageColumn::make('profile_photo_path'),
            ])
            ->filters([
                //
            ])
            ->headerActions([
                Tables\Actions\CreateAction::make(),
            ])
            ->actions([
                //Tables\Actions\EditAction::make(),
                //Tables\Actions\DeleteAction::make(),
            /// Tables\Actions\DissociateAction::make(),
             Tables\Actions\Action::make('dissocier')
                ->requiresConfirmation()
                ->action(function(User $record) {

                $record->update(['referral_by' => null]);
                Notification::make()
                ->title('Dissociation reussie')
                ->success()
                ->send();


                }),
            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                Tables\Actions\BulkAction::make('dissocier')
                ->requiresConfirmation()
                ->action(function (Collection $records){
                    foreach ($records as $record) {
                        // Mise à jour de chaque enregistrement pour effacer la colonne spécifique
                        $record->update(['referral_by' => null]); // Remplacez 'nom_de_la_colonne' par le nom de la colonne que vous souhaitez effacer


                    };
                    Notification::make()
                    ->title('Dissociation reussie')
                    ->success()
                    ->send();

                })
                ]),
            ]);
    }
}
