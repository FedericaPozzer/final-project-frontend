<!-- Navbar -->

<script>
import Lens from './Lens.vue'
export default{
    components: {
        Lens
    }
}
</script>
<template>
    <!-- Header -->
    <header class="d-flex align-items-center">

        <!-- SX -->
        <div class="logo">
            <!-- Logo con redirect homepage -->
            <div>
                <a href="/">
                    Logo
                </a>
            </div>
        </div>
        
        <!-- DX -->
        <div class="d-flex justify-content-end w-100 gap-2">
            <!-- Icona ricerca (componente Lens) che al click fa vedere Search -->
            <div>
                <Lens />
            </div>
            <!-- Redirect al Backend -->
            <div>
                Link
            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>
header{
    position: fixed;
    z-index: 10;
    height: var(--navbar-height);
    width: 100%;
    .logo{
        width: 20%;
        height: 80%;
        background-color: red;
    }
}

</style>
