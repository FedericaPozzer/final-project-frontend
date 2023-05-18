<!-- Container dele card Ristorante nella schermata Home -->

<script>
/* Importo le card dei ristoranti */
import RestaurantCard from './RestaurantCard.vue'
export default {
    components: {
        /* Componente card Ristorante */
        RestaurantCard
    }
}
</script>
<template>
    <!-- Container Bootstrap per margini laterali -->
    <div class="container">
        <!-- Row che mostra 1 ristorante a riga o 2 da tablet in su -->
        <div class="row row-cols-1 row-cols-md-2 mt-1">
            <!-- Card Ristorante -->
            <a href="/restaurant/1" class="p-0 m-0 col">
                <RestaurantCard />
            </a>
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
        </div>
    </div>
</template>

<style>
.restaurant-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
</style>