<template>
    <FullPageMenuImg :menu="image"></FullPageMenuImg>
</template>

<script>
import FullPageMenuImg from '@/components/FullPageMenuImg'

export default {
    name: 'Bistro',
    components: {
        FullPageMenuImg
    },
    data() {
        return {
            image: require('@/assets/bistro_menu.png')
        }
    }
};
</script>

<style scoped>

</style>