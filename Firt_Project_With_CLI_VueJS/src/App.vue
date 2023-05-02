<template>
  <div>
    <Info />
  </div>
</template>

<script>
  import FirstComponentVue from './components/FirstComponent.vue'
  import UsingHooks from './components/UsingHooks.vue';
  import ComponentHierarchy from './components/ComponentHierarchy.vue';
  import Info from './components/Info.vue';
  export default{
    name: "App", 
    components:{
      FirstComponentVue,
      UsingHooks,
      ComponentHierarchy,
      Info
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
    background-color: rgb(87, 87, 87);
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    border: solid;
    border-color: transparent ;
    border-radius: 3rem;
    width: 20rem;
  }
</style>