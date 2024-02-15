<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AffichageElementResource\Pages;
use App\Filament\Resources\AffichageElementResource\RelationManagers;
use App\Models\AffichageElement;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AffichageElementResource extends Resource
{
    protected static ?string $model = AffichageElement::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';
    protected static ?string $navigationGroup = 'Gestion Page';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([

                Forms\Components\Section::make('Commentaire')->schema([Forms\Components\Repeater::make('commentaire_user')->label('Commentaire utilisateur')
                    ->schema([
                        Grid::make(['md' => 2])->schema([
                            TextInput::make('client'),
                            TextInput::make('entreprise'),
                        ]),

                        MarkdownEditor::make('commentaire'),
                        Toggle::make('afficher'),
                    ])->columnSpanFull(),


                    ])->collapsible(),



                    Forms\Components\Section::make('Tutorial')
                    ->schema([Forms\Components\Repeater::make('tutorial')->label('tutorial utilisateur')
                    ->schema([
                        Grid::make(['md' => 2])->schema([
                            TextInput::make('titre'),
                            TextInput::make('lien')
                                ->suffixIcon('heroicon-m-globe-alt')
                                ->url(),
                        ]),

                        MarkdownEditor::make('commentaire'),
                        Toggle::make('afficher'),
                    ])->columnSpanFull(),
                        ])->collapsible(),


                         Forms\Components\Section::make('Parlents mieux que nous')
                         ->schema([


            Forms\Components\Repeater::make('talk_about')->label('ils en parle mieux que nous')
            ->schema([
                Grid::make(['md' => 2])->schema([
                    TextInput::make('utilisateur'),
                    TextInput::make('entreprise'),
                    TextInput::make('lien')
                    ->url()
                        ->suffixIcon('heroicon-m-globe-alt'),
                        Forms\Components\FileUpload::make('image')
                        ->directory('userComment')
                        ->preserveFilenames(),
                ]),

                MarkdownEditor::make('commentaire'),
                Toggle::make('afficher'),
            ])->columnSpanFull(),
            ])->collapsible(),


            Forms\Components\Section::make('Apropos')
            ->schema([Forms\Components\RichEditor::make('about')->label('Apropos de nous')->columnSpanFull(),

                ])->collapsible(),


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                Tables\Columns\TextColumn::make('about')
                    ->searchable(),
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
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListAffichageElements::route('/'),
            'create' => Pages\CreateAffichageElement::route('/create'),
            'view' => Pages\ViewAffichageElement::route('/{record}'),
            'edit' => Pages\EditAffichageElement::route('/{record}/edit'),
        ];
    }
}
