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
        
    <div class="card" @click="isOpen = 1">
        <div class="image">
            <img :src="endpoint.endpoint + dish.image" class="rounded-start img-fluid" alt="img">
        </div>
        <div class="info">
            <div class="name">
                <h3>
                    {{ dish.name }}
                </h3>
            </div>
            <i>
                <h5>
                    {{ dish.description }}
                </h5>
            </i>
        </div>
        <div class="price">
            {{ dish.price.toFixed(2) }}&euro;
        </div>
        
    </div>

    <!-- Componente per scegliere la quantità del piatto -->
    <DishQuantityHover v-if="isOpen" @close="isOpen = 0" :dish="dish" />

</template>

<style lang="scss" scoped>
    .card{
        display: flex;
        align-items: center;
        flex-direction: row;
        padding: 10px;
        cursor: pointer;
        @media screen and (max-width: 768px) {
            flex-wrap: wrap;
        }
        .image{
            width: 20%;
            @media screen and (max-width: 768px) {
              width: 100%;
            }
            padding: 1rem;
            img{
                width: 100%;
                @media screen and (max-width: 768px) {
                    width: 40%;
                    margin: 0 50%;
                    transform: translateX(-50%);
                  }
                height: 100%;
                object-fit: cover;
            }
        }
    }

    h5{
        font-weight: 300;
    }
    .info{
        width: 100%;
    }
    .price{
        padding: 1rem;
        font-size: 1.5rem;
        @media screen and (max-width: 768px) {
            margin-left: auto;
        }
    }

</style>