<template>
    <v-container fluid fill-height :style="stylea" class="full-page-menu-img">
        <v-layout class="fpmi-filter" column wrap fill-height align-center justify-center>
            <v-flex class="img-flex" md8 :class="{ 'pa-5': $vuetify.breakpoint.mdAndUp }">
                <img :src="menu" width="100%" />
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'FullPageMenuImg',
    props: ['menu', 'backgroundImage'],
    computed: {
        stylea() {
            return 'background-image: url(' + this.backgroundImage + ')';
        }
    }
};
</script>

<style scoped>
.fpmi-filter {
    background: rgba(62, 39, 35, 0.3);
}
.full-page-menu-img {
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    background-position: center;
    background-repeat: no-repeat;
}

img {
    opacity: 0.9;
}

.img-flex {
    flex: 0 1 auto;
}
</style>
