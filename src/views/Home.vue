<template>
    <v-container fluid fill-height style="max-height:100vh;" class="home">
        <v-layout justify-center align-center column pa-5>
            <v-flex>
            <div class="display-4 font-weight-black white--text text-xs-center">Backyard Brew</div>
            <div class="display-3 white--text text-xs-center mb-5">Experience Flavors. Don't Expect Them.</div>
            <div class="display-1 font-weight-bold white--text text-xs-center">Finally be a foodie at home with fresh, chef-prepared meals delivered daily to your door.</div>
            <v-btn fab class="mt-5 brown darken-4">
            <v-icon large color="white">expand_more</v-icon>
            </v-btn>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Home'
};
</script>

<style scoped>
.home {
    background: url('../assets/landing_coffee_0.jpg');
    background-size: cover;
    width: 100%;
    padding:0;
    
    /* height: 100%; */
    
}
</style>