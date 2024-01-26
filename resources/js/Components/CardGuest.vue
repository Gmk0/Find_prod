<template>
    <div>

        <main class="mt-0 transition-all duration-200 dark:bg-gray-900 ease-soft-in-out">
                        <section class="min-h-screen pt-4 mb-32">
                                <div class="relative flex items-start pt-12 pb-56 mx-6 overflow-hidden bg-center bg-cover min-h-50-screen rounded-xl"
                                    style="background-image: url('/images/logo/ff3.png')">
                                    <span
                                        class="absolute top-0 left-0 w-full h-full bg-center bg-cover opacity-50 gradient2 from-gray-900 to-slate-800"></span>
                                    <div class="container z-10">
                                        <div class="flex flex-wrap justify-center -mx-3">
                                            <div class="w-full max-w-full px-3 mx-auto mt-0 text-center lg:flex-0 shrink-0 lg:w-5/12">
                                                <h1 class="mt-12 mb-2 text-white">

                                                    <slot name="title" />
                                                </h1>
                                                <p class="text-white ">
                                                   <slot name="description" />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            <div class="container">
                                <div class="flex flex-wrap -mx-3 -mt-48 md:-mt-56 lg:-mt-48">
                                    <div class="w-full max-w-full px-3 mx-auto mt-0 md:flex-0 shrink-0 md:w-7/12 lg:w-5/12 xl:w-4/12">


                                        <slot name="form" />
                                        <!--

                                        <div
                                            class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border">
                                            <div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl">
                                                <h5 class="text-gray-600 dark:text-gray-300">Mot de passe Oublier </h5>
                                            </div>

                                        <div class="flex-auto px-6 py-2 pb-12">

                                             <div class="mb-4 text-sm text-gray-600 dark:text-gray-200">
                                               Mot de passe oublié ? Pas de problème. Indiquez simplement votre adresse e-mail et nous vous enverrons un lien de réinitialisation de mot de passe par e-mail qui vous permettra d'en choisir un nouveau.
                                            </div>

                                            <div v-if="status" class="mb-4 text-sm font-medium text-green-600">
                                                {{ status }}
                                            </div>


                                            <form @submit.prevent="submit" role="grid grid-cols-1 gap-6">


                                                 <div>
                                            <InputLabel for="email" value="Email" />
                                            <TextInput
                                                id="email"
                                                v-model="form.email"
                                                type="email"
                                                class="block w-full mt-1"
                                                required
                                                autofocus
                                                autocomplete="username"
                                            />
                                            <InputError class="mt-2" :message="form.errors.email" />
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
                                    -->
                                </div>
                                </div>
                            </div>


                        </section>
                        <!-- -------- START FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->


                <FooterGuest />

                        <!-- -------- END FOOTER 3 w/ COMPANY DESCRIPTION WITH LINKS & SOCIAL ICONS & COPYRIGHT ------- -->
        </main>

    </div>
</template>

<script setup>

</script>

<style lang="css" scoped>
@import url('../../css/tailwind.css');
@import url('../../css/app.css');

.gradient {
    background: linear-gradient(100deg, #FF9E5E 10%, rgb(69, 67, 67) 100%);
}

.gradient2 {
    background: linear-gradient(80deg, #fd8b3f 20%, rgb(47, 46, 46) 100%);
}
</style>

