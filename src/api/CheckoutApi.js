import axios from 'axios';
import store from '../store';
const GENERATE_CHECKOUT_URL = process.env.VUE_APP_API_BASE_URL + '/generate_checkout_url';

export default {
    getCheckoutUrl() {
        // ask for checkout url
        return axios.post(GENERATE_CHECKOUT_URL, store.getters.cart).catch(error => {
            console.log(error);
            throw error;
        })

    }
}