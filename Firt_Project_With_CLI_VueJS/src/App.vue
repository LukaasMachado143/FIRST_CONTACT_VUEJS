<template>
  <div>
    <ComponentHierarchy />
  </div>
</template>

<script>
  import FirstComponentVue from './components/FirstComponent.vue'
  import UsingHooks from './components/UsingHooks.vue';
  import ComponentHierarchy from './components/ComponentHierarchy.vue';
  export default{
    name: "App", 
    components:{
    FirstComponentVue,
    UsingHooks,
    ComponentHierarchy
}
  }
</script>