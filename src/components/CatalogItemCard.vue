<template>
    <v-card>
        <v-card-title>
            <v-flex text-xs-center class="headline">{{ catalogItem.name }}</v-flex>
        </v-card-title>
        <v-card-text>
            <v-img
            :src="catalogItem.image_url"
            height="200px"
            contain
            >
            </v-img>
        </v-card-text>
        <v-card-actions>
            <v-container>
                <v-layout justify-space-around align-center>
                    <v-flex md4>
                        <v-select label="Size" regular v-model="selectedVariation" :items="variations"></v-select>
                    </v-flex>
                    <v-flex md4>
                        <v-select label="Quantity" regular v-model="selectedQty" :items="qtys"></v-select>
                    </v-flex>
                    <v-flex md4>
                        <v-text-field label="Price" regular readonly :value="priceAsString">
                        </v-text-field>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'CatalogItemCard',
    props: ['catalogItem'],
    data() {
        return {
            selectedVariation: null, // the currently selected variation
            variations: [], // list of text,value objects for the v-select box
            selectedQty: null, // selected quantity value
            qtys: [] // list of available quantities
        }
    },
    methods: {
        initVariations() {
        this.catalogItem.variations.forEach(variation => {
            let new_variation = {
                text: variation.item_variation_data.name,
                value: variation.item_variation_data.price_money.amount / 100, // value is price. must be divided by 100 because the square api is weird. 
            };
            this.variations = this.variations.concat(new_variation);
        });
        this.selectedVariation = this.variations[0].value;
        },
        initQtys() {
            for (var i=1; i<11; i++) {
                let new_qty = {
                    text: i,
                    value: i
                };
                this.qtys = this.qtys.concat(new_qty);
            }
            this.selectedQty = this.qtys[0].value;
        }
    },
    computed: {
        priceAsString: function() {
            return "$" + (this.selectedVariation * this.selectedQty).toString() + ".00";
        }
    },
    created() {
        this.initVariations();
        this.initQtys();
    }
};
</script>

<style scoped></style>