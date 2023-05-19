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

        <!-- TODO: immagine, nome, tipi -->

        <div class="card">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src="..." class="img-fluid rounded-start" alt="img">
                </div>
                
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">{{ restaurant.name }}</h5>
                        <p class="card-text">text.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<style lang="scss">
.restaurant{
    height: 15vh;
    width: 100%;
    border: 2px dotted black;

    .card {
        max-height: 100%;
    }
}
</style>