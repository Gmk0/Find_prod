<script setup>
import { ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const form = useForm({
    password: '',
});

const passwordInput = ref(null);

const submit = () => {
    form.post(route('password.confirm'), {
        onFinish: () => {
            form.reset();

            passwordInput.value.focus();
        },
    });
};
</script>

<template>


     <Head title="Mot de passe Oublier" />
        <nav class="absolute top-0 z-30 flex flex-wrap items-center justify-between w-full px-4 py-2 mt-6 mb-4 shadow-none lg:flex-nowrap lg:justify-start">
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
                                                <h1 class="mt-12 mb-2 text-white">Mot de passe Oublier</h1>
                                                <p class="hidden text-white">
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
                                                <h5 class="text-gray-600 dark:text-gray-300">Mot de passe Oublier </h5>
                                            </div>




                                        <div class="flex-auto px-6 py-2 pb-12">

                                             <div class="mb-4 text-sm text-gray-600 dark:text-gray-200">
                                             Ceci est une zone sécurisée de l'application. Veuillez confirmer votre mot de passe avant de continuer.
                                            </div>

                                            <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                                                {{ status }}
                                            </div>


                                            <form @submit.prevent="submit" role="grid grid-cols-1 gap-6">

                                                <div>
                                                                <InputLabel for="password" value="Mot de passe" />
                                                                <TextInput
                                                                    id="password"
                                                                    ref="passwordInput"
                                                                    v-model="form.password"
                                                                    type="password"
                                                                    class="block w-full mt-1"
                                                                    required
                                                                    autocomplete="current-password"
                                                                    autofocus
                                                                />
                                                                <InputError class="mt-2" :message="form.errors.password" />
                                                            </div>





                                                <div class="text-center">
                                                    <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                        class="inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white">


                                                                    <span>Lien de réinitialisation</span>

                                                    </button>

                                                </div>

                                            </form>


                                        </div>
                                            </div>

                                            </div>



                                        </div>
                                    </div>


                        </section>
                        <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->

                        <footer class="py-12">
                    <div class="container">
                        <div class="flex flex-wrap -mx-3">
                            <div class="flex-shrink-0 w-full max-w-full mx-auto mb-6 text-center lg:flex-0 lg:w-8/12">
                                <a href="{{url('/services')}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
                                    Servives
                                </a>
                                <a href="{{url('/apropos')}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> A
                                    propos
                                </a>
                                <a href="{{url('/categories')}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12">
                                    Categories
                                </a>

                                <a href="{{url('/faq')}}" target="_blank" class="mb-2 mr-4 text-slate-400 sm:mb-0 xl:mr-12"> FaQ
                                </a>


                            </div>
                            <div class="flex-shrink-0 w-full max-w-full mx-auto mt-2 mb-6 text-center lg:flex-0 lg:w-8/12">
                                <a href="" target="_blank" class="mr-6 text-slate-400">
                                    <span class="text-lg fab fa-dribbble"></span>
                                </a>
                                <a href="" target="_blank" class="mr-6 text-slate-400">
                                    <span class="text-lg fab fa-twitter"></span>
                                </a>
                                <a href="" target="_blank" class="mr-6 text-slate-400">
                                    <span class="text-lg fab fa-instagram"></span>
                                </a>
                                <a href="" target="_blank" class="mr-6 text-slate-400">
                                    <span class="text-lg fab fa-pinterest"></span>
                                </a>
                                <a href="" target="_blank" class="mr-6 text-slate-400">
                                    <span class="text-lg fab fa-github"></span>
                                </a>
                            </div>
                        </div>
                        <div class="flex flex-wrap -mx-3">
                            <div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                                <p class="mb-0 text-slate-400">
                                    Copyright ©

                                    Find 2034
                                </p>

                            </div>

                        </div>
                        <div class="flex flex-wrap mt-8 -mx-3">
                            <div class="w-8/12 max-w-full px-3 mx-auto mt-1 text-center flex-0">
                                <label class="relative inline-flex items-center mb-5 cursor-pointer">
                                    <input type="checkbox" x-model="dark" @click="toggleTheme" class="sr-only peer">
                                    <div
                                        class="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600">
                                    </div>
                                    <div class="px-2">
                                        <template x-if="!dark">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                                            </svg>

                                        </template>
                                        <template x-if="dark">
                                            <svg class="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                                                <path fill-rule="evenodd"
                                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                                    clip-rule="evenodd"></path>
                                            </svg>

                                        </template>
                                    </div>

                                </label>

                            </div>

                        </div>

                    </div>
                </footer>

                        <!-- -------- END FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
        </main>

<!--
    <Head title="Secure Area" />

    <AuthenticationCard>
        <template #logo>
            <AuthenticationCardLogo />
        </template>

        <div class="mb-4 text-sm text-gray-600">
            This is a secure area of the application. Please confirm your password before continuing.
        </div>

        <form @submit.prevent="submit">
            <div>
                <InputLabel for="password" value="Password" />
                <TextInput
                    id="password"
                    ref="passwordInput"
                    v-model="form.password"
                    type="password"
                    class="block w-full mt-1"
                    required
                    autocomplete="current-password"
                    autofocus
                />
                <InputError class="mt-2" :message="form.errors.password" />
            </div>

            <div class="flex justify-end mt-4">
                <PrimaryButton class="ml-4" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Confirm
                </PrimaryButton>
            </div>
        </form>
    </AuthenticationCard>
    -->
</template>

<style   scoped>
@import url('../../../css/tailwind.css');
@import url('../../../css/app.css');


.gradient {
    background: linear-gradient(100deg, #FF9E5E 10%, rgb(69, 67, 67) 100%);
}

.gradient2 {
    background: linear-gradient(80deg, #fd8b3f 20%, rgb(47, 46, 46) 100%);
}
</style>
