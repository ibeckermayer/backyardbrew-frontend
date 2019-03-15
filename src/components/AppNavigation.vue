<template>
    <span>
        <v-container app hidden-md-and-up pa-0>
            <v-toolbar color="#FFFFFF" light="">
                <v-toolbar-side-icon @click="drawer = !drawer"></v-toolbar-side-icon>
                <v-toolbar-title class="centered">ALLOUTCOMES COFFEE</v-toolbar-title>
            </v-toolbar>
                <v-navigation-drawer v-model="drawer" app>
                    <p>test</p>
                </v-navigation-drawer>
        </v-container>
        <v-container app hidden-sm-and-down class="nav-bar" fluid pa-0>
            <v-layout align-center row fill-height>
                <v-flex md4 lg3 offset-md0 offset-lg1>
                    <v-container >
                        <v-layout align-center row fill-height>
                            <v-flex align-self-center>
                                <a><img src="../assets/aoc_coffee.jpg" height="100px"></a>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-flex>
                <v-flex sm12 md8 align-self-center>
                    <v-container class="button-container">
                        <v-layout align-center justify-space-around row fill-height>
                            <v-flex md2>
                                <v-btn flat>Brew</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn flat>Bistro</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn flat>Micro-Roasting</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn flat>About</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn flat>Retail</v-btn>
                            </v-flex>
                            <v-flex md2>
                                <v-btn color="#8D6E63" dark>Order Online</v-btn>
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
            drawer:false
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
</style>