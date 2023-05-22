<!-- Componente della schermata 'Ricerca' -->

<script>

    /** TODO: 
     * ??in base a se sei in homepage o nella pagina di un ristorante
     * cerca fra i ristoranti o i piatti del ristorante
    */
    export default {
  data() {
    return {
      search_something: "",
    };
  },
  emits: ["search"],
  methods: {
    resetSearch(search_something) {},
  },
};


</script>

<template>
    <!-- Container della schermata 'Ricerca' -->
    <div class="search-container">


        <!-- Schermata 'Ricerca' -->
        <div class="search">
            <button
            type="button"
            class="input-group-text btn btn-danger"
            id="addon-wrapping"
            submit.prevent
            @click="$emit('search', search_something)"
          >
            <i class="fa-solid fa-magnifying-glass" 
            @click="expanded = 1" 
            ></i>

          </button>
            <input
            type="text"
            class="form-control"
            placeholder="Cerca il tuo ristorante o il tuo piatto preferito..."
            aria-label="Username"
            aria-describedby="addon-wrapping"
            v-model="search_something"
            submit.prevent
            @keyup.enter="$emit('search', search_something)"
          />
          <!-- <button
            type="button"
            class="input-group-text btn btn-warning pb-2 fs-6"
            id="addon-wrapping"
            submit.prevent
            @click="resetSearch(search_something)"
          >
            Reset
          </button> -->
        </div>
        
        <!-- Scurisce la porzione di schermo non coperta dalla schermata 'ricerca'
        e quando cliccato chiude la schermata, emittando al componente 'Lens.vue' -->
        <div class="search-backdrop" @click="$emit('close')"></div>

    </div>
</template>

<style lang="scss">
.search-container{
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;

    .search{
        height: var(--search-height);
        width: 100%;
        background-color: var(--bg-primary-color);
    }
    .search-backdrop{
        height: calc(100vh - var(--search-height));
        width: 100%;
        background-color: black;
        opacity: var(--backdrop-opacity);
    }
}
</style>