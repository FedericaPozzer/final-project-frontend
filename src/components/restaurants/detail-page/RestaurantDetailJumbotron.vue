<!-- Jumbotron che mostra le informazioni del ristorante nella schermata Ristorante  -->

<script>
export default{
    props:{
        restaurant: Object
    }
}
</script>

<template>
<!-- Jumbotron -->
<div class="jumbo">

    {{restaurant.name}}

    <!-- TODO -->

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
}
</style>