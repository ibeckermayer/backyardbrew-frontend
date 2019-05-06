<template>
    <v-container>
        <v-layout justify-center column>
            <v-flex>
                <v-container>
                    <v-layout row wrap align-center justify-center="">
                        <v-flex xs12 md2 text-xs-center>
                            <h1>Catalog</h1>
                        </v-flex>
                        <v-flex xs12 md2 text-xs-center>
                            <v-select v-model="showFilter" single-line outline :items="filters">
                            </v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';

export default {
    name: "Catalog",
    data() {
        return {
            items: [], // list to hold catalog of items
            showFilter: 0, // Initialize to showing all items; corresponds to filters object below
            filters: [ // Item filters for dropdown
                {
                    text: 'All',
                    value: 0
                },
                {
                    text: 'Coffee',
                    value: 1
                },
                {
                    text: 'Black Tea',
                    value: 2
                }
            ]
        }
    },
    beforeRouteEnter(to, from, next) {
        const CATALOG_URL = process.env.VUE_APP_API_BASE_URL + '/squaresearchcatalogobjects';
        axios.post(CATALOG_URL, {
            body: {
                object_types: ["ITEM"]
            }
        })
        .then(response => {
            next(vm => {
                vm.items = response.data.objects;
            })
        })
        .catch(error => {
            console.log(error.response.status);
            console.log(error.response.data);
        });
    }
}
</script>

<style scoped>

</style>

