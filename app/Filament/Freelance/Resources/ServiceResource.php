<?php

namespace App\Filament\Freelance\Resources;

use App\Filament\Freelance\Resources\ServiceResource\Pages;
use App\Filament\Freelance\Resources\ServiceResource\RelationManagers;
use App\Models\Service;
use Filament\Forms;
use Filament\Forms\Components\Fieldset;
use Filament\Forms\Components\TagsInput;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\{FileUpload,Select,Toggle, Textarea};
use Filament\Notifications\Notification;


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
use Filament\Tables\Columns\SpatieMediaLibraryImageColumn;
use Filament\Forms\Components\SpatieMediaLibraryFileUpload;

class ServiceResource extends Resource
{
    protected static ?string $model = Service::class;

    protected static ?string $navigationIcon = 'heroicon-o-inbox-stack';

    protected static ?string $navigationGroup = 'Services';
    protected static ?int $navigationSort = 1;

    public static function form(Form $form): Form
    {
        return $form
            ->schema([
                Fieldset::make('Titre')->schema([
                TextInput::make('title')->label('Titre')

                    ->minLength(2)
                    ->maxLength(50)
                ->helperText('Donner un titre a votre service ')->required(),


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
                    //->helperText('3.5% sera ajouter a votre prix pour les frais de transaction ')
                    ->required(),

                    TextInput::make('basic_revision')
                    ->label('Revisions')
                    ->numeric(),
                ])
                ->columns(2),

            SpatieMediaLibraryFileUpload::make('images')->label('Image Decrivant votre service')
            ->multiple()
            ->preserveFilenames()
            ->directory('service')
            ->image()
            ->imagePreviewHeight('100')
            ->optimize('webp')
            ->collection('services')
            ->enableReordering()

            ->columnSpanFull()
            ->imageEditor(),
            RichEditor::make('description')
            ->required()
            ->columnSpanFull(),

            RichEditor::make('need_service')->label('Besoin service')
            ->helperText('Ce dont vous auriez besoin pour realiser le service')
            ->toolbarButtons([
                'bulletList',
                'orderedList',
                'undo',
            ])
            ->columnSpanFull(),


                Fieldset::make('Realisation faites avec ce service')->schema([
                FileUpload::make('example.image')
                    ->imagePreviewHeight('100')
                    ->image()

                    ->optimize('webp')
                    ->imageEditor()
                    ->directory('examples')
                    ->multiple()
                    ->maxSize(3024)
                    ->maxFiles(4)
                    ->reorderable(),
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
                    TextInput::make('basic_delivery_time')->label('Temps De livraison')
                ->numeric()
                ->required(),
                    Select::make('delivery_time_unit')->label('Temps de livraison')
                    ->options([
                        'jour(s)' => 'jour(s)',
                        'heure(s)' => 'heure(s)',

                    ])->required(),

                ]),


            Toggle::make('is_publish')->label('Publier'),

            Toggle::make('is_gift')->label('cadeaux')
            ->visible(fn (): bool => str_ends_with(auth()->user()->email, '@find-freelance.com') ),


            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([

                Tables\Columns\TextColumn::make('category.name')
                    ->numeric()
                    ->sortable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('service_numero')
                    ->searchable(),
                Tables\Columns\TextColumn::make('title')
                    ->searchable(),
                Tables\Columns\TextColumn::make('basic_price')
                    ->money('USD',true)
                    ->sortable(),
                Tables\Columns\TextColumn::make('basic_support')
                    ->searchable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('basic_revision')
                    ->numeric()
                ->toggleable( isToggledHiddenByDefault: true)
                ->sortable(),
                Tables\Columns\TextColumn::make('basic_delivery_time')
                    ->numeric()
                    ->sortable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_price')
                    ->numeric()
                    ->sortable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_support')
                    ->searchable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_revision')
                    ->numeric()
                    ->sortable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('premium_delivery_time')
                    ->numeric()
                    ->sortable()
                ->
            toggleable(isToggledHiddenByDefault: true),
                Tables\Columns\TextColumn::make('extra_price')
                    ->numeric()
                    ->sortable()
                ->toggleable(isToggledHiddenByDefault: true)
,
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

                Tables\Actions\Action::make('Supprimer')
                ->requiresConfirmation()
                        ->action(function (Service $service) {
                            if($service->orders->count() == 0)
                            {
                                $service->delete();
                            }else{

                    Notification::make()
                        ->title('Impossible de supprimer')
                        ->danger()
                        ->body('Le service a déjà été commandé.')
                        ->send();

                            }
                            // ...
                })->icon('heroicon-s-trash'),
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
        return parent::getEloquentQuery()->whereHas('freelance', function($q){
            $q->where('id', auth()->user()->freelance->id);
        });
    }
    public static function getNavigationBadge(): ?string
    {
        return 'Important';
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
