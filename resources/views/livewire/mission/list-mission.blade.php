<div class="">

<div class="container lg:mx-auto">

<div>

    <div>
        {{--
        <div x-bind:class="isOpen ? 'fixed inset-0  top-0  bottom-0  overflow-hidden dark:bg-gray-900 bg-white z-50 p-4 transition-all duration-200 w-full' : 'w-full hidden md:flex mt-0'"
            class="">
            <div class="container px-4 mx-auto">

                <div class="mb-8">
                    <div class="grid -mx-2 md:grid-cols-4">
                        <div class="w-full px-2 mb-4">

                            <x-select wire:model.live.debounce.100ms="category" placeholder="Categories"
                                :async-data="route('api.services')" option-label="name" option-value="id" />


                        </div>
                        <div class="w-full gap-2 px-2 mb-4">

                            <x-select placeholder="Prix" wire:model.live.debounce.100ms="price_range">

                                <x-select.option label="10$-100$" value="10-100" />
                                <x-select.option label="100$-500$" value="100-500" />
                                <x-select.option label="500$ plus" value="500-10000" />
                            </x-select>
                        </div>
                        <div class="w-full gap-2 px-2 mb-4">
                            <x-datetime-picker without-time='true' placeholder="Date debut"
                                wire:model.live="dateDebut" />
                        </div>
                        <div class="w-full gap-2 px-2 mb-4">

                            <x-select placeholder="Trier par" wire:model.live.debounce.100ms="trie">

                                <x-select.option label="Budget ascendant" value="budget-asc" />
                                <x-select.option label="Budget Descendant" value="budget-desc" />
                                <x-select.option label="Date debut ascendant" value="begin_mission-asc" />
                                <x-select.option label="Date debu Descendant" value="begin_mission-desc" />


                            </x-select>
                        </div>


                    </div>
                    <div class="flex gap-4 md:hidden">

                        <button x-on:click="isOpen=!isOpen"
                            class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true">
                            Resultat ({{$count}})
                        </button>

                        <x-button @click="isOpen=false" label="Fermer" />




                        {{--
                        <x-button label="Resultat ({{$count}})" @click="isOpen=false" />


                    </div>
                </div>
            </div>

        </div>
        --}}


        <button @click="isOpen=!isOpen" class="flex pl-3 no-underline dark:text-white md:hidden hover:text-amber-600"
            href="#">
            <svg class="w-8 fill-current hover:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24">
                <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
            </svg> <span>
                filtre
            </span>
        </button>

    </div>

</div>


<div>
    <div class="flex items-center justify-center">

        <div class="flex items-center justify-center p-2">
            <div wire:loading.delay class="spinners"></div>
        </div>

    </div>

</div>
<div class="!grid !grid-cols-3 gap-4 px-6 mt-4 lg:mt-2 lg:px-0 sm:gap-5 lg:gap-6">

    @forelse($projets as $projet)


    <div class="flex-row card">
        <img class="object-cover object-center w-full bg-center bg-cover rounded-t-lg h-52 shrink-0 lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
            src="{{ asset('images/illustrations/missionF.svg') }}" alt="image" />
        <div class="flex flex-col w-full px-4 py-3 grow sm:px-5">
            <div class="flex items-center justify-between">
                <a class="text-xs+ text-info" href="#">{{$projet->category->name}}</a>
                <div class="-mr-1.5 flex space-x-1">
                    <button
                        class="hidden p-0 rounded-full btn2 h-7 w-7 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-4.5 w-4.5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                        </svg>
                    </button>


                </div>
            </div>
            <div>
                <a href=""
                    class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
                    {{$projet->title}}</a>
            </div>
            <p x-data={showMore:false} class="mt-1 line-clamp-3">

                <template x-if="!showMore">
                    <p class="">{{ \Illuminate\Support\Str::limit($projet->description, 100) }}</p>

                </template>
                <template x-if="showMore">
                    <p>{{ $projet->description }}</p>

                </template>

                @if(mb_strlen($projet->description) > 100)
            <div>
                <button @click="showMore = !showMore">
                    <span x-show="showMore" class="text-blue-600">Lire moins</span>
                    <span x-show="!showMore" class="text-blue-600">Lire la suite</span>
                </button>

            </div>
            @endif





            </p>
            <div class="mt-4 text-gray-800">
                {{$projet->budget}} $

            </div>
            <div class="grow">
                <div class="flex items-center mt-2 text-xs">
                    <a href="#" class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100">
                        <div class="w-6 h-6 avatar">
                            @if (!empty(Auth::user()->profile_photo_path))
                            <img class="object-cover rounded-full"
                                src="{{Storage::disk('local')->url($projet->user->profile_photo_path) }}" alt="">
                            @else
                            <img class="rounded-full " src="{{$projet->user->profile_photo_url }}" alt="">
                            @endif
                        </div>
                        <span class="line-clamp-1">{{$projet->user->name}}</span>
                    </a>
                    <div class="self-stretch w-px mx-3 my-1 bg-slate-200 dark:bg-navy-500"></div>
                    <span class="shrink-0 text-slate-400 dark:text-navy-300">{{$projet->created_at->formatLocalized('%e
                        %B %G')}}
                    </span>
                </div>
            </div>

            <div class="flex justify-end mt-1">
                <a href="route('freelance.projet.view',[$projet->mission_numero])"
                    class="btn2 px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                    voir
                </a>
            </div>
        </div>
    </div>
    <div class="hidden p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
        <h3 class="mb-2 text-lg font-bold text-gray-800">{{$projet->title}}</h3>
        <p class="mb-2 text-gray-600 dark:text-gray-200">{{$projet->description}}</p>

        <p class="mb-2 text-gray-600 dark:text-gray-300">Budget: <span
                class="font-bold text-green-600">{{$projet->budget()}}</span></p>

        <p class="mb-2 text-gray-600 dark:text-gray-300">Echance: <span>Du {{$projet->begin_mission->format('d
                F,
                Y')}} au {{$projet->end_mission->format('d F,
                Y')}}</span></p>
        <div class="flex justify-between">
            <span class="text-gray-500 ">Client <span>{{$projet->user->name}}</span></span>
            @if($projet->status=="en cours")
            <span class="font-bold text-yellow-500 ">Plus disponible</span>
            @endif
            @if($projet->status=="pending")
            <span class="font-bold text-green-500 ">Disponible</span>
            @endif
        </div>
        <div class="flex justify-between mt-4">
            {{--<x-button href="" primary label="voir" />--}}



        </div>
    </div>
    @empty

    <div class="py-12 text-center text-gray-300">
        <h1 class="text-xl text-gray-800">Pas de mission pour l'instant dans votre categorie</h1>
    </div>
    @endforelse

    <!-- Ajouter d'autres projets ici -->
</div>

<div>

    {{$projets->links()}}
</div>
</div>
</div>
