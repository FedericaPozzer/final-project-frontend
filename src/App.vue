<script>
import navbar from './components/navbar.vue'
export default{
  components: {
    navbar
  }
}
</script>

<template>
  <navbar />
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<style scoped>

</style>
