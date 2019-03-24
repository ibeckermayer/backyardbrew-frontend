<template>
    <FullPageMenuImg :menu="image" :backgroundImage="bgimage"></FullPageMenuImg>
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
            image: require('@/assets/bistro_menu.png'),
            bgimage: require('@/assets/landing_coffee_3.jpg')            
        }
    }
};
</script>

<style scoped>

</style>