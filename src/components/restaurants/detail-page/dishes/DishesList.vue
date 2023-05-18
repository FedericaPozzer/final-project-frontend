<script>
import DishCard from './DishCard.vue'
export default{
    components:{
        DishCard
    }
}
</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 mt-1">
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
.dishes-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
</style>