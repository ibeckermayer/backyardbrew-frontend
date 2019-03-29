<template>
    <v-container app hidden-sm-and-down class="account-bar" fluid pa-0 >
        <v-layout align-center row fill-height>
            <v-flex md12 elevation-1 class="account-bar-flex">
                <v-container class="button-container" fluid>
                    <v-layout justify-end row fill-height>
                        <v-flex text-md-center md1>
                            <a>Contact</a>
                        </v-flex>
                        <!-- <v-flex text-md-center md2 style="color: white;">|</v-flex> -->
                        <v-flex text-md-center md1>
                            <!-- <v-btn small flat active-class="custom_button" to="/brew" v-ripple="{ class: `brown--text` }">Login</v-btn> -->
                            <a>Register</a>
                        </v-flex>
                        <!-- <v-flex md2 text-md-center>or</v-flex> -->
                        <!-- <v-flex text-md-center md2 style="color: white;"></v-flex> -->
                        <v-flex text-md-center md1>
                            <a>Login</a>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <a>Cart</a>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <a>Account</a>
                        </v-flex>
                        
                        <!-- <v-flex text-md-center md2 style="color: white;">|</v-flex> -->
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'AccountBar'
}
</script>

<style scoped>
.button-container {
    padding-top: 0;
    padding-bottom: 0;
}
.account-bar {
    background-color: #8D6E63;
}

a {
    margin: 0;
    padding: 0;
    /* text-decoration: none; */

}

.flex.md2, a{
    flex-basis: 4%;
    color: white;
    /* font-weight: bold; */
}

</style>

