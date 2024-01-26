<template>
    <div>


        <div>
            <Popper>

                <button class="flex p-2 text-gray-100 rounded-lg hover:text-gray-900 dark:text-gray-400 ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-300" stroke="currentColor" fill="none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                            d="M15.375 17.556h-6.75m6.75 0H21l-1.58-1.562a2.254 2.254 0 01-.67-1.596v-3.51a6.612 6.612 0 00-1.238-3.85 6.744 6.744 0 00-3.262-2.437v-.379c0-.59-.237-1.154-.659-1.571A2.265 2.265 0 0012 2c-.597 0-1.169.234-1.591.65a2.208 2.208 0 00-.659 1.572v.38c-2.621.915-4.5 3.385-4.5 6.287v3.51c0 .598-.24 1.172-.67 1.595L3 17.556h12.375zm0 0v1.11c0 .885-.356 1.733-.989 2.358A3.397 3.397 0 0112 22a3.397 3.397 0 01-2.386-.976 3.313 3.313 0 01-.989-2.357v-1.111h6.75z" />
                    </svg>

                    <sub v-if="notifications.length >0" >
                        <span class="bg-red-600 text-gray-100 px-1.5 py-0.5 rounded-full -ml-1 ">
                            {{ notifications.length }}
                        </span>
                    </sub>
                </button>
                <template #content="props">

                    <div>
                        <div
                            class="popper-box mx-4 mt-1 flex max-h-[calc(100vh-6rem)] w-[calc(100vw-2rem)] flex-col rounded-lg border border-slate-150 bg-white shadow-soft dark:border-navy-800 dark:bg-navy-700 dark:shadow-soft-dark sm:m-0 sm:w-80">
                            <div class="rounded-t-lg bg-slate-100 text-slate-600 dark:bg-navy-800 dark:text-navy-200">
                                <div class="flex items-center justify-between px-4 pt-2">
                                    <div class="flex items-center space-x-2">
                                        <h3 class="font-medium text-slate-700 dark:text-navy-100">
                                            Notifications
                                        </h3>
                                        <div
                                            class="badge h-5 rounded-full bg-primary/10 px-1.5 text-primary dark:bg-accent-light/15 dark:text-accent-light">
                                            {{ notifications.length }}
                                        </div>
                                    </div>

                                    <div class="inline-flex">


                                    </div>


                                </div>

                                <div class="flex px-3 overflow-x-auto is-scrollbar-hidden shrink-0">
                                    <button @click="activeTab = 'tabAll'"
                                        :class="activeTab === 'tabAll' ?
                                            'border-primary  dark:border-accent bg-transparent text-primary dark:text-accent-light' :
                                            'border-transparent hover:text-slate-800 focus:text-slate-800 bg-transparent dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                        class=" shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
                                        <span>Tout</span>
                                    </button>
                                    <button @click="activeTab = 'Commande'"
                                        :class="activeTab === 'Commande' ?
                                            'border-primary dark:border-accent text-primary dark:text-accent-light' :
                                            'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                        class=" shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
                                        <span>Commande</span>
                                    </button>
                                    <button @click="activeTab = 'tabEvents'"
                                        :class="activeTab === 'tabEvents' ?
                                            'border-primary dark:border-accent text-primary dark:text-accent-light' :
                                            'border-transparent hover:text-slate-800 focus:text-slate-800 dark:hover:text-navy-100 dark:focus:text-navy-100'"
                                        class=" shrink-0 rounded-none border-b-2 px-3.5 py-2.5">
                                        <span>Evenement</span>
                                    </button>

                                </div>
                            </div>

                            <div class="flex flex-col overflow-hidden">
                                <transition
                                enter-class="transition-all duration-300 easy-in-out"
                                enter-active-class="opacity-0 [transform:translate3d(1rem,0,0)]"
                                enter-to-class="opacity-100 [transform:translate3d(0,0,0)]"
                                >
                                <div v-show="activeTab === 'tabAll'"
                                    class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden">



                                <div v-if="notifications.length > 0 ">
                                <div v-for="notification in notifications" class="flex items-center mb-4 space-x-3">
                                    <div
                                        class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15">
                                        <i :class="{'text-amber-600 dark:text--amber-600': notification.data.icon }"></i>

                                    </div>

                                    <a href="#" @click="newLink(notification.id , notification.data?.url)" class="flex flex-col items-start">

                                        <p v-if="notification.data.title != null" class="font-medium text-slate-600 dark:text-navy-100">
                                            {{ notification.data.title }}
                                        </p>

                                        <p v-else class="font-medium text-slate-600 dark:text-navy-100">
                                            Notifications
                                        </p>



                                        <div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                            {{ notification.data.message }}
                                        </div>
                                    </a>
                                </div>
                                </div>


                                <div v-else class="pb-8 mt-8 text-center">
                                    <img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image" />
                                    <div class="mt-5">
                                        <p class="text-base font-semibold text-slate-700 dark:text-navy-100">
                                            Pas de notificacion
                                        </p>

                                    </div>
                                </div>




                                </div>
                                </transition>

                                <div v-show="activeTab === 'tabEvents'"
                                    x-transition:enter="transition-all duration-300 easy-in-out"
                                    x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                                    x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                                    class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden">
                                     <div v-if="notifications.length > 0">
                                    <div v-for="notification in notifications" class="flex items-center mb-4 space-x-3">
                                        <div
                                            class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15">
                                            <i :class="{ 'text-amber-600 dark:text--amber-600': notification.data.icon }"></i>

                                        </div>

                                        <a href="#" @click="newLink(notification.id, notification.data?.url)" class="flex flex-col items-start">

                                            <p v-if="notification.data.title != null" class="font-medium text-slate-600 dark:text-navy-100">
                                                {{ notification.data.title }}
                                            </p>

                                            <p v-else class="font-medium text-slate-600 dark:text-navy-100">
                                                Notifications
                                            </p>



                                            <div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                {{ notification.data.message }}
                                            </div>
                                        </a>
                                    </div>
                                    </div>


                                    <div v-else class="pb-8 mt-8 text-center">
                                        <img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image" />
                                        <div class="mt-5">
                                            <p class="text-base font-semibold text-slate-700 dark:text-navy-100">
                                                Pas de notificacion
                                            </p>

                                        </div>
                                    </div>


                                </div>
                                  <div v-show="activeTab === 'Commande'"
                                        x-transition:enter="transition-all duration-300 easy-in-out"
                                        x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                                        x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                                        class="px-4 py-4 space-y-4 overflow-y-auto is-scrollbar-hidden">
                                         <div v-if="notifications.length > 0">
                                        <div v-for="notification in notifications" class="flex items-center mb-4 space-x-3">
                                            <div
                                                class="flex items-center justify-center w-10 h-10 rounded-lg shrink-0 bg-amber-600/10 dark:bg-amber-600/15">
                                                <i :class="{ 'text-amber-600 dark:text--amber-600': notification.data.icon }"></i>

                                            </div>

                                            <a href="#" @click="newLink(notification.id, notification.data?.url)" class="flex flex-col items-start">

                                                <p v-if="notification.data.title != null" class="font-medium text-slate-600 dark:text-navy-100">
                                                    {{ notification.data.title }}
                                                </p>

                                                <p v-else class="font-medium text-slate-600 dark:text-navy-100">
                                                    Notifications
                                                </p>



                                                <div class="mt-1 text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                    {{ notification.data.message }}
                                                </div>
                                            </a>
                                        </div>
                                        </div>


                                        <div v-else class="pb-8 mt-8 text-center">
                                            <img class="mx-auto w-36" src="/images/illustrations/empty.svg" alt="image" />
                                            <div class="mt-5">
                                                <p class="text-base font-semibold text-slate-700 dark:text-navy-100">
                                                    Pas de notificacion
                                                </p>

                                            </div>
                                        </div>


                                    </div>

                            </div>
                        </div>
                    </div>
                </template>

            </Popper>
        </div>



    </div>
</template>

<script setup>

import { ref, computed } from 'vue';
import Popper from "vue3-popper";
import { router } from '@inertiajs/vue3';

import { useLayoutStore, useCategoryStore, useNotification } from '@/store/store';
const useNotify = useNotification();


const newLink =async(id,url)=>{



    router.get(url);



    useNotify.removeNotification(id);
}


const notifications =computed(()=> useNotify.lastNotificationGet)


console.log(useNotify.lastNotificationGet);

const activeTab = ref('tabAll')

</script>

<style></style>
