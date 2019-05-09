<template>
    <v-container>
        <v-layout justify-center column>
            <v-flex>
                <v-container>
                    <v-layout row wrap align-center justify-center>
                        <v-flex xs12 md2 text-xs-center>
                            <h1>Catalog</h1>
                        </v-flex>
                        <v-flex xs12 md2 text-xs-center>
                            <v-select v-model="currentFilter" single-line outline :items="filters">
                            </v-select>
                        </v-flex>
                    </v-layout>
                </v-container>
            </v-flex>
            <v-container grid-list-md>  
                <v-layout row wrap justify-start align-center>
                    <v-flex xs12 sm6 md4 v-for="(catalogItem, index) in filteredCatalogItems">
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
            allCatalogItems: [], // list to hold entire catalog of items
            filteredCatalogItems: [], // list to hold catalog items for the currentFilter
            currentFilter: 'All', // Initialize to showing all items; corresponds to filters object below
            filters: [ // Item filters for dropdown
                {
                    text: 'All',
                    value: 'All'
                }
            ]
        }
    },
    beforeRouteEnter(to, from, next) {
        const CATALOG_URL = process.env.VUE_APP_API_BASE_URL + '/fullcatalog';
        axios.get(CATALOG_URL)
        .then(response => {
            next(vm => {
                vm.allCatalogItems = response.data.items.slice(0);
                vm.filteredCatalogItems = response.data.items.slice(0); // initialize to allCatalogItems
                response.data.categories.forEach(category => {
                    let new_filter = {
                        text: category.name,
                        value: category.name
                    }
                    vm.filters = vm.filters.concat(new_filter);
                })
            })
        })
        .catch(error => {
            console.log(error.response.status);
            console.log(error.response.data);
        });
    },
    watch: {
        currentFilter: function(newVal, oldVal) {
            if (newVal === 'All') {
                this.filteredCatalogItems = this.allCatalogItems.slice(0);
            } else {
                this.filteredCatalogItems = this.allCatalogItems.filter(item => item.category_data.name === newVal);
            }
        }
    }
}
</script>

<style scoped>

</style>

