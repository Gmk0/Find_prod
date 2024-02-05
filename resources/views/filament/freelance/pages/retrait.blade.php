<x-filament-panels::page>

<form wire:submit.prevent='retrait'>

    {{$this->form}}


    <div style="margin-top: 20px;">

        @if(auth()->user()->freelance->solde == 0)

        <x-filament::button icon="heroicon-m-pencil-square" type="submit" form="submit" class="align-center">

            <span>Retrait <span wire:loading>...</span></span>

        </x-filament::button>
        @else
        <x-filament::button icon="heroicon-m-pencil-square" disabled type="button" form="submit" class="align-center">

            <span>Retrait indisponible </span>

        </x-filament::button>

        @endif

    </div>
</form>
</x-filament-panels::page>
