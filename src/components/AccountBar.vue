<template>
    <span>
        <!-- Bar layout -->
        <v-container app class="account-bar" fluid pa-0>
            <v-layout align-center row fill-height>
                <v-flex md12 elevation-1 class="account-bar-flex">
                    <v-container class="button-container" fluid>
                        <v-layout justify-end row fill-height>
                            <v-flex text-md-center md1>
                                <a href="#contact">Contact</a>
                            </v-flex>
                            <v-flex text-md-center md1>
                                <a @click.prevent="loginShow = true">Login</a>
                            </v-flex>
                            <v-flex text-md-center md1>
                                <a @click.prevent="registerShow = true">Register</a>
                            </v-flex>
                            <v-flex text-md-center md1>
                                <a>Cart</a>
                            </v-flex>
                            <v-flex text-md-center md1>
                                <a>Account</a>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- Dialogs -->
        <login-dialog v-bind:show='loginShow' @loginClose='loginShow = false'></login-dialog>
        <register-dialog v-bind:show='registerShow' @registerClose='registerShow = false'></register-dialog>
    </span>
</template>

<script>
import LoginDialog from '@/components/LoginDialog'
import RegisterDialog from '@/components/RegisterDialog'

export default {
    name: 'AccountBar',
    components: {
        LoginDialog,
        RegisterDialog
    },
    data () {
        return {
            loginShow: false,
            registerShow: false
        }
    }
}
</script>

<style scoped>
.button-container {
    padding-top: 0;
    padding-bottom: 0;
}
.account-bar {
    background-color: #8D6E63;
}

a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    font-weight: bold;
}

</style>

