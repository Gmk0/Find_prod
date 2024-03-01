import { defineStore } from 'pinia';
import axios from 'axios';

import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();



export const useCategoryStore = defineStore('category', {
    state: () => ({
        categories: [],
        subCategoriesbyId: [],
        subCategoriesby: [],
    }),
    actions: {
        async fetchCategories() {
            try {
                const response = await axios.get('/api/fetchAll');
                this.categories = response.data;
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        },

        async fetchSubCategoriesByCategoryid(categoryid) {
            try {
                const response = await axios.get(`/api/subcategories/${categoryid}`);
                this.subCategoriesby = response.data.subcategories;
            } catch (error) {
                //console.error('Error fetching categories:', error);
            }

        }
    },
    getters: {
        categoriesGet: (state) => state.categories,
        subCategoriesGet: (state) => state.subCategoriesby
    },

persist:true,
});

export const useParrainage = defineStore('useParrainage', {
    state: () => ({
        parrainagesUser: [],
        referalCode: null,
    }),
    getters: {
        getReferalCode: (state) => state.referalCode,
        getUsers: (state) => state.parrainagesUser,
    },

    actions: {
        async getCodeUser() {
            try {
                const response = await axios.get('/api/getCodeUser');

                this.referalCode = response.data.referral_code;


            } catch (e) {

            }
        },
        async getAllUser() {
            try {
                const response = await axios.get('/api/getAllUserParainer');

                if(response.status === 200) {

                this.parrainagesUser = response.data.users;


                }else{
                    //console.log("error:" + response.status)
                }

            } catch (e) {

                //console.log(e)

            }
        }
    }


})




export const useStore = defineStore({
    id: 'isNotHome',
    state: () => ({
        isNotHome: false,
        login: false,
    }),
    actions: {
        updateIsHome() {
            this.isNotHome = false;
        },
        updateIsNotHomeTrue() {
            this.isNotHome = true;
        },
        loginUser(){
            this.login=!this.login;
        }
    },
    getters: {
        getVariable() {
            return this.isNotHome;
        },
        canLogin: (state) => state.login,
    },

});


export const useSubcategoriesStore = defineStore('subcategories', {
    state: () => ({
        subCategories: []
    }),
    actions: {
        async fetchSubCategories() {
            try {
                const response = await axios.get('/api/subcategoriesAll'); // Assurez-vous d'ajuster l'URL
                this.subCategories = response.data.subCategories;

            } catch (error) {
                //console.error('Erreur lors de la récupération des sous-catégories:', error);
            }
        },
        setSubCategories(subCategories) {
            this.subCategories = subCategories;
        }
    },
    getters: {
        getSubCategories() {
            return this.subCategories;
        }
    }
});


export const cartStore = defineStore('cart', {
    state: () => ({
        items: [],
        status: null,
        statusPayement: [],
        payementGetLink: '',
    }),
    getters: {
        totalItems: (state) => state.items.length,
        totalCost: (state) => {
            return state.items.reduce((total, item) => total + item.price * item.quantity, 0);
        },
        statusError: (state) => state.status,
        statusPayementGet: (state) => state.statusPayement,


    },
    actions: {
        async addItem(item) {
            // Vérifiez si l'article est déjà dans le panier
            const existingItem = this.items.find((i) => i.id === item.id);

            if (existingItem) {
                // Si l'article existe, mettez à jour la quantité
                existingItem.quantity += 1;
            } else {
                // Sinon, ajoutez l'article au panier
                this.items.push({ ...item, quantity: 1 });
            }
        },
        async removeItem(itemId) {
            const index = this.items.findIndex((item) => item.id === itemId);

            if (index !== -1) {
                this.items.splice(index, 1);
            }
        },
        async updateItemQuantity({ itemId, newQuantity }) {
            const item = this.items.find((i) => i.id === itemId);

            if (item) {
                item.quantity = newQuantity;
            }
        },
        async updatePriceCoupons({ itemId, price }) {

            console.log(itemId, price);
            const item = this.items.find((i) => i.id === itemId);



            if (item) {
                item.price = price;
            }
        },
        async clearCart() {
            this.items = []; // Remise à zéro du tableau d'articles du panier
        },


        async checkoutMaxi(data) {
            this.status = [];
            // this.getToken();
            try {
                console.log(data);
                const response = await axiosClient.post('/checkout-maxi', {
                    name: data.name,
                    numero: data.numero,
                    items: this.items,
                    totalprice: this.totalCost
                });

                return response.data;

                // this.router.push('/');
                // console.log(this.statusPayement);


            } catch (error) {
                if (error.response.status === 422) {

                    console.log(error.response.data.errors);
                }

            }

        },
         updateTotalCost(newTotalCost) {
             console.log('Nouveau prix total :', newTotalCost);
            this.$patch((state) => {
                state.totalCost = newTotalCost;
            });
        },



        async handleMaxiStatus(data) {
            this.status = [];
            // this.getToken();
            try {

                const response = await axiosClient.post('/checkout-maxi-status', {
                    status: data.status,
                    reference: data.reference,
                    method: data.reference, // Enlevez la virgule en trop ici
                });

                this.clearCart();
                return response.data;

                //console.log(response.data);
            } catch (error) {

                if (error.response && error.response.data && error.response.data.message) {
                    this.status = error.response.data;
                } else {
                    console.log("Une erreur inattendue s'est produite :", error);
                }
            }

        },

    },
    persist: true,
});


export const useLayoutStore = defineStore('userLayout', {
    state: () => ({
        isDarkModeEnabled: false,
        isMonochromeModeEnabled: false,
        isSearchbarActive: false,
        isSidebarExpanded: false,
        isRightSidebarExpanded: false,
        isRightSidebarPanel: false,
    }),
    getters: {
        SidebarExpanded: (state) => state.isRightSidebarExpanded,
        RightSidebarExpanded: (state) => state.isRightSidebarPanel,
    },

    actions: {
        toogleRight() {
            this.isRightSidebarExpanded = !this.isRightSidebarExpanded
        },
        tooglePanel() {
            this.isRightSidebarPanel = !this.isRightSidebarPanel
        },
        ToogleFalse() {
            this.isRightSidebarExpanded = false

        },
        tooglePanelFalse(){
            this.isRightSidebarPanel = false;
        },
        ToogleTrue() {
            this.isRightSidebarExpanded = true

        }
    }


})

export const useSidebarPanelUser = defineStore('useSidebarPanelUser',{

    state: () => ({
        lastMessage: [],
        lastCommande: false,
        statusElement:[],
    }),
    getters: {
        lastMessageUser: (state) => state.lastMessage,
        lastCommandeUser: (state) => state.statusElement,

    },
    actions :{
        async fetchLastMessage(id) {
            try {
                const response = await axios.get(`/api/fetchLastUserMessage/${id}`);
                if (response.status === 200) {
                    if (response.data.messages.length > 0) {
                        this.lastMessage = response.data;
                    } else {

                        //console.log('Aucun message trouvé.');
                    }
                } else if (response.status === 203) {

                    //console.log('Aucun message n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des messages :', error);
            }
        },
        async fetchLastCommande(id) {
            try {
                const response = await axios.get(`/api/fetchLastCommande/${id}`);
                if (response.status === 200) {

                    this.statusElement = response.data.status;



                } else if (response.status === 203) {

                    console.log('Aucun element n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }
        }

    }
})


export const useNotification = defineStore('useNotification',{


    state: () => ({
        lastNotification: [],
        lastCommande: false,
        statusElement: [],
        notificationParametres: null,
    }),
    getters: {
        lastNotificationGet: (state) => state.lastNotification,
        getParametres: (state) => state.notificationParametres,
       // lastCommandeUser: (state) => state.statusElement,

    },
    actions:{

        async fetchLastNotification() {
            try {
                const response = await axios.get(`/api/fetchLastNotification`);
                if (response.status === 200) {
                    this.lastNotification = response.data.notifications;

                    console.log(response.data.notifications);


                } else if (response.status === 203) {

                    console.log('Aucun element n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }
        },
        async removeNotification(id){

            try {
                const response = await axios.get(`/api/removeNotification/${id}`);
                if (response.status === 200) {

                    this.fetchLastNotification();


                } else if (response.status === 203) {

                    console.log('Aucun element n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }
        },
        async removeAll(){
            try {
                const response = await axios.get(`/api/RemoveAllNotification`);
                if (response.status === 200) {

                    this.fetchLastNotification()
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }

        },
        async removeAllRead() {
            try {
                const response = await axios.get(`/api/ReadAllNotification`);
                if (response.status === 200) {

                    this.fetchLastNotification()
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }

        },
        async getNotificationParametres()
        {
            try{

                const response = await axios.get('/api/getNotificationParametres');

                if(response.status==200)
                {
                    this.notificationParametres = response.data.userSetting;


                }
            }catch (error) {

            }
        },
    },
    persist:true,

});


export const useMissions= defineStore('useMissions',{

    state: () => ({
        missions: [],

    }),
    getters:{
        missionGeters:(state)=>state.missions

    },
    actions: {

        async fetchLastMission()
        {
            try {
                const response = await axios.get(`/api/fetchLastMissions`);
                if (response.status === 200) {
                    this.missions = response.data.missions;



                } else if (response.status === 203) {

                    console.log('Aucun element n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }

        }

    }

})

export const homeSetting = defineStore('homeSetting',{

    state: ()=>({
        faqs:[]
    }),
    getters:{
        faqsGetter: (state) => state.faqs
    },
    actions: {

        async fetchLastFaq() {
            try {
                const response = await axios.get(`/api/getLastFaq`);
                if (response.status === 200) {
                    this.faqs = response.data.faqs;
                } else if (response.status === 203) {
                    console.log('Aucun element n\'est renvoyé.');
                }
            } catch (error) {
                console.error('Erreur lors de la récupération des element :', error);
            }
        }
    },
});


export const getLastComment = defineStore('getLastComment', {
    state: () => ({
        lastComment: null,
        loading: false,
        error: null,
    }),

    getters: {
        getLastComment: state => state.lastComment,
        isLoading: state => state.loading,
        hasError: state => state.error !== null,
        getError: state => state.error,
    },

    actions: {
        async fetchLastComment() {
            this.loading = true;
            try {
                const response = await fetch('/api/getLastComment'); // Remplacez '/api/getLastComment' par votre endpoint réel
                if (!response.ok) {
                    throw new Error('Failed to fetch last comment');
                }
                const data = await response.json();
                this.lastComment = data.commentaire;
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
    },
});



