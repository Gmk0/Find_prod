<?php

namespace App\Filament\Freelance\Resources\MissionResource\Pages;

use App\Filament\Freelance\Resources\MissionResource;
use App\Models\Mission;
use App\Models\MissionResponse;
use Filament\Actions\Action;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\MarkdownEditor;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Concerns\InteractsWithForms;
use Filament\Forms\Contracts\HasForms;
use Filament\Forms\Form;
use Filament\Infolists\Components\Grid;
use Filament\Resources\Pages\EditRecord;
use Filament\Resources\Pages\Page;
use Filament\Infolists\Concerns\InteractsWithInfolists;
use Filament\Infolists\Contracts\HasInfolists;
use Filament\Infolists\Infolist;
use Filament\Infolists\Components\TextEntry;
use Filament\Infolists\Components\Section;
use Filament\Notifications\Notification;
use Filament\Actions\Concerns\InteractsWithActions;
use Filament\Actions\Contracts\HasActions;

class PostulerMission extends Page implements HasInfolists,HasForms, HasActions
{
    use InteractsWithInfolists;
    use InteractsWithForms;


    use InteractsWithActions;
    protected static string $resource = MissionResource::class;

    public ?array $data;

    public ?array $dataTwo;

    protected $listeners=['refresh'=> '$refresh'];

    protected static string $view = 'filament.freelance.resources.mission-resource.pages.postuler-mission';


    public Mission $record;

    public $response =null;
    public $otherMission= null;
    public function mount($record)
    {
        //dd($record);
        $this->record=$record;


        $response=MissionResponse::where('freelance_id',auth()->user()->freelance->id)
        ->where('mission_id',$this->record->id)->first();

        $this->otherMission=Mission::all();

        if($response!=null)
        {
            $this->response=$response;

            $this->postulerForm->fill(['postuler'=>$response->content]);



        }else{
            $this->postulerForm->fill();

        }

       //dd($response);


        $this->fichierForm->fill($this->record->toArray());




        //$this->missionINfo->fill($this->record->toArray());


    }

    public function missionINfo(Infolist $infolist): Infolist
    {
        return $infolist
            ->record($this->record)
            ->schema([
            Section::make('Information sur la mission')
            ->description('')
            ->schema([

                Grid::make('2')->schema([
                    TextEntry::make('title'),
                    TextEntry::make('budget')
                        ->money('usd')
                    ]),

                TextEntry::make('description'),
                TextEntry::make('exigences'),

                Grid::make('2')->schema([
                    TextEntry::make('begin_mission')->label('Debut'),
                    TextEntry::make('end_mission')->label('fin')
                ]),


            ])
                // ...
            ]);
    }

    public function fichierForm(Form $form): Form
    {
        return $form->schema([
            FileUpload::make('files')
            ])->disabled()
            ->statePath('data')
            ->model($this->record);

    }

    protected function getForms(): array
    {
        return [
            'postulerForm',
            'fichierForm',
        ];
    }

    public function postulerForm(Form $form): Form
    {
        return $form->schema([
            MarkdownEditor::make('postuler')
            ->required(),
        ])
            ->statePath('dataTwo');
           // ->model($this->record);
    }

    public function effacerProposition()
    {

         $this->response->delete();
         return redirect()->back();

    }

    public function annulerAction(): Action
    {
        return Action::make('annuler')
        ->label('Annuler')
        ->requiresConfirmation()
            ->modalHeading('Annuler la proposition')
            ->modalDescription('Êtes-vous sûr de vouloir Annuler votre proposition .')
            ->modalSubmitActionLabel('Oui, Annuler')
            ->color('danger')
            ->modalIcon('heroicon-o-pencil')
            ->modalIconColor('danger')
            ->action(function (array $arguments) {
                $order = MissionResponse::find($arguments['id']);

            $this->deleteAction($order);



            });
    }
    public function deleteAction(MissionResponse $response){

        $response->delete();



        return $this->redirect(route('filament.freelance.resources.missions.index'),true);

    }
    public function postuler()
    {

        $this->postulerForm->validate();

        $data= $this->postulerForm->getState();



            $missionRespone=new MissionResponse();
            $missionRespone->freelance_id =auth()->user()->freelance->id;
            $missionRespone->content=$data['postuler'];
            $missionRespone->budget=$this->record->budget;
            $missionRespone->mission_id=$this->record->id;

            $missionRespone->save();

            $missionRespone->notifyUser();



            $this->sendNotification();


        $this->dispatch('refresh');
    }

    public function changerPost()
    {

        $this->postulerForm->validate();

        $data = $this->postulerForm->getState();

          $this->response->update(['body'=>$data['postuler']]);

           Notification::make()
            ->success()
            ->title('Modification reuissie')
            ->send();

        $this->dispatch('refresh');

    }
    protected function sendNotification(): void
    {
        Notification::make()
            ->success()
            ->title('Votre proposition  a éte bien envoyer')
            ->send()
            ->sendToDatabase($this->record->user);


    }


}
