<x-filament-panels::page>


<form wire:submit.prevent='verify'>


    <x-filament::section>
        <x-slot name="heading">
            User details
        </x-slot>

        <div>
            <x-filament::input.wrapper>
                <x-filament::input.select wire:model.live="proposed_price">

                @foreach ($custom as $item)
                    <option value="{{$item->id}}">{{$item->proposal->proposed_price}}$- {{$item->user->name}}</option>
                @endforeach
                </x-filament::input.select>
            </x-filament::input.wrapper>
        </div>
    </x-filament::section>
</form>
</x-filament-panels::page>
