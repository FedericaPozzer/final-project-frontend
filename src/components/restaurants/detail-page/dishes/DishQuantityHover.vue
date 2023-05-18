<script>
</script>

<template>
    <div class="quantityHover">
        <div class="backdrop">
        </div>
        <div class="quantity">
            Quantità
        </div>
    </div>
</template>
<style lang="scss">
.quantityHover{
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    .backdrop{
        width: 100%;
        height: 40vh;
        background-color: black;
        opacity: .5;
    }
    .quantity{
        height: 60vh;
        width: 100%;
        background-color: orange;

    }
}
</style>