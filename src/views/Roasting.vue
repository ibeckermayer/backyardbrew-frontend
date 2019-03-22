<template>
    <FullPageMenuImg :menu="image"></FullPageMenuImg>
</template>

<script>
import FullPageMenuImg from '@/components/FullPageMenuImg'

export default {
    name: 'Roasting',
    components: {
        FullPageMenuImg
    },
    data() {
        return {
            image: require('@/assets/roasting_menu.png')
        }
    }
};
</script>

<style scoped>

</style>