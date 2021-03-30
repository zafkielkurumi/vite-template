<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <StateView></StateView>
  <div>store --{{Count}}</div>
 <router-view />
</template>

<script lang="tsx">
import { defineComponent } from 'vue'
import { counterHelper, Count } from '@/store/modules/counter/type';

export default defineComponent({
  name: 'App',
  computed: {
    ...counterHelper.mapGetters([Count])
  },
})
</script>
  
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>