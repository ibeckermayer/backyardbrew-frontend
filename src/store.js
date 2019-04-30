import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            jwtAccess: '',
            jwtfRefresh: ''
        }
    },
    mutations: {
        setFirstName(state, firstName) {
            state.user.firstName = firstName;
        },
        setLastName(state, lastName) {
            state.user.lastName = lastName;
        },
        setEmail(state, email) {
            state.user.email = email;
        },
        setJwtAccess(state, jwtAccess) {
            state.user.jwtAccess = jwtAccess;
        },
        setJwtRefresh(state, jwtRefresh) {
            state.user.jwtRefresh = jwtRefresh;
        },
        resetUser(state) {
            state.user.firstName = '';
            state.user.lastName = '';
            state.user.email = '';
            state.user.jwtAccess = '';
            state.user.jwtfRefresh = '';
        }
    },
    actions: {},
    getters: {
        firstName: state => state.user.firstName,
        lastName: state => state.user.lastName,
        email: state => state.user.email,
        jwtAccess: state => state.user.jwtAccess,
        jwtfRefresh: state => state.user.jwtfRefresh
    }
});
