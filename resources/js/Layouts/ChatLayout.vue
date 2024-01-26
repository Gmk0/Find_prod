<script setup>

import { useLayoutStore } from '@/store/store';

import { onMounted } from 'vue';
import MainSidebarUser from '@/Layouts/UserPartial/MainSidebarUser.vue';
import SidebarPanelUser from '@/Layouts/UserPartial/SidebarPanelUser.vue';
import PartialHeaderUser from '@/Layouts/UserPartial/PartialHeaderUser.vue';
import OtherPanelUser from '@/Layouts/UserPartial/OtherPanelUser.vue';

//const categoryStore = useCategoryStore();
const layoutStore = useLayoutStore();
//const userStore = useAuthStore();




function resize() {
    if (window.innerWidth < 768) {
        layoutStore.ToogleFalse();

    } else {



    }
}

resize();


</script>

<template>
    <div class="overflow-hidden has-min-sidebar" :class="{ 'is-sidebar-open': layoutStore.SidebarExpanded }" >
        <main class="">
           <slot></slot>

        </main>

    </div>
</template>




<style ></style>
