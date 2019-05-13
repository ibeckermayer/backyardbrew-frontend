<template>
    <span>
        <v-container app hidden-md-and-up pa-0>
            <v-toolbar color="#FFFFFF" light="">
                <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
                <router-link to="/">
                    <v-toolbar-title class="centered">ALLOUTCOMES COFFEE</v-toolbar-title>
                </router-link>
            </v-toolbar>
            <v-navigation-drawer v-model="drawer" app>
                <v-list>
                    <template v-for="(item, index) in nav_labels">
                        <v-list-tile :key="index" :to="item.route">
                            <v-list-tile-content>
                                <div class="tile-content">
                                    {{ item.nav_label }}
                                </div>
                            </v-list-tile-content>
                        </v-list-tile>
                        <v-divider :key="`divider-${index}`"></v-divider>
                    </template>
                </v-list>
            </v-navigation-drawer>
        </v-container>
        <v-container app class="account-bar sticky" fluid pa-0>
            <v-layout align-center row fill-height>
                <v-flex md12 elevation-1 class="account-bar-flex">
                    <v-container class="button-container" fluid>
                        <v-layout justify-end align-center row fill-height>
                            <v-flex text-md-center md1>
                                <v-btn small flat class="account-button" href="#contact"
                                    >Contact</v-btn
                                >
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="!loggedIn">
                                <v-btn
                                    small
                                    flat
                                    class="account-button"
                                    @click.prevent="loginShow = true"
                                    >Login</v-btn
                                >
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="!loggedIn">
                                <v-btn
                                    small
                                    flat
                                    class="account-button"
                                    @click.prevent="registerShow = true"
                                    >Register</v-btn
                                >
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="loggedIn">
                                <v-btn
                                    small
                                    flat
                                    @click.prevent="logoutShow = true"
                                    class="account-button"
                                    >Logout</v-btn
                                >
                            </v-flex>
                            <v-flex text-md-center md1 hidden v-if="loggedIn">
                                <v-btn small flat disabled class="account-button">Account</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn
                                    small
                                    flat
                                    @click.prevent="cartShow = true"
                                    class="account-button"
                                >
                                    <v-icon dark color="white">shopping_cart</v-icon>
                                    <span color="white" class="cart">({{ cartCount }})</span>
                                </v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container app hidden-sm-and-down class="nav-bar" fluid pt-4 mt-2 px-5>
            <v-layout align-center row fill-height>
                <v-flex md2>
                    <v-container align-center class="logo-container">
                        <v-layout row fill-height>
                            <v-flex>
                                <router-link to="/">
                                    <img src="@/assets/aoc_coffee.jpg" height="100px" />
                                </router-link>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex md9 lg10>
                    <v-container class="button-container">
                        <v-layout justify-space-around row fill-height>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/brew"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    >Brew</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/bistro"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    >Bistro</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/roasting"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    >Roasting</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    disabled
                                    >About</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    disabled
                                    >Retail</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    disabled
                                    >R&D</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    disabled
                                    >Tech</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    color="#8D6E63"
                                    dark
                                    to="/catalog"
                                    v-ripple="{ class: `brown--text` }"
                                    >Order</v-btn
                                >
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
        <cart-dialog :show="cartShow" @cartClose="cartShow = false"></cart-dialog>
    </span>
</template>

<script>
import LoginDialog from '@/components/LoginDialog';
import RegisterDialog from '@/components/RegisterDialog';
import LogoutDialog from '@/components/LogoutDialog';
import CartDialog from '@/components/CartDialog';

export default {
    data() {
        return {
            drawer: false,
            loginShow: false,
            registerShow: false,
            logoutShow: false,
            cartShow: false,
            nav_labels: [
                {
                    nav_label: 'Brew',
                    route: '/brew'
                },
                {
                    nav_label: 'Bistro',
                    route: '/bistro'
                },
                {
                    nav_label: 'Roasting',
                    route: '/roasting'
                },
                {
                    nav_label: 'About',
                    route: '/under_construction'
                },
                {
                    nav_label: 'Retail',
                    route: '/under_construction'
                },
                {
                    nav_label: 'R&D',
                    route: '/under_construction'
                },
                {
                    nav_label: 'Tech',
                    route: '/under_construction'
                },
                {
                    nav_label: 'Order',
                    route: '/under_construction'
                }
            ]
        };
    },
    name: 'AppNavigation',
    components: {
        LoginDialog,
        RegisterDialog,
        LogoutDialog,
        CartDialog
    },
    computed: {
        cartCount() {
            return this.$store.getters.cart.items.length;
        },
        loggedIn() {
            // true if user is logged in, false otherwise
            return this.$store.getters.user.access_token; // true if access token is not empty string
        }
    }
};
</script>

<style scoped>
.nav-bar {
    background-color: #ffffff;
    padding: 0;
    max-height: 150px;
}

.logo-container {
    padding-top: 8px;
    padding-bottom: 8px;
    /* padding-top: 0; */
}

.button-container {
    padding: 0;
}

a {
    color: inherit;
    text-decoration: none;
}

.tile-content {
    color: black;
    text-decoration: none;
}

.v-btn:hover::before {
    color: #8d6e63;
}

.custom-button {
    background: rgba(141, 110, 99, 0.3);
}

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

.account-button::before {
    color: transparent;
}

.sticky {
    position: fixed; /* fixing the position takes it out of html flow - knows
                   nothing about where to locate itself except by browser
                   coordinates */
    left: 0; /* top left corner should start at leftmost spot */
    top: 0; /* top left corner should start at topmost spot */
    width: 100vw; /* take up the full browser width */
    z-index: 200; /* high z-index so other content scrolls beneath */
}

.cart {
    /* font-weight: bold; */
    font-size: 1.5em;
    color: white;
}
</style>
