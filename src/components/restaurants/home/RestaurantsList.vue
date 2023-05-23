<!-- Container dele card Ristorante nella schermata Home -->

<script>
/* Importo le card dei ristoranti */
import axios from 'axios';
import RestaurantCard from './RestaurantCard.vue';
export default {
    components: {
        /* Componente card Ristorante */
        RestaurantCard
    },
    props:{
        type: String
    },
    data() {
        return {
            restaurants: [],
            isLoading:false,
            queryText: '',
            data: []
        }
    },

    created() {
        this.isLoading = true;
        axios.get("http://127.0.0.1:8000/api/restaurants")
        .then((response) =>{
            console.log(response)
            this.data = response.data
            this.restaurants = response.data.data
        } 
        )
        .finally(()=>{
        this.isLoading = false;
    });
    },
    watch: {
    '$props':{
      handler: function (val) { 
        this.search(this.queryText, val.type)
      },
      deep: true
    }
  },
    methods: {
        search(query, type){
            if(type == 'all')
            {
                if(this.queryText == '')
                {
                    axios.get("http://127.0.0.1:8000/api/restaurants")
                    .then((response) =>{
                        this.data = response.data
                        this.restaurants = response.data.data
                        console.log(response)
                    }) 
                    .finally(()=>{
                    this.isLoading = false;
                    });
                }
                else{
                    axios.get("http://127.0.0.1:8000/api/search/" + type + '/' + this.queryText)
                    .then((response) =>{
                        this.data = response.data
                        this.restaurants = response.data.data
                        console.log(response)
                    })
                    .finally(()=>{
                    this.isLoading = false;
                    });
                }
            }
            else{
                if(this.queryText == '')
                {
                    axios.get('http://127.0.0.1:8000/api/search/' + type + '/null')
                    .then((response) =>{
                        this.data = response.data
                        this.restaurants = response.data.data
                        console.log(response)
                    }
                    ) 
                    .finally(()=>{
                    this.isLoading = false;
                    });
                }
                else{
                    axios.get("http://127.0.0.1:8000/api/search/" + type + '/' + query)
                    .then((response) => {
                        this.data = response.data
                        this.restaurants = response.data.data
                        console.log(response)
                    })
                    .finally(()=>{
                    this.isLoading = false;
                    });
                }
            }
        },
        handleUrl(url){
            axios.get(url)
                    .then((response) => {
                        this.data = response.data
                        this.restaurants = response.data.data
                        console.log(response)
                    }
            )
        }
    }
}


</script>


<template>
    <!-- Container Bootstrap per margini laterali -->
    <div class="container">
         <!-- Se sto ancora ricevendo dati allora lascio il layover -->
         <AppLoader v-if="isLoading"/>
        <input type="text" class="form-control mt-3" :placeholder="type == 'all' ? 'Cerca tra tutti i ristoranti..' : 'Cerca tra i ristoranti di tipo ' + type + '...' " v-model="queryText" @input="search(queryText, type)">

        <!-- se trovo qualcosa stampo la lista,in caso contrario do un messaggio mancato risultato -->
        
        <div v-if="this.restaurants.length != 0">

            <!-- Row che mostra 1 ristorante a riga o 2 da tablet in su -->
            <div class="row mt-2 g-3">
                <!-- Card Ristorante -->
                <RestaurantCard v-for="restaurant in restaurants" :key="restaurant.id" :restaurant="restaurant"/>
            </div>
    
        </div>
        <div v-else>
            <h1 class=" no-match-message my-4">Nessun Risultato</h1>
        </div>
        <div class="pagination">
            <div class=""  >
                <button @click="handleUrl(data.prev_page_url)" :class="{'disabled' : !data.prev_page_url}"> &lt </button>
            </div>
            <div class="">
                {{ data.from }} a {{ data.to }} di {{ data.total }} ristoranti
            </div>
            <div class="">
                <button @click="handleUrl(data.next_page_url)"  :class="{'disabled' : !data.next_page_url}"> &gt </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.container{
    margin-bottom: calc(var(--cartComponent-mobile-height));
}
.no-match-message{
    font-size: 3rem;
    -webkit-text-stroke: 1px black;
    color: #ee6a33;

}
.restaurant-container{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 1rem;
}

.pagination{
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 1rem 0;
    button{
        background-color: var(--bg-secondary-color);
        border-radius: 20px;
        width: 50px;
        height: 50px;
        border: none;
        padding: 10px;
        &.disabled{
            background-color: rgba($color: grey, $alpha: .2);
            pointer-events: none;
        }
    }
}
</style>