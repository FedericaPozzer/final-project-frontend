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
        <Type />
        <Type />
        <Type />
        <Type />
        <Type />

    </div>
</template>

<style>
.types-container{
    display: flex;
    justify-content: space-between;
    padding: 8px;
    gap: 1rem;
    overflow-x: scroll;
    height: 15vh;
    background-color: orange;
}
</style>