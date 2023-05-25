<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <div class="container vh">

        <h1 class="text-center my-3">GRAZIE PER AVER ORDINATO DA DELIVEBOO!</h1>

        <img class="my-3" width="80" height="80" src="https://img.icons8.com/color/48/checked--v1.png" alt="checked--v1"/>
    
        <p> Il tuo ordine è andato a buon fine, riceverai presto un'email di conferma. </p>
        <p> Ora preparati per ricevere i tuoi piatti deliziosi! </p>
    
        <button class="button">
            <a href="/">
                Ritorna alla HomePage
            </a>
        </button>
    </div>
</template>

<style lang="scss" scoped>

.vh{
    height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
}

.button{
    padding: 10px;
    background-color: var(--bg-primary-color);
    border-radius: 20px;
    font-weight: 600;
    color: white;
    margin-top: 10px;
    border: none;
}

a{
    text-decoration: none;
    color: inherit;
}

p{
    font-size: larger;
}
</style>