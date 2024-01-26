<template>
    <div class="min-h-screen pt-20 lg:mx-auto 2xl:mx-0 2xl:px-2 lg:px-8">

        <section class="relative  overflow-hidden  pt-8 pb-12  lg:pb-[90px]">
            <div class="container px-4 mx-auto">
                <div class="flex flex-wrap -mx-4">
                    <div class="w-full px-4">
                        <div class="mx-auto mb-[20px] max-w-[520px] text-center lg:mb-20">
                            <span class="block mb-2 text-lg tracking-wide uppercase font-bega-semibold text-amber-600">
                                Feedback
                            </span>
                            <h2 class="mb-4 text-xl font-bold text-dark font-bega-medium">
                                Votre Avis Compte
                            </h2>

                        </div>
                    </div>
                </div>
                 <div class="max-w-6xl px-8 pt-2 mx-auto">

            <form @submit.prevent="sendFeedback()" class="flex flex-col-reverse gap-6 mb-8 lg:grid lg:gap-2 lg:grid-cols-2 lg:mb-4">
                <div class="flex flex-col gap-4">

                     <TextInput
                        id="nom"

                        type="text"
                        placeholder="Nom"
                        class="block w-full mt-1"
                        v-model="form.name"
                        disabled
                        required />
                        <TextInput
                            id="nom"
                            v-model="form.email"
                            type="text"
                            placeholder="Email"
                            class="block w-full mt-1"
                            disabled
                            required />



                    <div class="col-span-2">
                        <textarea
                        v-model="form.message"
                        name="message"
                        required
                        class="block w-full px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-56 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Message">
                    </textarea>

                    </div>
                    <div v-if="$page.props.auth.user">
                       <ButtonMt type="submit">
                        Envoyer
                       </ButtonMt>
                    </div>
                    <div v-else>
                        <ButtonMt @click="userStateLogin.loginUser()">
                        connecter vous
                        </ButtonMt>
                    </div>


                </div>
                <div class="px-4 mt-4 lg:mt-0">

                        <div class="bg-white rounded-lg dark:bg-gray-700">

                            <div class="">
                                <div class="max-w-xl p-6 mx-auto mt-5 border rounded-lg">
                                    <p class="mb-4 text-lg text-center font-bega-medium">Vous avez utilisé FIND pour faire une différence
                                        dans la vie des personnes et contribuer à répondre à leurs besoins.</p>
                                    <p class="mb-4 text-center">Partagez votre expérience et aidez-nous à améliorer nos efforts pour créer une
                                        expérience encore plus positive pour nos utilisateurs.</p>
                                    <p class="mb-6 text-center">Votre feedback est précieux pour nous et pour ceux qui cherchent à trouver
                                        des solutions et à faciliter leur quotidien.</p>
                                </div>

                            </div>
                        </div>


                </div>

            </form>
            <hr>

            <div class="pt-4">

                <div>
                    <h1 class="text-center text-gray-700 dark:text-gray-200">Les Avis</h1>
                </div>

                <div class="grid pt-4 lg:grid-cols-2">



                </div>



            </div>








        </div>

            </div>

        </section>
    </div>
</template>






<script setup>
import WebLayout from '@/Layouts/WebLayout.vue';
// Assurez-vous d'ajuster le chemin d'importation

import BreadCumbWeb from '@/Components/BreadCumbWeb.vue';


import { useForm, usePage } from '@inertiajs/vue3';


import TextInput from '@/Components/TextInput.vue';
import { useStore } from '@/store/store';



const userStateLogin = useStore();
const page= usePage();

const form = useForm({
    name: page.props.auth.user?.name,
    email: page.props.auth.user?.email,
    message: '',
});


defineOptions({
    layout: WebLayout,

});



const sendFeedback = () => {

    form.post(route('sendFeedbackPost'),{
        onFinish:()=>{
            form.reset('message')
        }
    })


};


</script>
<style lang="scss" scoped></style>
