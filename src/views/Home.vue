<template>
    <v-container fluid fill-height class="home">
        <v-layout class="home-filter" justify-center align-center column pa-5>
            <v-flex>
                <div>
                    <div class="display-4 font-weight-black white--text text-xs-center mb-3">Backyard Brew</div>
                </div>
                <div class="display-3 white--text text-xs-center">Experience Flavors.</div>
                <div class="display-3 white--text text-xs-center mb-5">Don't Expect Them.</div>
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
    height: 100%;
    padding: 0;
    background-position:center;
}
.home-filter{
    background:rgba(62, 39, 35, 0.3);
}
</style>