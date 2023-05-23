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
            types : [],
            active: 0
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
    <div class="types-container ">
        <div class="container d-flex gap-3 justify-content-md-center">

            <!-- Bottone per tutte le categorie -->
            <button class="type" @click="$emit('changeType', 'all'), active = 0" :class="{'active' : active == 0}">
                
                <p class="text">
                    Tutti
                </p>
                <div class="box">
                    <img src="https://img.icons8.com/plasticine/100/sandwich.png" alt="sandwich"/>
                </div>
            </button>

            <!-- Bottoni per singola categoria -->
            <Type v-for="type, i in types" :type="type" @click="$emit('changeType', type.name), active = i + 1" :class="{'active' : active == i + 1}"/>
        
        </div>

    </div>
</template>

<style lang="scss">
.types-container{
    display: flex;
    padding: 8px 0;
    gap: 1rem;
    overflow-x: scroll;
}

.type {
    display: flex;
    align-items: center;
    margin-left: 1rem;
    background: none;
    border: none;
    border-radius: 10px 10px 10px 10px;
    flex-grow: 1;
    background-color: var(--bg-secondary-color);
    box-shadow: 1px 2px 10px var(--bg-secondary-color);
    transition: all .1s linear;
    padding: 10px;
    &.active,&:hover{
        box-shadow: 5px 2px 10px var(--bg-secondary-color);
        background-color: #d84f15;
        border-radius: 20px 20px 20px 20px;
    }
    .text {
        margin: 0;
        margin-right: 10px;
        padding: 0;
        font-size: 1.2rem;
        text-align: center;
        color: white;
        text-transform: uppercase;
        font-weight: 600;
        z-index: 1;
    }
}

.type:hover {
    background-color: #d84f15;
}

.box {
    height: 30px;
    width: 10px;
    margin: auto;
    border-radius: 50%;
    text-align: center;
    img{
        height: 30px;
        width: auto;
        transform: scale(2) translate(10%, 0);
    }
}
</style>