<?php

namespace App\Http\Controllers\Freelance;

use App\Http\Controllers\Controller;
use App\Http\Resources\RealisationResource;
use App\Models\Freelance;
use App\Models\Realisation;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Inertia\Inertia;

class ProfileFreelance extends Controller
{
    //


    public function show()
    {

        $freelance= auth()->user()->freelance;

        return Inertia::render('Freelance/Profile/Profile',['freelance'=>$freelance]);
    }

    public function realisationsAjout()
    {


        return Inertia::render(
            'Freelance/Profile/RealisationAdd'
        );
    }
    public function realisationsEdit($id)
    {

        $realisations = auth()->user()->realisations->where('id', $id);

        $realisationsWithMedia = $realisations->map(function ($realisation) {
            return [
                'id' => $realisation->id,
                'description' => $realisation->description,
                'media' => $realisation->getMedia('realisations')->map(function ($media) {
                    return [
                        'url' => $media->getUrl(),
                        'alt' => $media->name,
                    ];
                }),
            ];
        });



        return Inertia::render('Freelance/Profile/RealisationEdit',['realisations' => $realisationsWithMedia]);
    }

    public function realisations()
    {

        $realisations = auth()->user()->realisations;

        $realisationsWithMedia = $realisations->map(function ($realisation) {
            return [
                'id' => $realisation->id,
                'description' => $realisation->description,
                'media' => $realisation->getMedia('realisations')->map(function ($media) {
                    return [
                        'id' => $media->id,
                        'url' => $media->getUrl(),
                        'alt' => $media->name,
                    ];
                }),
            ];
        });
        return Inertia::render('Freelance/Profile/Realisations'
        ,['realisations' => $realisationsWithMedia]);
    }
    public function removeOneFile(Request $request)
    {
        try{

            $media =Realisation::find($request->realisation_id)->getMedia('*');


            $media[$request->media_id]->delete();

        }catch(\Exception $e){
           return  redirect()->back()->withErrors(['message'=>$e->getMessage()]);

        }

    }

    public function editRealisation(Request $request)
    {

        $request->validate(['description' => 'required']);
        try {

           DB::beginTransaction();
            $realisation = Realisation::find($request->id);
            $realisation->description=$realisation->description;
            $realisation->update();




            if ($request->file('image')) {



                $realisation->addMultipleMediaFromRequest(['image'])
                    ->each(function ($fileAdder) {
                        $fileAdder
                            ->toMediaCollection('realisations');
                    });
            }

            DB::commit();
        } catch (\Exception $e) {
            DB::rollBack();

          //  dd($e->getMessage());
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function addRealisation(Request $request)
    {

        $request->validate(['image' => 'required']);
        try{

            DB::beginTransaction();
            $realisation = Realisation::create([
                'description' => $request->description,
                'user_id' => auth()->user()->id,

            ]);

            if($request->file('image')) {

                $realisation->addMultipleMediaFromRequest(['image'])
                    ->each(function ($fileAdder) {
                    $fileAdder
                        ->toMediaCollection('realisations');
                    });


            }

            DB::commit();

        }catch (\Exception $e){
            DB::rollBack();
          return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }

    public function removeRealisation(Request $request)
    {



        $realisation=Realisation::FindOrFail($request->id)->delete();


    }

    public function addProfilePartOne(Request $request)
    {
        $request->validate([
            'nom' => 'required',
            'prenom' => 'required',
            'description' => 'required',
            'localisation.commune' => 'required',
            'localisation.ville' => 'required',
            'localisation.addresse' => 'required',
            'experience'=>'required',
            'id' => 'required',
        ]);


        try{


            $freelance = Freelance::find($request->id)
                ->update([
                    'nom' => $request->nom,
                    'nom' => $request->nom,
                    'prenom' => $request->prenom,
                    'description' => $request->description,
                    'localisation' => $request->localisation,
                    'experience'=>$request->experience,
                ]);

        }catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }



    }

    public function addCertification(Request $request)
    {
        $request->validate(['certifier'=>'required', 'delivrer'=>'required', 'annee'=>'required']);


        try{

        $freelance=auth()->user()->freelance;

        $data = $freelance->certificat;;
        $data[] = $request->all();


        $freelance->certificat = $data;

         $freelance->update();

          }catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);

        }

    }

    public function addEducation(Request $request)
    {
        $request->validate(['diplome' => '', 'universite' => 'required', 'annee' => 'required']);


        try {

            $freelance = auth()->user()->freelance;

            $data = $freelance->diplome;
            $data[] = $request->all();


            $freelance->diplome = $data;

            $freelance->update();
        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }


    public function removeElement(Request $request)
    {



        $element= $request->element;
        $index= $request->index;

        $freelance =auth()->user()->freelance;

          switch ($element) {

            case 'education':

                $data = $freelance->diplome->toArray();
                unset($data[$index]);
                $data = array_values($data);
                $freelance->diplome = $data;
                $freelance->update();
            break;
            case 'certification':

                $data = $freelance->certificat->toArray();
                unset($data[$index]);
                $data = array_values($data);
                $freelance->certificat = $data;
                $freelance->update();
            break;

            case 'competences':

                $data = $freelance->competences->toArray();
                unset($data[$index]);
                $data = array_values($data);
                $freelance->competences = $data;
                $freelance->update();
            break;
            case 'langue':
                $data = $freelance->langue->toArray();
                unset($data[$index]);
                $data = array_values($data);
                $freelance->langue = $data;
                $freelance->update();
                break;
            case 'comptes':
                $data = $freelance->comptes->toArray();
                unset($data[$index]);
                $data = array_values($data);
                $freelance->comptes = $data;
                $freelance->update();
                break;
            default:
            return redirect()->back()->withErrors(['message' =>'index introuvable']);
            break;


          }


    }


    public function editEducation(Request $request)
    {

        try {



            $key = $request->index;
            $freelance = auth()->user()->freelance;

            $freelance->diplome[$key]['diplome'] = $request->data['diplome'];
            $freelance->diplome[$key]['universite'] = $request->data['universite'];
            $freelance->diplome[$key]['annee'] = $request->data['annee'];
            $freelance->save();

        }catch(\Exception $e){
        return redirect()->back()->withErrors(['message' =>$e->getMessage()]);
        }
    }

    public function editCertification(Request $request)
    {
        try {



            $key = $request->index;
            $freelance = auth()->user()->freelance;

            $freelance->certificat[$key]['certifier'] = $request->data['certifier'];
            $freelance->certificat[$key]['delivrer'] = $request->data['delivrer'];
            $freelance->certificat[$key]['annee'] = $request->data['annee'];
            $freelance->save();
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function addCompetences(Request $request)
    {
        $request->validate(['skill' => 'required', 'level' => 'required']);


        try {

            $freelance = auth()->user()->freelance;

            $data = $freelance->competences;;
            $data[] = $request->all();
            $freelance->competences = $data;

            $freelance->update();
        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }

    public function editCompetences(Request $request)
    {

        $request->validate(['data.skill'=>'required', 'data.level' => 'required']);
        try {
            $key = $request->index;
            $freelance = auth()->user()->freelance;

            $freelance->competences[$key]['skill'] = $request->data['skill'];
            $freelance->competences[$key]['level'] = $request->data['level'];
            $freelance->save();
        } catch (\Exception $e) {
            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }

    public function addComptes(Request $request)
    {

        $request->validate(['compte' => 'required', 'lien' => 'required']);


        try {

            $freelance = auth()->user()->freelance;

            $data = $freelance->comptes;
            $data[] = $request->all();
            $freelance->comptes = $data;

            $freelance->update();
        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }

    }

    public function editComptes(Request $request)
    {

        $request->validate(['data.compte' => 'required', 'data.lien' => 'required']);
        try {
            $key = $request->index;
            $freelance = auth()->user()->freelance;

            $freelance->comptes[$key]['compte'] = $request->data['compte'];
            $freelance->comptes[$key]['lien'] = $request->data['lien'];
            $freelance->save();
        } catch (\Exception $e) {


            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function addLangue(Request $request)
    {

        $request->validate(['langue' => 'required', 'level' => 'required']);


        try {

            $freelance = auth()->user()->freelance;

            $data = $freelance->langue;
            $data[] = $request->all();
            $freelance->langue = $data;

            $freelance->update();
        } catch (\Exception $e) {

            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

    public function editLangue(Request $request)
    {

        $request->validate(['data.langue' => 'required', 'data.level' => 'required']);
        try {
            $key = $request->index;
            $freelance = auth()->user()->freelance;

            $freelance->langue[$key]['langue'] = $request->data['langue'];
            $freelance->langue[$key]['level'] = $request->data['level'];
            $freelance->save();
        } catch (\Exception $e) {


            return redirect()->back()->withErrors(['message' => $e->getMessage()]);
        }
    }

}
