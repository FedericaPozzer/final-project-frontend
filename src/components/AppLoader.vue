<script>

export default {
  name:'AppLoader',
};
</script>

<template>
  <div class="layover">
    <img class="" src="../../public/logo-loader.png" alt="logo-loader">
  </div>
</template>

<style lang="scss" scoped>
.layover{
  position:fixed;
  z-index: 2;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 192, 50, 0.7);
  backdrop-filter: blur(10px);
  img{
    width: 25rem;
  }
}

</style>