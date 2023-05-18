<script>

import Jumbotron from '../components/restaurants/detail-page/RestaurantDetailJumbotron.vue'
import DishesList from '../components/restaurants/detail-page/dishes/DishesList.vue'
export default{
    components:{
        Jumbotron,
        DishesList
    }
}
</script>

<template>

    <Jumbotron />
    <div class="container">
        <DishesList />
    </div>
    
    

</template>

<style>

</style>