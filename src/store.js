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
            items: [] // list of CartItem {item_id: item.variation.item_variation_data.item_id, quantity: integer}
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
        }
    },
    actions: {},
    
});
