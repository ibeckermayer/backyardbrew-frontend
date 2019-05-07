<template>
    <span>
        <account-bar></account-bar>
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
        <v-container app hidden-sm-and-down class="nav-bar" fluid pa-0>
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
                                    >About</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    >Retail</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
                                    >R&D</v-btn
                                >
                            </v-flex>
                            <v-flex md1>
                                <v-btn
                                    active-class="custom-button"
                                    to="/under_construction"
                                    flat
                                    v-ripple="{ class: `brown--text` }"
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
    </span>
</template>

<script>
import AccountBar from '@/components/AccountBar';

export default {
    data() {
        return {
            drawer: false,
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
        AccountBar
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
</style>
