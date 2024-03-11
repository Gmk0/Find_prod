<?php

namespace App\Livewire;

use App\Models\Annonce;
use App\Models\AnnonceFreelance;
use Livewire\Component;

class AnnonceWrapper extends Component
{
    public AnnonceFreelance  $annonce;


    public function cacher()
    {
        try{
            $annonce = $this->annonce;

            $id = auth()->user()->freelance->id;

            // Convertir la chaîne JSON en tableau
            $freelances = $annonce->freelances;


            // Filtrer l'ID spécifique du tableau d'IDs de freelances
            $freelances = array_filter($freelances, function ($freelanceId) use ($id) {
                return $freelanceId != $id;
            });



            // Convertir le tableau en chaîne JSON
            $annonce->freelances = json_encode(array_values($freelances));


            // Enregistrer les modifications
            $annonce->update();


            $this->dispatch('close');

        }catch(\Exception $e)
        {


            error_log($e->getMessage());
            $this->dispatch('close');

        }

    }
    public function render()
    {
        return view('livewire.annonce-wrapper');
    }
}
