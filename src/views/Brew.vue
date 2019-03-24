<template>
    <FullPageMenuImg :menu="image" :backgroundImage="bgimage"></FullPageMenuImg>
</template>

<script>
import FullPageMenuImg from '@/components/FullPageMenuImg'

export default {
    name: 'Brew',
    components: {
        FullPageMenuImg
    },
    data() {
        return {
            image: require('@/assets/brew_menu.png'),
            bgimage: require('@/assets/landing_coffee_0.jpg')
        }
    }
};
</script>

<style scoped>

</style>