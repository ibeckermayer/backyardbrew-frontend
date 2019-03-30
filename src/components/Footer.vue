<template>
    <v-container app hidden-sm-and-down class="footer" fluid pa-0 >
        <v-layout align-start row fill-height>
            <v-flex md6>
                <v-container fluid>
                    <v-layout column fill-height>
                        <v-flex text-md-center md1>
                            <h3>Partners</h3>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <p>All photography by <a href="https://stefanradev.co/">Stefan Radev</a></p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-flex md6>
                <v-container fluid>
                    <v-layout column fill-height>
                        <v-flex text-md-center md1>
                            <a name="contact"></a>
                            <h3>Contact</h3>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <p>ryankhalil91@gmail.com</p>
                        </v-flex>
                        <v-flex text-md-center md1>
                            <p>(650) 704-7785</p>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>

<script>
export default {
    name: 'Footer'
}
</script>

<style scoped>
.button-container {
    padding-top: 0;
    padding-bottom: 0;
}
.footer {
    background-color: white;
}

a {
    margin: 0;
    padding: 0;
    text-decoration: none;
    color: black;
    font-weight: 500;
}

</style>

