<?php

namespace App\Filament\Freelance\Pages;

use App\Models\Freelance;
use Filament\Forms\Components\Grid;
use Filament\Pages\Page;
use Filament\Resources\Pages\ViewRecord;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\Repeater;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\Section;
use Illuminate\Support\Facades\Http;

class FreelanceAcount extends Page implements HasForms
{
    use InteractsWithForms;
    protected static ?string $navigationIcon = 'heroicon-o-user-plus';

    protected static string $view = 'filament.freelance.pages.freelance-acount';

    protected static ?string $navigationLabel = 'Mon compte freelance';
    protected static ?string $title = 'Mon compte freelance';
    protected static ?string $navigationGroup = 'Mon compte';


    public Freelance $record;
    public ?array $data = [];
    public $countries=[];
    public function mount()
    {

        $this->record = auth()->user()->freelance;

        $this->countries = $this->getCountries();

       // dd($this->countries);



        $this->form->fill($this->record->toArray());
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([

            Section::make('Information')
            ->description('')
            ->schema([
                // ...

                Grid::make('2')->schema([
                TextInput::make('nom')
                ->required(),
                TextInput::make('prenom')
                ->required(),

                    ]),

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

            Grid::make('3')->schema([
                Select::make('pays')
                        ->options($this->getCountries())
                        ->searchable()
                        ->preload()
                        ->native(false),
                TextInput::make('localisation.ville')
                ->required(),
                TextInput::make('localisation.commune')
                ->required(),
                TextInput::make('localisation.addresse')
                ->required(),

            ]),
                TextInput::make('site')->label('lien portefolio')
                ->url()
                ->columnSpanFull(),



                MarkdownEditor::make('description'),

            Repeater::make('diplome')
            ->schema([
                TextInput::make('diplome')->required(),
                TextInput::make('universite')->required(),
                Select::make('annee')
                ->options($this->dateAnne())->native(false),

            ])
            ->columns(3),
            Repeater::make('certificat')
            ->schema([
                TextInput::make('certifier')->required(),
                TextInput::make('delivrer')->required(),
                Select::make('annee')
                ->options($this->dateAnne())->native(false),

            ])
                ->columns(3),

            Repeater::make('competences')
            ->schema([
                TextInput::make('title')->label('Compentences')->required(),
                Select::make('level')
                    ->options([
                        'Debutant' => 'Debutant',
                        'Intermédiaire' => 'Intermédiaire',
                        'expert' => 'expert',
                    ])->native(false),


            ])
            ->columns(2),
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
                Select::make('level')
                ->options([
                    'Debutant' => 'Debutant',
                    'Intermédiaire' => 'Intermédiaire',
                    'expert' => 'expert',
                ])->native(false),


            ])
                ->columns(2),

            Repeater::make('comptes')
            ->schema([Select::make('compte')
                    ->options([
                        'Facebook' => 'Facebook',
                        'Twitter' => 'Twitter',
                        'Youtube' => 'Youtube',
                        'Tiktok' => 'Tiktok',
                        'Instagram' => 'Instagram',
                        'Dribbble' => 'Dribbble',
                        'Github' => 'Github',

                    ])->native(false),
                TextInput::make('lien')->url()->required(),


            ])
                ->columns(2)

            ]),
            ])


            ->statePath('data')
            ->model($this->record);
    }

    public function modifier()
    {

        $this->form->validate();

        $data= $this->form->getState();

        $this->record->update($data);

        $this->sendNotification();

    }

    public function getCountries()
    {
        try {
            $response = Http::get('https://restcountries.com/v3.1/all');

            $data = $response->json();



            // Filtrer les pays d'Afrique
            $africanCountries = array_filter($data, function ($country) {
                return isset($country['region']) && $country['region'] === 'Africa' && isset($country['flags']['png']);
            });



            // Mapper les données pour récupérer le nom, le code et le drapeau de chaque pays
            $formattedCountries = [];
            foreach ($africanCountries as $country) {
                $formattedCountries[]= $country['name']['common'];
            }

            return  $formattedCountries;
        } catch (\Exception $e) {
            // Gérer l'erreur
           // return response()->json([], 500);
        }
    }

    public function dateAnne()
    {

        $date = [];

        for ($i = 1990; $i <= date('Y'); $i++) {
            # code...
            $date[] = $i;
        };
        return $date;
    }

    protected function sendNotification(): void
    {
        Notification::make()
            ->success()
            ->title('Vos modifications ont été prises en compte')
            ->send();
            //->sendToDatabase(auth()->user());
    }


}
