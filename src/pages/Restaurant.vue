<script>
import axios from 'axios'
import { useCartStore } from "../stores/cart"
import DishComponent from "../components/DishComponent.vue"
import RestaurantCart from "../components/RestaurantCartComponent.vue"

export default{
    name:'Restaurant',
    data(){
      return {
        store: useCartStore(), //initialize the store
        restaurant: [],
        link: ''
      }
    },
    created(){
        console.log(this.store.dishes)

        axios.get('http://127.0.0.1:8000/api/restaurants/' + this.$route.params.id)
        .then((response)=> this.restaurant = response.data)
    },
    methods: {
    },
    components: {
        DishComponent,
        RestaurantCart
    }
}

</script>
<template>
    <img :src="restaurant.image" alt="" class="img-fluid">
    <h2>
        {{ restaurant.name }} <br>
    </h2>
    <h5>
        {{ restaurant.address }} <br>
    </h5>
    <div v-for="dish in restaurant.dishes">
        <DishComponent :dish="dish"/>
    </div>
    <RestaurantCart />
</template>