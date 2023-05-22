<!-- Riga dei tipi nella schermata Home -->

<script>
import Type from './Type.vue';
import axios from 'axios';
export default {
    components: {
        Type
    },

    data() {
        return{
            types : []
        }
    },

    created() {
        axios.get('http://127.0.0.1:8000/api/types')
        .then((response) => {
            this.types = response.data;
        });
    }
}

</script>

<template>
    <div class="types-container">
        <div class="container d-flex gap-3">

            <!-- Bottone per tutte le categorie -->
            <button class="type" @click="$emit('changeType', 'all')">
                <div class="box">
                    <img src="https://img.icons8.com/plasticine/100/sandwich.png" alt="sandwich"/>
                    <!-- TODO -->
                </div>
                
                <p class="text">
                    Tutti
                </p>
            </button>

            <!-- Bottoni per singola categoria -->
            <Type v-for="type in types" :type="type" @click="$emit('changeType', type.name)"/>
        
        </div>

    </div>
</template>

<style>
.types-container{
    display: flex;
    padding: 8px 0;
    gap: 1rem;
    overflow-x: scroll;
}

.type {
    min-width: 90px;
    max-width: 90px;
    background: none;
    border: none;
    border-radius: 40px;
    padding: 7px;
    flex-grow: 1;
    background-color: var(--bg-secondary-color);
}

.type:hover {
    background-color: #d84f15;
}

.box {
    height: 60px;
    aspect-ratio: 1 / 1;
    margin: auto;
    background-color: white;
    border-radius: 50%;
    text-align: center;
    padding: 5px;
}

.text {
    font-size: 13px;
    text-align: center;
    margin-top: 6px;
    color: white;
}
</style>