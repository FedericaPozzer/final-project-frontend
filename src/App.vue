<!-- COMPONENTE PRINCIPALE DELIVEBOO -->

<script>

/* Importo l'Header/Navbar e il componente'Carrello' */
import Navbar from './components/navbar/Navbar.vue'
import Cart from './components/CartComponent.vue'
import CartPage from './pages/CartPage.vue'


export default{
  components: {
    /* Importo i componenti */
    Navbar,
    Cart,
    CartPage
  },
  created(){
  }
}
</script>

<template>
  <div class="pippo">

    
    <!-- Navbar/Header -->
    <Navbar />
    
    <!-- Contenuto variabile in base alla rotta in cui si è -->
    <router-view></router-view>
    <!-- Componente 'Carrello', al click apre la visualizzazione del carrelo. -->
    <Cart v-if="$route.path != '/checkout'"/>

  </div>
  
</template>

<style lang="scss">

// VARIABILI GLOBALI CSS
:root{

  //
  //Colori
  //
    --text-color: black;
    --bg-primary-color: #ffc032;
    --bg-color: white;
    --bg-secondary-color: #ee6a33;
    --bg-light: #fff3d8;

    --backdrop-opacity: .3;

  //
  //Spaziature
  //

    //Altezza Navbar
    --navbar-height: 10vh;

    //Altezza Jumbotron
    --home-jumbo-height: 25vh;
    --restaurant-jumbo-height: 30vh;

    
    //Altezza componente 'Cerca' quando aperto
    --search-height: 30vh;

    //Altezza componente 'Quantità' di Piatto quando aperto
    --quantity-height: 60vh;


    //Altezza componente Carrello mobile
    --cartComponent-mobile-height: 12vh;

    //Altezza/Larghezza componente Carrello desktop
    --cartComponent-desktop-height: 10vh;
}

#app{
  background-color: var(--bg-light);
  height: 100vh;
  overflow-x: hidden;
  color: var(--text-color);
  a{
    color: var(--text-color);
  }
  /* width */
::-webkit-scrollbar {
  width: 10px;
  height: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: var(--bg-primary-color);
  border-radius: 10px;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: var(--bg-primary-color);
}
}



</style>
