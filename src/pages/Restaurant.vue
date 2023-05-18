<!-- Pagina del singolo Ristorante, dove vedi e puoi aggiungere al carrello i suoi piatti -->

<script>

/* Importo il Jumbotron del ristorante e il container dei piatti */
import Jumbotron from '../components/restaurants/detail-page/RestaurantDetailJumbotron.vue'
import DishesList from '../components/restaurants/detail-page/dishes/DishesList.vue'

export default{
    components:{
        /* Importo i componenti */
        Jumbotron,
        DishesList
    }
}
</script>

<template>

    <!-- Jumbotron ristorante -->
    <Jumbotron />

    <!-- Container di Bootstrap per margini laterali -->
    <div class="container">
        <!-- Container Piatti -->
        <DishesList />
    </div>
    
    

</template>

<style>

</style>