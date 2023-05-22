<script>

export default {
  name:'AppLoader',
};
</script>

<template>
  <div class="layover">
    <h1>Pazientiamo</h1>
  </div>
</template>

<style lang="scss" scoped>
.layover{
  position:fixed;
  z-index: 1;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(2, 0, 18, 0.7);
  backdrop-filter: blur(10px);

}

</style>