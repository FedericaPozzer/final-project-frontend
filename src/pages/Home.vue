<script>
import axios from 'axios'
import Jumbotron from '../components/Jumbotron.vue'
import Types from '../components/types/Types.vue'
import RestaurantsList from '../components/restaurants/home/RestaurantsList.vue'
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
      Jumbotron,
      Types,
      RestaurantsList
    }
}

</script>

<template>
<!-- Jumbotron -->
<Jumbotron />

<!-- Categorie -->
<Types />

<!-- Ristoranti -->
<RestaurantsList />

</template>

<style scoped lang="scss">

</style>
