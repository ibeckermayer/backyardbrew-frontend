<template>
    <v-container fluid fill-height style="max-height:100vh;" class="home">
        <v-layout style="background:#3E2723;opacity:0.5;" justify-center align-center column pa-5>
            <v-flex>
                <div>
                    <div class="display-4 font-weight-black white--text text-xs-center mb-3" style="opacity:1.0;">Backyard Brew</div>
                </div>
                
                <div class="display-3 white--text text-xs-center">Experience Flavors.</div>
                <div class="display-3 white--text text-xs-center mb-5">Don't Expect Them.</div>

            </v-flex>
            <v-flex>
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
    background-position:center;
    opacity: 1;
    
    /* height: 100%; */
    
}
</style>