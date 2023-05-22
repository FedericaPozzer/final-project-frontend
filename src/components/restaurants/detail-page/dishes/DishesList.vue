<!-- Container dei piatti nella pagina Ristorante -->

<script>
/* Importo il componente Piatto */
import DishCard from './DishCard.vue'

export default{
    props: {
        dishes: Array
    },
    components:{
        /* Componente piatto */
        DishCard
    }
}
</script>

<template>
    
        
    <div class="dishes-container mt-2 g-3">
        <DishCard class="" v-for="dish in dishes" :dish="dish"/>
    </div>

    
</template>

<style>
.dishes-container{
    display: grid;
    grid-template-columns: 1fr;
    grid-auto-rows: 1fr;
    gap: 20px;

}
</style>
        
        
        

