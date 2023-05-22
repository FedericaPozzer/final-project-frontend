<!-- Pagina del singolo Ristorante, dove vedi e puoi aggiungere al carrello i suoi piatti -->

<script>

/* Importo il Jumbotron del ristorante e il container dei piatti */
import Jumbotron from '../components/restaurants/detail-page/RestaurantDetailJumbotron.vue'
import DishesList from '../components/restaurants/detail-page/dishes/DishesList.vue'
import axios from 'axios'

export default{
    components:{
        /* Importo i componenti */
        Jumbotron,
        DishesList
    },
    data(){
        return{
            restaurant: [],
            isLoading:false,
        }
    },
    created(){
        this.isLoading = true;
        axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
        .then((response)=> {
            this.restaurant = response.data;
        })
        .finally(()=>{
        this.isLoading = false;
    });
}
}
</script>

<template>

    <!-- Jumbotron ristorante -->
    <Jumbotron :restaurant="restaurant" />

    <!-- Container di Bootstrap per margini laterali -->
    <div class="container">
        <!-- Se sto ancora ricevendo dati allora lascio il layover -->
        <AppLoader v-if="isLoading"/>
        <!-- Container Piatti -->
        <DishesList :dishes="restaurant.dishes" />
    </div>

    
    

</template>

<style>

</style>