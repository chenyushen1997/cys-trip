<template>
  <div class="home">
    <navBarVue></navBarVue>
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <div class="location">
      <div class="city">马来西亚</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
  </div>
</template>

<script setup>
import navBarVue from "./cpns/nav-bar.vue";
</script>

<style lang="less" scoped>
.home {
  .banner {
    img {
      width: 100%;
    }
  }
  .location {
    height: 44px;
    padding: 0 20px;
    display: flex;
    align-items: center;
    .city {
      flex: 1;
    }
    .position {
      display: flex;
      align-items: center;
      width: 80px;
      .text {
        font-size: 14px;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }
}
</style>
