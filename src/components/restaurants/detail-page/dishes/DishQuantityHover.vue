<!-- Componente per scegliere la quantità del piatto da aggiungere al carrello -->
<script>

</script>

<template>
    <!-- Container della schermata -->
    <div class="quantityHover">

        <!-- Scurisce la porzione non coperta dalla schermata e al click chiude la schermata -->
        <div class="backdrop" @click="$emit('close')">

        </div>

        <!-- Schermata -->
        <div class="quantity">
            Quantità

            <!-- TODO -->

        </div>
    </div>
</template>
<style lang="scss">
.quantityHover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    padding-left: 0 !important;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    .backdrop{
        width: 100vw;
        height: calc(100vh - var(--quantity-height));
        background-color: black;
        opacity: var(--backdrop-opacity);
    }
    .quantity{
        height: var(--quantity-height);
        width: 100vw;
        background-color: var(--bg-primary-color);

    }
}
</style>