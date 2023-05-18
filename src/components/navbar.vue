<!-- Navbar -->

<script>
</script>
<template>
    <header class="d-flex">

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
            <!-- Searchbar / Lens -->
            <div>
                Lens
            </div>
            <!-- Redirect to Backend -->
            <div>
                Link
            </div>
        </div>

    </header>
</template>
<style lang="scss" scoped>
header{
    height: 10vh;
    width: 100%;
    background-color: green;
    .logo{
        width: 30%;
        height: 100%;
        background-color: red;
    }
}

</style>
