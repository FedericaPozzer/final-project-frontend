<script>
import DishQuantityHover from './DishQuantityHover.vue'
export default {
    data(){
        return{
            isOpen: 0
        }
    },
    components: {
        DishQuantityHover
    }
}
</script>

<template>
    <div class="dish" @click="isOpen = 1">
        Piatto
    </div>

    <DishQuantityHover v-show="isOpen" />

</template>

<style>
    .dish{
        height: 10vh;
        border: 2px dotted black;
    }

</style>