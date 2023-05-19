<!-- Navbar -->
<script>
import { useEndpointStore } from "../../stores/endpoint.js"
import Lens from './Lens.vue'

export default{
    data() {
        return {
            endpoint: useEndpointStore(),
        }
    },
    components: {
        Lens
    }
}
</script>


<template>
    <!-- Header -->
    <header class="d-flex align-items-center justify-content-between">

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
                <div class="fs-4">
                    <Lens />
                </div>
                <!-- Redirect al Backend -->
                <div class="ms-4">
                    <button class="btn btn-outline-dark" id="btn-color" rel="tooltip" title="Area Ristoratori">
                        <a :href="endpoint.endpoint" class="text-decoration-none">
                            Area Ristoratori
                        </a>
                    </button>
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

header{
    background: var(--bg-primary-color);
    position: fixed;
    z-index: 10;
    height: var(--navbar-height);
    width: 100%;
    .logo{
        width: 20%;
        margin: 20px;
    }
}

</style>
