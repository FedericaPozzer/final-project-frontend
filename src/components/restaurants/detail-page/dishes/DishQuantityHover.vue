<!-- Componente per scegliere la quantità del piatto da aggiungere al carrello -->
<script>
import {useCartStore} from '../../../../stores/cart'
export default {
    props: {
        dish: Object
    },
    data(){
        return{
            cart: useCartStore(),
            quantity: 1
        }
    },
    created(){
        this.cart.dishes.forEach((cartDish)=>{
            if (cartDish.id == this.dish.id)
            {
                this.quantity = cartDish['quantity']
            }
        })
    }
}

</script>

<template>
    <!-- Container della schermata -->
    <div class="quantityHover">

        <!-- Scurisce la porzione non coperta dalla schermata e al click chiude la schermata -->
        <div class="backdrop" @click="$emit('close')">

        </div>

        <!-- Schermata -->
        <div class="quantity">
            <div class="name">
                {{dish.name}}
            </div>
            <div class="description h-75 p-3 fs-4">
                {{ dish.description }}
            </div>

            <div class="buttons d-flex flex-column">
                <div class="container">
                    <div class="quantityButtons d-flex justify-content-around gap-3 align-items-center">
                        <div class="button" @click="quantity == 1 ? quantity = 1 : quantity--">-</div>
                        <div class="number fs-1">{{quantity}}</div>
                        <div class="button" @click="quantity++">+</div>
                    </div>
                </div>
                <div class="addToCart" @click="cart.addToCart(dish, quantity), $emit('close')">Aggiungi al carrello</div>
            </div>

        </div>
    </div>
</template>
<style lang="scss" scoped>
.quantityHover{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    padding: 0 !important;
    margin: 0 !important;
    flex-direction: column;
    height: 100vh;
    width: 100vw;
    .backdrop{
        width: 100vw;
        height: calc(100vh - var(--quantity-height));
        background-color: black;
        opacity: var(--backdrop-opacity);
    }
    .quantity{
        z-index: 5;
        height: var(--quantity-height);
        width: 100vw;
        background-color: var(--bg-primary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        color: white;
        .name{
            font-size: 2.5rem;
            text-transform: uppercase;
            font-weight: bold;
        }

        .buttons{
            font-size: 2rem;
            gap: 10px;
            .button{
                background-color: var(--bg-secondary-color);
                width: 50px;
                height: 50px;
                display: flex;
                align-items: center;
                justify-content: center;
                line-height: 0;
                border-radius: 50%;
            }
        }
        .addToCart{
            background-color: var(--bg-secondary-color);
            padding: 0.8rem;
            border-radius: 10px;
            font-size: 25px;
        }
        
    }
    .number{
        font-size: 3rem;
    }
}
</style>