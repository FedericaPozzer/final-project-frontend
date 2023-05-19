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
    <header class="header-bar p-2">

        <div class="row justify-content-between align-items-center">
            <!-- SX -->
            <div class="col-5 col-md-4 col-lg-2 logo">
                <!-- Logo con redirect homepage -->
                <div>
                    <a href="/">
                        <img src="../../assets/logo.png" alt="logo" class="img-fluid">
                    </a>
                </div>
            </div>
        
            <!-- DX -->
            <div class="col-4 col-md-8 d-flex justify-content-end align-items-center">
                <!-- Icona ricerca (componente Lens) che al click fa vedere Search -->
                <div>
                    <Lens />
                </div>
                <!-- Redirect al Backend -->
                <div class="ms-3">
                    <button class="btn btn-outline-dark" rel="tooltip" title="Area Ristoratori">Area Ristoratori</button>
                </div>
            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>


.header{
    position: fixed;
    z-index: 10;
    height: var(--navbar-height);
}

.header-bar {
    // debug
    // background-color: pink;

    background-color: #ffa500;
}

</style>
