<template>
  <div>
    <StudingEmit />
  </div>
</template>

<script>
  import FirstComponentVue from './components/FirstComponent.vue'
  import UsingHooks from './components/UsingHooks.vue';
  import ComponentHierarchy from './components/ComponentHierarchy.vue';
  import Info from './components/Info.vue';
  import StudingProps from './components/StudingProps.vue';
  import StudingEmit from './components/StudingEmit.vue';
  
  export default{
    name: "App", 
    components:{
    FirstComponentVue,
    UsingHooks,
    ComponentHierarchy,
    Info,
    StudingProps,
    StudingEmit
    }, 
    data(){
      return{
        titleGived: 'Aprendendo Props'
      }
    }  
  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  div{
    background-color: rgb(171, 171, 171);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border-radius: 3rem;
    width: 20rem;
  }
</style>