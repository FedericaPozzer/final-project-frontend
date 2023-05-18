<script>
// import MyComponent from "./components/MyComponent.vue";

export default {
  data() {
    return {
      title: "Hello world"
    }
  }

  // components: {
  //   MyComponent,
  // },
};
</script>

<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
            <a class="navbar-brand" href="#">
                <img src="/logo.png" alt="logo" height="24">
            </a>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    
                    <li class="nav-item">
                    <a class="nav-link">Tipologie</a>
                    </li>
                </ul>

                <form class="d-flex me-auto" role="search">
                    <input class="form-control me-2" type="search" placeholder="Cerca un ristorante/piatto" aria-label="Search">
                    <button class="btn btn-outline-success" type="submit">Cerca</button>
                </form>

                <button class="btn btn-primary">Diventa Partner</button>
            </div>
        </div>
    </nav>
</template>

<style lang="scss" scoped></style>