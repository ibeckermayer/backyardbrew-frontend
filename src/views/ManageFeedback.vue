<template>
    <v-container>
        <v-layout justify-center align-center="" column>
            <v-flex>
            <v-container>
                <v-layout row align-center justify-space-around="">
                    <v-flex xs6>
                        <h1>Feedback</h1>
                    </v-flex>
                    <v-flex xs6 text-xs-center>
                        <v-select single-line outline :items="selItms">
                        </v-select>
                    </v-flex>
                </v-layout>
            </v-container>
            </v-flex>
            <v-flex ma-2 v-for="(fb, index) in unresFeedback">
                <feedback-card :feedback="fb"></feedback-card>
            </v-flex>
            <v-flex>
                <v-btn color="primary" @click="loadMore" text-xs-center>More</v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store';
import router from '../router';
import FeedbackCard from '@/components/FeedbackCard'

export default {
    name: 'ManageFeedback',
    components: {
        FeedbackCard
    },
    data() {
        return {
            resPage: 1,
            unresPage: 2,
            unresFeedback: [], // list of unresovled feedback object
            resFeedback: [],    // list of resolved feedback objects
            selItms: ["Unresolved", "Resolved"] // items for selection box
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
    },
    methods: {
        loadMore() {
        const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
        let header = {
            headers: {
                "Authorization": "Bearer " + store.getters.jwtAccess
            }
        };
        axios.post(FEEDBACK_URL,
        {
            resolved: false,
            page: this.unresPage
        },
        header)
        .then(response => {
            this.unresFeedback = this.unresFeedback.concat(response.data.feedbacks);
            this.unresPage++;
        })
        }
    }
};
</script>

<style scoped>

</style>