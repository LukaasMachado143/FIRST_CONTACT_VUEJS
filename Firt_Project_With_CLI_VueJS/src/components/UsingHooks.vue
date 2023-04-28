<template>
    <div>
        <h1>Using Life Cycle UsingHooks</h1>
        <p>Meu nome é : {{ nameProfessional }}</p>
    </div>
</template>

<script>
    export default {
        name: 'UsingHooks',
        data(){
            return{
                nameProfessional:"Lucas Fernando"
            }
        }, 
        created(){
            setTimeout(() => {
                this.nameProfessional = "Lucas Dev"
            }, 2000)
        }, 
        mounted(){
            setTimeout(() => {
                this.nameProfessional = "Lucas Desenvolvedor"
            }, 4000)
        }

    }
</script>