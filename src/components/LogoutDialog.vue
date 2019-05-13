<template>
    <v-dialog
        :value="show"
        @input="$emit('logoutClose')"
        width="800"
        :fullscreen="$vuetify.breakpoint.smAndDown"
    >
        <v-card>
            <v-alert class="w-100 pa-0 ma-0" :value="loggedOut" type="success">
                Successfully logged out
            </v-alert>
            <v-card-title>
                <v-container>
                    <v-layout headline>
                        Logout
                    </v-layout>
                </v-container>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-layout justify-center align-center title>
                        Are you sure you want to log out?
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-container>
                    <v-layout justify-center align-center>
                        <v-btn color="primary" dark @click="logout">Logout</v-btn>
                        <v-btn color="primary" outline @click="close" text-md-center>Close</v-btn>
                    </v-layout>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';

export default {
    name: 'LogoutDialog',
    props: ['show'],
    methods: {
        close() {
            this.$emit('logoutClose');
        },
        logout() {
            const LOGOUT1_URL = process.env.VUE_APP_API_BASE_URL + '/logout1';
            let header = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.getters.user.access_token
                }
            };
            axios
                .delete(LOGOUT1_URL, header) // logout access_token
                .then(response => {
                    this.logout2(); // logout refresh_token
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    this.logout2(); // logout refresh_token even if logout1 fails, since access may just have expired
                });
        },
        logout2() {
            const LOGOUT2_URL = process.env.VUE_APP_API_BASE_URL + '/logout2';
            let header = {
                headers: {
                    Authorization: 'Bearer ' + this.$store.getters.user.refresh_token
                }
            };
            axios
                .delete(LOGOUT2_URL, header) // logout refresh_token
                .then(response => {
                    this.$store.commit('resetUser'); // reset the user now that they're logged out
                })
                .catch(error => {
                    console.log(error.response.status);
                    console.log(error.response.data);
                    this.$store.commit('resetUser'); // reset the user in case refresh was expired
                });
        }
    },
    computed: {
        loggedOut() {
            // true if user is logged in, false otherwise
            return !this.$store.getters.user.access_token; // true if access token is not empty string
        }
    }
};
</script>

<style scoped></style>
