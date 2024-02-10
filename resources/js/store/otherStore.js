

import { defineStore } from 'pinia';
import axios from 'axios';

export const getLastComment = defineStore('getLastComment', {
    state: () => ({
        lastComment: null,
        talkAbout: null,
        loading: false,
        error: null,
        about:null,
    }),
    getters: {
        getLastComment: state => state.lastComment,
        getLastTalkAbout: state => state.talkAbout,
        isLoading: state => state.loading,
        getAbout: state => state.about,
        hasError: state => state.error !== null,
        getError: state => state.error,
    },


    actions: {
        async fetchLastComment() {
            this.loading = true;
            try {
                const response = await axios.get('/api/fetchLastUserCommentaire');
                if (response.data.success) {
                    this.lastComment = response.data.commentaire;
                    this.talkAbout = response.data.talk_about;
                    this.about = response.data.about
                } else {
                    throw new Error(response.data.message);
                }
            } catch (error) {
                this.error = error.message;
            } finally {
                this.loading = false;
            }
        },
    },

    persist: true,
});
