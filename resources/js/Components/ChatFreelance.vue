<script setup>

import { Link, useForm, router,usePage } from '@inertiajs/vue3';

import { useLayoutStore } from '@/store/store';


const layoutStore = useLayoutStore();


const page=usePage();

const props=defineProps({
    Conversations: Array,
})

const selectConversation = (id) => {
    router.get(route('freelance.chat', id))
}

window.Echo.private(`chat.${page.props.auth.user.id}`)
    .listen('MessageSent', (e) => {

        // props.Conversations.data.push(e.conversation)

        const index = props.Conversations.data.findIndex(conv => conv.id === e.conversation.id);

        // Si l'élément existe déjà dans le tableau
        if (index !== -1) {
            // Remplacez l'élément à cet index par le nouvel élément
            props.Conversations.data.splice(index, 1, e.conversation);
        } else {
            // S'il n'existe pas, vous pouvez choisir de ne rien faire ou d'ajouter l'élément
            // props.conversations.data.push(e.conversation);
        }
        //router.get(route('user.chat', e.conversation.id))

    });




</script>

<template>
    <div class="">
        <div class="sidebar-panel">
            <div class="flex h-full pt-6 grow flex-col bg-white pl-[var(--main-sidebar-width)] dark:bg-findDark-900">
                <!-- Sidebar Panel Header -->
                <div class="flex items-center justify-between w-full pl-4 pr-1 h-18">
                    <div class="flex items-center">
                        <div class="hidden mr-3 avatar h-9 w-9 lg:flex">
                            <div
                                class="rounded-full is-initial bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor" stroke-width="2">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                                </svg>
                            </div>
                        </div>
                        <p class="text-lg font-medium tracking-wider text-slate-800 line-clamp-1 dark:text-navy-100">
                            Chat Freelance
                        </p>
                    </div>

                    <button @click="layoutStore.toogleRight()"
                        class="p-0 rounded-full btn2 h-7 w-7 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent-light/80 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25 xl:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>

                </div>

                <!-- Sidebar Panel Body -->
                <div class="flex h-[calc(100%-4.5rem)] grow flex-col">
                    <div>
                        <div class="flex items-center justify-between px-4">
                            <span class="text-xs+ font-medium uppercase"></span>
                            <div class="-mr-1.5 flex">
                                <button
                                    class="hidden w-6 h-6 p-0 rounded-full btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-3.5 w-3.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                    </div>

                    <div class="flex px-4 pt-4">
                        <label class="relative mr-1.5 flex">
                            <input wire:model="query"
                                class="form-input peer h-8 w-full rounded-lg bg-slate-150 px-3 py-2 pl-9 text-xs+ ring-primary/50 placeholder:text-slate-400 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:ring-accent/50 dark:placeholder:text-navy-300 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                placeholder="Search chats" type="text" />
                            <span
                                class="absolute flex items-center justify-center w-10 h-full pointer-events-none text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-colors duration-200"
                                    fill="currentColor" viewBox="0 0 24 24">
                                    <path
                                        d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                                </svg>
                            </span>
                        </label>

                        <button
                            class="hidden w-8 h-8 p-0 -mr-2 rounded-full btn2 shrink-0 text-slate-500 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:text-navy-200 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10"
                                    d="M22 6.5h-9.5M6 6.5H2M9 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM22 17.5h-6M9.5 17.5H2M13 20a2.5 2.5 0 100-5 2.5 2.5 0 000 5z" />
                            </svg>
                        </button>
                    </div>

                    <div class="flex flex-col mt-3 overflow-y-auto is-scrollbar-hidden grow">



                        <div v-if="props.Conversations.data != null">

                            <div v-for="user in props.Conversations.data"
                                class="flex cursor-pointer items-center space-x-2.5 px-4 py-2.5 font-inter hover:bg-slate-150 dark:hover:bg-navy-600">
                                <div class="w-10 h-10">

                                    <Photo :user="user.user" taille="10" />
                                    <div
                                        class="absolute right-0 w-3 h-3 border-2 border-white rounded-full dark:border-navy-700">
                                    </div>



                                </div>

                                <div class="flex flex-col flex-1" @click="selectConversation(user.id)">
                                    <div class="flex items-baseline justify-between space-x-1.5">
                                        <p class="text-xs+ font-medium text-slate-700 line-clamp-1 dark:text-navy-100">
                                            {{ user.user.name }}
                                        </p>
                                        <span class="text-tiny+ text-slate-400 dark:text-navy-300">2032</span>
                                    </div>


                                    <div class="flex items-center justify-between mt-1 space-x-1">
                                        <p class="text-xs+ text-slate-400 line-clamp-1 dark:text-navy-300">
                                            {{ user.message?.body }}
                                        </p>




                                        <div v-if="user.messagesNonLue != 0"
                                            class="flex h-4.5 min-w-[1.125rem] items-center justify-center rounded-full bg-slate-200 px-1.5 text-tiny+ font-medium leading-none text-slate-800 dark:bg-navy-450 dark:text-white">
                                            {{ user.messagesNonLue }}
                                        </div>


                                    </div>

                                </div>

                            </div>
                        </div>

                        <div v-else class="flex items-center gap-1 px-2.5 mt-6 text-sm">
                            <span>pas de conversations trouver
                                Rechercher </span>

                        </div>





                    </div>

                    <div
                        class="flex h-12 shrink-0 justify-between border-t border-slate-150 px-1.5 py-1 dark:border-navy-600">
                        <a href="#" x-tooltip="'All Chats'"
                            class="p-0 rounded-full btn2 h-9 w-9 text-primary hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:text-accent dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 5a2 2 0 012-2h7a2 2 0 012 2v4a2 2 0 01-2 2H9l-3 3v-3H4a2 2 0 01-2-2V5z" />
                                <path
                                    d="M15 7v2a4 4 0 01-4 4H9.828l-1.766 1.767c.28.149.599.233.938.233h2l3 3v-3h2a2 2 0 002-2V9a2 2 0 00-2-2h-1z" />
                            </svg>
                        </a>
                        <a href="#" x-tooltip="'freelances'"
                            class="hidden p-0 rounded-full btn2 h-9 w-9 hover:bg-slate-300/20 hover:text-primary focus:bg-slate-300/20 focus:text-primary active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:hover:text-accent dark:focus:bg-navy-300/20 dark:focus:text-accent dark:active:bg-navy-300/25">
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                                stroke="currentColor" stroke-width="1.5">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                        </a>




                    </div>
                </div>
            </div>
        </div>


        <div class="sidebar-panel-min">
            <div class="flex flex-col h-full pt-6 bg-white dark:bg-findDark-900">
                <div class="flex items-center justify-center h-18 shrink-0">
                    <div class="flex w-10 h-10 avatar">
                        <div
                            class="rounded-full is-initial bg-primary/10 text-primary dark:bg-accent-light/10 dark:text-accent-light">
                            <svg class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                xmlns="http://www.w3.org/2000/svg" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div class="flex  h-[calc(100%-4.5rem)] grow flex-col">
                    <div class="flex flex-col overflow-y-auto is-scrollbar-hidden grow">
                        <ul class="flex flex-col items-center justify-center mt-2 space-y-1">
                            <li>
                                <a href="#"
                                    class="w-6 h-6 p-0 btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a href="#" @click="layoutStore.toogleRight()"
                                    class="w-6 h-6 p-0 btn2 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5" fill="none"
                                        viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                    </svg>
                                </a>
                            </li>
                        </ul>
                        <div class="h-px mx-4 my-4 shrink-0 bg-slate-200 dark:bg-navy-500"></div>
                        <div class="flex flex-col">


                            <div v-for="user in props.Conversations.data" class="px-2">

                                <button @click="selectConversation(user.id)"
                                    class="flex cursor-pointer items-center justify-center py-2.5 hover:bg-slate-150 dark:hover:bg-navy-600">
                                    <div class="w-10 h-10" v-tooltip.right="user.user.name">

                                        <Photo :user="user.user" taille="10" />

                                    </div>
                                </button>

                            </div>


                        </div>
                    </div>


                </div>
            </div>
        </div>

    </div>
</template>
