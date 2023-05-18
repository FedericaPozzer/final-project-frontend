<script>
import Type from './Type.vue'
export default {
    components: {
        Type
    }
}

</script>

<template>
    <div class="categories-container">
        <Type />
        <Type />
        <Type />
        <Type />
        <Type />

    </div>
</template>

<style>
.categories-container{
    display: flex;
    gap: 1rem;
    overflow-x: scroll;
    height: 15vh;
    background-color: yellow;
}
</style>