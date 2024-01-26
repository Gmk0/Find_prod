<template>
    <div>

    <Dialog v-model:visible="store.canLogin"

     :closable="false"
     :style="{ width: '30rem' }"
     :breakpoints="{ '1199px': '75vw','900px':'80vw', '575px': '90vw' }"
      position="top"
      :modal="true"
       :pt="{
           mask: {
               style: 'backdrop-filter: blur(2px)'
           }
       }"
     :draggable="false"
     >
        <template #container="{ closeCallback }">
        <div class="scrollbar-sm dark:bg-gray-800 bg-gray-100 p-6 rounded-lg !overflow-hidden">
             <div class="flex justify-between !overflow-hidden scrollbar-sm">
                <div class="text-gray-800 dark:text-gray-100">
                    <h1>Connexion</h1>

                </div>
                <div>
                     <button @click="store.loginUser()" class="btn btn-sm btn-circle btn-outline">
                        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>

            </div>
            <div class="relative flex items-center p-0 !overflow-hidden scrollbar-sm">
                <div class="z-10 !overflow-hidden scrollbar-sm ">
                    <div class="flex flex-wrap">

                        <div
                            class="flex flex-col w-full px-3 scrollbar-sm md:mx-auto md:flex-0 shrink-0">
                            <div
                                class="relative flex flex-col min-w-0 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                <div class="p-2 pb-0 mb-0 bg-transparent border-b-0 md:p-6 rounded-t-2xl">


                                    <h3
                                        class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text">
                                        Content de te revoir</h3>
                                    <p class="mb-0">Entrez votre email et votre mot de passe pour vous connecter</p>
                                </div>
                                <div class="flex-auto p-4 md:p-6">
                                    <form role="form" @submit.prevent="submit">
                                                        <div>

                                            <MazInput
                                                id="email"
                                                v-model="form.email"
                                                type="email"
                                                label="email"

                                            />
                                            <InputError class="mt-2" :message="form.errors.email" />
                                        </div>

                                            <div class="mt-4">

                                            <MazInput
                                                label="password"
                                                v-model="form.password"
                                                type="password"

                                                required
                                                autocomplete="current-password"
                                            />
                                            <InputError class="mt-2" :message="form.errors.password" />
                                        </div>

                                        <div class="flex justify-between">




                                            <div class="block mt-4">
                                                <label class="flex items-center">
                                                    <Checkbox v-model:checked="form.remember" name="remember" />
                                                    <span class="ml-2 text-sm text-gray-600">Se souvenir de moi</span>
                                                </label>
                                            </div>


                                                <Link  :href="route('password.request')" class="mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none ">
                                                Mot de passe oublié ?
                                            </Link>

                                        </div>



                                        <div class="text-center">
                                            <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                class="inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85">

                                                <span>Connexion <span v-if="form.processing">....</span></span>




                                            </button>
                                        </div>
                                        <div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                            <p
                                                class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400">
                                                or </p>
                                        </div>
                                        <div class="flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12">

                                            <div class="w-4/12 max-w-full px-1 ml-auto flex-0">
                                                <a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                                    href="auth/facebook">
                                                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink32">
                                                        <g stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g transform="translate(3.000000, 3.000000)"
                                                                fill-rule="nonzero">
                                                                <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506"
                                                                    r="29.4882047"></circle>
                                                                <path
                                                                    d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                                                                    fill="#FFFFFF"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>

                                            <div class="w-4/12 max-w-full px-1 mr-auto flex-0">
                                                <a class="inline-block w-full px-6 py-1 mb-2 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer dark:border-gray-400 hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                                    href="auth/google">
                                                    <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1"
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        xmlns:xlink="http://www.w3.org/1999/xlink">
                                                        <g stroke="none" stroke-width="1" fill="none"
                                                            fill-rule="evenodd">
                                                            <g transform="translate(3.000000, 2.000000)"
                                                                fill-rule="nonzero">
                                                                <path
                                                                    d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                                                                    fill="#4285F4"></path>
                                                                <path
                                                                    d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                                                                    fill="#34A853"></path>
                                                                <path
                                                                    d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                                                                    fill="#FBBC05"></path>
                                                                <path
                                                                    d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                                                                    fill="#EB4335"></path>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>

                                        </div>

                                    </form>
                                </div>
                                <div
                                    class="hidden p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                    <p class="mx-auto mb-2 text-sm leading-normal">
                                        Vous avez déjà un compte?
                                        <Link :href="route('register')"
                                            class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text">S'inscrire</Link>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        </template>
    </Dialog>

    </div>
</template>

<script setup>

import {ref, computed } from 'vue';
import { Head, Link, useForm } from '@inertiajs/vue3';

import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';

import { useStore } from '@/store/store';

import TextInput from '@/Components/TextInput.vue';



const store = useStore();

const hideModal=()=>{

    store.loginUser();
}

const visible = computed(()=> store.canLogin);

//console.log(visible.value);

//const visible = ref(true);

const form = useForm({
    email: '',
    password: '',
    remember: false,
});

const submit = () => {
    form.transform(data => ({
        ...data,
        remember: form.remember ? 'on' : '',
    })).post(route('login'), {
        onFinish: () => form.reset('password'),
        onSuccess:()=>{
            store.loginUser();
            form.reset('password','email')
        }
    });
};

</script>

<style lang="scss" scoped>

</style>
