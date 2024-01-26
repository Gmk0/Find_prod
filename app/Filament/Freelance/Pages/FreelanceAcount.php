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
    public function mount()
    {

        $this->record = auth()->user()->freelance;



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
                TextInput::make('site')
                ->required(),
                TextInput::make('taux_journalier')
                ->numeric()
                ->required(),

            ]),

            Grid::make('3')->schema([
                TextInput::make('localisation.ville')
                ->required(),
                TextInput::make('localisation.commune')
                ->required(),
                TextInput::make('localisation.addresse')
                ->required(),

            ]),



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
                TextInput::make('skill')->required(),
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

                    ])->native(false),
                TextInput::make('lien')->required(),


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
            ->title('Vos modifications ont ete pris en charge')
            ->send()
            ->sendToDatabase(auth()->user());
    }


}
