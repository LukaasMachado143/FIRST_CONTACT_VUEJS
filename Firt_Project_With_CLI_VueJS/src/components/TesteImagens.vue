<template>
    <div>
        <img v-bind:src="linkImageAvatar" v-bind:alt="DescriptionImageAvatar">
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