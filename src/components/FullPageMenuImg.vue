<template>
    <v-container fluid fill-height class="full-page-menu-img">
        <v-layout column wrap fill-height align-center justify-center>
            <v-flex class="img-flex" md8 :class="{'pa-5': $vuetify.breakpoint.mdAndUp}">
                <img :src="menu" width="100%" />
            </v-flex>
        </v-layout>
    </v-container>

</template>

<script>
export default {
    name: 'FullPageMenuImg',
    props: [
        'menu'
    ]
};
</script>

<style scoped>
.full-page-menu-img {
    background: url('../assets/landing_coffee_1.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    background-position: center;
}

img {
    opacity: 0.9;
}

.img-flex {
    flex: 0 1 auto;
}
</style>