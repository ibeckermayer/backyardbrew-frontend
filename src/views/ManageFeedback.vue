<template>
    <v-container fluid fill-height class="under-const">
        <v-layout class="under-const-filter" justify-center column pa-5>
            <v-flex>
                <div>
                    <div
                        class="hidden-sm-and-down display-4 font-weight-black white--text text-xs-center mb-3"
                    >
                        Manage Feedback
                    </div>
                    <div
                        class="hidden-md-and-up display-3 font-weight-black white--text text-xs-center mb-3"
                    >
                        Manage Feedback
                    </div>
                </div>
                <div class="display-3 white--text text-xs-center">
                    Test Vue for ManageFeedback
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store';
import router from '../router';

export default {
    name: 'ManageFeedback',
    beforeRouteEnter (to, from, next) {
        const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
        let header = {
            headers: {
                "Authorization": "Bearer " + store.getters.jwtAccess
            }
        };
        console.log(header);
        axios.post(FEEDBACK_URL,
        {
            resolved: false,
            page: 1
        },
        header)
        .then(response => {
            console.log(response);
            next();
        })
        .catch(error => {
            console.log(error.response.status);
            console.log(error.response.data);
            router.push({path: '/unauthorized'});
        });
    }
};
</script>

<style scoped>
.under-const {
    background: url('../assets/landing_coffee_2.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    background-position: center;
}
.under-const-filter {
    background: rgba(62, 39, 35, 0.3);
}
</style>