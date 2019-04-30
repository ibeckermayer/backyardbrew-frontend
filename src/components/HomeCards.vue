<template>
    <v-flex fluid>
        <v-container grid-list-lg fluid fill-height>
            <v-layout align-baseline justify-space-between row fill-height wrap>
                <v-flex sm12 md4 :class="{ 'fill-height': $vuetify.breakpoint.mdAndUp }">
                    <v-card
                        class="card_2 fill-height"
                        :class="{ 'v-card-padding': $vuetify.breakpoint.mdAndUp }"
                    >
                        <v-card-text style="padding: 0;">
                            <v-container fluid fill-height>
                                <v-layout justify-center>
                                    <span>
                                        <v-icon large dark>access_time</v-icon>
                                    </span>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-divider dark></v-divider>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">
                                Open 7 Days A Week
                            </span>
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">Monday-Saturday: 8AM-5PM</span>
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">Sunday: 8AM-3PM</span>
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex sm12 md4 :class="{ 'fill-height': $vuetify.breakpoint.mdAndUp }">
                    <v-card
                        class="card_1 fill-height"
                        :class="{ 'v-card-padding': $vuetify.breakpoint.mdAndUp }"
                    >
                        <v-card-text style="padding: 0;">
                            <v-container fluid fill-height>
                                <v-layout justify-center>
                                    <span>
                                        <v-icon large dark>home</v-icon>
                                    </span>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-divider dark></v-divider>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">
                                <div>444 S California Ave</div>
                                <div>Palo Alto, CA</div>
                                <div>94306</div>
                            </span>
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text subheading"
                                >Down an alley between Terun and Country Sun. In a backyard. How
                                about that.</span
                            >
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text subheading"
                                >Also accessible from Cambridge Ave. across from the parking
                                garage.</span
                            >
                        </v-card-text>
                    </v-card>
                </v-flex>
                <v-flex sm12 md4 :class="{ 'fill-height': $vuetify.breakpoint.mdAndUp }">
                    <v-card
                        class="card_0 fill-height"
                        :class="{ 'v-card-padding': $vuetify.breakpoint.mdAndUp }"
                    >
                        <v-card-text style="padding: 0;">
                            <v-container fluid fill-height>
                                <v-layout justify-center>
                                    <span>
                                        <v-icon large dark>info</v-icon>
                                    </span>
                                </v-layout>
                            </v-container>
                        </v-card-text>
                        <v-divider dark></v-divider>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">Dogs welcome!</span>
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title">Kid friendly!</span>
                        </v-card-text>
                        <v-card-text class="text-xs-center">
                            <span class="white--text title"
                                ><a href="https://squareup.com/gift/82WTQJJS2HWY9/order"
                                    >eGift Cards Here!</a
                                ></span
                            >
                        </v-card-text>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </v-flex>
</template>

<script>
export default {
    name: 'HomeCards'
};
</script>

<style scoped>
.card_0 {
    background: rgba(190, 160, 128, 0.8);
}

.card_1 {
    background: rgba(141, 110, 99, 0.8);
}

.card_2 {
    background: rgba(85, 55, 31, 0.8);
}

.v-card-padding {
    padding-bottom: 30px;
    height: 100%;
}

a {
    color: white;
}
</style>
