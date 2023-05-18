<script>
import RestaurantCard from './RestaurantCard.vue'
export default {
    components: {
        RestaurantCard
    }
}
</script>
<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-2 mt-1">
            <a href="/restaurant/1" class="p-0 m-0 col">
                <RestaurantCard />
            </a>
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
            <RestaurantCard class="col" />
        </div>
    </div>
</template>

<style>
.restaurant-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}
</style>