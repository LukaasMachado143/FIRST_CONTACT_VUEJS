<template>
    <div>
        <h1>Informações:</h1>
        <TesteImagens />
        <p><strong>Nome: </strong>Lucas Fernando</p>
        <div class="Front-End" v-if="toogleSpecialization">
            <p><strong>Tecnologias que programo como Dev Front-End:</strong></p>
            <ul>
                <li v-for="(x, index) in frontEndTechnologies" :key="index">
                    {{x }}
                </li>
            </ul>
        </div>
        
        <div class="Back-End" v-else>
            <p><strong>Tecnologias que programo como Dev Back-End:</strong></p>
            <ul>
                <li v-for="x in backEndTechnologies" :key="x.id">
                    {{x.language}}
                </li>
            </ul>
        </div>
        <div>
            <button @click="showPhoneNumberMethods">{{textButton}}</button>
            <p v-show="showPhoneNumber">Entre em contato através do número: {{ phoneNumber }}</p>
        </div>
        <p>Para acessar o google <a v-bind:href="linkGoogle" target="_blank">clique aqui.</a></p>
        
    </div>
</template>

<script>
    import TesteImagens from './TesteImagens.vue'
    export default{
        name:'Info',
        components:{
            TesteImagens
        },
        data(){
            return{
                toogleSpecialization: true,
                showPhoneNumber: false,
                phoneNumber: '(16) 99460-2891',
                linkGoogle: 'https://www.google.com/',
                textButton: 'Mostrar Contatos',
                frontEndTechnologies: ['Html','Css','Vue','React','Java'],
                backEndTechnologies: [
                    {id: 1, language: 'Asp Net Core' },
                    {id: 2, language: '.Net'},
                    {id: 3, language: 'Pytohn'},
                    {id: 4, language: 'C#'}
                ]
            }
        },

        methods: {
            showPhoneNumberMethods(){
                this.showPhoneNumber = !this.showPhoneNumber
                if (this.showPhoneNumber){this.textButton = 'Ocultar Contatos'}
                else{this.textButton = 'Mostrar Contatos'}
            }
        }
        
    }
</script>
<style scoped>
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        display: inline-block;
        padding: 0.5rem;
    }
    h1, li{
        color: white;
    }
</style>