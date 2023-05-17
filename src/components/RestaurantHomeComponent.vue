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

<div class="card-group">
    <!-- Card Ristorante (genrica) -->
    <div class="card">

        <!-- immagine ristorante -->
        <img :src="restaurantData.image" class="card-img-top img-fluid" alt="restaurantImage">
        
        <!-- card body -->
        <div class="card-body d-flex flex-column">
            <!-- nome ristorante -->
            <h4 class="card-title">{{restaurantData.name}}</h4>
            <!-- tipologie -->
            <p class="card-text d-flex flex-wrap gap-1 text-secondary">
                <span v-for="type in restaurantData.types">
                    {{ type.name }}
                </span>
            </p>

            <div class="mt-auto">
            <router-link :to="{
                name : 'restaurant-detail',
                params: {
                'id' : restaurantData.id
                }
                }">
                   
                <button class="btn btn-success">
                    Vedi Menù
                </button>
            </router-link>
            </div>

        </div>
    </div>
</div>
      
</template>

<style lang="scss" scoped>

  
</style>

