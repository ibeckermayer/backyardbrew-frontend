<template>
    <!-- <v-container fluid fill-height class="under-const">
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
    </v-container> -->
    <!-- <ul>
        <li v-for="(fb, index) in unresFeedback">
            {{ fb.email }}
        </li>
    </ul> -->
    <v-container>
        <v-layout justify-center align-center="" column>
            <v-flex>
                Unresolved Feedback
            </v-flex>
            <v-flex ma-2 v-for="(fb, index) in unresFeedback">
                <v-card width="800px">
                    <v-card-title>
                        <v-layout column>
                            <v-flex><b>Name:</b> {{ fb.name }}</v-flex>
                            <v-flex><b>Email:</b> {{ fb.email }}</v-flex>
                            <v-flex><b>Recieved:</b> {{fb.rcvd_on}}</v-flex>
                        </v-layout>
                    </v-card-title>
                    <v-card-text>
                        {{ fb.text }}
                    </v-card-text>
                    <v-card-actions>
                        <v-btn small color="primary" outline="" @click="submit" text-xs-center>Mark Resolved</v-btn>
                    </v-card-actions>
                </v-card>
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
    data() {
        return {
            unresFeedback: [], // list of unresovled feedback object
            resFeedback: []    // list of resolved feedback objects
        }
    },
    beforeRouteEnter (to, from, next) {
        const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
        let header = {
            headers: {
                "Authorization": "Bearer " + store.getters.jwtAccess
            }
        };
        console.log(header);
        axios.post(FEEDBACK_URL, // before entering route, get page 1 of unresolved feedbacks
        {
            resolved: false,
            page: 1
        },
        header)
        .then(response => { // if authorization succeeds
            console.log(response);
            next(vm => {
                vm.unresFeedback = response.data.feedbacks; // fill unresFeedback with first page of unresolved Feedback
                console.log(vm.unresFeedback);
            });
        })
        .catch(error => { // if authorization fails
            console.log(error.response.status);
            console.log(error.response.data);
            router.push({path: '/unauthorized'}); // push user to unauthorized route
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