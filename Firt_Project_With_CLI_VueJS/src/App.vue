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

<style>
  body{
    background-color: rgb(91, 91, 91);
  }
</style>