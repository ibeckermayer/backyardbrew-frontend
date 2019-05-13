import store from '../store';

export default {
    jwtAccessHeader () {
        return {
            headers: {
                Authorization: 'Bearer ' + store.getters.user.access_token
            }
        }
    },
    jwtRefreshHeader () {
        return {
            headers: {
                Authorization: 'Bearer ' + store.getters.user.refresh_token
            }
        }
    }
}