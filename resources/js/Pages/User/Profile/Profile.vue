


<template>
    <div class="flex flex-col min-h-screen gap-6 px-4 lg:mx-auto md:p-6 md:max-w-7xl md:container px-auto bg-inherit">


        <div class="flex flex-col">
            <div>
                <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center">
                            <Link :href="route('user.dashboard')"
                                class="inline-flex items-center text-sm text-gray-700 font-bega-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                            <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path
                                    d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                            </svg>
                            Dashboard
                            </Link>
                        </li>

                        <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                        stroke-width="2" d="m1 9 4-4-4-4" />
                                </svg>
                                <span
                                    class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">Profile</span>
                            </div>
                        </li>
                    </ol>
                </nav>


            </div>

            <h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Profile</h1>

        </div>

        <div>

             <div  class="grid grid-cols-12 gap-4 sm:gap-5 lg:gap-6">
                 <div class="col-span-12 lg:col-span-4">
                        <div style="top:8rem;" class="sticky p-4 bg-white rounded-[25px] dark:bg-gray-800 sm:p-5">
                            <div class="flex items-center space-x-4">
                                <div class="avatar h-14 w-14">


                                    <img v-if="$page.props.auth.user.profile_photo_path !=null" class="object-cover rounded-full"
                                        :src="'/storage/' +  $page.props.auth.user.profile_photo_path" alt="">

                                    <img  v-else class="rounded-full" :src="$page.props.auth.user.profile_photo_url" alt="">



                                </div>

                                <div>

                                    <h3 class="text-base font-bega-medium text-slate-700 dark:text-navy-100">
                                        {{ $page.props.auth.user.name }}
                                    </h3>


                                </div>
                            </div>
                            <ul class="mt-6 space-y-1.5 font-inter font-bega-medium">
                                <li>
                                    <a @click="activeTab = 'AccountP'"
                                        :class="activeTab === 'AccountP' ? 'border-amber-600 border-b' : 'hover:bg-slate-100 hover:text-slate-800 text-gray-700 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'"
                                        class=" group flex items-center space-x-2 rounded-lg  px-4 py-2.5 tracking-wide text-white outline-none transition-all "
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            :class="activeTab === 'AccountP' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'"
                                            class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        <span
                                            :class="activeTab === 'AccountP' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'">Comptes
                                            Utilisateur</span>
                                    </a>
                                </li>

                                <li>
                                    <a @click="activeTab = 'Notification'"
                                        :class="activeTab === 'Notification' ? 'border-amber-600 border-b text-slate-800 ' : 'hover:bg-slate-100  hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'"
                                        class=" group flex items-center space-x-2 rounded-lg  px-4 py-2.5 tracking-wide text-white outline-none transition-all "
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            :class="activeTab === 'Notification' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'"
                                            class="w-5 h-5 " fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                                        </svg>

                                        <span
                                            :class="activeTab === 'Notification' ? 'dark:text-white text-slate-800' : 'text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'">Notification</span>
                                    </a>
                                </li>
                                <li>
                                    <a @click="activeTab = 'Security'"
                                        :class="activeTab === 'Security' ? 'border-amber-600 border-b' : 'hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'"
                                        class="group flex items-center space-x-2 rounded-lg  px-4 py-2.5 tracking-wide text-white outline-none transition-all "
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            :class="activeTab === 'Security' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'"
                                            class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                                        </svg>
                                        <span
                                            :class="activeTab === 'Security' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'">Security</span>
                                    </a>
                                </li>

                                <li>
                                    <a @click="activeTab = 'Privacy'"
                                        :class="activeTab === 'Privacy' ? 'border-amber-600 border-b' : 'hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100'"
                                        class="group flex items-center space-x-2 rounded-lg  px-4 py-2.5 tracking-wide text-white outline-none transition-all "
                                        href="#">
                                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5"
                                            :class="activeTab === 'Privacy' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'"
                                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                                            <path stroke-linecap="round" stroke-linejoin="round"
                                                d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                                        </svg>
                                        <span
                                            :class="activeTab === 'Privacy' ? 'dark:text-white text-slate-800' : 'transition-colors text-slate-400 group-hover:text-slate-500 group-focus:text-slate-500 dark:text-navy-300 dark:group-hover:text-navy-200 dark:group-focus:text-navy-200'">
                                            Activites </span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                </div>



                <div v-cloak v-show="activeTab === 'AccountP'"
                x-transition:enter="transition-all duration-300 easy-in-out"
                x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]"
                class="col-span-12 lg:col-span-8">
                <div v-if="$page.props.jetstream.canUpdateProfileInformation">
                        <UpdateProfileInformationForm :user="$page.props.auth.user" />

                        <SectionBorder />
                </div>
             </div>

              <div v-cloak v-show="activeTab === 'Security'"
              x-transition:enter="transition-all duration-300 easy-in-out"
                x-transition:enter-start="opacity-0 [transform:translate3d(1rem,0,0)]"
                x-transition:enter-end="opacity-100 [transform:translate3d(0,0,0)]" class="col-span-12 lg:col-span-8">



                    <div v-if="$page.props.jetstream.canUpdatePassword">
                        <UpdatePasswordForm class="mt-10 sm:mt-0" />

                        <SectionBorder />
                    </div>
                     <div v-if="$page.props.jetstream.canManageTwoFactorAuthentication">


                        <SectionBorder />
                    </div>

                     {{ sessions }}


            </div>




             </div>



        </div>


    </div>
</template>

<script setup>

import UserLayout from '@/Layouts/UserLayout.vue';
import { ref } from "vue";

import SectionBorder from '@/Components/SectionBorder.vue';

import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue';
import UpdateProfileInformationForm from '@/Pages/Profile/Partials/UpdateProfileInformationForm.vue';




//import ColumnGroup from 'primevue/columngroup';   // optional
//import Row from 'primevue/row';
//import Paginator from 'primevue/paginator';
//import Button from 'primevue/button';

const activeTab = ref('');


defineProps(['sessions'])

defineOptions({
    layout: UserLayout,

});


</script>

<style lang="scss" scoped></style>
