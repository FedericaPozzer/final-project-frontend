<!-- Container dei piatti nella pagina Ristorante -->

<script>
/* Importo il componente Piatto */
import DishCard from './DishCard.vue'

export default{
    components:{
        /* Componente piatto */
        DishCard
    }
}
</script>

<template>
    <!-- Container di Bootstrap per i margini laterali -->
    <div class="container">
        <!-- Row, mobile 1 per colonna da tablet 2 per colonna  -->
        <div class="row row-cols-1 row-cols-md-2 mt-1">
            <!-- Col piatto -->
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
            <DishCard class="col"/>
        </div>
    </div>
</template>

<style>

</style>