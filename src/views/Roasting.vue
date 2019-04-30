<template>
    <full-page-menu-img :menu="image" :backgroundImage="bgimage"></full-page-menu-img>
</template>

<script>
import FullPageMenuImg from '@/components/FullPageMenuImg';

export default {
    name: 'Roasting',
    components: {
        FullPageMenuImg
    },
    data() {
        return {
            image: require('@/assets/roasting_menu.png'),
            bgimage: require('@/assets/landing_coffee_1.jpg')
        };
    }
};
</script>

<style scoped></style>
