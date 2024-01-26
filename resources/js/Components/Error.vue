<template>
    <div v-if="$page.props.flash.error">


        <div v-if="show" id="alert-additional-content-2" class="fixed flex z-[300] flex items-center  flex-col mb-4 text-sm text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 items-center w-full max-w-xs p-4 space-x-4 text-gray-500 bg-white divide-x rtl:divide-x-reverse divide-gray-200 rounded-lg shadow right-5 bottom-5 dark:text-gray-400 dark:divide-gray-700 space-x " role="alert">
          <div class="flex gap-2 items-center">
            <svg class="flex-shrink-0 w-4 h-4 me-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
            </svg>
            <span class="sr-only">Message</span>
            <h3 class="text-lg font-medium">Alert</h3>
          </div>
          <div class="mt-2 mb-4 p-2 text-sm">
           {{ $page.props.flash.error }}
          </div>
          <div class="flex">

            <button type="button" @click="toogle" class="text-red-800 bg-transparent border border-red-800 hover:bg-red-900 hover:text-white focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-xs px-3 py-1.5 text-center dark:hover:bg-red-600 dark:border-red-600 dark:text-red-500 dark:hover:text-white dark:focus:ring-red-800" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
              Fermer
            </button>
          </div>
        </div>



 </div>

</template>

<script setup>

import {ref} from 'vue';

const show=ref(true);


const toogle=()=>{
    show.value=!show.value;
}

</script>

<style lang="sass" scoped>

</style>
