<!-- Riga piatto nella pagina Ristorante -->

<script>

/* Importo il componente per scegliere la quantità */
import DishQuantityHover from './DishQuantityHover.vue'
// importo il componente che possiede il prefisso dell'url

import {useEndpointStore} from "../../../../stores/endpoint.js"

export default {
    data(){
        return{
            /* Variabile per aprire o chiudere il componente quantità */
            isOpen: 0,
            endpoint: useEndpointStore(),
        }
    },
    props:{
        dish: Object
    },
    components: {
        /* Componente per scegliere la quantità */
        DishQuantityHover
    }
}
</script>

<template>

    <!-- Riga piatto -->
    <!-- Quando viene cliccata apre il componente per scegliere la quantità -->

  
    <!-- TODO: immagine, nome piatto, descrizione, prezzo -->    
        
    <div class="col-12 col-lg-6" @click="isOpen = 1">
        
            <div class="card">
                <div class="row">
                    <div class="col-4 image-container">
                     <img :src="endpoint.endpoint + dish.image" class="rounded-start img-fluid" alt="img">
                    </div>
                
                    <div class="col-8">
                        
                        <h5 class="card-title mt-md-1 fs-lg-4">{{ dish.name }}</h5>
                        <span class="card-title mt-md-1 text-secondary fs-lg-5">{{ dish.description }}</span>
                        <p class="card-title mt-md-1 fs-lg-5">&euro; {{ dish.price }}</p> 
                        
                    </div>
                        
                </div>
            </div>
        
    </div>

    <!-- Componente per scegliere la quantità del piatto -->
    <DishQuantityHover v-show="isOpen" @close="isOpen = 0" />

</template>

<style lang="scss">
    img{
        width: 100%;
    }

</style>