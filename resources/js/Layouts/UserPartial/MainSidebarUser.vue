<script setup>

import Popper from "vue3-popper";
import { useLayoutStore } from '@/store/store';

import { ref } from 'vue';
import { Link, router } from "@inertiajs/vue3";

const isShowPopper = ref(false);
const popperRef = ref(null);
const imageSrc = ref('');
const popperRoot= ref(null);
// Remplacez par la source de votre image

let popperInstance = null;

const togglePopper = () => {
    isShowPopper.value = !isShowPopper.value;

};

const logout = () => {
    router.post(route('logout'));
};


const LayoutStore = useLayoutStore();


const toogleRightExpande = () => {

    //LayoutStore.toogleRight()

    if (LayoutStore.SidebarExpanded) {
        document.body.classList.add("is-sidebar-open")
    } else {
        document.body.classList.remove("is-sidebar-open")
    }
}






</script>

<template>


        <div class="main-sidebar ">
        <div
            class="flex flex-col items-center w-full h-full bg-white border-r dark:bg-findDark-900 border-slate-200 dark:border-navy-700 ">
            <!-- Application Logo -->
            <div class="flex pt-4">
                <Link :href="route('home')">
                    <img class="w-10 transition-transform duration-500 ease-in-out hover:rotate-[360deg]"
                        src="/images/logo/find_01.png" lazy alt="logo" />
                </Link >
            </div>



            <!-- Main Sections Links -->
            <div class="flex flex-col pt-6 space-y-4 overflow-y-auto is-scrollbar-hidden grow">
                <!-- Dashobards -->
                <Link :href="route('user.dashboard')"
                    v-tooltip.right="'Dashboard'"
                    @click="toogleRightExpande()"
                    :class="$page.component.startsWith('User/Dashboard') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90':'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"
                 >
                    <svg class="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-opacity=".3"
                            d="M5 14.059c0-1.01 0-1.514.222-1.945.221-.43.632-.724 1.453-1.31l4.163-2.974c.56-.4.842-.601 1.162-.601.32 0 .601.2 1.162.601l4.163 2.974c.821.586 1.232.88 1.453 1.31.222.43.222.935.222 1.945V19c0 .943 0 1.414-.293 1.707C18.414 21 17.943 21 17 21H7c-.943 0-1.414 0-1.707-.293C5 20.414 5 19.943 5 19v-4.94Z" />
                        <path fill="currentColor"
                            d="M3 12.387c0 .267 0 .4.084.441.084.041.19-.04.4-.204l7.288-5.669c.59-.459.885-.688 1.228-.688.343 0 .638.23 1.228.688l7.288 5.669c.21.163.316.245.4.204.084-.04.084-.174.084-.441v-.409c0-.48 0-.72-.102-.928-.101-.208-.291-.355-.67-.65l-7-5.445c-.59-.459-.885-.688-1.228-.688-.343 0-.638.23-1.228.688l-7 5.445c-.379.295-.569.442-.67.65-.102.208-.102.448-.102.928v.409Z" />
                        <path fill="currentColor" d="M11.5 15.5h1A1.5 1.5 0 0 1 14 17v3.5h-4V17a1.5 1.5 0 0 1 1.5-1.5Z" />
                        <path fill="currentColor"
                            d="M17.5 5h-1a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5Z" />
                    </svg>
                </Link>

                <!-- Apps -->
                 <Link :href="route('user.commandes')"
                 @click="toogleRightExpande()"
                   :class="$page.component.startsWith('User/Commande') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11 "
                    v-tooltip.right="'Commande'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                    </svg>
               </Link>




                <!-- Forms -->
                <a href=""
                  :class="$page.component.startsWith('User/Paiement') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="items-center justify-center hidden transition-colors duration-200 rounded-lg outline-none h-11 w-11"
                     v-tooltip.right="'Paiment'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                </a>

                <!-- Components -->
                 <Link :href="route('user.missions')"

                   :class="$page.component.startsWith('User/Mission') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11 "
                   v-tooltip.right="'Mission'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                </Link>

                <!-- Elements -->
                <Link :href="route('user.transactions')"

                  :class="$page.component.startsWith('User/Transaction') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"
                    v-tooltip.right="'Transaction'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                    </svg>
               </Link>
                <a href="/user/chat"

                  :class="$page.component.startsWith('User/Chat') ? 'text-amber-600 hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:bg-navy-600 bg-amber-600/10 dark:text-accent-light dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90' : 'hover:bg-amber-600/20 focus:bg-amber-600/20 active:bg-amber-600/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25'"
                    class="flex items-center justify-center transition-colors duration-200 rounded-lg outline-none h-11 w-11"
                    v-tooltip.right="'Message'">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" fill="none" viewBox="0 0 24 24"
                        stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                </a>
            </div>

            <!-- Bottom Links -->
            <div class="flex flex-col items-center py-3 space-y-3">
                <!-- Settings -->



                <div
                     class="">


                    <Popper :placement="'right'">



                        <template #content="props">

                        <div class="bottom-0 left-20">
                                <div
                                    class="w-64 bg-white border rounded-lg popper-box border-slate-150 shadow-soft dark:border-navy-600 dark:bg-navy-700">
                                    <div class="flex items-center px-4 py-5 space-x-4 rounded-t-lg bg-slate-100 dark:bg-navy-800">
                                                <div class="avatar h-14 w-14">
                                                    <img class="object-cover rounded-full"
                                                        :src="'/storage/' + $page.props.auth.user.profile_photo_path" alt="">
                                                </div>
                                                <div>
                                                    <a href="#"
                                                        class="text-base font-bega-medium text-slate-700 hover:text-amber-600 focus:text-amber-600 dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light">
                                                        {{ $page.props.auth.user.name }}
                                                    </a>
                                                    <p class="text-xs text-slate-400 dark:text-navy-300">

                                                    </p>
                                                </div>
                                            </div>
                                            <div class="flex flex-col pt-2 pb-5">
                                                <Link :href="route('profile.show')"
                                                    class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                                                    <div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-warning">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                                        </svg>

                                                    </div>

                                                    <div>
                                                        <h2
                                                            class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                                                            Profile
                                                        </h2>
                                                        <div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                            Paramètre de votre profil
                                                        </div>
                                                    </div>
                                                </Link>
                                                <a href="/user/chat"
                                                    class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                                                    <div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 ">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z" />
                                                    </svg>

                                                    </div>

                                                    <div>
                                                        <h2
                                                            class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                                                            Messages
                                                        </h2>
                                                        <div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                            Vos messages
                                                        </div>
                                                    </div>
                                                </a>

                                                <Link :href="route('profile.show')"
                                                    class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                                                    <div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-error">
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                                                        </svg>

                                                    </div>

                                                    <div>
                                                        <h2
                                                            class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                                                            Activité
                                                        </h2>
                                                        <div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                            Votre activité et événements
                                                        </div>
                                                    </div>
                                                </Link>
                                                <Link :href="route('profile.show')"
                                                    class="flex items-center px-4 py-2 space-x-3 tracking-wide transition-all outline-none group hover:bg-slate-100 focus:bg-slate-100 dark:hover:bg-navy-600 dark:focus:bg-navy-600">
                                                    <div class="flex items-center justify-center w-8 h-8 rounded-lg text-findDark-500 bg-success">
                                                       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                                    </svg>

                                                    </div>

                                                    <div>
                                                        <h2
                                                            class="transition-colors font-bega-medium text-slate-700 group-hover:text-amber-600 group-focus:text-amber-600 dark:text-navy-100 dark:group-hover:text-accent-light dark:group-focus:text-accent-light">
                                                            Paramètres
                                                        </h2>
                                                        <div class="text-xs text-slate-400 line-clamp-1 dark:text-navy-300">
                                                            Paramètres de l'application Web
                                                        </div>
                                                    </div>
                                                </Link>
                                                <div class="px-4 mt-3">
                                                    <form @submit.prevent="logout">

                                                        <button type="submit"
                                                            class="flex items-center justify-center w-full px-6 py-3 space-x-2 text-center text-white rounded-lg btn bg-skin-fill hover:bg-amber-600 focus:bg-amber-600-focus active:bg-amber-600-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90">
                                                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none"
                                                                viewBox="0 0 24 24" stroke="currentColor">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                                            </svg>
                                                            <span>Deconnexion</span>
                                                        </button>
                                                    </form>

                                                </div>
                                            </div>
                                </div>
                        </div>


                        </template>
                          <button  class="w-12 h-12 avatar">

                            <img v-if="$page.props.auth.user.profile_photo_path !=null" class="object-cover rounded-full"
                                 :src="'/storage/' + $page.props.auth.user.profile_photo_path"
                                 :alt="$page.props.auth.user.name">

                            <img v-else class="object-cover rounded-full"
                                     :src="$page.props.auth.user.profile_photo_url"
                                     :alt="$page.props.auth.user.name">

                            <span
                                class="absolute right-0 h-3.5 w-3.5 rounded-full border-2 border-white bg-success dark:border-navy-700"></span>
                        </button>
                    </Popper>







                </div>

            </div>
        </div>
    </div>



</template>



<style scoped>


.active{

     --tw-text-opacity: 1;
    color: rgb(217 119 6 / var(--tw-text-opacity));
}

.active:hover {
    background-color: rgb(217 119 6 / 0.2);
}

.active:focus {
    background-color: rgb(217 119 6 / 0.2);
}
</style>
