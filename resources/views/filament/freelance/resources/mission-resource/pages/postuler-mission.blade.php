<x-filament-panels::page>


@if($response !=null)
<div class="p-4 text-orange-700 bg-orange-100 border-l-4 border-orange-500" role="alert">
    <p class="font-bold">Message</p>
    <p>Vous avez deja postuler a cette mission.</p>
</div>

@endif


{{$this->missionINfo}}

{{$this->fichierForm}}






<form wire:submit.prevent='postuler'>

    {{$this->postulerForm}}

    @if($response !=null)

    <div class="flex gap-6 p-4 mt-4 text-center">
        <x-filament::button wire:click='changerPost()' type='button' class="align-center">
            <span>Changer<span>


        </x-filament::button>

        {{ ($this->annulerAction)(['id' => $response->id]) }}
    </div>


    @else
    <div class="p-4 mt-4 text-center">
        <x-filament::button type="submit" form="submit" class="align-center">
            Postuler <span wire:loading wire:target='postuler'>.....</span>
        </x-filament::button>
    </div>


    @endif


</form>








</x-filament-panels::page>
