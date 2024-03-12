<x-filament-panels::page>

<form wire:submit.prevent='retrait'>

    {{$this->form}}

    @empty(!$errors)
    @foreach ($errors as $error)
       <p class="mt-4 text-lg text-red-600"> {{$error}}</p>
    @endforeach
    @endempty


    <div style="margin-top: 20px;">

        @if(auth()->user()->freelance->solde  != 0)

        <x-filament::button
        icon="heroicon-m-pencil-square"
        type="submit"
        wire:loading.attr="disabled"
        icon-position="after"
         class="align-center">

            Retrait
            <span wire:loading wire:target='retrait'> en cours...</span>

        </x-filament::button>
        @else
        <x-filament::button icon="heroicon-m-pencil-square"
         disabled type="button" form="submit" class="align-center">

            <span>Retrait indisponible </span>

        </x-filament::button>

        @endif

    </div>
</form>
</x-filament-panels::page>
