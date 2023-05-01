<template>
    <img :src="linkImageAvatar" :alt="DescriptionImageAvatar">
</template>

<script>
    export default{
        name: 'TesteImagens', 
        data() {
            return {
                linkImageAvatar: '/img/avatar.png',
                DescriptionImageAvatar: 'Programador programando.'
            }
        },
    }
</script>