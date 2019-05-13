import axios from 'axios';
import Common from '@/api/Common';
import store from '../store';
import router from '../router';

const LOGIN_URL = process.env.VUE_APP_API_BASE_URL + '/login';
const REGISTER_URL = process.env.VUE_APP_API_BASE_URL + '/registration';
const LOGOUT1_URL = process.env.VUE_APP_API_BASE_URL + '/logout1';
const LOGOUT2_URL = process.env.VUE_APP_API_BASE_URL + '/logout2';
function logout2() {
    let header = Common.jwtRefreshHeader();
    axios.delete(LOGOUT2_URL, header)
    .then(() => { // refresh_token blacklisted
        store.commit('resetUser'); // reset user
        router.push('/'); // send to homepage
    })
    .catch(error => {
        console.log(error);
        store.commit('resetUser'); // still reset user, since refresh_token may have just been expired
        router.push('/'); // send to homepage
    })
}
function logout1() {
    let header = Common.jwtAccessHeader();
    axios.delete(LOGOUT1_URL, header) // logout access_token
    .then(() => { // access_token blacklisted, 
        logout2(); // now blacklist refresh_token
    })
    .catch(error => {
        console.log(error);
        logout2(); // try to blacklist refresh_token even if access_token fails, since access_token may just have expired
    });
}

export default {
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
    },
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
    logout() {
        logout1(); // logout1 will call logout2
    }
};
