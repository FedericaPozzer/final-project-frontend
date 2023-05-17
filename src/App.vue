<script>
import Cart from './components/Cart.vue'
export default{
  components: {
    Cart
  }
}
</script>

<template>
  <Cart />
  <div class="container">
    <router-view></router-view>
  </div>
  
</template>

<style scoped>

</style>
