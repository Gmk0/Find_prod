<x-filament-panels::page>


    <form wire:submit.prevent='verify'>

        {{$this->form}}

        <div class="margin-top: 20px;">

       <pre>{{ json_encode($response, JSON_PRETTY_PRINT) }}</pre>
        </div>

        <div style="margin-top: 20px;">

            <x-filament::button icon="heroicon-m-pencil-square" type="submit" form="submit" class="align-center">

                <span>Modifier <span wire:loading>...</span></span>

            </x-filament::button>
        </div>
    </form>

</x-filament-panels::page>
