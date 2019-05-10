<template >
    <span class="sticky">
        <!-- Bar layout -->
        <v-container app class="account-bar" fluid pa-0>
            <v-layout align-center row fill-height>
                <v-flex md12 elevation-1 class="account-bar-flex">
                    <v-container class="button-container" fluid>
                        <v-layout justify-end align-center row fill-height>
                            <v-flex text-md-center md1>
                                <v-btn small flat class="account-button" href="#contact">Contact</v-btn>
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="!loggedIn">
                                <v-btn small flat class="account-button" @click.prevent="loginShow = true">Login</v-btn>
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="!loggedIn">
                                <v-btn small flat class="account-button" @click.prevent="registerShow = true">Register</v-btn>
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="loggedIn">
                                <v-btn small flat @click.prevent="logoutShow = true" class="account-button">Logout</v-btn>
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="loggedIn">
                                <v-btn small flat class="account-button">Account</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn small flat>
                                    <v-icon dark color="white">shopping_cart</v-icon>
                                    <span color="white" class="cart">({{ cartCount }})</span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>

        <!-- Dialogs -->
        <login-dialog v-bind:show="loginShow" @loginClose="loginShow = false"></login-dialog>
        <register-dialog
            v-bind:show="registerShow"
            @registerClose="registerShow = false"
        ></register-dialog>
        <logout-dialog :show="logoutShow" @logoutClose="logoutShow = false"></logout-dialog>
    </span>
</template>

<script>
import LoginDialog from '@/components/LoginDialog';
import RegisterDialog from '@/components/RegisterDialog';
import LogoutDialog from '@/components/LogoutDialog';

export default {
    name: 'AccountBar',
    components: {
        LoginDialog,
        RegisterDialog,
        LogoutDialog
    },
    data() {
        return {
            loginShow: false,
            registerShow: false,
            logoutShow: false
        };
    },
    computed: {
        cartCount () {
            return this.$store.getters.cart.items.length;
        },
        loggedIn () {
            // true if user is logged in, false otherwise
            return this.$store.getters.user.access_token; // true if access token is not empty string
        }
    }
};
</script>

<style scoped>
.button-container {
    padding-top: 0;
    padding-bottom: 0;
}
.account-bar {
    background-color: #8d6e63;
}

.account-button {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: white;
    font-weight: bold;

}

.sticky {
  position:fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
  left:0;           /* top left corner should start at leftmost spot */
  top:0;            /* top left corner should start at topmost spot */
  width:100vw;      /* take up the full browser width */
  z-index: 200;     /* high z-index so other content scrolls beneath */ 
}

.cart {
    /* font-weight: bold; */
    font-size: 1.5em;
    color: white;
}
</style>
