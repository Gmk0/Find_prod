<?php

namespace App\Livewire;

use App\Models\User;
use Filament\Forms\Components\FileUpload;
use Livewire\Component;
use Jeffgreco13\FilamentBreezy\Livewire\MyProfileComponent;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Notifications\Notification;

class AuthFreelance extends MyProfileComponent
{
    protected string $view = "livewire.auth-freelance";




    public ?array $data;
    public $user;

    public function mount()
    {
        $this->user=auth()->user();
        $this->form->fill([
            'name' => auth()->user()->name,
            'email' => auth()->user()->email,
            'phone' => auth()->user()->phone,
            'profile_photo_path'=> auth()->user()->profile_photo_path
            ]);

    }

    public function form(Form $form): Form
    {
        return $form
            ->schema([
            FileUpload::make('profile_photo_path')
            ->image()
             ->directory('profile-photos')
                ->imageEditor()
                ->imagePreviewHeight('100'),
            TextInput::make('name')
            ->required(),
            TextInput::make('email')
            ->email()
            ->disabled()
            ->required(),
            TextInput::make('phone')
            ->tel()
            ->required()
            ])
            ->statePath('data')
            ->model(User::class);;
    }

    public function submit(): void
    {
        $data = $this->form->getState();

        //dd($data);
        $this->user->update($data);
        $this->sendNotification();
    }

    protected function sendNotification(): void
    {

        Notification::make()
            ->success()
            ->title(__('filament-breezy::default.profile.personal_info.notify'))
            ->send()
            ->sendToDatabase(auth()->user());
    }
}
