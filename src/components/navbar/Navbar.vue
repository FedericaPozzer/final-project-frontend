<!-- Navbar -->
<script>
import { useEndpointStore } from "../../stores/endpoint.js"
import Lens from './Lens.vue'

export default {
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
    <header class="header-bar p-2">

        <div class="row justify-content-around align-items-center w-100">
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
header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 10;
    height: var(--navbar-height);
    background-color: var(--bg-primary-color);
    display: flex;
    align-items: center;
}

.header-bar {
    button{
        background-color: var(--bg-primary-color);
        white-space: nowrap;
    }
    #btn-color:hover {
        background-color: var(--bg-secondary-color);
        border-color: var(--bg-secondary-color);
    }
}
</style>
