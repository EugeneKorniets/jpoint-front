<template>
  <div class="app-skew">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'app-skew'
  }
</script>

<style lang="scss">
  .app-skew {
    width: 81.875%;
    height: 100%;
    padding: 50px;
    transform-origin: left bottom;
    transform: skew(-20deg);
    background-color: white;
    box-sizing: border-box;
    z-index: 100;
    box-shadow: inset 0 0 20px 0 rgba(0, 0, 0, 0.25);
    overflow: hidden;
  }
</style>
