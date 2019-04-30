<template>
    <v-dialog :value="show" @input="$emit('registerClose'); " width="800" scrollable>
        
        <v-card>
            <v-alert
            :value="regSucc"
            type="success"
            >
            Registration successful. Please login to continue to account.
            </v-alert>
            <v-card-title>
                <span class="headline">Register</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12 md6>
                            <v-text-field
                            validate-on-blur
                            ref="firstName"
                            v-model="form.firstName"
                            color="primary"
                            label="First Name"
                            required
                            :rules="[rules.reqd]"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12 md6>
                            <v-text-field
                            validate-on-blur
                            ref="lastName"
                            v-model="form.lastName"
                            color="primary"
                            label="Last Name"
                            required
                            :rules="[rules.reqd]"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field
                            validate-on-blur
                            ref="email"
                            v-model="form.email"
                            color="primary" 
                            label="Email" 
                            required
                            :error-messages="this.emailInUse"
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
                            label="Password (minimum 8 characters)" 
                            type="password" 
                            required 
                            :rules="[rules.reqd, rules.min8]"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field 
                            validate-on-blur
                            ref="confPassword"
                            v-model="form.confPassword"
                            color="primary"     
                            label="Confirm Password" 
                            type="password" 
                            required 
                            :rules="[rules.reqd, rules.min8, rules.pwdconf]"
                            >
                            </v-text-field>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-card-text>
            <v-card-actions>
            <v-container>
                <v-layout justify-center align-center>
                    <v-btn color="primary" dark @click="submit" text-md-center>Register</v-btn>
                </v-layout>
            </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
import axios from 'axios';
import { constants } from 'crypto';

export default {
    name: 'RegisterDialog',
    props: ['show'],
    data () {
        return {
            regSucc: false,
            emailInUse: [],
            form: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                confPassword: null,
            },
            rules: {
                reqd: val => !!val || 'This field is required',
                min8: val => (val || '').length >= 8 || 'Minimum 8 characters',
                vemail: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase()) || 'Please enter valid email',
                pwdconf: val => val == this.form.password || 'Passwords do not match'
            },
            hasErrors: false
        }
    },
    methods: {
        submit () {
            this.hasErrors = false;

            for (let key in this.form) {
                if (!(this.$refs[key].validate(true))) {
                    this.hasErrors = true;
                }
            }
            if (this.hasErrors) {
                console.log("Form has errors!");
            }
            else {
                const REGISTER_URL = process.env.VUE_APP_API_BASE_URL + '/registration';
                console.log(process.env.VUE_APP_API_BASE_URL);
                axios.post(REGISTER_URL, {
                    first_name: this.form['firstName'],
                    last_name: this.form['lastName'],
                    email: this.form['email'],
                    password: this.form['password']
                })
                .then(response => {this.regSucc = true})
                .catch(error => {
                    if (error.response.status == 409) {
                        this.emailInUse = 'Email address already in use'
                    }
                });
            }
        },
    }
}
</script>

<style scoped>
a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
}
</style>
