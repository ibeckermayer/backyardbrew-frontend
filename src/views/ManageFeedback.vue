<template>
    <v-container>
        <v-layout justify-center align-center="" column>
            <v-flex>
            <v-container>
                <v-layout row align-center>
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
            <v-flex ma-2 v-for="(fb, index) in feedbacks">
                <feedback-card @toggle-resolved="toggleResolved" :feedback="fb"></feedback-card>
            </v-flex>
            <v-flex>
                <v-btn color="primary" outline @click="prevPage">Previous</v-btn>
                <v-btn color="primary" @click="nextPage" text-xs-center>Next</v-btn>
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
            currentPage: 1, // start on page 1
            minPage: 1, // constant, should not change
            maxPage: null, // initialized in beforeRouteEnter
            resolved: false, // start with unresolved feedbacks
            feedbacks: [], // initialized in beforeRouteEnter
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
            resolved: false, // initially load unresolved
            page: 1
        },
        header)
        .then(response => { // if authorization succeeds
            console.log(response);
            next(vm => {
                vm.feedbacks = response.data.feedbacks; // fill feedbacks list with first page
                vm.maxPage = response.data.total_pages;
                console.log(vm.feedbacks);
            });
        })
        .catch(error => { // if authorization fails
            console.log(error.response.status);
            console.log(error.response.data);
            router.push({path: '/unauthorized'}); // push user to unauthorized route
        });
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.maxPage) { // if there are more feedbacks to fetch
                const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
                let header = {
                    headers: {
                        "Authorization": "Bearer " + store.getters.jwtAccess
                    }
                };
                axios.post(FEEDBACK_URL,
                {
                    resolved: this.resolved,
                    page: ++this.currentPage // increment current page
                },
                header)
                .then(response => { // on successful request
                    this.feedbacks = response.data.feedbacks; // populate this.feedbacks with new page
                    this.maxPage = response.data.total_pages; // update total pages
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    router.push({path: '/unauthorized'}); // push user to unauthorized route
                })
            }
        },
        prevPage() {
            if (this.currentPage > this.minPage) { // if we are not on the first page
                const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
                let header = {
                    headers: {
                        "Authorization": "Bearer " + store.getters.jwtAccess
                    }
                };
                axios.post(FEEDBACK_URL,
                {
                    resolved: this.resolved,
                    page: --this.currentPage // decrement current page
                },
                header)
                .then(response => { // on successful request
                    this.feedbacks = response.data.feedbacks; // populate this.feedbacks with new page
                    this.maxPage = response.data.total_pages; // update total pages
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    router.push({path: '/unauthorized'}); // push user to unauthorized route
                })
            }
        },
        toggleResolved(feedback) {
            console.log("toggleResolved called");
            const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
            let header = {
                headers: {
                    "Authorization": "Bearer " + store.getters.jwtAccess
                }
            };
            let newResVal = !feedback.resolved; // new resolved value is negation of current value
            let fb_id = feedback.id; // get id
            axios.patch(FEEDBACK_URL, { // patch object on backend/database
                id: fb_id,
                resolved: newResVal
            }, header)
            .then(response => { // patch confirmed, remove feedback from respective list
                this.removeFeedback(feedback.id, feedback.resolved);
            })
            .catch(error => {
                console.log(error.response.status);
                console.log(error.response.data);
                router.push({path: '/unauthorized'}); // push user to unauthorized route
            })
        },
        removeFeedback (id, resolved) {
            if (resolved == false) {
                this.unresFeedback = this.unresFeedback.filter(fb => {
                    return fb.id != id;
                })
            }
        }
    }
};
</script>

<style scoped>

</style>