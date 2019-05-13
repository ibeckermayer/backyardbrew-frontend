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
        resetUser(state) {
            state.user.id = '';
            state.user.first_name = '';
            state.user.last_name = '';
            state.user.email = '';
            state.user.role = '';
            state.user.access_token = '';
            state.user.refresh_token = '';
        },
        addItemToCart(state, itemToAdd) {
            let foundInCart = false;
            state.cart.items.forEach(item => {
                if (item.variation.id === itemToAdd.variation.id) {
                    item.quantity = item.quantity + itemToAdd.quantity;
                    foundInCart = true;
                }
            });
            if (!foundInCart) {
                state.cart.items.push(itemToAdd);
            }
        },
        removeItemFromCart(state, itemToRemove) {
            state.cart.items = state.cart.items.filter(item => item != itemToRemove);
        }
    },
    actions: {}
});
