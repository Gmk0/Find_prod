<script setup>
import { Head, Link, useForm } from '@inertiajs/vue3';

import Checkbox from '@/Components/Checkbox.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';

import TextInput from '@/Components/TextInput.vue';
import GuestLayout from '@/Layouts/GuestLayout.vue';

import { useDark, useToggle } from '@vueuse/core';

defineProps({
    canResetPassword: Boolean,
    status: String,
});


defineOptions({layout : GuestLayout })

const isDark = useDark();



const dark = useToggle(isDark);

const ToggleDark = () => {

    dark();


};


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
    });
};
</script>





<template>

    <Head title="Connexion"/>

        <div class="container sticky top-0 z-sticky">
            <div class="flex flex-wrap -mx-3">
                <div class="w-full max-w-full px-3 flex-0">
                    <!-- Navbar -->
                    <nav
                        class="absolute top-0 left-0 right-0 z-30 flex flex-wrap items-center px-4 py-2 mx-6 my-4 shadow-soft-2xl rounded-blur bg-white/80 dark:bg-gray-800 backdrop-blur-2xl backdrop-saturate-200 lg:flex-nowrap lg:justify-start">
                        <div class="flex items-center justify-between w-full p-0 pl-6 mx-auto flex-wrap-inherit">
                            <Link :href="route('home')"
                                class="leading-pro hover:scale-102 hover:shadow-soft-xs active:opacity-85 ease-soft-in text-xs tracking-tight-soft shadow-soft-md bg-150 bg-x-25 bg-gradient-to-tl from-gray-900 to-slate-800 rounded-3.5xl mb-0 mr-1 inline-block cursor-pointer border-0 bg-transparent px-8 py-2 text-center align-middle font-bold uppercase text-white transition-all"><span
                                    class=" to-amber-400">FIND</span>
                            </Link>
                            <button navbar-trigger
                                class="px-3 py-1 ml-2 text-lg leading-none transition-all bg-transparent border border-transparent border-solid rounded-lg shadow-none cursor-pointer ease-soft-in-out lg:hidden"
                                type="button" aria-controls="navigation" aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span
                                    class="inline-block w-6 h-6 mt-2 align-middle bg-center bg-no-repeat bg-cover bg-none">
                                    <span bar1
                                        class="w-5.5 rounded-xs relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                    <span bar2
                                        class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                    <span bar3
                                        class="w-5.5 rounded-xs mt-1.75 relative my-0 mx-auto block h-px bg-gray-600 transition-all duration-300"></span>
                                </span>
                            </button>
                            <div navbar-menu
                                class="items-center flex-grow overflow-hidden transition-all duration-500 ease-soft lg-max:max-h-0 basis-full lg:flex lg:basis-auto">
                                <ul class="flex flex-col pl-0 mx-auto mb-0 list-none lg:flex-row xl:ml-auto">
                                    <li>
                                        <Link :href="route('home')"
                                            class="flex items-center px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2"
                                            aria-current="page">
                                            <i class="mr-1 fa fa-chart-pie opacity-60"></i>
                                            Accueil
                                        </Link>
                                    </li>
                                    <li>
                                        <Link :href="route('profile.show')"
                                            class="block px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2"
                                            >
                                            <i class="mr-1 fa fa-user opacity-60"></i>
                                            Profile
                                        </Link>
                                    </li>
                                    <li>
                                        <Link :href="route('register')"
                                            class="block px-4 py-2 mr-2 text-sm font-normal transition-all dark:text-gray-200 lg-max:opacity-0 duration-250 ease-soft-in-out text-slate-700 lg:px-2">
                                            <i class="mr-1 fas fa-user-circle opacity-60"></i>
                                            s'inscrire
                                        </Link>
                                    </li>

                                </ul>


                            </div>

                            <div>

                            </div>


                        </div>
                    </nav>
                </div>
            </div>
        </div>
        <main class="mt-0 transition-all duration-200 ease-soft-in-out">
            <form method="POST" action="">
                <div class="relative flex items-center p-0 overflow-hidden bg-center bg-cover min-h-75-screen">
                    <div class="container z-10">
                        <div class="flex flex-wrap mt-0 -mx-3">
                            <div>

                            </div>
                            <div
                                class="flex flex-col w-full max-w-full px-3 mx-auto md:flex-0 shrink-0 md:w-6/12 lg:w-5/12 xl:w-4/12">
                                <div
                                    class="relative flex flex-col min-w-0 mt-32 break-words bg-transparent border-0 shadow-none rounded-2xl bg-clip-border">
                                    <div class="p-6 pb-0 mb-0 bg-transparent border-b-0 rounded-t-2xl">


                                        <h3
                                            class="relative z-10 font-bold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text">
                                            Content de te revoir</h3>
                                        <p class="mb-0">Entrez votre email et votre mot de passe pour vous connecter</p>
                                    </div>
                                    <div class="flex-auto p-6">
                                        <form role="form" @submit.prevent="submit">
                                                            <div>


                                                 <MazInput
                                                label="email"
                                                type="email"
                                                v-model="form.email"
                                                 />

                                                <InputError class="mt-2" :message="form.errors.email" />
                                            </div>

                                             <div class="mt-4">

                                                <MazInput
                                                label="Mot de passe"
                                                type="password"
                                                v-model="form.password"
                                                required
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


                                                 <Link v-if="canResetPassword" :href="route('password.request')" class="mt-4 text-sm text-gray-600 underline rounded-md dark:text-gray-400 hover:dark:text-gray-100 hover:text-gray-900 focus:outline-none ">
                                                    Mot de passe oublié ?
                                                </Link>

                                            </div>



                                            <div class="text-center">
                                                <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                    class="inline-block w-full px-6 py-3 mt-6 mb-0 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer shadow-soft-md bg-x-25 bg-150 leading-pro ease-soft-in tracking-tight-soft gradient hover:scale-102 hover:shadow-soft-xs active:opacity-85">

                                                    <span>Connexion</span>




                                                </button>
                                            </div>
                                            <div class="relative w-full max-w-full px-3 mt-2 text-center shrink-0">
                                                <p
                                                    class="z-20 inline px-4 mb-2 text-sm font-semibold leading-normal bg-white rounded text-slate-400">
                                                    or </p>
                                            </div>
                                            <div class="flex flex-wrap px-3 mt-3 -mx-3 sm:px-6 xl:px-12">

                                                <div class="hidden w-4/12 max-w-full px-1 ml-auto flex-0">
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

                                                <div class="w-4/12 max-w-full px-1 mx-auto flex-0">
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
                                        class="p-2 px-1 pt-0 text-center bg-transparent border-t-0 border-t-solid rounded-b-2xl lg:px-2">
                                        <p class="mx-auto mb-2 text-sm leading-normal">
                                            Vous avez déjà un compte?
                                            <Link :href="route('register')"
                                                class="relative z-10 font-semibold text-transparent bg-gradient-to-tl from-amber-600 to-amber-400 bg-clip-text">S'inscrire</Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full max-w-full px-3 lg:flex-0 shrink-0 md:w-6/12">
                                <div
                                    class="absolute top-0 hidden w-3/5 h-full overflow-hidden -mr-26 -skew-x-10 -right-40 rounded-bl-xl md:block">
                                    <div class="absolute inset-x-0 top-0 z-0 h-full -ml-16 bg-cover skew-x-10"
                                        style="background-image: url('./images/logo/ff3.png')"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </main>

        <FooterGuest />




</template>
<style lang="css" scoped>
@import url('../../../css/tailwind.css');
@import url('../../../css/app.css');





.gradient {
    background: linear-gradient(100deg, #FF9E5E 10%, rgb(69, 67, 67) 100%);
}

.gradient2 {
    background: linear-gradient(80deg, #fd8b3f 20%, rgb(47, 46, 46) 100%);
}
</style>
