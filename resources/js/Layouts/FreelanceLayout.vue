<script setup>

import { useCategoryStore, useLayoutStore } from '@/store/store';

import { onMounted } from 'vue';
import MainSidebarF from '@/Layouts/FreelancePartial/MainSidebarF.vue';
import SidebarPanelF from '@/Layouts/FreelancePartial/SidebarPanelF.vue';
import PartialHeaderF from '@/Layouts/FreelancePartial/PartialHeaderF.vue';

import OtherPanel from '@/Layouts/FreelancePartial/OtherPanel.vue';

//import OtherPanelF from '@/Layouts/FreelancePartial/OtherPanelF.vue';

const categoryStore = useCategoryStore();
const layoutStore = useLayoutStore();





function resize() {
    if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();

    } else {



    }
}

resize();


</script>

<template>
    <div class="" :class="{ 'is-sidebar-open': layoutStore.SidebarExpanded }">





        <!-- Page Wrapper -->
        <div id="root" class="flex min-h-100vh grow bg-slate-50 dark:bg-gray-950">
            <!-- Sidebar -->
            <div class="sidebar">
                <!-- Main Sidebar -->
                <MainSidebarF />


                <!-- Sidebar Panel -->

                <SidebarPanelF />
            </div>

            <!-- App Header -->
            <PartialHeaderF />






            <OtherPanel />


            <div class="main-content pt-4 w-full px-[var(--margin-x)] pb-8">
              <slot></slot>

            </div>



        </div>











    </div>
</template>




<style >

</style>
