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
                    :disabled="currentPage == total_pages"
                    @click="nextPage"
                    text-xs-center
                    >Next</v-btn
                >
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import store from '../store';
import router from '../router';
import FeedbackCard from '@/components/FeedbackCard';
import FeedbackApi from '@/api/FeedbackApi'

export default {
    name: 'ManageFeedback',
    components: {
        FeedbackCard
    },
    data() {
        return {
            currentPage: 1, // start on page 1
            minPage: 1, // constant, should not change
            total_pages: null, // initialized in beforeRouteEnter
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
        FeedbackApi.getFeedbackPage(1, false) // initially load page 1 of unresolved feedback 
        .then(response => {
            // if authorization succeeds
            next(vm => {
                vm.feedbacks = response.data.feedbacks; // fill feedbacks list with first page
                vm.total_pages = response.data.total_pages;
            });
        })
        .catch(() => {
            return; // default error handling
        });
    },
    methods: {
        nextPage() {
            if (this.currentPage < this.total_pages) {
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
            FeedbackApi.toggleFeedbackResolved(feedback.id, !feedback.resolved) // new resolved value is negation of current value
            .then(response => {
                // patch confirmed
                this.total_pages = response.data.total_pages; // update max pages
                if (this.currentPage > this.total_pages) {
                    this.currentPage = this.total_pages; // if change of object state causes logical inconsistency, account for it
                }
                this.displayPage(this.currentPage);
            })
            .catch(() => {
                return; // default error handling
            });
        },
        displayPage(page) {
            FeedbackApi.getFeedbackPage(page, this.resolved)
            .then(response => {
                // on successful request
                this.feedbacks = response.data.feedbacks; // populate this.feedbacks with new page
                this.total_pages = response.data.total_pages; // update total pages
            })
            .catch(() => {
                return; // default error handling                
            });
        }
    },
    watch: {
        // called when selection dropdown is changed
        resolved: function(newVal, oldVal) {
            this.currentPage = 1; // set the current page to page 1
            this.displayPage(this.currentPage); // load new results, update max pages, etc.
        }
    }
};
</script>

<style scoped></style>
