<template>
   <div class="px-4">
                <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center ">
                    <Link :href="route('home')" class="inline-flex items-center text-sm text-gray-700 font-bega-medium hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="md:w-3 md:h-3 h-2 w-2 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Accueil
                    </Link>
                    </li>

                    <li aria-current="page">
                        <Link v-if="routeName" :href="route(routeName)" class="flex items-center">
                             <svg class="w-2 h-2 mx-1 text-gray-400 md:w-3 md:h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">{{ link1 }}</span>
                            </Link>
                    <a v-else class="flex items-center">
                        <svg class="w-2 h-2 mx-1 text-gray-400 md:w-3 md:h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">{{ link1 }}</span>
                    </a>

                    </li>
                     <li v-if="link2" aria-current="page">
                        <a class="flex items-center">
                            <svg class="w-2 h-2 mx-1 text-gray-400 md:w-3 md:h-3 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ml-1 text-sm text-gray-500 font-bega-medium md:ml-2 dark:text-gray-400">{{ link2 }}</span>
                        </a>
                        </li>

                </ol>
                </nav>
            </div>
</template>

<script setup>
import { Link } from '@inertiajs/vue3';


defineProps({
    link1: {
        String,
    },
    link2:{
        String,
    },
    routeName:{
        String,
    }
})

</script>

