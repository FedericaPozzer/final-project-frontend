<script>
import { useCartStore } from "../stores/cart.js"
import Cart from "./Cart.vue"
export default{
    data(){
        return{
            cart: useCartStore(),
        }
    },
    props: {
    },
    components:{
        Cart
    }
}
</script>
<template>
<div class="cart">
    <Cart />
    <span class="price">
        {{ cart.totalPrice.toFixed(2) }}€
    </span>

</div>
</template>
<style lang="scss" scoped>
.cart{
    position: fixed;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 0 1rem;
    height: 10vh;
    width: 100%;
    background-color: orange;
    border-radius: 20px 20px 0 0;
}
</style>