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
        <div class="row row-cols-1 row-cols-lg-2 mt-1 gy-2">
            <!-- Card Ristorante -->
            <RestaurantCard class="col" v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
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