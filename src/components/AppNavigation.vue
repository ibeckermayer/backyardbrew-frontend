<template>
    <v-toolbar app color="white" extended="true" extension-height="36px">
        <v-container class="logo-container">
            <v-layout align-center justify-start row fill-height>
                <v-flex>
                    <img src="../assets/aoc_coffee.jpg" height="100px">
                </v-flex>
            </v-layout>
        </v-container>
        <v-toolbar-items>
            <v-btn flat>Link One</v-btn>
            <v-btn flat>Link Two</v-btn>
            <v-btn flat>Link Three</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
    name: 'AppNavigation'
};
</script>

<style scoped>
.logo-container{
    padding: 0;
    padding-top: 
}
</style>