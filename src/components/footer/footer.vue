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
        <div class="row justify-content-around align-items-center w-100">
            <!-- SX -->
            <div class="col-5 col-md-4 col-lg-3 logo">
                <!-- Logo con redirect homepage -->
                <div class="d-flex align-items-center">
                    <a href="/">
                        <img src="../../assets/icon.png" alt="logo" class="img-fluid">
                    </a>

                    <p class="m-4">Deliveboo S.r.l. - P.IVA 07392740960</p>
                </div>
            </div>

            <!-- DX -->
            <div class="col-4 col-md-8 d-flex justify-content-end align-items-center">                
                <!-- Powered By -->
                <div class="ms-4">
                    <p class="text">
                        Powered by: Team 7
                    </p>
                    
                </div>
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

.text{
    margin-right: 3vw;
}
</style>
