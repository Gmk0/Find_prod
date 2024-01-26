<x-filament-panels::page>


<form wire:submit.prevent='modifier'>

    {{$this->form}}

    <div class="mt-4 text-center">
        <x-filament::button icon="heroicon-m-pencil-square"  type="submit" form="submit" class="align-center">

            <span>Modifier <span wire:loading>...</span></span>

        </x-filament::button>


    </div>

<form>


</x-filament-panels::page>
