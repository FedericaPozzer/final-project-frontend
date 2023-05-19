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
    <a :href="'/restaurants/' + restaurant.id">
        <div class="restaurant">
            {{ restaurant.name }}
    
            <!-- TODO: immagine, nome, tipi -->
        </div>
    </a>
</template> 
<style>
.restaurant{
    height: 15vh;
    width: 100%;
    border: 2px dotted black;
}
</style>