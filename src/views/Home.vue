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
                    <v-layout align-baseline justify-space-between row fill-height>
                        <v-flex s12 md4>
                            <v-card class="card_2">
                                <v-container fluid fill-height>
                                    <v-layout justify-center>
                                        <span>
                                            <v-icon large dark>home</v-icon>
                                        </span>
                                    </v-layout>
                                </v-container>
                                <v-divider dark></v-divider>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text title">
                                        <div>444 S California Ave</div><div>Palo Alto, CA</div><div>94306</div>
                                    </span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Down an alley between Terun and Country Sun. In a backyard. How about that.</span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Also accessible from Cambridge Ave. across from the parking garage.</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex s12 md4>
                            <v-card class="card_1">
                                <v-container fluid fill-height>
                                    <v-layout justify-center>
                                        <span>
                                            <v-icon large dark>access_time</v-icon>
                                        </span>
                                    </v-layout>
                                </v-container>
                                <v-divider dark></v-divider>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text title">
                                        <div>Open 7 Days A Week</div>
                                    </span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Monday-Saturday: 8AM-5PM</span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Sunday: 8AM-3PM</span>
                                </v-card-text>
                            </v-card>
                        </v-flex>
                        <v-flex s12 md4>
                            <v-card class="card_0">
                                <v-container fluid fill-height>
                                    <v-layout justify-center>
                                        <span>
                                            <v-icon large dark>info</v-icon>
                                        </span>
                                    </v-layout>
                                </v-container>
                                <v-divider dark></v-divider>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Dogs welcome!</span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Kid friendly!</span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading">Wheelchair access!!!</span>
                                </v-card-text>
                                <v-card-text class="text-xs-center">
                                    <span class="white--text subheading"><a href="https://squareup.com/gift/82WTQJJS2HWY9/order">eGift Cards Here!</a></span>
                                </v-card-text>
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

.card_0 {
    background: rgba(190, 160, 128, 1);
}

.card_1 {
    background: rgb(141, 110, 99, 1);
}

.card_2 {
    background: rgb(85, 55, 31, 1);
}

a {
    color: white;
}
</style>