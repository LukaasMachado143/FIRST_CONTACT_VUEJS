<template>
    <div>
        <TesteImagens :linkImageAvatar="wayImage"/>
        <AlterImage @alter-image="alterImageFather" />
    </div>
</template>

<script>
    import TesteImagens from './TesteImagens.vue'
    import AlterImage from './AlterImage.vue';     
    export default{
        name: 'StudingEmit',
        components:{
            TesteImagens,
            AlterImage
        },
        data(){
            return{
                wayImage: '/img/avatar.png'
            }
        },
        methods:{
            alterImageFather(){
                if (this.wayImage == '/img/avatar.png'){this.wayImage = '/img/avatar2.png'}
                else{this.wayImage = '/img/avatar.png'}
            }
        }
    }
</script>