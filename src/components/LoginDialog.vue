<template>
    <v-dialog
        :value="show"
        @input="$emit('loginClose')"
        width="800"
        :fullscreen="$vuetify.breakpoint.smAndDown"
    >
        <v-card>
            <v-alert class="w-100 pa-0 ma-0" :value="logSucc" type="success">
                Login successful!
            </v-alert>
            <v-card-title>
                <span class="headline">Login</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field
                                validate-on-blur
                                ref="email"
                                v-model="form.email"
                                color="primary"
                                label="Email"
                                required
                                :error-messages="emailDNE"
                                :rules="[rules.reqd, rules.vemail]"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                                validate-on-blur
                                ref="password"
                                v-model="form.password"
                                color="primary"
                                label="Password"
                                type="password"
                                required
                                :error-messages="pwdIncorrect"
                                :rules="[rules.reqd]"
                            >
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
                <v-container>
                    <v-layout justify-center align-center>
                        <v-btn color="primary" dark @click="submit" text-md-center>Login</v-btn>
                        <v-btn color="secondary" @click="close" text-md-center>Close</v-btn>
                    </v-layout>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
export default {
    name: 'LoginDialog',
    props: ['show'],
    data() {
        return {
            logSucc: false,
            emailDNE: [],
            pwdIncorrect: [],
            form: {
                email: null,
                password: null
            },
            rules: {
                reqd: val => !!val || 'This field is required',
                vemail: val =>
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        String(val).toLowerCase()
                    ) || 'Please enter valid email'
            },
            hasErrors: false
        };
    },
    methods: {
        submit() {
            this.hasErrors = false;

            for (let key in this.form) {
                if (!this.$refs[key].validate(true)) {
                    this.hasErrors = true;
                }
            }
            if (this.hasErrors) {
                console.log('Form has errors!');
            } else {
                const LOGIN_URL = process.env.VUE_APP_API_BASE_URL + '/login';
                axios
                    .post(LOGIN_URL, {
                        email: this.form['email'],
                        password: this.form['password']
                    })
                    .then(response => {
                        this.$store.commit('setFirstName', response.data.user.first_name);
                        this.$store.commit('setLastName', response.data.user.last_name);
                        this.$store.commit('setEmail', response.data.user.email);
                        this.$store.commit('setRole', response.data.user.role);
                        this.$store.commit('setJwtAccess', response.data.access_token);
                        this.$store.commit('setJwtRefresh', response.data.refresh_token);
                        this.logSucc = true;
                    })
                    .catch(error => {
                        if (error.response.status == 404) {
                            this.emailDNE = 'No user with this email is registered';
                        }
                        if (error.response.status == 401) {
                            this.pwdIncorrect = 'Password incorrect';
                        }
                    });
            }
        },
        clearForm() {
            this.form['email'] = null;
            this.form['password'] = null;
        },
        close() {
            this.clearForm();
            this.$emit('loginClose');
        }
    }
};
</script>

<style scoped>
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
}
</style>
