<script setup>

import { useLayoutStore, useCategoryStore, useNotification, useParrainage } from '@/store/store';

import { onMounted } from 'vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';
import SidebarPanelUser from '@/Layouts/UserPartial/SidebarPanelUser.vue';
import PartialHeaderUser from '@/Layouts/UserPartial/PartialHeaderUser.vue';
import OtherPanelUser from '@/Layouts/UserPartial/OtherPanelUser.vue';

import Footer from '@/Components/Footer.vue';


const categoryStore = useCategoryStore();
const Parainage = useParrainage();
const layoutStore = useLayoutStore();
const notification = useNotification();
//const userStore = useAuthStore();


onMounted(()=>{

    categoryStore.fetchCategories();
    notification.fetchLastNotification();
    notification.getNotificationParametres();



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




