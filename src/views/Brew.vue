<template>
    <v-container fluid fill-height class="brew">
        <v-layout column wrap fill-height align-center="" justify-center="">
            <v-flex class="img-container" md8 :class="{'pa-5': $vuetify.breakpoint.mdAndUp}">
                <img src="../assets/brew_menu.png" width="100%">
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
export default {
    name: 'Brew',
};
</script>

<style scoped>
.brew {
    background: url('../assets/landing_coffee_1.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    background-position:center;
}

img {
    opacity: 0.9;
}

.img-container {
    flex: 0 1 auto;
}
</style>