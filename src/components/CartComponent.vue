<!-- Componente carrello -->

<!-- Quando viene cliccato è un link alla pagina "carrello". Questa dinamica  -->
<!-- è gestita dal componente App.vue -->

<script>

    /**
     * TODO: Link ai dati che sono nello store
    */

</script>

<template>

    <!-- Schermata carrello mobile -->
    <div class="cart-bar d-md-none">
        Carrello
    </div>

    <!-- Schermata carrello desktop -->
    <div class="cart-round d-none d-md-flex">
        Carrello
    </div>

</template>
<style>
.cart-bar{
    position: fixed;
    height: var(--cartComponent-mobile-height);
    width: 100%;
    z-index: 2;
    bottom: 0;
    background-color: var(--bg-primary-color);
    border-radius: 20px 20px 0 0;
}

.cart-round{
    position: fixed;
    width: var(--cartComponent-desktop-height);
    height: 10vh;
    border-radius: 50%;
    background-color: var(--bg-primary-color);
    margin: 2rem;
    bottom: 0;
    right: 0;
}
</style>