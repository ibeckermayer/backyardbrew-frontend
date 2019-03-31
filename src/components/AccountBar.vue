<template>
    <v-container app hidden-sm-and-down class="account-bar" fluid pa-0>
        <v-layout align-center row fill-height>
            <v-flex md12 elevation-1 class="account-bar-flex">
                <v-container class="button-container" fluid>
                    <v-layout justify-end row fill-height>
                        <v-flex text-md-center md1>
                            <a href="#contact">Contact</a>
                        </v-flex>
                        <RegisterDialogueLink></RegisterDialogueLink>
                        <v-flex text-md-center md1>
                            <a>Login</a>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <a>Cart</a>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <a>Account</a>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import RegisterDialogueLink from '@/components/RegisterDialogueLink'

export default {
    name: 'AccountBar',
    data () {
      return {
            dialog: false
        }
    },
    components: {
        RegisterDialogueLink
    }
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
    text-decoration: none;
    color: white;
}

</style>

