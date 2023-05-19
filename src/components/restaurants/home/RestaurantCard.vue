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
    <div class="restaurant">
        {{ restaurant.name }}

        <!-- TODO: immagine, nome, tipi -->
    </div>
</template>
<style>
.restaurant{
    height: 15vh;
    width: 100%;
    border: 2px dotted black;
}
</style>