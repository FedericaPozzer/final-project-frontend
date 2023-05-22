<!-- Card del ristorante nella schermata Home -->
<script>
import {useEndpointStore} from "../../../stores/endpoint.js" 

export default {
    data() {
        return {
            endpoint: useEndpointStore(),
        }
    },

    props: {
        restaurant: Object,
    }
}

</script>

<template>
    <!-- Card -->
    <div class="col-12 col-lg-6">
            <a :href="'/restaurants/' + restaurant.id">
            <div class="card">
                <div class="row">
                    <div class="col-4">
                        <img :src="endpoint.endpoint + restaurant.image" class="img-fluid rounded-start" alt="img">
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
            
        </a>
        </div>
    </template> 
    <style scoped>
    a{
        margin: 0;
        padding: 0;
        text-decoration: none;
    }
    .restaurant{
    height: 15vh;
    width: 100%;
    border: 2px dotted black;
}
</style>