<template>
    <FullPageMenuImg :menu="image"></FullPageMenuImg>
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
            image: require('@/assets/brew_menu.png')
        }
    }
};
</script>

<style scoped>

</style>