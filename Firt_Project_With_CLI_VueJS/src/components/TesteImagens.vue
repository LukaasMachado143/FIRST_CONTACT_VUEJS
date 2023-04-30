<template>
    <div>
        <img :src="linkImageAvatar" :alt="DescriptionImageAvatar">
    </div>
    

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