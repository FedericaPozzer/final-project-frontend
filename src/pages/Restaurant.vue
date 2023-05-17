<script>
import axios from 'axios'
import { useCartStore } from "../stores/cart"

export default{
    name:'Homepage',
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
    }
}

</script>
<template>
    {{ restaurant.name }} <br>
    {{ restaurant.address }} <br>
    {{ restaurant.phone_number }} <br>
    <img :src="restaurant.image" alt="">
    <div v-for="dish in restaurant.dishes">
        {{ dish.name }}
        {{ dish.price }}
        <span @click="store.addDish(dish)">Aggiungi al carrello</span>
    </div>
</template>