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
            <!-- <img width="80" height="80" src="https://img.icons8.com/plasticine/100/hamburger.png" alt="hamburger"/> -->
            <!-- {{ type.name }} -->
            <!-- TODO -->
        </div>

        



    </div>
</template>

<style>
.type {
    height: 100%;
    width: 6%;
    
    border: 2px dotted black;
    border-radius: 40px;
    padding: 5px;
}

.box {
    height: 60%;
    aspect-ratio: 1 / 1;
    margin: auto;
    background-color: red;
    border-radius: 50%;
}


</style>