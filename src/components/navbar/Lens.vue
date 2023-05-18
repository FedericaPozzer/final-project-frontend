<!-- Icona di ricerca della navbar -->

<script>
/* Importo il componente Search */
import Search from '../SearchComponent.vue'
export default{
    watch: {
    $route(newVal, oldVal) {
      this.expanded = newVal.meta && newVal.meta.expanded;
    }
    },
    data(){
        return{
            /* Variabile per aprire o chiudere il componente Search */
            expanded: 0
        }
    },
    components: {
        /* Componente ricerca */
        Search
    }
}

</script>

<template>

    <!-- Icona di ricerca -->
    <!-- @click apre il componente Search -->

    <i class="fa-solid fa-magnifying-glass" 
    @click="expanded = 1" 
    ></i>

    
    <!-- Componente Search -->

    <div v-if="expanded">
        <Search v-show="expanded" @close="expanded = 0"/>
        <router-view v-if="!expanded"></router-view>
    </div>
</template>

<style lang="scss">

</style>