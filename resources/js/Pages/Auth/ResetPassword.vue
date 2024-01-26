<script setup>
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const props = defineProps({
    email: String,
    token: String,
});

const form = useForm({
    token: props.token,
    email: props.email,
    password: '',
    password_confirmation: '',
});

const submit = () => {
    form.post(route('password.update'), {
        onFinish: () => form.reset('password', 'password_confirmation'),
    });
};
</script>

<template>

     <Head title="Mot de passe Oublier" />

     <NavGuest />

        <CardGuest>
            <template #title>
                Réinitialiser le mot de passe
            </template>
               <template #description>
                      <span class="hidden">Trouvez les services parfaits dont vous avez besoin</span>
            </template>

            <template #form>
                <div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border">
                <div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl">
                    <h5 class="text-gray-600 dark:text-gray-300">Réinitialiser le mot de passe </h5>
                </div>
                <div class="flex-auto px-6 py-2 pb-12">
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

                                    <div class="mt-4">
                                        <InputLabel for="password" value="Mot de passe" />
                                        <TextInput
                                            id="password"
                                            v-model="form.password"
                                            type="password"
                                            class="block w-full mt-1"
                                            required
                                            autocomplete="new-password"
                                        />
                                        <InputError class="mt-2" :message="form.errors.password" />
                                    </div>

                                    <div class="mt-4">
                                        <InputLabel for="password_confirmation" value="Confirmation" />
                                        <TextInput
                                            id="password_confirmation"
                                            v-model="form.password_confirmation"
                                            type="password"
                                            class="block w-full mt-1"
                                            required
                                            autocomplete="new-password"
                                        />
                                        <InputError class="mt-2" :message="form.errors.password_confirmation" />
                                    </div>





                                    <div class="text-center">
                                        <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                            class="inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white">


                                                        <span>Réinitialiser le mot de passe</span>

                                        </button>

                                    </div>

                        </form>
                        </div>
                </div>
            </template>
        </CardGuest>


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


