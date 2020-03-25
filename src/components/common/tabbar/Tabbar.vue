<template>
  <div id="tab-bar">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: "Tabbar"
  }
</script>

<style scoped>
 #tab-bar {
   display: flex;
   position: fixed;
   background-color: #f0f0f0;
   height: 46px;
   bottom: 0;
   left: 0;
   right: 0;
   box-shadow: 0 -3px 1px rgba(255,0,0,0.5);
 }
</style>