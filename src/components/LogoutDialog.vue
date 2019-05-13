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
import UserManagementApi from '@/api/UserManagementApi';

export default {
    name: 'LogoutDialog',
    props: ['show'],
    methods: {
        close() {
            this.$emit('logoutClose');
        },
        logout() {
            UserManagementApi.logout();
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
