<?php

namespace App\Filament\Resources;

use App\Filament\Freelance\Resources\ServiceResource\Pages;
use App\Filament\Freelance\Resources\ServiceResource\RelationManagers;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\{FileUpload, Select, Toggle, Textarea};

use Filament\Forms\Components\RichEditor;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Table;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\SoftDeletingScope;
use Filament\Forms\Get;
use Illuminate\Support\Collection;
use App\Models\SubCategory;
use App\Models\Category;
use App\Models\TagSearch;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Titre')->schema([
                    TextInput::make('title')->label('Titre')->helperText('Donner un titre a votre service ')->required(),

                    Select::make('tags')->label('tags')
                    ->options(function () {
                        return TagSearch::where('category_id', auth()->user()->freelance->category_id)->pluck('tag', 'tag');
                    })->multiple()
                        ->native(false),

                ]),
                Fieldset::make('Sous categories')
                ->schema([
                    Forms\Components\Select::make('category_id')->label('categorie')
                    ->options(Category::where('id', auth()->user()->freelance->category_id)->pluck('name', 'id'))
                    ->live()
                        ->searchable()
                        ->native(false),

                    Forms\Components\Select::make('sub_category')->label('Sous categorie')
                    ->options(fn (Get $get): Collection => SubCategory::query()
                        ->where('category_id', $get('category_id'))
                        ->pluck('name', 'id'))

                    ->multiple()
                        ->searchable()
                        ->native(false),
                ]),
                Fieldset::make('Prix')
                ->schema([
                    // ...
                    TextInput::make('basic_price')
                    ->label('Prix du Service')
                    ->numeric()
                        ->inputMode('decimal')
                        ->helperText('3.5% sera ajouter a votre prix pour les frais de transaction ')
                        ->required(),

                    TextInput::make('basic_revision')->label('Revisions')
                ])
                    ->columns(2),
                RichEditor::make('description')
                ->columnSpanFull(),

                RichEditor::make('need_service')->label('Besoin service')
                ->helperText('Ce dont vous auriez besoin pour realiser le service')
                ->toolbarButtons([
                    'bulletList',
                    'orderedList',
                    'undo',
                ])
                    ->columnSpanFull(),

                FileUpload::make('files')->label('Image Decrivant le service')
                ->multiple()
                    ->directory('service')
                    ->imagePreviewHeight('100')
                    ->image()
                    ->columnSpanFull()
                    ->imageEditor(),
                Fieldset::make('Realisation')->schema([
                    FileUpload::make('example.image')
                    ->imagePreviewHeight('100')
                    ->image()
                        ->imageEditor()
                        ->directory('examples')
                        ->multiple(),
                    Textarea::make('example.description')


                ]),
                TagsInput::make('basic_support')->label('Support du service')->hint('Support du service')->suggestions([
                    'tailwindcss',
                    'alpinejs',
                    'laravel',
                    'livewire',
                    'photographie',
                ])->placeholder('Maintenance, Suivie')->hidden(),
                TextInput::make('video_url')->label('video(facultatif)')
                ->url()
                    ->prefix('https://')
                    ->hint('lien explicatif du service'),
                Fieldset::make('Prix')
                ->schema([
                    // ...
                    TextInput::make('basic_delivery_time')->label('Temps De livraison')->required(),
                    Select::make('delivery_time_unit')->label('Temps de livraison')
                    ->options([
                        'jour(s)' => 'jour(s)',
                        'heure(s)' => 'heure(s)',

                    ])->required(),

                ]),







            ]);
    }


    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('category.name')
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
            Tables\Columns\TextColumn::make('freelance.user.name')
            ->searchable(),
                Tables\Columns\TextColumn::make('service_numero')
                ->searchable(),
                Tables\Columns\TextColumn::make('title')
                ->searchable(),
                Tables\Columns\TextColumn::make('basic_price')
                ->money('USD', true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('basic_support')
                ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('basic_revision')
                ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('basic_delivery_time')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_price')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_support')
                ->searchable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_revision')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_delivery_time')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('extra_price')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('extra_support')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('extra_revision')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->numeric()
                    ->sortable(),
                Tables\Columns\TextColumn::make('extra_delivery_time')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->numeric()
                    ->sortable(),



                Tables\Columns\TextColumn::make('delivery_time_unit')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('video_url')
                ->toggleable(isToggledHiddenByDefault: true)
                    ->searchable(),
                Tables\Columns\TextColumn::make('view_count')
                ->numeric()
                    ->sortable()
                    ->toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('like')
                ->numeric()
                    ->toggleable(isToggledHiddenByDefault: true)
                    ->sortable(),
                Tables\Columns\IconColumn::make('is_publish')
                ->boolean(),
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
            'index' => Pages\ListServices::route('/'),
            'create' => Pages\CreateService::route('/create'),
            'view' => Pages\ViewService::route('/{record}'),
            'edit' => Pages\EditService::route('/{record}/edit'),
        ];
    }
}
