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
  
</style>