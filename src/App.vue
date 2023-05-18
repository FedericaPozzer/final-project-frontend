<script>
import Navbar from './components/navbar/navbar.vue'
import Cart from './components/CartComponent.vue'
export default{
  components: {
    Navbar,
    Cart
  }
}
</script>

<template>

  <Navbar />

  <!-- Contenuto variabile -->
  <router-view></router-view>

  <a href="/cart">
    <Cart />
  </a>
  
</template>

<style lang="scss">
:root{
  --bg-color: white;
}

#app{
  background-color: var(--bg-color);
  height: 100vh;
}


</style>
