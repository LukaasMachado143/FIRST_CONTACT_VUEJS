<template>
  <div>
    <FirstComponentVue/>
    <hr>
    <UsingHooks/>
  </div>
</template>

<script>
  import FirstComponentVue from './components/FirstComponent.vue'
  import UsingHooks from './components/UsingHooks.vue';
  export default{
    name: "App", 
    components:{
    FirstComponentVue,
    UsingHooks
}
  }
</script>