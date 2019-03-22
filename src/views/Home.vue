<template>
    <v-container fluid fill-height class="home">
        <v-layout class="home-filter" justify-center column pa-5>
            <HomeTitle></HomeTitle>
            <HomeCards></HomeCards>
        </v-layout>
    </v-container>
</template>

<script>
import HomeTitle from '@/components/HomeTitle'
import HomeCards from '@/components/HomeCards'

export default {
    name: 'Home',
    components: {
        HomeTitle,
        HomeCards
    }
};
</script>

<style scoped>
.home {
    background: url('../assets/landing_coffee_2.jpg');
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