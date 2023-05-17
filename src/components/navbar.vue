<script>
// import MyComponent from "./components/MyComponent.vue";
import Cart from './Cart.vue'

export default {
  data() {
    return {
      title: "Hello world"
    }
  },
  components: {
    Cart,
  },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/logo.png" alt="logo" height="24">
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                </ul>

                <button class="btn btn-primary">Diventa Partner</button>
                <Cart />
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>