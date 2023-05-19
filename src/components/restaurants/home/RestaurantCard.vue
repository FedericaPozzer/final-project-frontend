<!-- Card del ristorante nella schermata Home -->
<script>
export default {
    props: {
        restaurant: Object,
    }
}

</script>

<template>
    <!-- Card -->
    <div class="card-group">
    
        <!-- TODO: immagine, nome, tipi -->
    
        <!-- :src="`${stores.BackEndpoint}${$restaurant.image}`" -->
        
        <div class="card">
            <div class="row">
                <div class="col-4 image-container">
                    <img :src="'http://127.0.0.1:8000/' + restaurant.image" class="img-fluid rounded-start" alt="img">
                </div>
                
                <div class="col-8">
                    <div class="card-body p-0">
                        <h5 class="card-title mt-md-3">{{ restaurant.name }}</h5>
                        <div class="d-flex flex-wrap">
                            <div v-for="RestaurantType in restaurant.types" :key="RestaurantType.id">
                                <p class="card-text me-2"> {{ RestaurantType.name }}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</template> 
<style>
.restaurant{
    height: 15vh;
    width: 100%;
    border: 2px dotted black;
}
</style>