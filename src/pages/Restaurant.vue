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
            dishes: [],
            queryText: ''
        }
    },
    created(){
        this.isLoading = true;
        axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
        .then((response)=> {
            this.restaurant = response.data
            this.dishes = this.restaurant.dishes
        })
        .finally(()=>{
                    this.isLoading = false;
                    });
    },
    methods: {
        handleSearch(){
            if(this.queryText != ''){
                axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id + '/search/' + this.queryText)
                .then((response)=>{
                    this.dishes = response.data
                })
                .finally(()=>{
                this.isLoading = false;
                });
            }
            else{
            axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
            .then((response)=> {
            this.restaurant = response.data
            this.dishes = this.restaurant.dishes
        })
            .finally(()=>{
            this.isLoading = false;
            });
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
        <!-- Se sto ancora ricevendo dati allora lascio il layover -->
        
        <AppLoader v-if="isLoading"/>
        <input type="text" class="form-control mt-3" :placeholder="'Cerca tra i piatti di ' + restaurant.name + '...'" v-model="queryText" @input="handleSearch()">
        <div v-if="this.dishes.length">
            <!-- Container Piatti -->
            <DishesList :dishes="dishes" />
        </div>
        <div v-else>
            <h1 class=" no-match-message my-4">Nessun Risultato</h1>
        </div>
    </div>

    
    

</template>

<style scoped>
.container{
    margin-bottom: calc(var(--cartComponent-mobile-height) + 1rem);
}
.no-match-message{
    font-size: 5rem;
    -webkit-text-stroke: 1px black;
    color: #ee6a33;
}
</style>