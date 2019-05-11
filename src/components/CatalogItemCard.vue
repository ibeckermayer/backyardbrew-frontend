<template>
        <v-card  class="mx-auto">
            <v-hover>
                <v-img
                :src="catalogItem.image_url"
                height="300px"
                contain
                slot-scope="{ hover }"
                >
                    <v-expand-transition>
                        <div
                        v-if="hover"
                        class="d-flex transition-fast-in-fast-out darken-5 v-card--reveal headline white--text"
                        style="height: 100%;"
                        
                        >
                            <div class="text-xs-center cat-desc">
                                {{ catalogItem.description }}
                            </div>
                        </div>
                    </v-expand-transition>
                </v-img>
            </v-hover>
            <v-card-title>
                <v-flex text-xs-center class="headline">
                    {{ catalogItem.name }}
                </v-flex>
            </v-card-title>
            <v-card-text>
                <v-container>
                    <v-layout justify-space-around align-center row wrap>
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
            </v-card-text>
            <v-card-actions class="add-to-cart">
                <v-container>
                    <v-layout row justify-center align-center>
                        <v-btn
                        color="primary"
                        class="white--text"
                        large
                        @click="loader = 'loading'; addToCart()"
                        :loading="loading"
                        :disabled="loading"
                        >
                        <v-icon left dark>shopping_cart</v-icon>
                        Add To Cart
                        <template v-slot:loader>
                            <span>Added</span>
                        </template>
                        </v-btn>
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
            qtys: [], // list of available quantities
            loader: null, // data for handling button change on click
            loading: false // ditto from loader, see example loaders at https://vuetifyjs.com/en/components/buttons

        }
    },
    methods: {
        initVariations() {
        this.catalogItem.variations.forEach(variation => {
            let new_variation = {
                text: variation.item_variation_data.name,
                value: variation
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
        },
        addToCart() {
            this.$store.commit('addItemToCart', {
                name: this.catalogItem.name,
                variation: this.selectedVariation,
                tax_ids: this.catalogItem.tax_ids.slice(0),
                quantity: this.selectedQty
            })
            console.log(this.$store.getters.cart);
        }
    },
    computed: {
        priceAsString: function() {
            return "$" + ((this.selectedVariation.item_variation_data.price_money.amount / 100) * this.selectedQty).toString() + ".00";
        }
    },
    created() {
        this.initVariations();
        this.initQtys();
    },
    watch: {
        loader () {
            const l = this.loader
            this[l] = !this[l]
            setTimeout(() => (this[l] = false), 2000)
            this.loader = null
        }
    }
};
</script>

<style scoped>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
  background: rgba(141, 110, 99, 0.8);
}

.cat-desc {
    margin: 2em;
}
</style>