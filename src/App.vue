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
  }
}
</script>

<template>

  <!-- Navbar/Header -->
  <Navbar />

  <!-- Contenuto variabile in base alla rotta in cui si è -->
  <router-view></router-view>

  <!-- Componente 'Carrello', al click apre la visualizzazione del carrelo. -->
  <Cart/>
  
</template>

<style lang="scss">

// VARIABILI GLOBALI CSS
:root{

  //
  //Colori
  //
    --text-color: black;
    --bg-primary-color: orange;
    --bg-color: white;
    --bg-secondary-color: #ee6a33;

    --backdrop-opacity: .3;

  //
  //Spaziature
  //

    //Altezza Navbar
    --navbar-height: 10vh;

    //Altezza Jumbotron
    --home-jumbo-height: 30vh;
    --restaurant-jumbo-height: 30vh;

    
    //Altezza componente 'Cerca' quando aperto
    --search-height: 60vh;

    //Altezza componente 'Quantità' di Piatto quando aperto
    --quantity-height: 60vh;


    //Altezza componente Carrello mobile
    --cartComponent-mobile-height: 15vh;

    //Altezza/Larghezza componente Carrello desktop
    --cartComponent-desktop-height: 10vh;
}

#app{
  background-color: var(--bg-color);
  height: 100vh;
  color: var(--text-color);
  a{
    color: var(--text-color);
  }
}


</style>
