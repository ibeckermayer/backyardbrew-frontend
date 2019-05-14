import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store';
import axios from 'axios';
import Common from '@/api/Common';
import 'material-design-icons-iconfont/dist/material-design-icons.css';
const REFRESH_URL = process.env.VUE_APP_API_BASE_URL + '/refresh';

// set up axios interceptor for token refresh
axios.interceptors.response.use(
    function(response) {
        return response;
    },
    function(error) {
        const originalRequest = error.config;
        if (
            (error.response.status === 401 || error.response.status === 422) &&
            !originalRequest._retry &&
            !(originalRequest.url === REFRESH_URL)
        ) {
            // probably an access_token error, try a refresh and try call again
            originalRequest._retry = true;
            let header = Common.jwtRefreshHeader();
            return axios
                .put(REFRESH_URL, {}, header)
                .then(response => {
                    store.commit('setJwtAccess', response.data.access_token);
                    originalRequest.headers.Authorization =
                        'Bearer ' + store.getters.user.access_token;
                    return axios(originalRequest);
                })
                .catch(refresh_error => {
                    console.log(refresh_error);
                    router.push('/unauthorized');
                });
        } else {
            throw error;
        }
    }
);

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');
