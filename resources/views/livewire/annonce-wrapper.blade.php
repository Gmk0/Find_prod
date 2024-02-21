<div x-data="{toogle:true}" x-on:close='toogle=false'>

  <div x-show="toogle" x-cloak id="alert-additional-content-1"
    class="p-4 mb-4 text-{{$annonce->color}}-800 border border-{{$annonce->color}}-300 rounded-lg bg-{{$annonce->color}}-50 dark:bg-gray-800 dark:text-{{$annonce->color}}-400 dark:border-{{$annonce->color}}-800"
    role="alert">
    <div class="flex items-center gap-2">
        <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
            fill="currentColor" viewBox="0 0 20 20">
            <path
                d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
        </svg>
        <span class="sr-only">Info</span>
        <h3 class="text-lg px-2 font-medium">{{$annonce->title}}</h3>
    </div>
    <div class="mt-2 mb-4 text-sm">
        {{$annonce->body}}

    </div>
    <div class="flex gap-4">
        @empty(!$annonce->link)

        <x-filament::button a="{{$annonce->link}}" icon="heroicon-o-globe-alt"
          size="sm"
         icon-position="after"
            color="primary">
            voir plus
        </x-filament::button>
        @endempty


        <x-filament::button icon="heroicon-m-sparkles"
         wire:click="cacher()"
         outlined
         size="sm"
         icon-position="after"
         color="danger">
          ne plus afficher
        </x-filament::button>

    </div>
</div>

</div>
