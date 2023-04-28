<template>
    <div>
        <h1>Usando hierarquia de componetes</h1>
        <br>
        <h3>Mande uma mensagem:</h3>
        <form>
            <Name />
            <br>
            <br>
            <Comments />
            <br>
            <br>
            <ButtonSubmit />
        </form>
    </div>
</template>

<script>
    import Name from './hierarchyForm/Name.vue'
    import ButtonSubmit from './hierarchyForm/ButtonSubmit.vue';
    import Comments from './hierarchyForm/Comments.vue'

    export default {
        name: 'ComponentHierarchy',
        components:{
            Name,
            ButtonSubmit,
            Comments
        }
    }
</script>