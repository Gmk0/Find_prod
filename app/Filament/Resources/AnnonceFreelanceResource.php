<?php

namespace App\Filament\Resources;

use App\Filament\Resources\AnnonceFreelanceResource\Pages;
use App\Filament\Resources\AnnonceFreelanceResource\RelationManagers;
use App\Models\AnnonceFreelance;
use Filament\Forms;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Forms\Components\ColorPicker;
use Filament\Forms\Components\Section;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\Toggle;
use Filament\Forms\Get;
use Filament\Support\Facades\FilamentColor;
use Filament\Tables;
use Filament\Tables\Table;
use App\Models\Freelance;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;

class AnnonceFreelanceResource extends Resource
{
    protected static ?string $model = AnnonceFreelance::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Section::make()
                    ->schema([
                        TextInput::make('name')
                        ->minLength(5)
                        ->maxLength(100)
                            ->required(),
                        TextInput::make('title')
                ->maxLength(100)
                        ->minLength(5)
                            ->required(),
                TextInput::make('link')->label('Lien')
                ->url(),
                        Textarea::make('body')
                        ->minLength(20)
                            ->required(),
                        // IconPicker::make('icon'),
                        Select::make('color')
                        ->options([

                            'blue'=>'info',
                            'yellow'=>'Avertisement',
                            'red'=>'attention',
                            'custom' => 'Custom',
                        ])
                            ->live(),
                        ColorPicker::make('custom_color')
                        ->hidden(fn (Get $get) => $get('color') != 'custom')
                        ->requiredIf('color', 'custom')
                        ->rgb(),
                Select::make('type_freelance')->label("Choix d'affichage")
                ->options([
                'all'=>'Tout les freelance',
                'choix'=>'Choisir',
                'activer'=>'freelance activer',
                'supendu'=>'freelance suspendu',
                'en attente'=>'en attente d\'activation'
                ])->live()
                    ->required(),
                        Select::make('freelances')
                        ->options(Freelance::pluck('nom', 'id')->toArray())

                            //->visible(fn (Get $get) =>  $get('type_freelance') == 'choix')
                            ->multiple()
                            ->required(fn (Get $get) =>  $get('type_freelance') == 'choix'),

                    ])->columns(2),


                Toggle::make('afficher')

                ->label('afficher')
                ->default(false),
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([Tables\Columns\TextColumn::make('name')
                ->searchable(),
            Tables\Columns\TextColumn::make('type_freelance')
                ->searchable(),
            Tables\Columns\ToggleColumn::make('afficher')
                ->searchable(),
            Tables\Columns\TextColumn::make('created_at')->label('Date')
                ->searchable(),

                //

            ])
            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
            Tables\Actions\DeleteAction::make(),
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
            'index' => Pages\ListAnnonceFreelances::route('/'),
            'create' => Pages\CreateAnnonceFreelance::route('/create'),
            'edit' => Pages\EditAnnonceFreelance::route('/{record}/edit'),
        ];
    }
}
