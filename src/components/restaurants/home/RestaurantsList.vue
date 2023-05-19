<!-- Container dele card Ristorante nella schermata Home -->

<script>
/* Importo le card dei ristoranti */
import axios from 'axios';
import RestaurantCard from './RestaurantCard.vue'
export default {
    components: {
        /* Componente card Ristorante */
        RestaurantCard
    },

    data() {
        return {
            restaurants: [],
        }
    },

    created() {
        axios.get("http://127.0.0.1:8000/api/restaurants")
        .then((response) => 
        this.restaurants = response.data
        )
    }
}

</script>


<template>
    <!-- Container Bootstrap per margini laterali -->
    <div class="container">
        <!-- Row che mostra 1 ristorante a riga o 2 da tablet in su -->
        <div class="row mt-2 g-3">
            <!-- Card Ristorante -->
            <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
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