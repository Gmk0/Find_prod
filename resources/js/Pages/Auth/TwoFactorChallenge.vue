<script setup>
import { nextTick, ref } from 'vue';
import { Head, useForm } from '@inertiajs/vue3';
import AuthenticationCard from '@/Components/AuthenticationCard.vue';
import AuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';
import InputError from '@/Components/InputError.vue';
import InputLabel from '@/Components/InputLabel.vue';
import PrimaryButton from '@/Components/PrimaryButton.vue';
import TextInput from '@/Components/TextInput.vue';

const recovery = ref(false);

const form = useForm({
    code: '',
    recovery_code: '',
});

const recoveryCodeInput = ref(null);
const codeInput = ref(null);

const toggleRecovery = async () => {
    recovery.value ^= true;

    await nextTick();

    if (recovery.value) {
        recoveryCodeInput.value.focus();
        form.code = '';
    } else {
        codeInput.value.focus();
        form.recovery_code = '';
    }
};

const submit = () => {
    form.post(route('two-factor.login'));
};
</script>

<template>
    <Head title="Two-factor Confirmation" />

        <NavGuest />

         <CardGuest>
            <template #title>
               Authentification a double facteur
            </template>
               <template #description>
                      <span class="hidden">Trouvez les services parfaits dont vous avez besoin</span>
            </template>

            <template #form>

                <div class="relative z-0 flex flex-col min-w-0 break-words bg-white border-0 dark:bg-gray-800 shadow-soft-xl rounded-2xl bg-clip-border">
                    <div class="p-6 mb-0 text-center bg-white border-b-0 dark:bg-gray-800 rounded-t-2xl">
                        <h5 class="text-gray-600 dark:text-gray-300">Authentification </h5>
                    </div>
                            <div class="flex-auto px-6 py-2 pb-12">

                                   <div class="mb-4 text-sm text-gray-600 dark:text-gray-100">
                <template v-if="!recovery">
                   Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence.
                </template>

                <template v-else>
                    Veuillez confirmer l'accès à votre compte en entrant l'un de vos codes de récupération d'urgence.
                </template>
            </div>



                                                <form @submit.prevent="submit" role="grid grid-cols-1 gap-6">

                                        <div v-if="!recovery">
                                                <InputLabel for="code" value="Code" />
                                                <TextInput
                                                    id="code"
                                                    ref="codeInput"
                                                    v-model="form.code"
                                                    type="text"
                                                    inputmode="numeric"
                                                    class="block w-full mt-1"
                                                    autofocus
                                                    autocomplete="one-time-code"
                                                />
                                                <InputError class="mt-2" :message="form.errors.code" />
                                            </div>

                                            <div v-else>
                                                <InputLabel for="recovery_code" value="Recovery Code" />
                                                <TextInput
                                                    id="recovery_code"
                                                    ref="recoveryCodeInput"
                                                    v-model="form.recovery_code"
                                                    type="text"
                                                    class="block w-full mt-1"
                                                    autocomplete="one-time-code"
                                                />
                                                <InputError class="mt-2" :message="form.errors.recovery_code" />

                                                 <button type="button" class="mt-6 text-sm text-gray-600 underline cursor-pointer dark:text-gray-300 hover:text-gray-900" @click.prevent="toggleRecovery">
                                                    <template v-if="!recovery">
                                                        Use a recovery code
                                                    </template>

                                                    <template v-else>
                                                        Use an authentication code
                                                    </template>
                                                </button>
                                            </div>

                                            <div class="text-center">
                                                <button type="submit" :class="{ 'opacity-25': form.processing }" :disabled="form.processing"
                                                    class="inline-block w-full px-6 py-3 mt-6 mb-2 text-xs font-bold text-center text-white uppercase align-middle transition-all bg-transparent border-0 rounded-lg cursor-pointer active:opacity-85 hover:scale-102 hover:shadow-soft-xs leading-pro ease-soft-in tracking-tight-soft shadow-soft-md bg-150 bg-x-25 gradient hover:border-slate-700 hover:bg-slate-700 hover:text-white">


                                                                <span>Connexion</span>

                                                </button>

                                            </div>

                                        </form>
                                </div>
                        </div>

            </template>

        </CardGuest>



</template>

<style>

.gradient {
    background: linear-gradient(100deg, #FF9E5E 10%, rgb(69, 67, 67) 100%);
}

.gradient2 {
    background: linear-gradient(80deg, #fd8b3f 20%, rgb(47, 46, 46) 100%);
}
</style>
