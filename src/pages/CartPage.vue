<!-- Schermata di riepilogo del carrello -->
<!-- Per il suo z-index, nasconde il componente CartComponent.vue (il carrello) -->

<script>
import { useCartStore } from '../stores/cart';
export default{
    data(){
        return{
            cart: useCartStore()
        }
    }
}
</script>

<template>
    <div class="cart-container">
        <div class="cart-backdrop" @click="$emit('close')"></div>
        <div class="cart" @click="$emit('cartExpanded')">
            <div class="container">
                <div class="d-flex flex-column w-100 h-100 p-2">
                    <div class="dish d-flex justify-content-between" v-for="dish, i in cart.dishes">
                        <span>
                            {{ dish.name }}
                        </span>
                        <div class="d-flex gap-4">
                            <div @click="dish.quantity--">
                                -
                            </div>
                            <div>
                                {{ dish.quantity }}
                            </div>
                            <div @click="dish.quantity++">
                                +
                            </div>
                            <div>
                                {{ (dish.price * dish.quantity).toFixed(2) }}€
                            </div>
                            <div @click="cart.removeDish(i)">
                                X
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="container d-flex w-100 justify-content-center">
                <div class="button red" @click="cart.deleteCart">
                    Elimina Carrello
                </div>
                <div class="button">
                    <span>
                        ORDINA ORA
                    </span>
                    {{ cart.totalPrice }}€
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.cart-container{
    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    top: 0;
    z-index: 10;
    
    .cart-backdrop{
        height: 20vh;
        width: 100%;
        background-color: black;
        opacity: var(--backdrop-opacity);
    }
    
    .cart{
        width: 100%;
        height: 80vh;
        background-color: var(--bg-color);
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        z-index: 3;
    }
    
    .dish{
        font-size: 1.5rem;
        padding: 5px;
    }
    .button{
        padding: 1rem;
        margin: 1rem;
        background-color: var(--bg-primary-color);
        border-radius: 20px;
        color: white;
        font-weight: 600;
        width: 50%;
        max-width: 300px;
        display: flex;
        justify-content: space-between;
        &.red{
            background-color: red;
        }
    }
}

</style>