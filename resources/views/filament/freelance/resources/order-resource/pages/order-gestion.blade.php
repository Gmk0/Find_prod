<x-filament-panels::page>


<x-filament::card>
    <div class="grid grid-cols-1 px-6 py-4 md:grid-cols-2 ">
        <p class="mb-2 text-lg text-gray-800 font-inter dark:text-gray-200">Commande
            #{{$record->order_numero}}
        </p>
        <p class="mb-2 text-lg "> <span class="text-gray-600 dark:text-gray-300">Service :</span>
            <span class="text-gray-800 dark:text-gray-200">{{$record->service->title}}</span>
        </p>
        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de commande : {{$record->created_at}}
        </p>
        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Date de livraison :
            <span class="text-green-600">{{$record->feedback->delai_livraison_estimee?->formatLocalized('%e
                %B %G')}}</span>
        </p>

        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Paiement :
            @if($record->status=='completed')
               <span class="font-bold text-green-600">Reussie</span>
            @elseif ($record->status=='pending')
            <span class="font-bold text-blue-600">En attente</span>
            @else
                <span class="font-bold text-red-600">Echouer</span>
            @endif
        </p>
        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">Versement Paiement :

            @if($record->is_paid !=null)

            <span class="text-green-500 px-1.5 py-0.5 rounded-lg ">{{$record->is_paid->formatLocalized('%e
                %B %G')}}</span>
            @else
            <span class="text-red-300 px-1.5 py-0.5 rounded-lg ">en Attente</span>
            @endif


        </p>
        <p class="mt-4 text-base text-gray-600 dark:text-gray-300">statut :
            @if ($record->feedback->etat=='Livré')
            <span class="font-bold text-green-600">{{$record->feedback->etat}}</span>
            @else
            <span class="font-bold text-yellow-200">{{$record->feedback->etat}}</span>
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
            <img class="w-12 h-12 rounded-full" src="{{Storage::disk('local')->url($record->user->profile_photo_path) }}"
                alt="">
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

    @if($record->feedback->etat=="Livré" && $record->progress==100)
    <div>
        <h1 class="mb-4 text-gray-800 dark:text-gray-200">Vous avez deja livrer (realiser) la commande</h1>

        <div class="mb-4">
            <h1 class="text-gray-800 dark:text-gray-200">Le Feedback du client</h1>
        </div>
        <div class="p-4 mb-4 bg-gray-100 rounded-lg dark:bg-gray-700">

            <p class="text-sm text-gray-700 md:text-base dark:text-gray-300">
                {{ $record->feedback->commentaires ?
                $record->feedback->commentaires : 'pas de commentaire' }}</p>

            <div class="flex items-center my-4">
                <svg class="w-4 h-4 mr-1 text-yellow-500 fill-current" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20">
                    <path
                        d="M10 14.155L4.284 17.84l.828-5.076L.898 7.865l5.059-.736L10 2l2.043 5.129 5.059.736-3.215 3.9.828 5.076z" />
                </svg>

                <span class="text-sm font-semibold text-gray-700 dark:text-gray-100">
                    ({{ $record->feedback->satisfaction ?
                    $record->feedback->satisfaction : 0 }})
                </span>
            </div>

            <div class="flex gap-4">

                <label>
                    <x-filament::input.checkbox wire:change='publisherComment()' wire:model="is_publish" />

                    <span>
                        Publier
                    </span>
                </label>

            </div>
        </div>


    </div>
    @endif

</x-filament::card>

<x-filament::card>
    <form wire:submit.prevent="submit" class="space-y-6 ">

        {{ $this->form }}

        @if($record->status !='failed')
        <div class="text-right">
            <x-filament::button type="submit" form="submit" class="align-right">
                Modifier
            </x-filament::button>
        </div>
        @else
        <div class="text-right">
            <x-filament::button disabled class="align-right">
                Le paiement a echoué
            </x-filament::button>
        </div>

        @endif

    </form>
</x-filament::card>


</x-filament-panels::page>
