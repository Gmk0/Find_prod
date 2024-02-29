<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';


import MazBtn from 'maz-ui/components/MazBtn'

//import Button from 'primevue/button';

import InputError from '@/Components/InputError.vue';

import MazStepper from 'maz-ui/components/MazStepper'
import MazPicker from 'maz-ui/components/MazPicker';


import { ref, inject } from 'vue';
import { useToast } from "primevue/usetoast";
import { Link, useForm } from '@inertiajs/vue3';

const swal = inject('$swal')

const props=defineProps(
    {
        categories: Array
    }
);



const category = ref(props.categories);
const photo =ref(null)

const form =useForm({
    title:'',
    exigence:'',
    description:'',
    dateD:'',
    dateF:'',
    budget:'',
    category_id:'',
    image:null
})



const submit=()=>{




    if (!form.budget || !form.dateD || !form.dateF || !form.title || !form.description || !form.category_id) {
        let errorMessage = 'Veuillez remplir tous les champs requis: ';

        if (!form.budget) {
            errorMessage += 'Budget, ';
        }

        if (!form.dateD) {
            errorMessage += 'Date de début, ';
        }

        if (!form.dateF) {
            errorMessage += 'Date de fin, ';
        }

        if (!form.title) {
            errorMessage += 'Titre, ';
        }

        if (!form.description) {
            errorMessage += 'Description, ';
        }

        if (!form.category_id) {
            errorMessage += 'Catégorie, ';
        }

        // Remove the trailing comma and display the message
        swal(errorMessage.slice(0, -2));
        return false;
    }


    form.post(route('storeMission'),{
        onSuccess: () =>{
            form.reset(),
            swal('Mission créée avec succès');
        },
        onError: (error) => console.log(error)
    });


}


const formattedPrice = ref();

const toast = useToast();

const onAdvancedUpload = () => {
    toast.add({ severity: 'info', summary: 'Success', detail: 'File Uploaded', life: 3000 });
};

const step = ref(1);
const date = ref('');


const onSelect = (event) => {
    form.image = event.files;
};

const currentDate = new Date();

const minMaxDates = ref({
    min: currentDate.toISOString().split('T')[0],
    max: currentDate.toISOString().split('T')[0],
})





const changeStep = (newStep) => {

    if(newStep== 2)
    {


        if(!form.title  || !form.category_id)
        {
            swal('Veuillez remplir tous les champs de la premiere section.');

            return false;
        }
       step.value = newStep;

    }
    step.value = newStep;
};


defineOptions({
    layout: WebLayout,

});


</script>
<template>
   <div class="min-h-screen pt-16 border-t border-gray-100 ">

       <div class="mx-4 mt-2 mb-4">
                <nav class="flex" aria-label="Breadcrumb">
                <ol class="inline-flex items-center space-x-1 md:space-x-3">
                    <li class="inline-flex items-center">
                    <Link :href="route('home')" class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                        <svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"/>
                        </svg>
                        Accueil
                    </Link>
                    </li>

                    <li aria-current="page">
                    <div class="flex items-center">
                        <svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                        </svg>
                        <span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Mission-creation</span>
                    </div>
                    </li>
                </ol>
                </nav>
        </div>

        <div class="grid px-2 py-3 lg:grid-cols-2 ">

            <div class="hidden col-span-1 p-4 lg:block">
                    <img src="/images/hero/team.svg" class="object-cover w-full h-auto p-2 bg-white rounded-md " alt="">
            </div>

            <div class="flex flex-col w-full mx-auto min-h-72 lg:col-span-1 lg:mx-0 ">
                <div class="p-6">

                        <p class="text-gray-700 text-lg dark:text-gray-100 font-bega-medium mb-4">Vous avez besoin d'un service en particulier? Créez une mission dès maintenant!</p>

                    </div>

                <div>
                      <MazStepper isabled-next-steps="true">
                <template #title-1>
                Détails de la mission
                </template>
                <template #subtitle-1>
                Décrivez la mission en détail
                </template>


                    <template #content-1="{ nextStep }">
                    <form @submit.prevent="nextStep" class="flex flex-col mt-4 ">
                                <div class="w-full">
                                    <MazInput
                                        v-model="form.title"
                                        placeholder="Titre"
                                        required
                                    />
                                    <InputError class="mt-2" :message="form.errors.title" />

                                </div>
                                <div class="w-full mt-4 mb-4">



                                    <textarea id="message" placeholder="Decrivez votre mission" rows="4" v-model="form.description"
        class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-amber-500 focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">

                                            </textarea>


                                         <InputError class="mt-2" :message="form.errors.description" />

                                </div>
                                 <div class="card">
                                    <Toast />
                                    <FileUpload
                                    :auto="true"
                                    @select="onSelect"
                                    @upload="onAdvancedUpload($event)"
                                    :multiple="true"
                                    accept="image/*"
                                    :maxFileSize="1000000">

                                    <template #header="{ chooseCallback }">
                                    <div class="flex flex-wrap flex-1 gap-2 justify-content-between align-items-center">
                                        <div class="flex gap-2">
                                            <Button @click="chooseCallback()" icon="pi pi-images" rounded outlined></Button>

                                        </div>
                                    </div>
                                     </template>
                                        <template #empty>
                                            <p>Glissez et déposez les fichiers ici pour les uploader.</p>
                                        </template>
                                    </FileUpload>
                                 </div>



                                <div class="mt-4 mb-4 W-full">
                                    <MazSelect
                                    v-model="form.category_id"
                                     :options="props.categories"
                                    option-value-key="id"
                                    option-label-key="name"
                                    option-input-value-key="name"


                                      placeholder="Categories"
                                      />

                                       <InputError class="mt-2" :message="form.errors.category_id" />
                                </div>
                                <div>
                                    <MazBtn type="submit">
                                    Suivant
                                    </MazBtn>
                                </div>

                    </form>
                    </template>

                    <template #title-2>
                      Échéance & Budget
                    </template>
                    <template #subtitle-2>
                   Date d'échéance & Budget
                    </template>
                    <template #title-info-2>

                    </template>
                    <template #content-2="{ nextStep, previousStep }">
                            <div  class="flex flex-col w-full mt-4">
                                    <div class="flex flex-col gap-4 md:flex-row lg:gap-8">
                                    <div class="flex w-full ">

                                        <MazPicker
                                            locale="fr-FR"
                                            :min-date="minMaxDates.min"
                                        v-model="form.dateD"
                                        label="Date debut"
                                    />



                                          <InputError class="mt-2" :message="form.errors.dateD" />
                                    </div>
                                    <div class="flex w-full">

                                        <MazPicker
                                        locale="fr-FR"
                                        :min-date="minMaxDates.min"
                                    v-model="form.dateF"
                                    label="Date Fin"
                                />


                                                   <InputError class="mt-2" :message="form.errors.dateF" />


                                    </div>
                                    </div>
                                    <div class="mt-4 mb-4">
                                         <textarea v-model="form.exigence" id="message" placeholder="Exigences pour la mission" rows="4"
                                         class="block w-full rounded-lg border border-gray-300 border-spacing-x-0.5 bg-gray-50 p-2.5 text-sm text-gray-900 focus:  focus:ring-amber-500 dark:border-gray-800 dark:bg-gray-900 dark:text-white dark:placeholder-gray-400 dark:focus:border-amber-500 dark:focus:ring-amber-500">

                                            </textarea>


                                    </div>
                                      <div>
                                        <MazInputPrice
                                            v-model="form.budget"
                                            label="Budget de la mission"
                                            currency="USD"
                                            locale="en-US"
                                            @formatted="formattedPrice = $event"
                                        />


                                                <InputError class="mt-2" :message="form.errors.budget" />
                                        </div>
                                </div>
                            <div class="flex items-end mt-4">


                       <button type="button"
                        @click="submit()"

                            class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">
                            Soumettre
                        </button>
                    </div>
                    </template>



          </MazStepper>




                </div>


            </div>

        </div>

    </div>
</template>




<style scoped>
/* Styles for active and inactive steps */


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}

</style>
