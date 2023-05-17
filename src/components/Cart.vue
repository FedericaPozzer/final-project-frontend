<script >
import axios from "axios"
import { useCartStore } from "../stores/cart"
export default{
    data(){
        return{
            store: useCartStore() //initialize the store
        }
    },
    created(){
        console.log(this.store.dishes)
    },
    methods: {
        sendCart(){
            axios.post('http://127.0.0.1:8000/api/orders', {
                cart: this.store.dishes
            })
            .then(
                (response) => console.log(response)
            )
        }
    }
}
</script>
<template>
    <div v-for="dish in store.dishes">
        {{ dish.name }}
        {{ dish.quantity }}
    </div>
    <button @click="sendCart()">
        Invia ordine
    </button>
    <button @click="store.deleteCart">Svuota il cestino</button>
</template>