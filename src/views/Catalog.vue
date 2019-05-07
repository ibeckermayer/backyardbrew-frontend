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
            <v-container grid-list-md>  
                <v-layout row wrap justify-center align-center="">
                    <v-flex xs12 sm4 md4 lg3 ma-2 v-for="(catalogItem, index) in catalogItems">
                        <catalog-item-card :catalog-item="catalogItem"></catalog-item-card>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-layout>
    </v-container>
</template>

<script>
import axios from 'axios';
import CatalogItemCard from '@/components/CatalogItemCard';

export default {
    name: "Catalog",
    components: {
        CatalogItemCard
    },
    data() {
        return {
            catalogItems: [], // list to hold catalog of items
            showFilter: 'All', // Initialize to showing all items; corresponds to filters object below
            filters: [ // Item filters for dropdown
                {
                    text: 'All',
                    value: 'All'
                },
                {
                    text: 'Coffee',
                    value: 'Coffee'
                },
                {
                    text: 'Black Tea',
                    value: 'Black Tea'
                }
            ]
        }
    },
    beforeRouteEnter(to, from, next) {
        const CATALOG_URL = process.env.VUE_APP_API_BASE_URL + '/fullcatalog';
        axios.get(CATALOG_URL)
        .then(response => {
            next(vm => {
                vm.catalogItems = response.data.items;
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

