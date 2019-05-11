<template>
    <v-dialog
    :value="show"
    @input="$emit('cartClose')"
    width="1000"
    >
        <v-card>
            <v-card-title>
                <v-container>
                    <v-layout headline>
                        Cart
                    </v-layout>
                </v-container>
                <v-spacer></v-spacer>
            </v-card-title>
            <v-card-text>
                <v-data-table
                :headers="headers"
                :items="$store.getters.cart.items"
                class="elevation-1"
                hide-actions
                >
                    <template v-slot:items="props">
                        <td class="text-xs-center">{{ props.item.name }}</td>
                        <td class="text-xs-center">{{ props.item.variation.item_variation_data.name }}</td>
                        <td class="text-xs-center">{{ props.item.quantity }}</td>
                        <td class="text-xs-center">{{ centsToDollarString(props.item.variation.item_variation_data.price_money.amount) }}</td>
                        <td class="text-xs-center">{{ centsToDollarString(props.item.quantity * props.item.variation.item_variation_data.price_money.amount) }}</td>
                    </template>
                </v-data-table>
            </v-card-text>
            <v-card-actions>
                <v-container>
                    <v-layout justify-center align-center>
                        <v-btn
                        color="primary"
                        class="white--text"
                        large
                        hidden v-if="cartHasItems"
                        >
                        Checkout
                        </v-btn>
                    </v-layout>
                </v-container>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script>
export default {
    name: "CartDialog",
    props: ['show'],
    data () {
        return {
            headers: [
                {
                    text: 'Item',
                    value: 'item',
                    align: 'center',
                    sortable: false
                },
                {
                    text: 'Unit',
                    value: 'unit',
                    align: 'center',
                    sortable: false
                },
                {
                    text: 'Quantity',
                    value: 'quantity',
                    align: 'center',
                    sortable: false
                },
                {
                    text: 'Price per Unit',
                    value: 'pricepu',
                    align: 'center',
                    sortable: false
                },
                {
                    text: 'Price Total',
                    value: 'priceto',
                    align: 'center',
                    sortable: false
                }
            ]
        }
    },
    methods: {
        centsToDollarString(cents) {
            return '$' + cents/100 + '.00';
        }
    },
    computed: {
        cartHasItems () {
            return this.$store.getters.cart.items.length;
        }
    }
}
</script>
