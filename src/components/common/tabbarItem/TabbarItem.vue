<template>
  <div id="tabbar-item">
    <div><slot name="icon"></slot></div>
    <div><slot name="icon-active"></slot></div>
    <div><slot name="text"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "TabbarItem"
  }
</script>

<style scoped>
 #tabbar-item {
   color:red;
   text-align: center;
   flex:1;
   font-family: sans-serif;
   font-size: 14px;
 }

  #tabbar-item img {
    width: 24px;
  }
</style>