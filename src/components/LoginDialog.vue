<template>
    <v-dialog :value="show" @input="$emit('loginClose')" width="800">
        <v-card>
            <v-card-title>
                <span class="headline">Login</span>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <v-container grid-list-md>
                    <v-layout wrap>
                        <v-flex xs12>
                            <v-text-field
                            ref="email"
                            v-model="form.email"
                            color="primary" 
                            label="Email" 
                            required
                            :rules="[rules.reqd, rules.vemail]"
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field 
                            ref="password"
                            v-model="form.password"
                            color="primary"     
                            label="Password" 
                            type="password" 
                            required 
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
                </v-layout>
            </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: 'LoginDialog',
    props: ['show'],
    data () {
        return {
            form: {
                email: null,
                password: null
            },
            rules: {
                reqd: val => !!val || 'This field is required',
                min8: val => (val || '').length >= 8 || 'Minimum 8 characters',
                vemail: val => /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(val).toLowerCase()) || 'Please enter valid email'
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
                for (let key in this.form) {
                    console.log(this.form[key]);
                }
            }
        }
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
