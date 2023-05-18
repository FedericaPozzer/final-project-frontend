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
    }
}

</script>

<template>

<!-- Jumbotron -->
<Jumbotron />

<!-- Categorie -->
<Types />

<!-- Ristoranti -->
<div class="container">
  <RestaurantsList />
</div>

</template>

<style scoped lang="scss">

</style>
