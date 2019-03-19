<template>
<span>
    <v-container fluid fill-height class="home">
        <v-layout class="home-filter" justify-center column pa-5>
            <v-flex>
                <div>   
                    <div class="hidden-sm-and-down display-4 font-weight-black white--text text-xs-center mb-3">Backyard Brew</div>
                    <div class="hidden-md-and-up display-3 font-weight-black white--text text-xs-center mb-3">Backyard Brew</div>
                </div>
                <div class="display-3 white--text text-xs-center">Experience Flavors.</div>
                <div class="display-3 white--text text-xs-center mb-5">Don't Expect Them.</div>
            </v-flex>
            <v-flex>
                <v-container grid-list-lg>
                    <v-layout align-center justify-space-between row fill-height>
                        <v-flex s12 md4>
                            <v-card>
                                <v-container fluid fill-height>
                                    <v-layout justify-center="" class="mb-2">
                                        <span class="teal">
                                            <v-icon large dark>home</v-icon>
                                        </span>
                                    </v-layout>
                                </v-container>
                            </v-card>
                        </v-flex>
                        <v-flex s12 md4>
                            <v-card>
                                <v-card-text>12</v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex s12 md4>
                            <v-card>
                                <v-card-text>12</v-card-text>
                            </v-card>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
    <!-- <brew></brew> -->
</span>
</template>

<script>
export default {
    name: 'Home',
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
.brew_menu_img {
    max-width: 100%;
    opacity: 0.75;
    display: block;
    margin-left: auto;
    margin-right: auto;
}
</style>