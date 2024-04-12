<x-filament-panels::page>

    <x-filament::card>
        <div class="grid grid-cols-1 px-6 py-4 md:grid-cols-2 ">
            <p class="mb-2 text-lg text-gray-800 font-inter dark:text-gray-200">Commande
                #{{$record->mission_numero}}
            </p>
            <p class="mb-2 text-lg "> <span class="max-w-md text-gray-600 dark:text-gray-300">Mission :</span>
                <span class="text-gray-800 truncate break-before-auto dark:text-gray-200">{{$record->title}}</span>
            </p>
            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de creation : {{$record->created_at}}
            </p>
            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de livraison :
                <span class="text-green-600">{{$record->feedbackmission->delai_livraison_estimee?->formatLocalized('%e
                    %B %G')}}</span>
            </p>

            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Paiement :
                @if($record->transaction?->status=='completed')
                <span class="font-bold text-green-600">Reussie</span>
                @elseif ($record->transaction?->status=='pending')
                <span class="font-bold text-blue-600">En attente</span>
                @elseif($record->transaction?->status=='failed')
                <span class="font-bold text-red-600">Echouer</span>
                @else
                <span class="font-bold text-blue-600">En attente</span>
                @endif
            </p>
            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Versement au freelance :

                @if($record->missionAccept->is_paid !=null)

                <span class="text-green-500 px-1.5 py-0.5 rounded-lg ">{{$record->missionAccept->is_paid->formatLocalized('%e
                    %B %G')}}</span>
                @else
                <span class="text-red-300 px-1.5 py-0.5 rounded-lg ">en Attente</span>
                @endif


            </p>
            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">statut :
                @if ($record->feedbackmission->etat=='Livré')
                <span class="font-bold text-green-600">{{$record->feedbackmission->etat}}</span>
                @else
                <span class="font-bold text-yellow-200">{{$record->feedbackmission->etat}}</span>
                @endif

            </p>

            <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Progression : <span
                    class="font-bold text-green-600">{{$record->progress}} %</span>
            </p>


        </div>

        <!-- Freelance lié à la order -->
        <div class="px-6 py-4 border-t border-gray-200">
            <p class="mb-2 text-lg text-gray-800 dark:text-gray-100">Client </p>
            <div class="flex items-center">
                @if (!empty($record->user->profile_photo_path))
                <img class="w-12 h-12 rounded-full"
                    src="{{Storage::disk('local')->url($record->user->profile_photo_path) }}" alt="">
                @else
                <img class="w-12 h-12 rounded-full" src="{{ $record->user->profile_photo_url }}" alt="">
                @endif
                <div class="ml-4">
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{$record->user->name}}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        {{$record->user->email}}</p>
                </div>
            </div>
        </div>
        <div class="px-6 py-4 border-t border-gray-200">
            <p class="mb-2 text-lg text-gray-800 dark:text-gray-100">Freelance </p>
            <div class="flex items-center">
                @if (!empty($record->missionAccept->freelance->user->profile_photo_path))
                <img class="w-12 h-12 rounded-full"
                    src="{{Storage::disk('local')->url($record->missionAccept->freelance->user->profile_photo_path) }}"
                    alt="">
                @else
                <img class="w-12 h-12 rounded-full" src="{{ $record->missionAccept->freelance->user->profile_photo_url }}"
                    alt="">
                @endif
                <div class="ml-4">
                    <p class="text-sm text-gray-600 dark:text-gray-300">{{$record->missionAccept->freelance->user->name}}</p>
                    <p class="text-sm text-gray-600 dark:text-gray-300">
                        {{$record->missionAccept->freelance->user->email}}</p>
                </div>
            </div>
        </div>



    </x-filament::card>

    <x-filament::card>
        <form wire:submit.prevent="submit" class="space-y-6 ">



            @if($record->missionAccept->is_paid =='' && $record->is_paid !=null && $record->feedbackmission->etat=='Livré')
            <x-filament::button type="submit" form="submit" class="align-right">
                Debloquer le paiement
            </x-filament::button>
            @else


            @endif

            @if($record->feedbackmission->etat=='Livré')

          <x-filament::modal width="2xl" id="feedback">
            <x-slot name="trigger">
                <x-filament::button>
                    Ajouter un feedback
                </x-filament::button>
            </x-slot>
            {{$this->form}}

            <div>
            <x-filament::button  wire:click='addFeedback' class="align-right">
                Ajouter un feedback
            </x-filament::button>
            </div>
        </x-filament::modal>

            @endif

        </form>
    </x-filament::card>

    <x-filament-actions::modals />

</x-filament-panels::page>
