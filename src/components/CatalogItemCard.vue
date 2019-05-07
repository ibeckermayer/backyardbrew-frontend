<template>
    <v-card>
        <v-card-title>
            <div class="headline">{{ catalogItem.name }}</div>
        </v-card-title>
        <v-card-text>
            <v-img
            :src="catalogItem.image_url"
            height="200px"
            contain
            >
            </v-img>
        </v-card-text>
    </v-card>
</template>

<script>
export default {
    name: 'CatalogItemCard',
    props: ['catalogItem'],
};
</script>

<style scoped></style>