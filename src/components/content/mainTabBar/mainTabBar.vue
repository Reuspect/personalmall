<template>
  <div id="mainTabbar">
    <Tabbar>
      <tabbar-item>
        <div slot="icon"><img src="~assets/img/tabbar/home.svg" alt=""></div>
        <div slot="icon"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
        <div slot="text">广场</div>
      </tabbar-item>
      <tabbar-item>
        <div slot="icon"><img src="~assets/img/tabbar/shopcart.svg" alt=""></div>
        <div slot="icon"><img src="~assets/img/tabbar/shopcart_active.svg" alt=""></div>
        <div slot="text">分类</div>
      </tabbar-item>
      <tabbar-item>
        <div slot="icon"><img src="~assets/img/tabbar/home.svg" alt=""></div>
        <div slot="icon"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
        <div slot="text">购物车</div>
      </tabbar-item>
      <tabbar-item>
        <div slot="icon"><img src="~assets/img/tabbar/home.svg" alt=""></div>
        <div slot="icon"><img src="~assets/img/tabbar/home_active.svg" alt=""></div>
        <div slot="text">俺的</div>
      </tabbar-item>
    </Tabbar>
  </div>
</template>

<script>
  import Tabbar from "components/common/tabbar/Tabbar";
  import TabbarItem from "components/common/tabbarItem/TabbarItem";
  export default {
    name: "mainTabBar",
    components: {
      Tabbar,
      TabbarItem,
    }
  }
</script>

<style scoped>

</style>