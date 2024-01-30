<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
import { Link, router } from '@inertiajs/vue3';
import { useStore } from '@/store/store'; // Assurez-vous d'ajuster le chemin d'importation
import {  ref, watch } from 'vue';
import { Collapse } from 'vue-collapsed'
import pickBy from 'lodash/pickBy';
import throttle from 'lodash/throttle';


import ServiceCard from '@/Components/ServiceCard.vue';



//import InputText from 'primevue/inputtext';


const showAbout =ref(false);

const props = defineProps({
    services: Object,
    categories: Array,
    subcategories: Array,
    subcategory: Object,
    filters: Object,
    tags: Array,
    category : Object,
});

const form = ref({
    search: props.filters.search,
    price: props.filters.price,
    level: props.filters.level,
    priceMin: props.filters.priceMin,
    tag: props.filters.tag,
    deliveryTime: props.filters.deliveryTime,
    orderBy: props.filters.orderBy,

});

const showDeliveryFilter = ref(false);
const showCategoryFilter = ref(true);
const showTagFilter = ref(true);
const showFiltre = ref(false);
const sous_category = ref(null);

const cities = ref([
    { name: 'Niveau 1', code: '1' },
    { name: 'Niveau 2', code: '2' },
    { name: 'Niveau 3', code: '3' },
    { name: 'Niveau 4', code: '4' },

]);

const deliveryTime = ref([
    {
        name: '1-5 jours', code: '1-5'
    },
    {
        name: '5-10 jours', code: '5-10'
    },
    {
        name: ' +10 jours', code: '10-100'
    },
]);

const trieElement = ref([
    {
        name: 'Plus recent', code: 'created_at-asc'
    },
    {
        name: 'Plus ancient', code: 'created_at-desc'
    },
    {
        name: 'Prix descendant', code: 'basic_price-desc'
    },
    {
        name: 'Prix ascendant', code: 'basic_price-asc'
    },
    {
        name: 'populaire', code: 'populaire-asc'
    }
])


const toogleAbout =()=>{

    showAbout.value=!showAbout.value;

    console.log(showAbout.value);

}



const selectedValue = ref()


const truncateText = (text, length) => {
    return text.length > length ? text.slice(0, length) + '...' : text;
}

const restPrice=()=>{


  form.value.price=null;
  form.value.priceMin=null;
}

watch(form, throttle(() => {

    router.get(route('SubcategoryName', [props.category.slug, props.subcategory.name]),
        pickBy(form.value),
        {
            preserveState: true,
            preserveScroll: true,
            only: ['services', 'filters']
        })
}, 3000), { deep: true, })

const store = useStore();

defineOptions({
    layout: WebLayout,

});








</script>
<template>
     <div class="relative w-full min-h-screen pb-12 pt-14">
         <div class="relative flex items-center justify-between px-4 py-4 lg:px-12 dark:bg-gray-800 bg-skin-fill">
                            <div class="flex items-center justify-center ">
                                <h1 class="text-lg text-white font-bega-semibold lg:text-4xl">{{ props.subcategory.name }}</h1>
                            </div>
                            <div class="relative flex">
                                 <Link :href="route('createProject')"  class="relative items-center justify-center hidden h-10 px-4 mx-auto text-sm duration-300 rounded-md lg:flex bg-gray-50 before:absolute before:inset-0 before:transition hover:scale-105 active:duration-75 active:scale-95 sm:w-max">

                                    <span class="relative text-base font-semibold text-amber-600">Soumettre un projet</span>

                            </Link>
                    </div>
            </div>

            <div>
                <div class="px-4 mt-4 mb-4">
                      <nav class="flex" aria-label="Breadcrumb">
                    <ol class="inline-flex items-center space-x-1 md:space-x-3">
                        <li class="inline-flex items-center hidden">
                        <a href="#" onclick="history.back()" class="inline-flex items-center px-4 text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z" />
                        </svg>
                        <span class="mr-2">
                            Retour
                        </span>

                        </a>
                        </li>

                        <li aria-current="page">
                        <Link :href="route('categoryName', props.category.slug)" class="flex items-center">
                            <svg class="hidden w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                            </svg>
                            <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400"> {{ truncateText(props.category.name,12)}}</span>
                        </Link>
                        </li>
                         <li aria-current="page">
                            <div class="flex items-center">
                                <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                </svg>
                                <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">{{ truncateText(props.subcategory.name,12) }}</span>
                            </div>
                            </li>
                    </ol>
                    </nav>
                </div>
                <div v-if="props.subcategory.description !=null" class="flex items-center justify-center mt-4 lg:hidden ">
                    <Button label="aprops" size="small" outlined   @click="toogleAbout()" />
                </div>
                <div  :class="showAbout?'block ':'lg:block hidden'" class="px-8 py-2 mb-2 ">
                    <div class="prose" v-html="props.subcategory.description">


                    </div>

                </div>
                <hr  class="w-full h-2 border-t border-gray-200 dark:border-gray-600"/>

                <div class="relative mt-4 ">
                      <div class="relative z-30 flex flex-col h-auto grid-cols-12 px-4 py-2 bg-white lg:grid dark:bg-gray-800 lg:z-0 lg:relative">

                            <div class="hidden lg:col-span-3 lg:flex"></div>
                            <div class="w-full my-2 lg:col-span-9">
                                  <div class="px-4 lg:col-span-12">
                                        <MazInput v-model="form.search" right-icon="globe-alt" placeholder="recherche"
                                             />
                            </div>

                           <div class="sticky top-0 grid col-span-12 gap-4 lg:grid-cols-12 lg:gap-2 ">

                                </div>
                                <div class="flex flex-row justify-between gap-2 px-4 lg:col-span-3">
                                    <div class="">
                                        <div class="block m-2 lg:hidden">

                                             <Button size="small" icon="pi pi-filter-fill"  @click="showFiltre = !showFiltre"
                                            rounded
                                            outlined
                                            aria-label="Filter" />
                                        </div>
                                    </div>
                                     <div class="block m-2 lg:hidden">
                                                  <div class="relative flex">
                                                        <MazSelect
                                                        v-model="form.orderBy"
                                                        label="Trier par"
                                                        option-value-key="code"
                                                        option-label-key="name"
                                                        option-input-value-key="name"
                                                        :options="trieElement"
                                                        />
                                                        <button v-if="form.orderBy" @click="form.orderBy = null" class="absolute right-6 p-1 text-white z-[100]  rounded top-1/4">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        </button>
                                                    </div>





                                    </div>



                                </div>

                            </div>


                    </div>

                    <div class="grid grid-cols-12 px-4">

                         <div class="relative col-span-3 p-2">

                                <div :class="showFiltre ? 'fixed inset-0 z-[150]  top-0  bottom-0     p-4 transition-all duration-200 w-full' : 'hidden w-full mt-0  p-4   z-20'"
                                    class="overflow-x-hidden overflow-y-auto bg-white rounded-md lg:h-auto dark:bg-gray-800 lg:block">
                                    <div class="flex flex-col p-2">


                                        <div class="flex flex-wrap gap-2 lg:grid lg:grid-cols-1">




                                        </div>

                                        <div class="mt-4">

                                            <h1 class="mb-4 text-lg font-bold text-gray-800">Prix</h1>
                                           <div class="w-full space-y-1 dark:text-gray-100">




                                                 <div aria-hidden="true" class="flex flex-col justify-between gap-4 px-1">
                                                      <span class="mb-4 text-base dark:text-gray-100"> Prix Service</span>
                                                    <div class="flex justify-between gap-4 p-2 border rounded-md">
                                                         <MazInputNumber
                                                          v-model="form.priceMin"
                                                            placeholder="min"
                                                         :no-buttons="true"   />
                                                          <MazInputNumber
                                                            v-model="form.price"
                                                            placeholder="max"
                                                            :no-buttons="true"
                                                            :min="5"
                                                            :max="10000"
                                                            style="width: 200px;"

                                                        />

                                                    </div>
                                                </div>

                                                 <button v-if="form.price != null" @click="restPrice()" class="p-2 text-gray-800 bg-gray-200 rounded-md">
                                                         effacer
                                                </button>
                                            </div>

                                        </div>


                                        <div
                                            class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                            <button @click="showCategoryFilter = !showCategoryFilter"
                                                class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                                <span class="text-base dark:text-gray-100"> Niveau Freelannce</span>
                                                <svg v-show="!showCategoryFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                                </svg>
                                                <svg v-show="showCategoryFilter" class="w-4 h-4 fill-current"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                    <path
                                                        d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                                </svg>
                                            </button>

                                            <Collapse :when="showCategoryFilter" class="m-2">
                                                <div class="relative flex">
                                                    <MazSelect
                                                    v-model="form.level"
                                                    label="Choisir un niveau"
                                                    option-value-key="code"
                                                    option-label-key="name"
                                                    option-input-value-key="name"
                                                    :options="cities"
                                                    />
                                                    <button v-if="form.level" @click="form.level=null" class="absolute right-9 p-1 text-white z-[100]  rounded top-[20%]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                    </svg>
                                                    </button>
                                                </div>



                                            </Collapse>

                                            <div
                                                class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                                <button @click="showDeliveryFilter = !showDeliveryFilter"
                                                    class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                                    <span class="text-base dark:text-gray-100"> Temps de livraison</span>
                                                    <svg v-show="!showDeliveryFilter" class="w-4 h-4 fill-current"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                                    </svg>
                                                    <svg v-show="showDeliveryFilter" class="w-4 h-4 fill-current"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                                    </svg>
                                                </button>
                                                <Collapse :when="showDeliveryFilter" class="m-2">
                                                     <div class="relative flex">
                                                        <MazSelect
                                                        v-model="form.deliveryTime"
                                                        label="Choisir un le temps"
                                                        option-value-key="code"
                                                        option-label-key="name"
                                                        option-input-value-key="name"
                                                        :options="deliveryTime"
                                                        />
                                                        <button v-if="form.deliveryTime" @click="form.deliveryTime = null" class="absolute right-9 p-1 text-white z-[100]  rounded top-[20%]">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                        </svg>
                                                        </button>
                                                    </div>






                                                </Collapse>
                                            </div>

                                            <div
                                                class="relative py-3 mt-4 mb-4 border-t border-gray-400 ">
                                                <button @click="showTagFilter = !showTagFilter"
                                                    class="flex items-center justify-between w-full mb-2 font-bold text-gray-700 focus:outline-none">
                                                    <span class="text-base dark:text-gray-100"> Tag de recherche</span>
                                                    <svg v-show="!showTagFilter" class="w-4 h-4 fill-current"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M5.293 6.293a1 1 0 011.414 0L10 9.586l2.293-2.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" />
                                                    </svg>
                                                    <svg v-show="showTagFilter" class="w-4 h-4 fill-current"
                                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                        <path
                                                            d="M14.293 15.293a1 1 0 01-1.414 0L10 12.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 010 1.414z" />
                                                    </svg>
                                                </button>
                                                <Collapse :when="showTagFilter">



                                                    <span v-for="(tag, index) in tags"
                                                        class="inline-block px-3 py-1 mb-2 mr-2 text-sm font-semibold rounded-full cursor-pointer"
                                                      :class="{ 'border-2 border-amber-500 bg-amber-100 text-amber-700': form.tag === tag, 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200': form.tag !== tag }"

                                                       >
                                                        {{ tag }}
                                                    </span>


                                                </Collapse>
                                            </div>

                                        </div>

                                    </div>

                                    <div class="flex gap-4 lg:hidden">
                                         <button type="button"
                                                @click="showFiltre = !showFiltre"
                                                class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                                                    appliquer
                                                </button>

                                                <button
                                                @click="showFiltre = !showFiltre"
                                                type="button"
                                                class="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
                                                    Fermer
                                                </button>
                                    </div>

                                </div>
                                <!--End Sidebar-->
                                <!--Main Content-->


                            </div>

                               <div class="col-span-12 pt-8 lg:col-span-9">

                                <div class="flex-row-reverse justify-between hidden px-4 py-4 lg:flex">




                                    <div class=" lg:block">

                                            <div class="relative flex">
                                                            <MazSelect
                                                            v-model="form.orderBy"
                                                            label="Trier par"
                                                            option-value-key="code"
                                                            option-label-key="name"
                                                            option-input-value-key="name"
                                                            :options="trieElement"
                                                            />
                                                            <button v-if="form.orderBy" @click="form.orderBy = null" class="absolute right-7 p-1 text-white z-[100]  rounded top-[20%] ">
                                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-5 h-5">
                                                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                                                            </svg>
                                                            </button>
                                                        </div>

                                    </div>
                                    <div class=" lg:block">
                                             <pagination class="mt-6" :links="props.services.links" />
                                        </div>


                                </div>

                                <div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">

                                    <div v-for="service in props.services.data">
                                           <ServiceCard :service="service" :key="service.id"/>

                                    </div>

                                    <div v-if="props.services.data.length == 0" class="flex items-center justify-center h-64">
                                        <span class="text-lg font-medium text-gray-500">
                                            Aucun élément trouvé.
                                        </span>
                                    </div>






                                </div>

                                <div class="py-4">


                                    <div>
                                           <pagination class="mt-6" :links="props.services.links" />


                                    </div>


                                </div>

                            </div>

                    </div>
                    <div class="grid px-4 pt-16 lg:grid-cols-12 ">
                            <div class="hidden lg:col-span-3 lg:block">

                            </div>
                            <div class="lg:col-span-9">

                                <div class="items-center mb-4">
                                    <h1 class="text-lg font-semibold text-center">Du meme Categories</h1>
                                </div>
                                <div class="flex flex-wrap gap-4">

                                    <div v-for="subcategory in subcategories">
                                        <Link :href="route('SubcategoryName', [props.category.name, subcategory.name])"
                                            class="flex gap-2 p-2 transition-all transform bg-gray-200 rounded-lg shadow-sm dark:bg-gray-700 hover:scale-95 active:bg-amber-400 focus:bg-amber-400 focus:text-gray-50 ">

                                                <img v-if="subcategory.illustration != null" :src="'/storage/' + subcategory.illustration" class="object-fill w-8 p-1 rounded-md" alt="">


                                            <span class="">{{ subcategory.name }}</span>


                                            <div
                                                class="absolute p-2 inline-flex items-center justify-center w-4 h-4 text-[10px] font-bold text-white bg-gray-400 border-2 border-white rounded-full -top-2 -right-2 dark:border-gray-900">
                                                {{ subcategory.service_count }}</div>
                                        </Link>
                                    </div>


                                </div>



                            </div>
                     </div>






                </div>



            </div>
        </div>
</template>







<style lang="scss" scoped></style>
