<template>
  <div class="home" ref="homeRef">
    <homeNavBar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <homeSearchBox />
    <homeCategories />
    <div class="search-bar" v-show="isShowSearchBar">
      <search-bar />
    </div>
    <homeContent />
  </div>
</template>

<script>
export default { name: "home" };
</script>
<script setup>
import { computed, ref, watch, onActivated } from "vue";
import homeNavBar from "./cpns/home-nav-bar.vue";
import homeSearchBox from "./cpns/home-search-box.vue";
import homeCategories from "./cpns/home-categories.vue";
import homeContent from "./cpns/home-content.vue";
import useHomeStore from "@/stores/modules/home";
import useScroll from "@/hooks/useScroll";

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
homeStore.fetchCategoriesData();
homeStore.fetchHouseListData();

const homeRef = ref();
const { isReachBottom, scrollTop } = useScroll(homeRef);
watch(isReachBottom, (newValue) => {
  if (newValue) {
    homeStore.fetchHouseListData().then(() => {
      isReachBottom.value = false;
    });
  }
});

const isShowSearchBar = computed(() => {
  return scrollTop.value > 360;
});

onActivated(() => {
  window.scrollTo({
    top: scrollTop.value,
  });
});
</script>

<style lang="less" scoped>
.home {
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 60px;
  .banner {
    img {
      width: 100%;
    }
  }

  .search-bar {
    position: fixed;
    z-index: 9;
    top: 0;
    left: 0;
    right: 0;
    height: 45px;
    padding: 16px 16px 10px;
    background-color: #fff;
  }
}
</style>
;
