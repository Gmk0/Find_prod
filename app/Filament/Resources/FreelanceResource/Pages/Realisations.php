<?php

namespace App\Filament\Resources\FreelanceResource\Pages;

use App\Filament\Resources\FreelanceResource;
use App\Models\Freelance;
use App\Models\Realisation;
use Filament\Resources\Pages\Page;

class Realisations extends Page
{
    protected static string $resource = FreelanceResource::class;

    protected static string $view = 'filament.resources.freelance-resource.pages.realisations';
    public Freelance $record;
    public  $data=null;
    public function mount(): void
    {
        $this->data=$this->getRealisation();

        static::authorizeResourceAccess();
    }
    public function getRealisation()
    {
        $realisations=Realisation::where('user_id',$this->record->user_id)->get()->map(function($realisation){
            return [
                'description'=>$realisation->description,
                'media'=>$realisation->getMedia("*"),
                ];
        });

        return $realisations;


    }
}

