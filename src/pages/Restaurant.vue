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
            dishes: [],
            queryText: ''
        }
    },
    created(){
        axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
        .then((response)=> {
            this.restaurant = response.data
            this.dishes = this.restaurant.dishes
        })
    },
    methods: {
        handleSearch(){
            if(this.queryText != ''){
                axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id + '/search/' + this.queryText)
                .then((response)=>{
                    this.dishes = response.data
                })
            }
            else{
            axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
            .then((response)=> {
            this.restaurant = response.data
            this.dishes = this.restaurant.dishes
        })
            }
        }
    }
}
</script>

<template>

    <!-- Jumbotron ristorante -->
    <Jumbotron :restaurant="restaurant" />

    <!-- Container di Bootstrap per margini laterali -->
    <div class="container">
        <input type="text" class="form-control mt-3" :placeholder="'Cerca tra i piatti di ' + restaurant.name + '...'" v-model="queryText" @input="handleSearch()">
        <!-- Container Piatti -->
        <DishesList :dishes="dishes" />
    </div>

    
    

</template>

<style>

</style>