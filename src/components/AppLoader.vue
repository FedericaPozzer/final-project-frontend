<script>

export default {
  name:'AppLoader',
};
</script>

<!-- creazione di un layover che viene mostrato fino alla fine delcaricamento -->
<template>
  <div class="layover">
    <div class="container-animation">
      <img class="" src="../../logo-loader.png" alt="logo-loader">
    </div>
  </div>
</template>


<style lang="scss" scoped>
.container-animation{
  // background-color: var(--bg-secondary-color);
  // backdrop-filter: blur(70px);
  // width: 800px;
}
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
    position: relative;
    animation-name: example;
    animation-duration: 4s;
    animation-iteration-count: infinite;
    width: 25rem;
  }
  @keyframes example {
  0%   {left:-200px; top:0px;}
  50%  {left:200px; top:0px;}
  100%  {left:-200px; top:0px;}
  
}
}

</style>