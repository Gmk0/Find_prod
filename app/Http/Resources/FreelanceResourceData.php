<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FreelanceResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nom' =>$this->nom,
            'prenom' => $this->prenom,
            'slugUser'=> $this->userSlug(),
            'identifiant' => $this->identifiant,
            'description' => $this->description,
            'experience' =>$this->experience,
            'nomComplet'=>$this->getNomCompletAttribute(),
            'nomUser'=>$this->user->name,
            'langue' =>$this->langue,
            'diplome' =>$this->diplome,
            'certificat' =>$this->certificat,
            'site' =>$this->site,
            'competences' =>$this->competences,
            'taux_journalier' =>$this->taux_journalier,
            'comptes' =>$this->comptes,
            'sub_categorie' =>$this->sub_categorie,
            'subCategories'=> $this->subcategories(),
            'localisation' =>$this->localisation,
            'user' =>UserResourceData::make($this->user),
            'category' =>$this->category->only('name'),
            'categorName'=> $this->category->name,
            'level' =>$this->level,
            'solde' =>$this->solde,
            'realisations'=> $this->user->realisations ? RealisationResource::collection($this->user->realisations) : null,
            'services' =>$this->services,
            'commande_encours'=> $this->countCommandeEncours(),
            'commande_realiser'=> $this->countCommandeFinis(),

            ];
    }
}
