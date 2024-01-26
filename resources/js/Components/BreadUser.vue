<template>

       <div class="flex flex-col">
                <div>
                    <nav class="flex" aria-label="Breadcrumb">


                        <ol class="inline-flex items-center space-x-1 font-bega_light md:space-x-3">
                            <li class="inline-flex items-center">
                                <Link :href="route('user.dashboard')"
                                    class="inline-flex items-center text-sm text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                                <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                                    fill="currentColor" viewBox="0 0 20 20">
                                    <path
                                        d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                                </svg>
                                Dashboard
                                </Link>
                            </li>

                            <Link :href="first_url">
                                <div class="flex items-center">
                                    <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                            stroke-width="2" d="m1 9 4-4-4-4" />
                                    </svg>
                                    <span
                                        class="ml-1 text-sm text-gray-500 md:ml-2 dark:text-gray-400">{{ first_title }}</span>
                                </div>
                            </Link>
                            <li v-if="second_title !=null" aria-current="page">
                                    <div class="flex items-center">
                                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"
                                                stroke-width="2" d="m1 9 4-4-4-4" />
                                        </svg>
                                        <span
                                            class="ml-1 text-sm text-gray-500 md:ml-2 dark:text-gray-400">{{ second_title }}</span>
                                    </div>
                                </li>
                        </ol>
                    </nav>


                </div>

                <h1 class="mt-4 text-3xl text-black font-bega_semibold dark:text-white">{{ title }}</h1>

        </div>
</template>

<script setup>
import {ref, computed } from 'vue';
import { router } from '@inertiajs/vue3';


defineProps({
    title:String,
    first_url: {
        type: String,
        default: "route('user.dashboard')",
    },
    first_title:String,
    second_url: {
        type: String,
        default: "route('user.dashboard')",
    },
    second_title:String,
})

</script>

<style lang="scss" scoped>

</style>
