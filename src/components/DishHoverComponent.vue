<script>
import { useCartStore } from "../stores/cart.js"
export default{
    data(){
        return{
            cart: useCartStore(),
            quantity: 1,
        }
    },
    props: {
        dish: Object
    },
}
</script>
<template>
    @click="$emit('closeHover')"
    <div class="dish-overlay">
        <div class="order-dish">
            <div class="d-flex justify-content-center m-4">
                <h2>
                    {{ dish.name }}
                </h2>
            </div>
            <div class="d-flex justify-content-center m-1 h-100">
                <h4>
                    {{ dish.description }}
                </h4>
            </div>
            <div class="add-to-order">
                <div class="quantity d-flex justify-content-center align-items-center gap-3" >
                    <div @click="quantity--">
                        -
                    </div>
                    <div>
                        {{ quantity }}
                    </div>
                    <div @click="quantity++">
                        +
                    </div>
                </div>
                <div class="order-button" @click="cart.addToOrder(dish, quantity), $emit('closeHover')">
                    <div>
                        Aggiungi all'ordine
                    </div>
                    <div>
                        {{ dish.price.toFixed(2) * quantity }} €
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
h4{
    font-size: 1rem;
    font-weight: 400;
}
.dish-overlay{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba($color: black, $alpha: .3);
    z-index: 2;
    display: flex;
    align-items: end;
    .order-dish{
        z-index: 3;

        height: 60vh;
        background-color: white;
        border-radius: 20px 20px 0 0;
        width: 100%;
        display: flex;
        flex-direction: column;


        .quantity{
            font-size: 2rem;
        }
        .order-button {
            background-color: orange;
            margin: 10px;
            display: flex;
            border-radius: 20px;
            justify-content: space-between;
            div {
                margin: 1rem;
            }
        }
    }
}
</style>