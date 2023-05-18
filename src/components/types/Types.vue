<!-- Riga dei tipi nella schermata Home -->

<script>
import Type from './Type.vue'
export default {
    components: {
        Type
    }
}

</script>

<template>
    <div class="types-container">
        <div class="container d-flex gap-3">
            <Type />
            <Type />
            <Type />
            <Type />
            <Type />
        </div>

    </div>
</template>

<style>
.types-container{
    display: flex;
    padding: 8px 0;
    gap: 1rem;
    overflow-x: scroll;
    height: 15vh;
    background-color: var(--bg-primary-color);
}
</style>