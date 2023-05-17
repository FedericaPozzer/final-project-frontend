<script>
export default{
    props: {
        restaurantData: Object
    },
    created(){
        console.log(this.restaurantData)
    }
}
</script>

<template>
    <div class="card">
        <img :src="restaurantData.image" class="card-img-top img-fluid mt-2 rounded-3" alt="...">
        <div class="card-body">
          <h5 class="card-title">{{restaurantData.name}}</h5>
          <p class="card-text d-flex gap-1">
            <span v-for="type in restaurantData.types">
                {{ type.name }}
            </span>
          </p>
          <router-link :to="{
            name : 'restaurant-detail',
            params: {
                'id' : restaurantData.id
            }
          }">
            Vedi
          </router-link>
        </div>
      </div>
</template>

<style lang="scss" scoped>
  
</style>

