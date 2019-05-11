import Vue from 'vue';
import Vuex from 'vuex';
import { stat } from 'fs';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        user: {
            id: '',
            first_name: '',
            last_name: '',
            email: '',
            role: '',
            access_token: '',
            refresh_token: ''
        },
        cart: {
            items: [] // list of CartItem {name: item.name, variation: item.variations[n], tax_ids: item.tax_ids, quantity: integer}
        }
    },
    getters: {
        user: state => state.user,
        cart: state => state.cart
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
        },
        addItemToCart(state, cartItem) {
            state.cart.items.push(cartItem);
        },
        resetUser(state) {
            state.user.id = '';
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
