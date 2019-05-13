import axios from 'axios';
import Common from '@/api/Common';
import store from '../store';

const LOGIN_URL = process.env.VUE_APP_API_BASE_URL + '/login';
const REGISTER_URL = process.env.VUE_APP_API_BASE_URL + '/registration';

export default {
    login(email, plaintextPassword) {
        let body = {
            email: email,
            plaintext_password: plaintextPassword
        };
        return axios
            .post(LOGIN_URL, body)
            .then(response => {
                store.commit('setUser', response.data.user); // set user in store
            })
            .catch(error => {
                console.log(error);
                throw error;
            });
    },
    register(firstName, lastName, email, plaintextPassword) {
        let body = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            plaintext_password: plaintextPassword
        };
        return axios.put(REGISTER_URL, body).catch(error => {
            console.log(error);
            throw error;
        });
    }
};
