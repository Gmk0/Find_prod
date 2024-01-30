<script setup>

import userInfo from "@/Components/userInfo.vue"
import { useLayoutStore } from '@/store/store';
import NotificationComponent from '@/components/NotificationComponent.vue';

const layoutStore = useLayoutStore();

</script>

<template>
    <div>
        <nav class="header print:hidden">





        <div class="relative flex w-full bg-white header-container dark:bg-findDark-900 print:hidden">
            <!-- Header Items -->
            <div class="flex items-center justify-between w-full">
                <!-- Left: Sidebar Toggle Button -->
                <div class="h-7 w-7">
                    <button
                        class="menu-toggle active ml-0.5 flex h-7 w-7 flex-col justify-center space-y-1.5 text-amber-600 outline-none focus:outline-none dark:text-amber-600/80"
                        @click="layoutStore.toogleRight()"
                        >
                        <span></span>
                        <span></span>
                        <span></span>
                    </button>
                </div>

                <div>
                    <Link :href="route('home')" class="flex ml-2 md:hidden">
                        <img src="/images/logo/find_02.png" class="h-8 lg:mr-3" alt="FIND" />

                    </Link>

                </div>


                <!-- Right: Header buttons -->
                <div class="-mr-1.5 flex items-center  space-x-2">
                    <!-- Mobile Search Toggle -->
                    <button
                       class="w-8 h-8 p-0 rounded-full btn1 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">

                       <svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 text-red-600  !dark:text-navy-100"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>

                    </button>

                    <!-- Main Searchbar
                    <template x-if="$store.breakpoints.smAndUp">
                        <div class="flex" x-data="usePopper({ placement: 'bottom-end', offset: 12 })"
                            @click.outside="if (isShowPopper) isShowPopper = false">
                            <div class="relative flex h-8 mr-4">
                                <input placeholder="Search here..."
                                    class="form-input peer h-full rounded-full bg-slate-150 px-4 pl-9 text-xs+ text-slate-800 ring-amber-600/50 hover:bg-slate-200 focus:ring dark:bg-navy-900/90 dark:text-navy-100 dark:placeholder-navy-300 dark:ring-accent/50 dark:hover:bg-navy-900 dark:focus:bg-navy-900"
                                    :class="isShowPopper ? 'w-80' : 'w-60'" type="text"
                                    @focus="$dispatch('toggle-spotlight')" />
                                <div
                                    class="absolute flex items-center justify-center w-10 h-full pointer-events-none text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        class="h-4.5 w-4.5 transition-colors duration-200" fill="currentColor"
                                        viewBox="0 0 24 24">
                                        <path
                                            d="M3.316 13.781l.73-.171-.73.171zm0-5.457l.73.171-.73-.171zm15.473 0l.73-.171-.73.171zm0 5.457l.73.171-.73-.171zm-5.008 5.008l-.171-.73.171.73zm-5.457 0l-.171.73.171-.73zm0-15.473l-.171-.73.171.73zm5.457 0l.171-.73-.171.73zM20.47 21.53a.75.75 0 101.06-1.06l-1.06 1.06zM4.046 13.61a11.198 11.198 0 010-5.115l-1.46-.342a12.698 12.698 0 000 5.8l1.46-.343zm14.013-5.115a11.196 11.196 0 010 5.115l1.46.342a12.698 12.698 0 000-5.8l-1.46.343zm-4.45 9.564a11.196 11.196 0 01-5.114 0l-.342 1.46c1.907.448 3.892.448 5.8 0l-.343-1.46zM8.496 4.046a11.198 11.198 0 015.115 0l.342-1.46a12.698 12.698 0 00-5.8 0l.343 1.46zm0 14.013a5.97 5.97 0 01-4.45-4.45l-1.46.343a7.47 7.47 0 005.568 5.568l.342-1.46zm5.457 1.46a7.47 7.47 0 005.568-5.567l-1.46-.342a5.97 5.97 0 01-4.45 4.45l.342 1.46zM13.61 4.046a5.97 5.97 0 014.45 4.45l1.46-.343a7.47 7.47 0 00-5.568-5.567l-.342 1.46zm-5.457-1.46a7.47 7.47 0 00-5.567 5.567l1.46.342a5.97 5.97 0 014.45-4.45l-.343-1.46zm8.652 15.28l3.665 3.664 1.06-1.06-3.665-3.665-1.06 1.06z" />
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </template>
                    -->

                    <NotificationComponent />

                      <userInfo />





                    <button @click="layoutStore.tooglePanel()"
                        class="w-8 h-8 p-0 rounded-full cursor-pointer hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5.5 w-5.5 text-slate-500 dark:text-navy-100"
                            fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
                                d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>


    </div>
</template>



<style lang="css">




.btn1 {
    display: inline-flex;
    cursor : pointer;
    align-items: center;
    justify-content: center;
    border-radius: .5rem;
    padding: .5rem 1.25rem;
    text-align: center;
    letter-spacing: .025em;
    outline: 2px solid transparent;
    outline-offset: 2px;
    transition-property: all;
    transition-timing-function: cubic-bezier(.4, 0, .2, 1);
    transition-duration: .2s
}

.btn2:focus {
    outline: 2px solid transparent;
    outline-offset: 2px
}

.btn2:disabled {
    pointer-events: none
}


</style>
