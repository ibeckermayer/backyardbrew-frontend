import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            access_token: '',
            refresh_token: ''
        }
    },
    getters: {
        user: state => state.user
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        resetUser(state) {
            state.user.first_name = '';
            state.user.last_name = '';
            state.user.email = '';
            state.user.role = '';
            state.user.access_token = '';
            state.user.refresh_token = '';
        }
    },
    actions: {},
    
});
