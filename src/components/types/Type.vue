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
    <button class="type">
        
        <p class="text">
            {{ type.name }}
        </p>
        
        <div class="box">
            <!-- <img width="80" height="80" src="https://img.icons8.com/plasticine/100/hamburger.png" alt="hamburger"/> -->
            <!-- TODO -->
            <img width="50" height="50" :src="type.image"/>
        </div>
    

        



    </button>
</template>

<style>
</style>