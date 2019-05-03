<template>
    <v-container app class="footer" fluid pa-0>
        <v-layout align-start row fill-height wrap>
            <v-flex xs12 md4>
                <v-container fluid>
                    <v-layout column fill-height>
                        <v-flex text-xs-center xs1>
                            <h3>Partners</h3>
                        </v-flex>
                        <v-flex text-xs-center xs1>
                            <p>
                                All photography by
                                <a href="https://stefanradev.co/">Stefan Radev</a>
                            </p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12 md4>
                <v-container fluid>
                    <v-layout column fill-height>
                        <v-flex text-xs-center xs1>
                            <a name="contact"></a>
                            <h3>Contact</h3>
                        </v-flex>
                        <v-flex text-xs-center xs1>
                            <p>ryankhalil91@gmail.com</p>
                        </v-flex>
                        <v-flex text-xs-center xs1>
                            <p>(650) 704-7785</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12 md4>
                <v-container fluid>
                    <v-layout column fill-height>
                        <v-flex text-xs-center xs1>
                            <a name="contact"></a>
                            <h3>Feedback?</h3>
                        </v-flex>
                        <v-flex text-xs-center xs1>
                            <p>Feel free to leave us feedback through our</p>
                        </v-flex>
                        <v-flex text-xs-center xs1>
                            <router-link to="/feedback">Feedback Form</router-link>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs12 hidden v-if="showAdmin">
                <v-container fluid>
                    <v-layout fill-height column>
                        <v-flex text-xs-center> 
                            <h3>Admin</h3>
                        </v-flex>
                        <v-flex text-xs-center>
                            <router-link to="/managefeedback">Manage Feedback</router-link>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Footer',
    computed: {
        showAdmin() {
            // Only show the admin panel if user is logged in as admin
            return this.$store.getters.role === 0;
        }

    }
};
</script>

<style scoped>
.button-container {
    padding-top: 0;
    padding-bottom: 0;
}
.footer {
    background-color: white;
}

p {
    margin: 0;
}

a {
    margin: 0;
    padding: 0;
    text-decoration: underline;
    color: black;
    font-weight: 500;
}
</style>
