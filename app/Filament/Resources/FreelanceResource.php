<?php

namespace App\Filament\Resources;

use App\Filament\Resources\FreelanceResource\Pages;
use App\Filament\Resources\FreelanceResource\RelationManagers;
use App\Models\Freelance;
use Filament\Forms;
use Filament\Forms\Components\Grid;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Tables\Columns\SelectColumn;
use Filament\Forms\Get;
use Illuminate\Support\Collection;
use App\Models\SubCategory;
use Filament\Forms\Components\Fieldset;
use Illuminate\Support\HtmlString;

class FreelanceResource extends Resource
{
    protected static ?string $model = Freelance::class;

    protected static ?string $navigationGroup = 'Freelances';

    protected static ?string $navigationIcon = 'heroicon-o-users';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Forms\Components\Select::make('user_id')
                    ->relationship('user', 'name')
                ->unique(ignoreRecord: true)
                    ->required()
                    ->native(false)
                    ->columnSpanFull(),
                Forms\Components\Select::make('category_id')
                    ->relationship('category', 'name')
                    ->live()
                    ->native()
                    ->required(),
            Forms\Components\Select::make('sub_categorie')->label('Sous categorie')
                ->options(fn (Get $get): Collection => SubCategory::query()
                    ->where('category_id', $get('category_id'))
                    ->pluck('name', 'id'))

                ->multiple()
                ->searchable()
                ->native(false),
                Forms\Components\TextInput::make('nom')
                    ->required(),
                Forms\Components\TextInput::make('prenom')
                    ->required(),


            Grid::make('3')->schema([
                Select::make('experience')
                ->options([
                    '1 ans' => '1 ans',
                    '2-5 ans' => '2-5 ans',
                    '5 + ans' => '5 + ans',
                ])
                ->native(false),

                TextInput::make('taux_journalier')
                ->numeric()
                ->required(),

            ]),
            Grid::make(['md' => 3])
            ->schema([
                TextInput::make('localisation.ville'),
                TextInput::make('localisation.commune'),
                TextInput::make('localisation.avenue')
                // ...
            ]),


                Forms\Components\MarkdownEditor::make('description')
                    ->required()
                    ->columnSpanFull(),

            Repeater::make('langue')
            ->schema([

                Select::make('langue')
                    ->options([
                        'Français' => 'Français',
                        'Anglais' => 'Anglais',
                        'Lingala' => 'Lingala',
                        'Swahili' => 'Swahili',
                        'Kikongo' => 'Kikongo',
                        'Tshiluba' => 'Tshiluba',

                    ])->native(false),
                Select::make('level')->label('Niveau')
                ->options([
                    'Debutant' => 'Debutant',
                    'Intermédiaire' => 'Intermédiaire',
                    'expert' => 'expert',
                ])->native(false),


            ])
                ->columns(2)
                ->columnSpanFull(),
            Repeater::make('diplome')
            ->schema([
                TextInput::make('diplome'),
                TextInput::make('universite'),
                TextInput::make('annee'),

            ])
                ->columns(3)
                ->columnSpanFull(),
            Repeater::make('certificat')
            ->schema([
                TextInput::make('certifier'),
                TextInput::make('delivrer'),
                TextInput::make('annee')
                ,

            ])
                ->columns(3)
                ->columnSpanFull(),

            Repeater::make('comptes')
            ->schema([

                Select::make('compte')
                    ->options(['Facebook' => 'Facebook',
                    'Twitter' => 'Twitter',
                    'Instagram' => 'Instagram',
                    'LinkedIn' => 'LinkedIn',
                    'Snapchat' => 'Snapchat',
                    'TikTok' => 'TikTok',

                    ])->native(false),
                TextInput::make('lien'),

            ])
                ->columns(2)
                ->columnSpanFull(),
            Repeater::make('competences')
            ->schema([
                TextInput::make('title')->label('Competence'),

                Select::make('level')->label('Niveau')
                ->options([
                    'Debutant' => 'Debutant',
                    'Intermédiaire' => 'Intermédiaire',
                    'expert' => 'expert',
                ])->native(false),

            ])
                ->columns(2)
                ->columnSpanFull(),
                Forms\Components\TextInput::make('site')
                ->columnSpanFull(),




            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([


            \LaraZeus\Popover\Tables\PopoverColumn::make('user.name')
            ->sortable()
            ->searchable()
            ->toggleable()

                // main options
                ->trigger('mouseenter focus') // for more: https://atomiks.github.io/tippyjs/v6/all-props/#trigger
                ->placement('top') // for more: https://atomiks.github.io/tippyjs/v6/all-props/#placement
                ->offset([0, 10
                ]) // for more: https://atomiks.github.io/tippyjs/v6/all-props/#offset
                ->popOverMaxWidth('none') // for more: https://atomiks.github.io/tippyjs/v6/all-props/#maxwidth
                ->icon('heroicon-o-chevron-right')
            ->content(fn ($record) => new HtmlString($record->user->name . '<br>' . $record->user->email)),
            Tables\Columns\TextColumn::make('category.name')
            ->numeric()
            ->sortable(),
            // show custom icon

                // direct HTML content

                Tables\Columns\TextColumn::make('nom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('prenom')
                    ->searchable(),
                Tables\Columns\TextColumn::make('identifiant')
                    ->searchable(),
                Tables\Columns\TextColumn::make('site')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('taux_journalier')
                    ->money('usd',true)
                ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('level')
                    ->searchable(),
                Tables\Columns\TextColumn::make('solde')
                    ->numeric()
                    ->sortable(),

            SelectColumn::make('status_compte')->options([
                'actif' => 'actif',
                'en_attente' => 'en_attente',
                'suspendu' => 'suspendu',
            ]),
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
    public static function getNavigationBadge(): ?string
    {
        return static::$model::count();
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListFreelances::route('/'),
            'create' => Pages\CreateFreelance::route('/create'),
            'view' => Pages\ViewFreelance::route('/{record}'),
            'edit' => Pages\EditFreelance::route('/{record}/edit'),
        ];
    }
}
