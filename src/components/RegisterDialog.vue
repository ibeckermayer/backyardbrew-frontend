<template>
    <v-dialog
        :value="show"
        @input="$emit('registerClose')"
        width="800"
        :fullscreen="$vuetify.breakpoint.smAndDown"
    >
        <v-card>
            <v-alert class="w-100 pa-0 ma-0" :value="regSucc" type="success">
                Registration successful. Please login to continue to account.
            </v-alert>
            <v-card-title>
                <v-container>
                    <v-layout headline>
                        Register
                    </v-layout>
                </v-container>
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
    name: 'RegisterDialog',
    props: ['show'],
    data() {
        return {
            regSucc: false,
            emailInUse: [],
            form: {
                firstName: null,
                lastName: null,
                email: null,
                password: null,
                confPassword: null
            },
            rules: {
                reqd: val => !!val || 'This field is required',
                min8: val => (val || '').length >= 8 || 'Minimum 8 characters',
                vemail: val =>
                    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                        String(val).toLowerCase()
                    ) || 'Please enter valid email',
                pwdconf: val => val == this.form.password || 'Passwords do not match'
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
                    console.log('error on ' + key);
                }
            }
            if (this.hasErrors) {
                console.log('Form has errors!');
            } else {
                UserManagementApi.register(
                    this.form['firstName'],
                    this.form['lastName'],
                    this.form['email'],
                    this.form['password']
                )
                    .then(response => {
                        this.regSucc = true;
                    })
                    .catch(error => {
                        if (error.response.status == 409) {
                            this.emailInUse = ['Email address already in use'];
                        }
                    });
            }
        },
        clearForm() {
            this.form['firstName'] = null;
            this.form['lastName'] = null;
            this.form['email'] = null;
            this.form['password'] = null;
            this.form['confPassword'] = null;
            this.regSucc = false;
        },
        close() {
            this.clearForm();
            this.$emit('registerClose');
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
