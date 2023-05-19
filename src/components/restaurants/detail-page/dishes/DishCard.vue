<!-- Riga piatto nella pagina Ristorante -->

<script>

/* Importo il componente per scegliere la quantità */
import DishQuantityHover from './DishQuantityHover.vue'

export default {
    data(){
        return{
            /* Variabile per aprire o chiudere il componente quantità */
            isOpen: 0
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

    <div class="dish" 
    @click="isOpen = 1"
    >

        {{dish.name}}
        <!-- TODO: immagine, nome piatto, descrizione, prezzo -->

    </div>

    <!-- Componente per scegliere la quantità del piatto -->
    <DishQuantityHover v-show="isOpen" @close="isOpen = 0" />

</template>

<style>
    .dish{
        height: 10vh;
        border: 2px dotted black;
    }

</style>