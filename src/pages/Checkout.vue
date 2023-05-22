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
    <div class="checkout h-100">
        <div class="container h-100">
            <div class="row justify-content-between h-100">
                <div class="dishes col-12 col-lg-6">
                    <div class="dish d-flex justify-content-between" v-for="dish in cart.dishes">
                        <span>
                            ({{ dish.quantity }})
                            {{ dish.name }}
                        </span>
                        <span>
                            {{ (dish.price * dish.quantity).toFixed(2) }}&euro;                    
                        </span>
                    </div>
                </div>
                <div class="total d-flex justify-content-between p-3">
                    <span>
                        Totale:
                    </span>
                    <span>
                        {{ cart.totalPrice }}&euro;
                    </span>
                </div>
                <div class="payment col-12 col-lg-6">
                    <div class="row">
                        <div class="col-12 d-flex flex-column">
                            <label for="name">Nome completo</label>
                            <input type="text" name="name">
                        </div>
                        <div class="col-12 d-flex flex-column">
                            <label for="addres">Indirizzo</label>
                            <input type="text" name="addres">
                        </div>
                        <div class="col-12 d-flex flex-column">
                            <label for="email">Email</label>
                            <input type="text" name="email">
                        </div>
                        <div class="col-12 d-flex flex-column mb-5">
                            <label for="email">Telefono</label>
                            <input type="text" name="email">
                        </div>
                        <div class="col-12 d-flex flex-column">
                            <label for="name">N. Carta</label>
                            <input type="text" name="name">
                        </div>
                        <div class="col-6 d-flex flex-column">
                            <label for="name">Scadenza</label>
                            <input type="text" name="name">
                        </div>
                        <div class="col-6 d-flex flex-column">
                            <label for="name">CVV</label>
                            <input type="text" name="name">
                        </div>
                        <div class="col-12">
                            <button>
                                Invia Ordine
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.checkout{
    padding: 1rem;
    padding-top: calc(var(--navbar-height) + 1rem);
    max-height: 100vh;
    box-sizing: border-box;
    .dishes{
        height: 20vh;
        overflow-y: scroll;
        @media screen and (min-width: 968px) {
            height: 100%;
            overflow-y: auto;
        }
        .dish{
            padding: 8px;
            border: 1px solid gray;
            border-radius: 10px;
            margin-bottom: 10px;
        }
    }
    .payment{
        flex-grow: 1;
        button{
            background-color: var(--bg-primary-color);
            border-radius: 10px;
            border: none;
            padding: 10px;
            margin: 10px 50%;
            width: 50%;
            transform: translateX(-50%);
        }
    }
}
</style>