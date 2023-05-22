<!-- Componente carrello -->

<!-- Quando viene cliccato è un link alla pagina "carrello". Questa dinamica  -->
<!-- è gestita dal componente App.vue -->

<script>
    import CartPage from '../pages/CartPage.vue'
    import { useCartStore } from '../stores/cart';
    /**
     * TODO: Link ai dati che sono nello store
    */
    export default{
        watch: {
            $route(newVal, oldVal) {
            this.cartExpanded = newVal.meta && newVal.meta.cartExpanded;
            }
        },
        data(){
            return{
                cartExpanded: 0,
                cart: useCartStore()
            }
        },
        components: {
            CartPage
        }
    }
</script>

<template>

    <!-- Schermata carrello mobile -->
    <div class="cart-bar d-md-none" @click="cartExpanded == 0 ? cartExpanded = 1 : cartExpanded = 1" >
        <div class="cart">
            <i class="fa-solid fa-cart-shopping"></i>
            <span class="numberOfItems">
                {{cart.numberOfItems}}
            </span>
        </div>
        <span class="amount">
            {{ cart.totalPrice }}€
        </span>
    </div>

    <!-- Schermata carrello desktop -->
    <div class="cart-round d-none d-md-flex" >
        <div @click="cartExpanded = 1">
            <img width="40" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACUElEQVR4nO2ZPWtUQRSGn9WAEsS0foUQNRo/QCTY5A8YCaKVnaCSqBERCQh2VoKNjQgWFhqMJhJEghEri5hSrGwUAgG/BRcNgkXErBx4L1wk7JJ1ztw7kAem2b3znvMus3PPmYEVykc/8AGo1RnfgRfACaBCSfnYwMS/Y7SsZt7nkny3xPeW9CZgEPip545TQg7JjJnoa/DsaRl5ReKsAb7JzC4SZ1RGhkicQRkZJ3F2yMjXsu5ezWzZ3STOAxk5S+KckZExEqdbRj6v/E9KxPgyazSPMRPCyFAJjMyGMLI79z+JzV3FvhJCzF6GXyS4k3isUxW+CGwNJTohI1YVx+KUYj4PKXpeoveJx4xHT7RXop+IQ5eW1DzQGlK4ouKxpiDeXFWs2x7ijyQ+gC+r1MVarF6PABckfg9fDirOW6+yaJ8CWN8fo5K47BWgkuvjtznFaAN+AX+Adhx5LCO2x3twTvrPcOaiAo046b+U/jGc2V/ngO9/2SPtKrCWCFtjVQE7A2tfl+5NIjGpgHbQHYoWVdem20MkhhXwTkDNI9J8TUR6FHTOYTccJiKrdY8Sugv8DWwgMk8Cm1gEblAAl5TALRLngIy8IXFa1PTUdMuVNJMycpLEGZCRaRJnfa5cuQZ0aGtOkqPAQsBteLpIM4cDGlkANhZlZERJ2Etys8ZUg3uVsTpz7BK2ELKq1ZLJaM/1FktRrTPnBwWRvU+2LCOp+SbmuJOdd00pMRtP9dlEwDlRrrGz05X8sOWzPeAcYmBr/aGWjA37VRsl1Mwc/gIXmFSH9pqNAQAAAABJRU5ErkJggg==">
        </div>
    </div>
    <CartPage v-show="cartExpanded" @close="cartExpanded = 0"/>
    
</template>
<style lang="scss">
.cart-bar{
    position: fixed;
    height: var(--cartComponent-mobile-height);
    width: 100%;
    z-index: 2;
    bottom: 0;
    background-color: var(--bg-primary-color);
    border-radius: 20px 20px 0 0;
    display: flex;
    align-items: center;
    padding: 1rem;
    .cart{
        position: relative;
        font-size: 3rem;
        .numberOfItems{
            font-size: 2rem;
            background-color: var(--bg-secondary-color);
            width: 2rem;
            height: 2rem;
            display: flex;
            justify-content: center;
            align-items: center;
            position: absolute;
            top: 0;
            transform: translateX(100%);
            border-radius: 50%;
        }

    }
    .amount{
        font-size: 2rem;
        margin-left: 1rem;
    }
}

.cart-round{
    position: fixed;
    width: var(--cartComponent-desktop-height);
    height: 10vh;
    border-radius: 50%;
    background-color: var(--bg-primary-color);
    margin: 2rem;
    bottom: 0;
    right: 0;

    padding: 15px;
}
</style>