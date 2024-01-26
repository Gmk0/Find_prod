<?php

namespace App\Http\Controllers\Web;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Category;


use Inertia\Inertia;
use App\Models\Freelance;
use App\Models\Service;
use App\Models\{SubCategory, Mission};
use Illuminate\Support\Facades\Request as RequestFacade;


class MissionController extends Controller
{
    //

    public function createMission()
    {

        return Inertia::render('Web/Mission/Create',['categories'=>Category::all()]);
    }


    public function storeMission(Request $request)
    {
        $request->validate([
            'title' => 'required',
            'description' => 'required',
            'budget' => 'required|numeric',
            'dateF' => 'required',
            'dateD' => 'required',
            'files.*' => 'mimes:jpeg,png,pdf,docx|max:2048', // Exemple de validation des fichiers
        ]);

        $filesPaths = [];

        if ($request->hasFile('image')) {
            $files = $request->file('image');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('missions', $fileName, 'public'); // Enregistrer le fichier dans le dossier 'storage/app/missions' avec le nom d'origine
                $filesPaths[] = $path; // Enregistrer les chemins des fichiers pour stockage dans la base de données
            }
        }


        $projet = Mission::create([
            'title' => $request->title,
            'category_id' => $request->category_id,
            'description' => $request->description,
            'files' => $filesPaths, // Sauvegarde des chemins des fichiers dans la base de données
            'budget' => $request->budget,
            'begin_mission' => $request->dateD,
            'end_mission' => $request->dateF,
            'exigences' => $request->exigence,
            'progress' => 0,
            'user_id' => auth()->id(),
        ]);

        // Si vous avez besoin de faire quelque chose d'autre avec les fichiers enregistrés, vous pouvez le faire ici


    }

}
