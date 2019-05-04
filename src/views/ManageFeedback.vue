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
                            <v-select v-model="resolved" single-line outline :items="selItms">
                            </v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex ma-2 v-for="(fb, index) in feedbacks">
                <feedback-card @toggle-resolved="toggleResolved" :feedback="fb"></feedback-card>
            </v-flex>
            <v-flex>
                <v-btn color="primary" :disabled="currentPage == minPage" outline @click="prevPage"
                    >Previous</v-btn
                >
                <v-btn
                    color="primary"
                    :disabled="currentPage == maxPage"
                    @click="nextPage"
                    text-xs-center
                    >Next</v-btn
                >
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import store from '../store';
import router from '../router';
import FeedbackCard from '@/components/FeedbackCard';

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
            selItms: [
                {
                    text: 'Unresolved',
                    value: false
                },
                {
                    text: 'Resolved',
                    value: true
                }
            ]
        };
    },
    beforeRouteEnter(to, from, next) {
        const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
        let header = {
            headers: {
                Authorization: 'Bearer ' + store.getters.jwtAccess
            }
        };
        axios
            .post(
                FEEDBACK_URL, // before entering route, get page 1 of unresolved feedbacks
                {
                    resolved: false, // initially load unresolved
                    page: 1
                },
                header
            )
            .then(response => {
                // if authorization succeeds
                next(vm => {
                    vm.feedbacks = response.data.feedbacks; // fill feedbacks list with first page
                    vm.maxPage = response.data.total_pages;
                });
            })
            .catch(error => {
                // if authorization fails
                console.log(error.response.status);
                console.log(error.response.data);
                router.push({ path: '/unauthorized' }); // push user to unauthorized route
            });
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.maxPage) {
                // if there are more feedbacks to fetch
                this.displayPage(++this.currentPage);
            }
        },
        prevPage() {
            if (this.currentPage > this.minPage) {
                // if we are not on the first page
                this.displayPage(--this.currentPage);
            }
        },
        toggleResolved(feedback) {
            const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
            let header = {
                headers: {
                    Authorization: 'Bearer ' + store.getters.jwtAccess
                }
            };
            let newResVal = !feedback.resolved; // new resolved value is negation of current value
            let fb_id = feedback.id; // get id
            axios
                .patch(
                    FEEDBACK_URL,
                    {
                        // patch object on backend/database
                        id: fb_id,
                        resolved: newResVal
                    },
                    header
                )
                .then(response => {
                    // patch confirmed
                    this.maxPage = response.data.total_pages; // update max pages
                    if (this.currentPage > this.maxPage) {
                        this.currentPage = this.maxPage; // if change of object state causes logical inconsistency, account for it
                    }
                    this.displayPage(this.currentPage);
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    router.push({ path: '/unauthorized' }); // push user to unauthorized route
                });
        },
        displayPage(page) {
            const FEEDBACK_URL = process.env.VUE_APP_API_BASE_URL + '/feedback';
            let header = {
                headers: {
                    Authorization: 'Bearer ' + store.getters.jwtAccess
                }
            };
            axios
                .post(
                    FEEDBACK_URL,
                    {
                        resolved: this.resolved,
                        page: page
                    },
                    header
                )
                .then(response => {
                    // on successful request
                    this.feedbacks = response.data.feedbacks; // populate this.feedbacks with new page
                    this.maxPage = response.data.total_pages; // update total pages
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    router.push({ path: '/unauthorized' }); // push user to unauthorized route
                });
        }
    },
    watch: {
        // called when selection dropdown is changed
        resolved: function(oldVal, newVal) {
            this.currentPage = 1; // set the current page to page 1
            this.displayPage(this.currentPage); // load new results, update max pages, etc.
        }
    }
};
</script>

<style scoped></style>
