import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            firstName: '',
            lastName: '',
            email: '',
            role: '',
            jwtAccess: '',
            jwtRefresh: ''
        }
    },
    getters: {
        user: state => state.user
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
        setRole(state, role) {
            state.user.role = role;
        },
        resetUser(state) {
            state.user.firstName = '';
            state.user.lastName = '';
            state.user.email = '';
            state.user.role = '';
            state.user.jwtAccess = '';
            state.user.jwtRefresh = '';
        }
    },
    actions: {},
    
});
