<!-- Jumbotron che mostra le informazioni del ristorante nella schermata Ristorante  -->
<script>
    import {useEndpointStore} from "../../../stores/endpoint.js"

    export default {
        data() {
        return {
        endpoint: useEndpointStore(),
        }
    },
    props:{
        restaurant: Object
    }
}
</script>

<template>
<!-- Jumbotron -->
<div class="jumbo">

    <h2 class="me-2 me-md-5 name">{{ restaurant.name }}</h2>
    <div class="img-container">
        <img :src="endpoint.endpoint + restaurant.image" class="" alt="img">
    </div>

</div>
</template>

<style lang="scss" scoped>
.jumbo{
    width: 100%;
    height: var(--restaurant-jumbo-height);
    background-color: var(--bg-primary-color);
    display: flex;
    justify-content: center;
    align-items: center;

    .name {
        font-size: 100px;
    }

    img {
        height: 25vh;
        width: 25vh;
        border-radius: 50%;
        object-fit: cover;
    }
}
</style>