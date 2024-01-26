<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\ServiceResourceData;
use App\Models\Service;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\Storage;

class ServiceFreelance extends Controller
{
    //


    public function show()
    {
        $services=auth()->user()->freelance->services;
        return Inertia::render('Freelance/Service/Liste',[
            'services'=>ServiceResourceData::collection($services)
        ]);
    }
    public function create()
    {
        return Inertia::render('Freelance/Service/Create');
    }
    public function edit($service_numero)
    {

        $service=Service::where('service_numero', $service_numero)
        ->where('freelance_id',auth()->user()->freelance->id)
        ->first();

        if($service == null)
        {
            return redirect()->back();
        }

        return Inertia::render('Freelance/Service/Edit',
        ['service' => ServiceResourceData::make($service)]);
    }
    public function AddLevel()
    {
        return Inertia::render('Freelance/Service/AddLevel');
    }

    public function removeFileService(Request $request)
    {


        $request->validate([
            'service_id' => 'required', // Valide que l'ID de la mission est présent
            'file_index' => 'required', // Valide que l'index du fichier à supprimer est présent
        ]);

        $service = Service::findOrFail($request->service_id);


        try {
            if (isset($service->files[$request->file_index])) {


                $filesTo=$service->files;

                $filePath = $filesTo[$request->file_index];


                if (Storage::disk('public')->exists($filePath)) {
                    Storage::disk('public')->delete($filePath); // Supprime le fichier du stockage

                    unset($filesTo[$request->file_index]); // Supprime le chemin du fichier de la liste des fichiers de la mission



                    $service->update(['files' => $filesTo]);
                    //$service->save(); // Enregistre les modifications dans la base de données

                    // return "Fichier supprimé avec succès de la mission.";
                }else{
                    return redirect()->back()->withErrors([
                        'message' => "le chemin du fichier n'existe plus"
                    ]);


                }
            }else{
                return redirect()->back()->withErrors([
                    'message' => 'ups, there was an error'
                ]);

            }
        } catch (\Exception $e) {

            return redirect()->back()->withErrors([
                'message' => 'ups, there was an error'
                ]);
        }

    }

    public function createTion(Request $request)
    {

       // dd($request->basic_support);
        $request->validate([
            'title'=> 'required',
            'tag'=> 'required',
            'basic_price' => 'required|numeric',
            'basic_revision' => 'required',
            //'need_service' => 'required',
            'sub_categorie' => 'required',
            'description' => 'required',
            'files'=> 'required',
            //'example'=> 'required',
            //'description_example' => 'required',
            'category_id' => 'required',
            //'sub_categorie' => 'required',
            //'video_url' => 'required',
           // 'basic_support '=> 'required',
            'basic_delivery_time' => 'required',
            'delivery_time_unit'=> 'required',
            ]);


        $filesPaths = [];
        $filesPathsExample=[];


        if ($request->hasFile('files')) {
            $files = $request->file('files');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('services', $fileName, 'public'); // Enregistrer le fichier dans 'public/missions' avec le nom d'origine
                $filesPaths[] = '/services/' . $fileName; // Enregistrer les nouveaux chemins des fichiers
            }
        }
        if ($request->hasFile('example')) {
            $files = $request->file('example');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('example', $fileName, 'public'); // Enregistrer le fichier dans 'public/missions' avec le nom d'origine
                $filesPathsExample[] = '/example/' . $fileName; // Enregistrer les nouveaux chemins des fichiers
            }
        }
        $slug = Str::of($request->title)->slug('-');

        Service::create([
            'title' => $request->title,
            'tag' =>  $request->tag,
            'basic_price' =>  $request->basic_price,
            'basic_revision' =>  $request->basic_revision,
            'need_service' =>  $request->need_service,
            'sub_category' =>  $request->sub_category,
            'description' =>  $request->description,
            'files' =>  $filesPaths??null,
            'example'=>  [
                'image'=> $filesPathsExample??null,
                'description'=>$request->description_example,
                ],
            'category_id' =>  $request->category_id,
            'sub_category' =>  $request->sub_categorie,
            'video_url' =>  $request->video_url,
            'basic_support' =>  $request->basic_support,
            'basic_delivery_time' =>  $request->basic_delivery_time,
            'delivery_time_unit' => $request->delivery_time_unit,
            'freelance_id' => auth()->user()->freelance->id,
            ]);



    }

    public function addFiles(Request $request)
    {

        $service = Service::findOrFail($request->service_id);

        $filesPaths = $service->files ?? []; // Récupération des anciens chemins des fichiers

        if ($request->hasFile('files')) {
            $files = $request->file('files');

            foreach ($files as $file) {
                $fileName = $file->getClientOriginalName(); // Récupérer le nom original du fichier
                $path = $file->storeAs('services', $fileName, 'public'); // Enregistrer le fichier dans 'public/missions' avec le nom d'origine
                $filesPaths[] = '/services/' . $fileName; // Enregistrer les nouveaux chemins des fichiers
            }
        }


        $service->update(['files' => $filesPaths]);
    }

    public function publishService(Request $request)
    {

        $service = Service::FindOrFail($request->id);
        $service->is_publish = !$service->is_publish;
        $service->save();

    }

    public function editService(Request $request)
    {
       // dd($request->all());

       try{


            $service = Service::FindOrFail($request->service_id);

            $service->update($request->all());

       }catch(\Exception $e){

            return redirect()->back()->withErrors([
                'message' => $e->getMessage(),
            ]);

       }


    }

}
