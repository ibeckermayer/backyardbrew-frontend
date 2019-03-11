<template>
    <v-container>
        <v-layout align-center justify-space-between row fill-height>
            <v-flex align-self-center>
                <img src="../assets/aoc_coffee.jpg" height="100px">
            </v-flex>
            <v-flex align-self-center>            
                <v-btn flat>Link One</v-btn>
            </v-flex>
            <v-flex align-self-center>            
                <v-btn flat>Link Two</v-btn>
            </v-flex>
            <v-flex align-self-center>            
                <v-btn flat>Link Three</v-btn>
            </v-flex>
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
.logo-container{
    padding: 0;
}
</style>