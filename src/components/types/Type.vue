<!-- Box Tipo nella schermata Home -->

<script>

    /**
     * TODO: al click del tipo, $emit del tipo scelto 
     * per far sapere al componente RestaurantsList quali
     * ristoranti deve mostrare.
      */

      export default{
        props:{
            type:Object,
        }
      }

</script>

<template>
    <!-- Box -->
    <div class="type">
        <div class="box">
            <img width="50" height="50" :src="type.image"/>
        </div>
        
        <p class="text">
            {{ type.name }}
        </p>

        



    </div>
</template>

<style>
.type {
    height: 100%;
    background-color: var(--bg-secondary-color);
    border-radius: 40px;
    padding: 5px;
    flex-grow: 1;
    min-width: 85px;
    max-width: 85px;
}

.box {
    height: 60%;
    aspect-ratio: 1 / 1;
    margin: auto;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    padding: 5px;
}

.text {
    font-size: 13px;
    text-align: center;
    margin-top: 6px;
    color: white;
}


</style>