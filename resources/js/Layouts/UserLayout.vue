<script setup>

import { useLayoutStore, useCategoryStore, useNotification, useParrainage } from '@/store/store';

import { onMounted, computed } from 'vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';
import SidebarPanelUser from '@/Layouts/UserPartial/SidebarPanelUser.vue';
import PartialHeaderUser from '@/Layouts/UserPartial/PartialHeaderUser.vue';
import OtherPanelUser from '@/Layouts/UserPartial/OtherPanelUser.vue';

import { Head, usePage } from '@inertiajs/vue3';

import Footer from '@/Components/Footer.vue';


import { initFlowbite } from 'flowbite'

const categoryStore = useCategoryStore();
const Parainage = useParrainage();
const layoutStore = useLayoutStore();
const notification = useNotification();
//const userStore = useAuthStore();


const page = usePage();
const titlePage = computed(() => {
    const urlPath = page.url.split('/');
    if (urlPath.length <= 1 || urlPath[1] === '') {
        return 'Accueil';
    } else {
        return urlPath[1];
    }
})
onMounted(()=>{

    categoryStore.fetchCategories();
    notification.fetchLastNotification();
    notification.getNotificationParametres();
        initFlowbite();



});



function resize() {
    if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();

    } else {



    }
}

resize();


</script>

<template>
     <Head :title="titlePage" />
    <div class="font-bega-light" :class="{ 'is-sidebar-open': layoutStore.SidebarExpanded }">


        <Error />


        <!-- Page Wrapper -->
        <div id="root" class="flex min-h-[100vh] grow bg-slate-50 dark:bg-findDark-950">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Main Sidebar -->
                <MainSidebarUser />


                <!-- Sidebar Panel -->

                <SidebarPanelUser />
            </div>

            <!-- App Header -->
            <PartialHeaderUser />

            <!-- Mobile Searchbar -->




            <OtherPanelUser />

            <div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">
                <slot></slot>

                  <Footer />

            </div>




        </div>











    </div>
</template>




