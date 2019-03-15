<template>
    <v-container class="nav-bar" fluid pa-0> 
        <v-layout align-center row fill-height>
            <v-flex xs4 lg3 offset-md0 offset-lg1>
                <v-container>
                    <v-layout align-center row fill-height>
                        <v-flex align-self-center>
                            <a><img src="../assets/aoc_coffee.jpg" height="100px"></a>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex xs8 align-self-center>
                <v-container class="button-container">
                    <v-layout align-center justify-space-around row fill-height>
                        <v-flex xs2>
                            <v-btn flat>Order Online</v-btn>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat>Brew</v-btn>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat>Bistro</v-btn>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat>Micro-Roasting</v-btn>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat>Retail</v-btn>
                        </v-flex>
                        <v-flex xs2>
                            <v-btn flat>About</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
 </template>

<script>
export default {
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