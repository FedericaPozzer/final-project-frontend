<!-- Schermata di riepilogo del carrello -->
<!-- Per il suo z-index, nasconde il componente CartComponent.vue (il carrello) -->

<script>
    /**
     * TODO: Link allo Store
      */
</script>

<template>
    <div class="cart-container">
        <div class="cart-backdrop"></div>
        <div class="cart">
            carrello
        
            <!-- TODO -->
            <!-- Lista dei piatti nel carrello !!creare componenti Lista e Piatto -->
        
            <!-- In fondo mobile/desktop non lo so tasto che reindirizza alla pagina 'pagamento'  -->
        </div>
    </div>
</template>
<style lang="scss">
.cart-container{
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;

    .cart-backdrop{
        height: 20vh;
        width: 100%;
        background-color: black;
        opacity: var(--backdrop-opacity);
    }

    .cart{
        width: 100%;
        height: 80vh;
        background-color: var(--bg-color);
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 3;
    }
}

</style>