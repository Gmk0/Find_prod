<?php

namespace App\Filament\Resources\AnnonceFreelanceResource\Pages;

use App\Filament\Resources\AnnonceFreelanceResource;
use App\Models\Freelance;
use Filament\Actions;
use Filament\Resources\Pages\CreateRecord;

class CreateAnnonceFreelance extends CreateRecord
{
    protected static string $resource = AnnonceFreelanceResource::class;

    protected function afterCreate(): void
    {
        $record = $this->getRecord();


        $isForAll = $record->type_freelance;


        if ($isForAll=='all') {
            $freelancesIds = Freelance::all()->pluck('id')->toArray();
            $record->freelances = $freelancesIds;
        }else if($isForAll == 'activer')
        {
            $freelancesIds = Freelance::where('status_compte','=','actif')->pluck('id')->toArray();
            $record->freelances = $freelancesIds;

        }else if($isForAll=='en attente')
        {
            $freelancesIds = Freelance::where('status_compte','=', 'en_attente')->pluck('id')->toArray();
            $record->freelances = $freelancesIds;

        }


        $record->update();

    }
}
