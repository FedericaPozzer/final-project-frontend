<script>
import DishHover from './DishHoverComponent.vue'

export default {
  data() {
    return {
        dishHover: 0
    }
  },
  props: {
    dish: Object
  },
  components:{
    DishHover
  }
};
</script>

<template>
    <div class="dish" @click="dishHover = 1">
        <div>
            <h3>
                {{dish.name}}
            </h3>
        </div>
        <div>
            <h5>
                {{ dish.description }}
            </h5>
        </div>
        <div>
            <h4>
                {{ dish.price.toFixed(2) }}€
            </h4>
        </div>
    </div>
    <DishHover v-if="dishHover" :dish="dish" @close-hover="dishHover = 0"/>
</template>

<style lang="scss" scoped>
h4{
    font-size: 1.2rem
}
h3{
    font-size: 1.5rem;
}
h5{
    font-size: 1rem;
    opacity: .8;
}
.dish {
    display: flex;
    flex-direction: column;
    border-top: 1px solid black;
}
</style>