<template>
    <div>
          <div
                class="flex flex-col w-full mt-0 bg-red-400 messages main-content h-100vh chat-app" :class="isShowChatInfo && 'lg:mr-80'">
                <div
                    class="chat-header h-[61px] border-b border-slate-150 dark:border-navy-700 relative z-10 flex w-full shrink-0 items-center justify-between bg-white px-[calc(var(--margin-x)-.5rem)] shadow-sm transition-[padding,width] duration-[.25s] dark:bg-navy-800">
                    <div class="flex items-center space-x-5">
                        <div class="ml-1 h-7 w-7">
                            <button
                                class="menu-toggle ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-primary outline-none focus:outline-none dark:text-accent-light/80"
                                :class="layoutStore.isSidebarExpanded && 'active'"
                                @click="layoutStore.toogleRight()">
                                <span></span>
                                <span></span>
                                <span></span>
                            </button>
                        </div>
                        <!---->
                        <div @click="isShowChatInfo = true" x-show="activeChat?.name"
                            class="flex items-center space-x-4 cursor-pointer font-inter">

                            <template x-if="activeChat?.profile_path !== null">
                                <div class="avatar">
                                    <img class="rounded-full" :src="'/storage/' + activeChat?.profile_path" alt="avatar" />
                                </div>
                            </template>
                            <template x-else>
                                <div class="avatar">
                                    <img class="rounded-full" :src="activeChat?.profile_url" alt="avatar" />
                                </div>
                            </template>

                            <div>
                                <p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100" x-text="activeChat?.name">
                                </p>
                                <p x-text="activeChat?.last_time" class="mt-0.5 text-xs"></p>
                            </div>
                        </div>

                        <div @click="isShowChatInfo = true" x-show="!activeChat?.name"
                            class="flex items-center space-x-4 cursor-pointer font-inter">
                            <div>
                                <p class="font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                                    Conversation
                                </p>

                            </div>
                        </div>
                    </div>

                    <div class="flex items-center -mr-1">

                        <button
                            class="hidden p-0 rounded-full btn2 h-9 w-9 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                            </svg>
                        </button>
                        <button @click="isShowChatInfo = !isShowChatInfo"
                            :class="isShowChatInfo ? 'text-primary dark:text-accent-light' : 'text-slate-500 dark:text-navy-200'"
                            class="p-0 rounded-full btn2 h-9 w-9 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 sm:flex">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" stroke="currentColor"
                                stroke-width="1.5" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M9.25 21.167h5.5c4.584 0 6.417-1.834 6.417-6.417v-5.5c0-4.583-1.834-6.417-6.417-6.417h-5.5c-4.583 0-6.417 1.834-6.417 6.417v5.5c0 4.583 1.834 6.417 6.417 6.417ZM13.834 2.833v18.334" />
                            </svg>
                        </button>
                        <!--
                <div x-show="activeChat?.name">
                    <div x-data="usePopper({ placement: 'bottom-end', offset: 4 })" @click.outside="if (isShowPopper) isShowPopper = false"
                        class="inline-flex">
                        <button x-ref="popperRef" @click="isShowPopper = !isShowPopper"
                            class="p-0 rounded-full btn2 h-9 w-9 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                            </svg>
                        </button>

                        <div x-cloak x-ref="popperRoot" class="popper-root" :class="isShowPopper && 'show'">
                            <div
                                class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
                                <ul>


                                    <li>
                                        <a href="#"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-px" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
                                            </svg>
                                            <span>Block User</span></a>
                                    </li>
                                    <li>
                                        <a href="#" wire:click="$toggle('confirmModal')"
                                            class="flex items-center h-8 px-3 pr-8 space-x-3 font-medium tracking-wide transition-all outline-none text-error hover:bg-error/20 focus:bg-error/20">
                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                                stroke="currentColor" stroke-width="1.5">
                                                <path stroke-linecap="round" stroke-linejoin="round"
                                                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                            </svg>
                                            <span> Delete chat</span></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
                -->

                    </div>
                </div>

                <div class="grow overflow-y-auto bg-green-400 main-messages px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">

                </div>

                <!--



        <div :class="$store.breakpoints.smAndUp && 'scrollbar-sm'"
            class="grow overflow-y-auto main-messages px-[calc(var(--margin-x)-.5rem)] py-5 transition-all duration-[.25s]">


            <div x-show="messages !== null" x-transition:enter="transition-all duration-500 easy-in-out"
                x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="space-y-5">

                <div class="flex items-center mx-4 space-x-3">
                    <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                    <p>Pour plus de sécurité et votre protection, effectuez les paiements et les communications directement
                        sur FIND.</p>
                    <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                </div>
                @empty(!$messagesChat)
                @php
                $currentDate = null;
                $lastRejectedProposal = null;
                $lastRejectedMessage = null;
                $lastPendingProposal =null;
                $lastPendingMessage = null;

                @endphp
                @forelse ($messagesChat as $message)

                @if ($message->created_at->toDateString() !== $currentDate)



                <div class="flex items-center mx-4 space-x-3">
                    <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                    <p>{{ $message -> created_at -> format('l') }}</p>
                    <div class="flex-1 h-px bg-slate-200 dark:bg-navy-500"></div>
                </div>
                @php
                $currentDate = $message->created_at->toDateString();
                @endphp
                @endif


                <div
                    class="flex items-start {{auth()->id() == $message->sender_id ? 'justify-end':''}} space-x-2.5 sm:space-x-5">
                    <div class="avatar {{auth()->id() == $message->sender_id ? 'hidden':''}} ">
                        @component('components.user-photo',['user'=>$message->senderUser])

                        @endcomponent

                    </div>

                    <div class="flex flex-col items-start space-y-3.5">
                        <div class="max-w-lg {{ auth()->id() == $message->sender_id ? 'ml-4 md:ml-10' : 'mr-4 sm:mr-10' }}">
                            @if(!empty($message->body))


                            <div
                                class="p-3 break-normal {{ auth()->id() == $message->sender_id ? 'rounded-br-none bg-info/10 p-3 text-slate-700  dark:bg-accent dark:text-white' : 'rounded-bl-none dark:bg-navy-700 bg-navy-100 dark:text-navy-100' }} shadow-sm rounded-2xl">
                                <p class="max-w-full overflow-x-hidden ">{!! $message->body !!}</p>
                            </div>

                            @if ($message->service_id !== null)

                            <p class="mt-2 text-xs text-gray-500 dark:text-gray-400">Ce message est lié à un service :</p>

                            <div class="flex flex-col">
                                <div class="flex items-center p-3 bg-gray-200 rounded-lg shadow-sm dark:bg-navy-700 dark:text-navy-100">
                                                <img class="w-10 h-10 mr-2 rounded-lg" src="{{ Storage::disk('local')->url($message->service->files[0]) }}"
                                                    alt="Service Image">
                                                <a href="{{ route('ServicesViewOne', ['service_numero' => $message->service->service_numero, 'category' => $message->service->category->name]) }}"
                                                    class="truncate hover:text-amber-500 ">{{ $message -> service -> title }}</a>
                                </div>
                                <div class="mt-4">
                                    @if(auth()->id() != $message->service->freelance->user->id)
                                    <x-button wire:click='Propososal({{$message->service->id}})' flat positive label="Discuter prix">

                                    </x-button>
                                    @endif
                                </div>
                            </div>
                            @endif
                            @if($message->proposal_id !== null)

                                <div class="flex gap-2 mt-4">
                                    @if($message->proposal && $message->proposal->status === 'pending')
                                    @php
                                    $lastPendingProposal = $message->proposal;
                                    $lastPendingMessage = $message;
                                    @endphp
                                    @endif

                                        @if($lastPendingProposal && auth()->id() == $lastPendingProposal->freelance->user->id && auth()->id() ==
                                        $message->receiver_id && (!$message->proposal || $message->id ===
                                        $lastPendingProposal->messages()->orderBy('created_at', 'desc')->first()->id))
                                        <x-button negative outline label="Refuser" wire:click='refuserProposal({{$message->proposal->id}})' sm />
                                        {{ ($this -> accepterAction)(['proposal_id' => $message -> proposal_id]) }}
                                        @endif


                                    @if($message->proposal && $message->proposal->status === 'rejected')
                                    @php
                                    $lastRejectedProposal = $message->proposal;
                                    $lastRejectedMessage = $message;
                                    @endphp
                                    @endif

                                 @if($lastRejectedProposal && auth()->id() != $lastRejectedProposal->freelance->user->id && (!$message->proposal ||
                                $message->id === $lastRejectedProposal->messages()->orderBy('created_at', 'desc')->first()->id))
                                <x-button label="Changer" wire:click='editActionE({{$message->proposal_id}})' sm />
                                @endif
                                </div>

                                @endif


                                @php
                                $lastMessage = $message;


                                // Mettez à jour le dernier message
                                @endphp
                            @endif

                            @if(!empty($message->file))

                            @if($message->type=="file")
                            @php
                            $fileCount = count($message->file);
                            @endphp

                            @if ($fileCount === 1 && in_array(pathinfo($message->file[0])['extension'], ['jpg', 'jpeg',
                            'png', 'gif'], true))
                            <div class="relative group">
                                <img class="object-cover rounded-lg h-44"
                                    src="{{ Storage::disk('local')->url($message->file[0]) }}" alt="image" />

                                <div
                                    class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100">
                                    <button
                                        class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                            @else
                            <div class="grid grid-cols-12 gap-2">
                                @foreach ($message->file as $key => $value)
                                <div class="relative col-span-{{ count($message->file) === 3 ? '4' : '6' }} group">
                                    <div class="relative group">
                                        <img class="object-cover h-48 rounded-lg"
                                            src="{{ Storage::disk('local')->url($value) }}" alt="image" />

                                        <div
                                            class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100">
                                            <a href="{{ Storage::disk('local')->url($message->file[0]) }}" download
                                                class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                    viewBox="0 0 24 24" stroke="currentColor">
                                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                        d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                @endforeach
                            </div>
                            @endif


                            @else
                            <div class="relative group">

                                @php
                                $filePath = $message->file[0]; // Remplacez ceci par le chemin réel de votre fichier
                                $fileName = substr($filePath, strrpos($filePath, '/') + 1);
                                @endphp
                                <div
                                    class="p-3 bg-white break-normal {{ auth()->id() == $message->sender_id ? 'rounded-br-none bg-info/10 p-3 text-slate-700  dark:bg-accent dark:text-white' : 'rounded-bl-none dark:bg-navy-700 dark:text-navy-100' }} shadow-sm rounded-2xl">
                                    <a href="{{ Storage::disk('local')->url($message->file[0]) }}" download class="">
                                        {{ $fileName }}

                                    </a>



                                </div>

                                <div
                                    class="absolute top-0 flex items-center justify-center w-full h-full transition-all duration-300 rounded-lg opacity-0 bg-black/30 group-hover:opacity-100">
                                    <a href="{{ Storage::disk('local')->url($message->file[0]) }}" download
                                        class="p-0 font-medium text-white rounded-full btn2 h-9 w-9 bg-info hover:bg-info-focus focus:bg-info-focus active:bg-info-focus/90">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                            viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                    </a>
                                </div>
                            </div>



                            @endif
                            @endif


                            <p class="mt-1 ml-auto text-xs text-right text-slate-400 dark:text-navy-300">
                                {{ $message -> created_at -> format('m: i a')
                                }}
                            </p>
                        </div>
                    </div>


                </div>


                @empty

                @endforelse

                @endempty





            </div>

            <div x-show="messages === null" x-transition:leave="transition-all duration-500 easy-in">
                <div class="flex flex-col items-center justify-center mt-8">


                    <div class="flex flex-col items-center mx-4 space-x-3">

                        <p class="text-lg">Pour plus de sécurité et votre protection, effectuez les paiements et les
                            communications
                            directement
                            sur FIND.</p>


                        <div class="w-4/12 py-8">
                            <img src="/images/illustrations/chat-ui.svg" alt="illustation">

                        </div>

                    </div>



                </div>

            </div>



        </div>


        <div x-show="activeChat?.name"
            class="chat-footer relative flex h-12 w-full shrink-0 items-center justify-between border-t border-slate-150 bg-white px-[calc(var(--margin-x)-.25rem)] transition-[padding,width] duration-[.25s] dark:border-navy-600 dark:bg-navy-800">
            <div class="-ml-1.5 flex flex-1 space-x-2">
                <button @click="showModal = true" @click="$store.global.isSidebarExpanded = false"
                    class="p-0 rounded-full btn2 h-9 w-9 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
                    </svg>
                </button>


                <input type="text" wire:model="body"
                    class="w-full h-10 bg-transparent border-none focus:ring-0 placeholder:text-slate-400/70"
                    placeholder="Write the message" />
            </div>

            <div class="-mr-1.5 flex">
                <button
                    class="p-0 rounded-full btn2 h-9 w-9 shrink-0 text-slate-500 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </button>




                <button wire:click="sendMessage()"
                    class="p-0 rounded-full btn2 h-9 w-9 shrink-0 text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="1.5">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="m9.813 5.146 9.027 3.99c4.05 1.79 4.05 4.718 0 6.508l-9.027 3.99c-6.074 2.686-8.553.485-5.515-4.876l.917-1.613c.232-.41.232-1.09 0-1.5l-.917-1.623C1.26 4.66 3.749 2.46 9.813 5.146ZM6.094 12.389h7.341" />
                    </svg>
                </button>





            </div>
        </div>





        <div wire:ignore x-data="{activeTab:'tabHome'}" x-on:close.window="showModal=false"
            class="fixed inset-0 z-[100] flex flex-col items-center justify-center overflow-hidden px-4 py-6 sm:px-5"
            x-show="showModal" role="dialog">
            <div class="absolute inset-0 transition-opacity duration-300 bg-slate-900/60" x-show="showModal"
                x-transition:enter="ease-out" x-transition:enter-start="opacity-0" x-transition:enter-end="opacity-100"
                x-transition:leave="ease-in" x-transition:leave-start="opacity-100" x-transition:leave-end="opacity-0">
            </div>
            <div class="relative pt-10 pb-8 text-center transition-all duration-300 bg-white rounded-lg max-w-md lg:w-[30rem] dark:bg-navy-700"
                x-show="showModal" x-transition:enter="easy-out"
                x-transition:enter-start="opacity-0 [transform:translate3d(0,1rem,0)]"
                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" x-transition:leave="easy-in"
                x-transition:leave-start="opacity-100 [transform:translate3d(0,0,0)]"
                x-transition:leave-end="opacity-0 [transform:translate3d(0,1rem,0)]">



                <div>


                    <div
                        class="mx-1 overflow-x-auto rounded-lg is-scrollbar-hidden bg-slate-200 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                        <div class="tabs-list flex px-1.5 py-1">

                            <button @click="activeTab = 'tabHome'"
                                :class="activeTab === 'tabHome' ? 'bg-white shadow dark:bg-navy-500 dark:text-navy-100' : 'hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                class="btn2 shrink-0 px-3 py-1.5 font-medium">
                                Image
                            </button>
                            <button @click="activeTab = 'doc'"
                                :class="activeTab === 'doc' ? 'bg-white shadow dark:bg-navy-500 dark:text-navy-100' : 'hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                class="btn2 shrink-0 px-3 py-1.5 font-medium">
                                Document
                            </button>

                        </div>
                    </div>


                    <div class="p-2" x-show="activeTab === 'tabHome'"
                        x-transition:enter="transition-all duration-500 easy-in-out"
                        x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                        x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]">


                        {{ $this -> imageForm }}


                    </div>
                    <div class="p-2" x-show="activeTab === 'doc'"
                        x-transition:enter="transition-all duration-500 easy-in-out"
                        x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                        x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]">


                        {{ $this -> fileForm }}

                    </div>



                </div>





                <div class="h-px my-4 mt-8 bg-slate-200 dark:bg-navy-500"></div>

                <div class="flex justify-around px-8 space-x-3">
                    <button @click="showModal = false" wire:click="resetFile()"
                        class="btn2 min-w-[7rem] rounded-full border border-slate-300 font-medium text-slate-800 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-50 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90">
                        Annuler
                    </button>
                    <div x-show="activeTab === 'tabHome'">

                        <button wire:click="SendMessageFile()" wire:loading.attr='disabled'
                            class="btn2 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                            <span wire:loading wire:target='file'>Chargement</span>
                            <span wire:loading.remove wire:target='file'>Envoyer l'image</span>
                            <span wire:loading wire:target='SendMessageFile'>Envoi...</span>
                        </button>

                    </div>
                    <div x-show="activeTab === 'doc'">

                        <button wire:click="SendMessageDoc()" wire:loading.attr='disabled'
                            class="btn2 min-w-[7rem] rounded-full bg-primary font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                            <span wire:loading wire:target='file'>Chargement</span>
                            <span wire:loading.remove wire:target='file'>Envoyer un DOC</span>
                        </button>

                    </div>

                </div>
            </div>
        </div>


        -->























            </div>
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'

export default {
    setup () {
        const state = reactive({
            count: 0,
        })

        return {
            ...toRefs(state),
        }
    }
}
</script>

<style lang="scss" scoped>

</style>
