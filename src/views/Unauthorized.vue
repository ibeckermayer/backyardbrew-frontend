<template>
    <v-container fluid fill-height class="under-const">
        <v-layout class="under-const-filter" justify-center column pa-5>
            <v-flex>
                <div>
                    <div
                        class="hidden-sm-and-down display-4 font-weight-black white--text text-xs-center mb-3"
                    >
                        403 Forbidden
                    </div>
                    <div
                        class="hidden-md-and-up display-3 font-weight-black white--text text-xs-center mb-3"
                    >
                        403 Forbidden
                    </div>
                </div>
                <div class="display-3 white--text text-xs-center">
                    GIVE UP NOW. THIS APPLICATION IS IMPENETRABLÉ.
                </div>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Unauthorized'
};
</script>

<style scoped>
.under-const {
    background: url('../assets/landing_coffee_2.jpg');
    background-size: cover;
    width: 100%;
    height: 100%;
    padding: 0;
    background-position: center;
}
.under-const-filter {
    background: rgba(62, 39, 35, 0.3);
}
</style>
