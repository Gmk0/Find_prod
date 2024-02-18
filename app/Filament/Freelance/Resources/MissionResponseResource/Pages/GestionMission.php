<?php

namespace App\Filament\Freelance\Resources\MissionResponseResource\Pages;

use App\Filament\Freelance\Resources\MissionResponseResource;
use App\Models\MissionResponse;
use Filament\Resources\Pages\Page;

use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Notifications\Notification;

use Filament\Forms\Components\{DateTimePicker, TextInput, RichEditor, DatePicker, MarkdownEditor, Select, Toggle, FileUpload, Grid, Section};
use Filament\Resources\Pages\EditRecord;


class GestionMission extends Page  implements HasForms
{
    protected static string $resource = MissionResponseResource::class;

    protected static string $view = 'filament.freelance.resources.mission-response-resource.pages.gestion-mission';


    public MissionResponse $record;
    public ?array $data = [];

    public function mount(): void
    {
        // static::authorizeResourceAccess();
        $this->form->fill([
            'progress' => $this->record->mission->progress,
            'etat' => $this->record->mission->feedbackmission->etat,
            'delai_livraison_estimee' => $this->record->mission->feedbackmission->delai_livraison_estimee
        ]);
    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
                Grid::make('3')->schema([
                    Select::make('etat')
                    ->options([
                        'En attente de traitement' => 'En attente de traitement',
                        'En cours de préparation' => 'En cours de préparation',
                        'En transit' => 'En transit',
                        'Livré' => 'Livré',
                    ])->required()->native(false),
                    DatePicker::make('delai_livraison_estimee')->required()->label('Delai de livrasion')->native(false),
                    Select::make('progress')
                    ->options([
                        0 => '0 %', '20' => '20 %', '30' => '30 %', '40' => '40 %', '50' => '50 %', '60' => '60 %', '70' => '70 %', '80' => '80 %', '90' => '90 %', '100' => '100 %',
                    ])->live(),
                ]),


            ])
            ->statePath('data')
            ->model($this->record);
    }

    public function submit()
    {

        $this->form->validate();
        try {


            $data = $this->form->getState();
            $mission= $this->record->mission;
            $mission->update(['progress' => $data['progress']]);
            $feedback = $this->record->mission->feedbackmission;
            $feedback->update(['etat' => $data['etat'], 'delai_livraison_estimee' => $data['delai_livraison_estimee']]);
            $this->sendNotification();
            $this->sendNotificationToclient($this->record->mission->user);
        } catch (\Exception $e) {

            Notification::make()
                ->danger()
                ->title($e->getMessage())
                ->send();
                //->sendToDatabase(auth()->user());
        }



        // dd($data['feedback']);
    }

    protected function sendNotification(): void
    {
        Notification::make()
            ->success()
            ->title("Etat d'avancement soumis avec success")
            ->send();
           // ->sendToDatabase($user);
    }

    protected function sendNotificationToclient($user): void
    {
        Notification::make()
            ->success()
            ->title("Avacement de votre Projet")
            ->body('Avacement de votre Projet')
            ->send()
            ->sendToDatabase($user);
    }
}
