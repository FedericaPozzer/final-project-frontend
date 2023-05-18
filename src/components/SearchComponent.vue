<!-- Componente della schermata 'Ricerca' -->

<script>

    /** TODO: 
     * ??in base a se sei in homepage o nella pagina di un ristorante
     * cerca fra i ristoranti o i piatti del ristorante
    */

</script>

<template>
    <!-- Container della schermata 'Ricerca' -->
    <div class="search-container">

        <!-- Schermata 'Ricerca' -->
        <div class="search">
            Search
        </div>
        
        <!-- Scurisce la porzione di schermo non coperta dalla schermata 'ricerca'
        e quando cliccato chiude la schermata, emittando al componente 'Lens.vue' -->
        <div class="search-backdrop" @click="$emit('close')"></div>

    </div>
</template>

<style lang="scss">
.search-container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;

    .search{
        height: var(--search-height);
        width: 100%;
        background-color: var(--bg-primary-color);
    }
    .search-backdrop{
        height: calc(100vh - var(--search-height));
        width: 100%;
        background-color: black;
        opacity: var(--backdrop-opacity);
    }
}
</style>