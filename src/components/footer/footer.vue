<!-- Footer -->
<script>
import { useEndpointStore } from "../../stores/endpoint.js"

export default {
    data() {
        return {
            endpoint: useEndpointStore(),
        }
    },
    components: {
    }
}
</script>


<template>
    <!-- Footer -->

    <footer class="header-bar p-2">
        <div class="d-flex justify-content-between align-items-center w-100 mx-2">
            <!-- SX -->
            <div class="logo">
                <!-- Logo con redirect homepage -->
                <a href="/">
                    <img src="../../assets/icon.png" alt="logo" class="img-fluid">
                </a>
            </div>

            <!-- DX -->
                <!-- Powered By -->
                <div class="names d-flex flex-column">
                    <a href="https://github.com/ThomasAnselmetto">© Thomas Anselmetto</a>
                    <a href="https://github.com/GretaFormica">© Greta Formica</a>
                    <a href="https://github.com/AlessandroMontenero">© Alessandro Montenero</a>
                    <a href="https://github.com/FedericaPozzer">© Federica Pozzer</a>
                </div>
        </div>
    </footer>
    
</template>



<style lang="scss" scoped>
footer {
    z-index: 10;
    height: var(--footer-height);
    background-color: var(--bg-primary-color);
    display: flex;
    align-items: center;
    font-size: smaller;
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

img{
    width: 60px;
}

.names a{
    font-size: 10px;
    margin: 0;
    padding: 0;
    cursor: pointer;
}
</style>
