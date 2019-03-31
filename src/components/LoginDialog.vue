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
                            v-model="email"
                            color="primary" 
                            label="Email" 
                            required 
                            >
                            </v-text-field>
                        </v-flex>
                        <v-flex xs12>
                            <v-text-field 
                            v-model="password"
                            color="primary"     
                            label="Password" 
                            type="password" 
                            required 
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
            email: null,
            password: null,
        }
    },
    computed: {
        form () {
            return {
                email: this.email,
                password: this.password
            }
        }
    },
    methods: {
        submit () {
            Object.keys(this.form).forEach(f => {
                console.log(this.form[f])
            })
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
