<x-filament-panels::page>

  <div class="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
    @foreach ($data as $item)
    <div class="overflow-hidden rounded-lg shadow-md">
        <p class="px-4 py-2 dark:text-gray-200">{{$item['description']}}</p>
        <div class="grid items-center justify-center grid-cols-3 gap-2 px-4 py-2">
            @foreach ($item['media'] as $value)
            <div class="w-48 h-48">
                <img class="object-cover w-full h-full" src="{{$value['original_url']}}" alt="{{$value['name']}}" />
            </div>
            @endforeach
        </div>
    </div>
    @endforeach
</div>

</x-filament-panels::page>
