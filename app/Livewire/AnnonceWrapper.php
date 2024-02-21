<?php

namespace App\Livewire;

use App\Models\Annonce;
use Livewire\Component;

class AnnonceWrapper extends Component
{
    public  $annonce;

    public function mount($annonce)
    {
        $this->annonce;
    }
    public function cacher()
    {
        try{
            $annonce = $this->annonce;
            $id = auth()->user()->freelance->id;

            // Retirer un ID spécifique du tableau d'IDs de freelances
            $annonce->freelances = collect($annonce->freelances)->forget($id)->values()->toJson();

            // Enregistrer les modifications
            $annonce->save();

            $this->dispatch('close');

        }catch(\Exception $e)
        {
            dd($e->getMessage());

            $this->dispatch('close');

        }

    }
    public function render()
    {
        return view('livewire.annonce-wrapper');
    }
}
