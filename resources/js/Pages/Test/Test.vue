<template>
    <div class="min-h-screen px-6 py-16 font-bega-light">







    <form class="flex items-center justify-center mt-16" @submit.prevent="verify()">

      <button type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
    </form>






    </div>
</template>






<script setup >

import WebLayout from '@/Layouts/WebLayout.vue';
import { Link, useForm } from '@inertiajs/vue3';
import { ref, onBeforeUnmount, onMounted } from 'vue';



const selectedValue = ref()

// Assurez-vous d'ajuster le chemin d'importation
//import { onMounted } from 'vue';

const phone=ref('333333');

const form=useForm({
    message:'',
});

const sendData =()=>{
    form.post(route('paidTest'), {

        onSuccess: () => {
            alert('ok');
        },
        onError: (error) => {
            alert(error.message);

        }
    });

}


const tab=ref('home');

const toogle=(value)=>{
    tab.value = value;
}

const filtres = ref(false);
const isMobile = ref(false);

const toggleVisibility = () => {
    if (isMobile.value) {
        changeT.value = !changeT.value;
    }
};



const handleResize = () => {
    //isMobile.value = window.innerWidth <= 768;
    if(window.innerWidth <= 768)
    filtres.value=false;

    // ajustez la valeur en fonction de votre définition de mobile
};

onMounted(() => {
    isMobile.value = window.innerWidth <= 768;
    window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
    window.removeEventListener('resize', handleResize);
});



defineOptions({
    layout: WebLayout,

});



</script>
<style>


.slide-enter-active, .slide-leave-active {
  transition: all .3s ease;
}
.slide-enter, .slide-leave-to {
  transform: translateX(100%);
}


/* Sélectionnez l'élément actif avec l'ID 'profile-tab' */
[aria-selected="true"] {

      @apply text-skin-fill hover:text-skin-fill  border-skin-fill dark:border-blue-500;
}

</style>
