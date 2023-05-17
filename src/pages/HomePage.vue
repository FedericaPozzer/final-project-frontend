<script>
import axios from 'axios'
import RestaurantComponent from '../components/RestaurantHomeComponent.vue'

export default{
    name:'Homepage',
    data(){
      return {
        restaurants: []
      }
    },
    created(){
      axios.get('http://127.0.0.1:8000/api/restaurants')
      .then((response)=> this.restaurants = response.data)
    },
    components: {
      RestaurantComponent,
    }
}

</script>

<template>
    <div class="container">
        <div class="row row-cols-1 row-cols-md-3 row-cols-lg-4 gy-2">
            <RestaurantComponent v-for="restaurant in restaurants" :restaurant-data="restaurant" class="col"/>
        </div>
    </div>

</template>

<style scoped lang="scss">

</style>
