<!-- Componente carrello -->

<script>
</script>
<template>
    <div class="cart-bar d-md-none">
        Carrello
    </div>
    <div class="cart-round d-none d-md-flex">
        Carrello
    </div>
</template>
<style>
.cart-bar{
    position: fixed;
    height: 15vh;
    width: 100%;
    z-index: 2;
    bottom: 0;
    background-color: orange;
    border-radius: 20px 20px 0 0;
}

.cart-round{
    position: fixed;
    width: 10vh;
    height: 10vh;
    border-radius: 50%;
    background-color: yellow;
    margin: 2rem;
    bottom: 0;
    right: 0;
}
</style>