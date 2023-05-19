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
    
        
    <div class="row mt-2 g-3">
        <DishCard class="" v-for="dish in dishes" :dish="dish"/>
    </div>

    
</template>

<style>

</style>
        
        
        

