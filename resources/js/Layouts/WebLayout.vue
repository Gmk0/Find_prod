<template>
    <div class="bg-white dark:bg-gray-800 font-bega_light">


        <Head :title="titlePage" />


        <div class="pageWrapper">
            <Navbar/>

            <Error />



            <main  class="min-h-screen bg-[#f8f8f8] dark:bg-gray-950 ">

                <slot />








       </main>

            <Footer/>
        </div>

         <Login />
    </div>
</template>

<script setup>

import { Head,usePage } from '@inertiajs/vue3';
import Navbar from '@/Layouts/Partials/Navbar.vue';
import Footer from '@/Layouts/Partials/Footer.vue';
import { onMounted, computed } from 'vue';
import Login from '@/Components/Login.vue';
import { getLastComment } from '@/store/otherStore';



import { initFlowbite } from 'flowbite'




import { useSubcategoriesStore, useCategoryStore } from '@/store/store';


const useStoreLast = getLastComment();


const categoriesStore = useCategoryStore();
const subcategoriesStore = useSubcategoriesStore();

const page = usePage();
const titlePage=computed(()=> {
    const urlPath=page.url.split('/');
    if(urlPath.length <=1 || urlPath[1] === '')
    {
        return 'Accueil';
    }else{
        return urlPath[1];
    }
})


defineProps({
    title: String,
});

onMounted(() => {
    subcategoriesStore.fetchSubCategories();
    categoriesStore.fetchCategories();
    useStoreLast.fetchLastComment();
    initFlowbite();


});

var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = 'https://embed.tawk.to/65ccc2c50ff6374032cd5eaa/1hmjthlhq';
    s1.charset = 'UTF-8';
    s1.setAttribute('crossorigin', '*');
    s0.parentNode.insertBefore(s1, s0);
})();


//console.log(categories.value);








</script>


