<script>
import axios from 'axios'
import RestaurantComponent from '../components/RestaurantHomeComponent.vue'
import navbar from '../components/navbar.vue'
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
      navbar
    }
}

</script>

<template>
  <navbar></navbar>
    <div class="row row-cols-1 m-2 gap-2">
      <RestaurantComponent v-for="restaurant in restaurants" :restaurant-data="restaurant" class="col"/>
    </div>
  
</template>

<style scoped lang="scss">

</style>
