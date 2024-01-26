<script setup>
import { Head } from '@inertiajs/vue3';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import WebLayout from '@/Layouts/WebLayout.vue';
defineProps({
    policy: String,
});

defineOptions({
    layout: WebLayout,

});
</script>

<template>
    <Head title="Privacy Policy" />

    <div class="py-16 font-sans antialiased text-gray-900 border-t border-gray-500">
        <div class="pt-4 ">
            <div class="flex flex-col items-center min-h-screen pt-6 sm:pt-0">


                <div class="w-full p-6 mt-6 overflow-hidden prose bg-white shadow-md sm:max-w-2xl sm:rounded-lg" v-html="policy" />
            </div>
        </div>
    </div>
</template>
