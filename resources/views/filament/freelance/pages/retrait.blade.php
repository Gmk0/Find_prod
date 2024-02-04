<x-filament-panels::page>

<form wire:submit.prevent='verify'>

    {{$this->form}}


    <div style="margin-top: 20px;">

        <x-filament::button icon="heroicon-m-pencil-square" type="submit" form="submit" class="align-center">

            <span>Retrait <span wire:loading>...</span></span>

        </x-filament::button>
    </div>
</form>
</x-filament-panels::page>
