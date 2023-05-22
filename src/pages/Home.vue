<!-- Homepage di DeliveBoo -->

<script>

/* Importo il Jumbotron, il container dei tipi e il container dei ristoranti */
import Jumbotron from '../components/Jumbotron.vue'
import Types from '../components/types/Types.vue'
import RestaurantsList from '../components/restaurants/home/RestaurantsList.vue'

export default{
    components: {
      /* Importo i componenti */
      Jumbotron,
      Types,
      RestaurantsList
    },
    methods:{
      changeType(type){
        this.type = type
      }
    },
    data(){
      return{
        type: 'all'
      }
    }
}

</script>

<template>

<!-- Jumbotron -->
<Jumbotron />

<!-- Categorie -->
<Types @change-type="(type) => changeType(type)" />

<!-- Ristoranti -->
<div class="container">
  <RestaurantsList :type="type"/>
</div>

</template>

<style scoped lang="scss">

</style>
