<template>
    <div>
        <form @submit.prevent="checkout">
            <div class="w-full p-2 border-b border-gray-200 lg:p-6">
                        <div class="flex flex-wrap gap-4 mb-5">
                            <MazRadioButtons
                        v-model="form.provider"
                        :options="provider"
                        color="primary"
                        >
                    <template #default="{ option, selected }">
                        <div style="display: flex;">
                        <MazAvatar
                            v-if="option.areaEnsignUrl"
                            :src="option.areaEnsignUrl"
                            style="margin-right: 16px;"
                            size="0.8rem"
                        />
                        <div style="display: flex; flex-direction: column;">
                            <span class="dark:text-gray-200">
                            {{ option.label }}
                            </span>
                            <span :class="{ 'maz-text-muted': !selected }">
                            {{ option.areaName }}
                            </span>
                        </div>
                        </div>
                    </template>
                    </MazRadioButtons>


                        </div>
                        <div v-if="form.provider !== ''">

                            <div >

                                <div class="grid grid-cols-1 gap-4 mb-4 lg:px-4">

                                    <MazPhoneNumberInput
                                label="Telephone"
                                :only-countries=country
                                :success="false"
                                required
                                v-model="form.numero"
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
                                </div>

                                <div class="flex flex-col gap-4 px-3 mb-3">
                                    <ButtonMt type="submit">
                                        payer({{ props.solde }} $)
                                    </ButtonMt>


                                </div>

                            </div>

                        </div>
            </div>
        </form>
        <div v-if="isLoading">
                        <div>

                            <div class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen"
                                style="background: rgba(0, 0, 0, 0.3);">
                                <div class="flex flex-col items-center px-5 py-2 bg-white border rounded-lg">
                                    <div class="relative block w-20 h-5 mt-2 loader-dots">
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                        <div class="absolute top-0 w-3 h-3 mt-1 bg-green-500 rounded-full"></div>
                                    </div>
                                    <div class="mt-2 text-xs font-medium text-center text-gray-500">
                                        Paiement en cours...
                                    </div>
                                </div>
                            </div>
                        </div>
         </div>


                    <div v-if="order_id"  style="background: rgba(0, 0, 0, 0.3);" class="fixed top-0 left-0 z-50 flex items-center justify-center w-screen h-screen">
            <div class="flex flex-col items-center justify-center px-12 py-8 mx-4 bg-gray-100 rounded-lg">
                <div class="w-32 h-32 px-12 py-12 mb-4 text-center text-gray-800 bg-gray-200 rounded-full">
                    <p class="text-4xl font-bold">{{ countdown }}</p>
                    <p class="text-lg"></p>
                </div>
                <p class="mb-4 text-xl text-gray-700">Veuillez confirmer votre paiement</p>
                <p class="max-w-md text-base text-gray-600 font-bega-light">Une fenêtre pop-up va s'ouvrir pour vous permettre de confirmer votre paiement. Veuillez suivre les instructions à l'écran pour compléter la transaction. Ne fermez pas ni ne rafraîchissez cette page pendant le processus de paiement.</p>
                <div class="mt-4">
                    <Button @click="verification()" label="Verifier l'etat" />


                </div>

                        <div class="mt-2 text-center">
                            <p class="text-sm">Si vous avez deja payer verifier l'etat</p>

                        </div>
            </div>
        </div>

    </div>
</template>

<script setup>
import MazRadioButtons from 'maz-ui/components/MazRadioButtons';
import MazAvatar from 'maz-ui/components/MazAvatar';
import { ref, inject } from 'vue';
import { useForm, router } from '@inertiajs/vue3';
import axios from 'axios';


const swal = inject('$swal')



const country = ref(['CD']);
const order_id=ref(null)

const props=defineProps(
    {
        solde:{
            type:String,
            required:true,
        },
        route:{
            type:String,

        },
        response:String,
    }
)

const form = ref({
    numero: '',
    provider: '',
    total: props.solde,
    response:props.response? props.response:null,
    //adresse: props.userSetting?.addresse_facturation?.adresse,
    //commune: props.userSetting?.addresse_facturation?.commune,
    //ville: props.userSetting?.addresse_facturation?.ville,
    //pays: props.userSetting?.addresse_facturation?.pays,

})
const isLoading=ref(false);
const checkout= async ()=>{


    switch (props.route) {
        case 'Mission':
             checkoutMaxi();
            break;
        default:
            break;
    }
}



const countdown = ref(60);
let countdownInterval = null;



const transaction_id = ref('');

const checkoutMaxi = async () => {
    try {
        isLoading.value = true;
        const response = await axios.post(route('user.missions.missionPaiementMaxi'), {
            form: form.value,
            solde: props.solde,
            response: props.response,
        });






        isLoading.value = false;
        order_id.value = response.data.order_id;
        transaction_id.value = response.data.transaction_id;



        if (response.data) {
            if (response.data.result.code == 0) {
                // Commencer le compte à rebours
                countdownInterval = setInterval(() => {
                    countdown.value--;
                    if (countdown.value <= 0) {
                        clearInterval(countdownInterval);  // Arrêter le compte à rebours
                        // Envoyer la deuxième requête ici
                        secondRequestMission();
                    }
                }, 1000);
            }
        } else {
            swal.fire({
                title: error.message,
                icon: "error",
                text: "une erreur s'est produite veuillez ressayer",
                timerProgressBar: true,
            });
        }

    } catch (error) {
        isLoading.value = false;

        if (error.response) {
            swal.fire({
                title: error.message,
                icon: "error",
                text: error.response.data,
                // position: 'top-end',
                timerProgressBar: true,
            });
        }
        swal.fire({
            title: error.message,
            icon: "error",
            text: error.message,
            // position: 'top-end',
            timerProgressBar: true,
        });

    }

};

const secondRequestMission = async () => {

    router.post(route('checkoutStatusMission'), {
        order_id: order_id.value,
        transaction_id: transaction_id.value
    }, {
        onError: (error) => {
            swal.fire({
                title: error.message,
                icon: "error",
                text: error.message,
                // position: 'top-end',
                timerProgressBar: true,
            });
        },onSuccess:()=>{
            router.get(route('statusPaiementMission', order_id.value))
        }
    });
    order_id.value = null;
};

const verification=()=>{


    switch (props.route) {
        case 'Mission':
            secondRequestMission();
            break;
        default:
            break;
    }

}


const selectedProvider = ref('');

const provider = [
    {
        value: "10",
        label: "Orange Money",
        areaName: "orange",
        areaEnsignUrl: "https://www.jordanfinancialservices.com/2021/sites/default/files/images/logos/orange_money-01.jpg",
    },
    {
        value: "9",
        label: "Vodacom Mpesa",
        areaName: "Vodacom",
        areaEnsignUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmtTAhz7LJHKfRf5ZGowNS3ZKJH_X_26iPUv3wzBkcug&s",
    },
    {
        value: "17",
        label: "airtel Money",
        areaName: "airtel",
        areaEnsignUrl: "https://zoom-eco.net/wp-content/uploads/2021/02/15.png",
    },


]

</script>

<style  scoped>

</style>
