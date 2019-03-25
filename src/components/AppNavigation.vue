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
                                        {{item.nav_label}}
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
                    <v-container >
                        <v-layout align-center row fill-height>
                            <v-flex align-self-center>
                                <router-link to="/">
                                    <img src="@/assets/aoc_coffee.jpg" height="100px">
                                </router-link>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex md9>
                    <v-container class="button-container">
                        <v-layout align-center justify-space-around="" row fill-height>
                            <v-flex md1>
                                <v-btn to="/brew" flat>Brew</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/bistro" flat>Bistro</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/roasting" flat>Roasting</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/under_construction" flat>About</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/under_construction" flat>Retail</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/under_construction" flat>R&D</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn to="/under_construction" flat>Tech</v-btn>
                            </v-flex>
                            <v-flex md1>
                                <v-btn color="#8D6E63" dark href="https://aoccoffee.com/collections/all">Order</v-btn>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
            </v-layout>
        </v-container>
    </span>
 </template>

<script>
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
                    route: '/brew'
                },
                {
                    nav_label: 'Retail',
                    route: '/brew'
                },
                {
                    nav_label: 'Order Online',
                    route: '/brew'
                },
            ]            
        }
    },
    name: 'AppNavigation'
};
</script>

<style scoped>
.nav-bar{
    background-color: #FFFFFF;
    padding: 0;
    max-height: 150px;
}

.button-container{
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
</style>