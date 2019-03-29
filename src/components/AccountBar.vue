<template>
    <v-container app hidden-sm-and-down class="account-bar" fluid pa-0>
        <v-layout align-center row fill-height>
            <v-flex md2>
                <v-container class="button-container">
                    <v-layout row fill-height>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/brew" flat v-ripple="{ class: `brown--text` }">Brew</v-btn>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex md9>
                <v-container class="button-container">
                    <v-layout justify-space-around row fill-height>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/brew" flat v-ripple="{ class: `brown--text` }">Brew</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/bistro" flat v-ripple="{ class: `brown--text` }">Bistro</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/roasting" flat v-ripple="{ class: `brown--text` }">Roasting</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/under_construction" flat v-ripple="{ class: `brown--text` }">About</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/under_construction" flat v-ripple="{ class: `brown--text` }">Retail</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/under_construction" flat v-ripple="{ class: `brown--text` }">R&D</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small active-class="custom_button" to="/under_construction" flat v-ripple="{ class: `brown--text` }">Tech</v-btn>
                        </v-flex>
                        <v-flex md1>
                            <v-btn small color="#8D6E63" dark href="https://aoccoffee.com/collections/all" v-ripple="{ class: `brown--text` }">Order</v-btn>
                        </v-flex>
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
    background-color: #8D6E63
}
</style>

