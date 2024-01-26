<x-filament-panels::page>

<x-filament::card>
   <div>

    <div class="grid grid-cols-1 gap-3 px-6 py-4 md:grid-cols-2 ">
        <p class="mb-2 text-lg text-gray-800 font-inter dark:text-gray-200">Mission #{{$record->mission->mission_numero}}
        </p>
        <p class="mb-2 text-lg text-gray-800 dark:text-gray-200">Titre : {{$record->mission->title}}</p>
        <p class="text-base text-gray-600 dark:text-gray-300">Date de debut : {{$record->mission->begin_mission->format('d F, Y')}}
        </p>
        <p class="text-base text-gray-600 dark:text-gray-300">Délai de livraison :
            {{$record->mission->end_mission->format('d F, Y')}} </p>

        <p class="text-base text-gray-600 dark:text-gray-300">Paiement de la Mission :


            @if (isset($record->mission->is_paid))
            <span class="font-bold text-green-600">Payer</span>
            @else
            <span class="font-bold text-yellow-200">En attente</span>
            @endif
        </p>

        <p class="text-base text-gray-600 dark:text-gray-300">Versement au Freelance :


            @if ($record->mission->status =='completed')
            <span class="font-bold text-green-600">Paiement verser</span>
            @else
            <span class="font-bold text-yellow-200">En attente</span>
            @endif
        </p>

        <p class="text-base text-gray-600 dark:text-gray-300">statut :



            @if($record->mission->feedbackmission->etat =="En attente de traitement")
            <span class="text-yellow-200 px-1.5 py-0.5 rounded-lg ">En attente de traitement</span>
            @elseif ($record->mission->feedbackmission->etat =="Livré")
            <span class="text-green-500 px-1.5 py-0.5 rounded-lg ">Livré</span>

            @elseif ($record->mission->feedbackmission->etat =="En cours de préparation")
            <span class="text-yellow-200 px-1.5 py-0.5 rounded-lg ">En cours de préparation</span>
            @else
            <span class="bg-red-500 px-1.5 py-0.5 rounded-lg ">En transit</span>
            @endif
        </p>

        <p class="text-base text-gray-600 dark:text-gray-300">Progression : <span
                class="font-bold text-green-600">{{$record->mission->progress}} %</span>
        </p>


    </div>

    <!-- Freelance lié à la commande -->
    <div class="px-6 py-4 border-t border-gray-200">
        <p class="mb-2 text-lg text-gray-800 dark:text-gray-100">Client </p>
        <div class="flex items-center">
            @if (!empty($record->mission->user->profile_photo_path))
            <img class="w-12 h-12 rounded-full" src="{{Storage::disk('local')->url($record->mission->user->profile_photo_path) }}"
                alt="">
            @else
            <img class="w-12 h-12 rounded-full" src="{{ $record->mission->user->profile_photo_url }}" alt="">
            @endif
            <div class="ml-4">
                <p class="text-sm text-gray-600 dark:text-gray-300">{{$record->mission->user->name}}</p>
                <p class="text-sm text-gray-600 dark:text-gray-300">
                    {{$record->mission->user->email}}</p>
            </div>
        </div>
    </div>

    <div class="px-6 py-4 border-t border-gray-200">
        <p class="mb-2 text-lg text-gray-600 dark:text-gray-400">Description </p>
        <div class="flex items-center">

            <p class="text-sm text-gray-700 dark:text-gray-300">{{$record->mission->description}}</p>


        </div>
    </div>

    <div class="px-6 py-4 border-t border-gray-200">
        <p class="mb-2 text-lg text-gray-700 dark:text-gray-300">Fichier </p>
        @if(!empty($record->mission->files))
        <div>
            <div class="flex flex-col items-start justify-start py-4">
                <div class="flex items-start justify-between mt-4 space-x-2">
                    @foreach ($record->mission->files as $key => $value)
                    @php
                    $extension = pathinfo($value, PATHINFO_EXTENSION);
                    @endphp

                    @if (in_array($extension, ['jpg', 'jpeg', 'png', 'gif', 'bmp']))
                    <a href="{{ Storage::disk('local')->url($value) }}" download>
                        <img src="{{ Storage::disk('local')->url($value) }}" alt="Nom du produit"
                            class="w-24 h-full border cursor-pointer xl:w-24 2xl:w-28 hover:opacity-80">
                    </a>

                    @else
                    <a class="px-3 text-gray-800" href="{{ Storage::disk('local')->url($value) }}" target="_blank">
                        {{ $value }}
                    </a>
                    @endif
                    @endforeach
                </div>
            </div>

        </div>
        @else
        <p>Pas de fichier inclus</p>

        @endif
    </div>

   </div>
</x-filament::card>

<x-filament::card>
    <form wire:submit.prevent="submit" class="space-y-6 ">

        {{ $this->form }}

        <div class="text-right">
            <x-filament::button type="submit" form="submit" class="align-right">
                Soumettre
            </x-filament::button>
        </div>
    </form>
</x-filament::card>

</x-filament-panels::page>
