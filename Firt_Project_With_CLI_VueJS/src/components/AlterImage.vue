<template>
    <div>
        <button @click="$emit('alterImage')">Alterar Imagem</button>
    </div>    
</template>

<script>
    export default {
        name: 'AlterImage',
        emits:['alterImage']
    }
</script>