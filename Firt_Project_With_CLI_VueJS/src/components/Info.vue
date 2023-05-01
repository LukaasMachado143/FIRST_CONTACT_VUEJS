<template>
    <div>
        <h1>Informações:</h1>
        <TesteImagens />
        <p><strong>Nome: </strong>Lucas Fernando</p>
        <div class="Front-End" v-if="toogleSpecialization">
            <p><strong>Tecnologias programo como Dev Front-End:</strong></p>
            <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Vue</li>
                <li>React</li>
                <li>Java</li>
            </ul>
        </div>
        
        <div class="Back-End" v-else>
            <p><strong>Tecnologias programo como Dev Back-End:</strong></p>
            <ul>
                <li>Asp Net Core</li>
                <li>.Net</li>
                <li>Python</li>
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
                toogleSpecialization: false,
                showPhoneNumber: false,
                phoneNumber: '(16) 99460-2891',
                linkGoogle: 'https://www.google.com/',
                textButton: 'Mostrar Contatos'
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
<!-- <style>
    body{
        background: linear-gradient(#e66465, #9198e5);
    }
</style> -->