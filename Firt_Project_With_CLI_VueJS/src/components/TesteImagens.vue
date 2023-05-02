<template>
    <img :src="linkImageAvatar" :alt="DescriptionImageAvatar">
</template>

<script>
    export default{
        name: 'TesteImagens',
        props:{
            linkImageAvatar: String
        },
        data() {
            return {
                DescriptionImageAvatar: 'Programador programando.'
            }
        },
    }
</script>