<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';
import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';
import { onMounted } from 'vue';

import { initFlowbite } from 'flowbite';
//import VueTelInput from 'vue-tel-input';


onMounted(()=>{
    initFlowbite();
})

import { ref } from 'vue';

const props=defineProps({
    code:{
         type: String,
          default: '',
    },
})

const form = useForm({
    name: '',
    email: '',
    password: '',
    phone: '',
    password_confirmation: '',
    terms: false,
    referral_code: props.code,
});

const tel=ref('');

const onUpdateTel = () => {
    form.phone='';
    //form.phone = tel.value + form.phone;
};


const onPhoneInput=()=> {

     let numericPhone = '';
    for (const char of form.phone) {
        if (/\d/.test(char)) {
            numericPhone += char;
        }
    }



    if (form.phone.length > 11) {
        form.phone = form.phone.slice(0, 11);
    }

}

const submit = () => {




    form.transform(data => ({
        ...data,
        phone: form.phone.replace(/^\+/, ''),
    })).post(route('register'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
const updatePopover = () => {
    // Mettez à jour votre popover ici en fonction de password.value
    if (form.value.password.length >= 6) {
        // Mettez à jour l'indicateur de longueur du mot de passe
        alert('ok');
    }
    if (/[a-z]/.test(form.value.password) && /[A-Z]/.test(form.value.password)) {
        // Mettez à jour l'indicateur de casse des lettres
    }
    if (/[@$!%*#?&]/.test(form.value.password)) {
        // Mettez à jour l'indicateur de symbole
    }
    if (password.value.length >= 12) {
        // Mettez à jour l'indicateur de longueur du mot de passe
    }
}

</script>



<template>

    <Head title="Inscription"/>
       <nav
            class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
                <div class="container flex items-center justify-between py-0 flex-wrap-inherit">
                    <Link :href="route('home')"
                        class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"><span
                            class=" to-orange-400">FIND</span>
                    </Link>

                    <div navbar-menu
                        class="items-center flex-grow transition-all ease-soft duration-350 lg-max:bg-white lg-max:max-h-0 lg-max:overflow-hidden basis-full rounded-xl lg:flex lg:basis-auto">
                        <ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                            <li>
                                <Link :href="route('home')" class="flex items-center px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                    aria-current="page" >
                                    <i class="mr-1 text-white lg-max:text-slate-700 fa fa-chart-pie opacity-60"></i>
                                    Accueil
                                </Link>
                            </li>
                            <li>
                                <Link :href="route('profile.show')" class="block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                    >
                                    <i class="mr-1 text-white lg-max:text-slate-700 fa fa-user opacity-60"></i>
                                   Profile
                                </Link>
                            </li>

                            <li>
                                <Link class="block px-4 py-2 mr-2 text-sm font-normal text-white transition-all duration-250 lg-max:opacity-0 lg-max:text-slate-700 ease-soft-in-out lg:px-2 lg:hover:text-white/75"
                                    :href="route('login')">
                                    <i class="mr-1 text-white lg-max:text-slate-700 fas fa-key opacity-60"></i>
                                   Connexion
                                </Link>
                            </li>
                        </ul>


                    </div>
                </div>
            </nav>

            <main class="mt-0 transition-all duration-200 dark:bg-gray-900 ease-soft-in-out">
                <section class="min-h-screen pt-4 mb-32">
                  <div class="relative flex items-start pt-12 pb-56 mx-6 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
                    style="background-image: url('/images/logo/ff3.png')">
                    <span
                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50 gradient2 from-gray-900 to-slate-800"></span>
                    <div class="container z-10">
                        <div class="flex flex-wrap justify-center -mx-3">
                            <div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                <h1 class="mt-12 mb-2 text-white">Bienvenue</h1>
                                <p class="text-white">
                                    <span>Trouvez les services parfaits dont vous avez besoin</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                    <div class="container">
                        <div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                            <div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">
                                <div
                                    class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border">
                                    <div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl">
                                        <h5>Inscrivez-vous</h5>
                                    </div>
                                    <div v-if="props.code===''" class="flex flex-wrap px-3 -mx-3 sm:px-6 xl:px-12">
                                        <div class="hidden w-3/12 max-w-full px-1 ml-auto flex-0">
                                            <a class="inline-block w-full px-6 py-3 mb-4 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                                href="auth/facebook">
                                                <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink32">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(3.000000, 3.000000)" fill-rule="nonzero">
                                                            <circle fill="#3C5A9A" cx="29.5091719" cy="29.4927506"
                                                                r="29.4882047">
                                                            </circle>
                                                            <path
                                                                d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                                                                fill="#FFFFFF"></path>
                                                        </g>
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>

                                        <div class="max-w-full px-1 mx-auto  flex-0">
                                            <a class="inline-block w-full px-6 py-3 mb-4 text-xs font-bold text-center text-gray-200 uppercase align-middle transition-all bg-transparent border border-gray-200 border-solid rounded-lg shadow-none cursor-pointer hover:scale-102 leading-pro ease-soft-in tracking-tight-soft bg-150 bg-x-25 hover:bg-transparent hover:opacity-75"
                                                href="auth/google">
                                                <svg width="24px" height="32px" viewBox="0 0 64 64" version="1.1"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    xmlns:xlink="http://www.w3.org/1999/xlink">
                                                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                                                        <g transform="translate(3.000000, 2.000000)" fill-rule="nonzero">
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
                                        <div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                            <p
                                                class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white dark:bg-gray-800 text-slate-400">
                                                or</p>
                                        </div>
                                    </div>
                                    <div>

                <div>

                                <div class="flex-auto px-6 py-2 pb-12">

                                    <form @submit.prevent="submit" role="grid grid-cols-1 gap-6">

                                         <div class="mb-4">
                                            <MazInput
                                            label="Nom"
                                            type="text"
                                            v-model="form.name"
                                            :color="'#9acd32'" />

                                            <InputError class="mt-2" :message="form.errors.name" />
                                        </div>
                                         <div class="mt-4">
                                                <MazPhoneNumberInput
                                                label="Telephone"
                                                country-locale="fr-FR"
                                                :success="false"
                                                v-model="form.phone"
                                                :translations="{
                                                    countrySelector: {
                                                        placeholder: 'Code pays',
                                                        error: 'Choisissez un pays',
                                                        searchPlaceholder: 'Rechercher un pays',
                                                    },
                                                    phoneInput: {
                                                        placeholder: 'Numéro de téléphone',
                                                        example: 'Exemple :',
                                                    },
                                                }"

                                                />
                                                <InputError class="mt-2" :message="form.errors.phone" />
                                            </div>

                                        <div class="mt-4">
                                            <MazInput
                                                label="Email"
                                                type="email"
                                                v-model="form.email"
                                                :color="'#9acd32'" />
                                            <InputError class="mt-2" :message="form.errors.email" />
                                        </div>

                                        <div class="mt-4">
                                             <MazInput
                                                    label="Mot de passe"
                                                    type="password"
                                                    v-model="form.password"
                                                    required

                                                    data-popover-target="popover-password" data-popover-placement="bottom"

                                                    :color="'#9acd32'" />

                                            <InputError class="mt-2" :message="form.errors.password" />




                                        </div>

                                        <div class="mt-4">

                                            <MazInput
                                            label="Mot de passe Confirmer"
                                            type="password"
                                            v-model="form.password_confirmation"
                                            required
                                            :color="'#9acd32'" />

                                            <InputError class="mt-2" :message="form.errors.password_confirmation" />
                                        </div>
                                         <div class="mt-4">

                                                <MazInput
                                                label="Code de parrainage (facultatif)"
                                                type="text"
                                                v-model="form.referral_code"

                                                :color="'#9acd32'" />
                                                <InputError class="mt-2" :message="form.errors.referral_code" />
                                            </div>

                                        <div v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature" class="mt-4">
                                            <InputLabel for="terms">
                                                <div class="flex items-center">
                                                    <Checkbox id="terms" v-model:checked="form.terms" name="terms" required />

                                                    <div class="ml-2">
                                                        j'accepte <a target="_blank" :href="route('terms.show')" class="text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Conditions d'utilisation</a> et <a target="_blank" :href="route('policy.show')" class="text-sm text-gray-600 underline rounded-md hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">Politique de confidentialité</a>
                                                    </div>
                                                </div>
                                                <InputError class="mt-2" :message="form.errors.terms" />
                                            </InputLabel>
                                        </div>




                                        <div class="text-center">
                                            <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                class="inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white">


                                                            <span>Inscription</span>

                                            </button>

                                        </div>
                                        <p class="mt-4 mb-0 text-sm leading-normal">Vous avez deja un compte ?
                                            <Link :href="route('login')"
                                                class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-orange-600 to-orange-400 bg-clip-text">Connectez vous
                                            </Link>
                                        </p>
                                    </form>


                                </div>
                                    </div>

                                    </div>



                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->


                 <FooterGuest />

            </main>




</template>


<style lang="css"  scoped>
@import url('../../../css/tailwind.css');
@import url('../../../css/app.css');


.gradient {
    background: linear-gradient(100deg, #FF9E5E 10%, rgb(69, 67, 67) 100%);
}

.gradient2 {
    background: linear-gradient(80deg, #fd8b3f 20%, rgb(47, 46, 46) 100%);
}
</style>
