<template>
  <div class="home">
    <navBarVue></navBarVue>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox></homeSearchBox>
  </div>
</template>

<script setup>
import navBarVue from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";



</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
}
</style>
