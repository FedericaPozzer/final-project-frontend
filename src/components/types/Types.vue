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
            <Type v-for="type in types" :type="type"/>
        
        </div>

    </div>
</template>

<style>
.types-container{
    display: flex;
    padding: 8px 0;
    gap: 1rem;
    overflow-x: scroll;
    background-color: var(--bg-primary-color);
}
</style>