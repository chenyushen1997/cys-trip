<template>
  <div class="tab-bar">
    <van-tabbar v-model="currentIndex" active-color="#ff9854" route fixed>
      <template v-for="(item, index) in tabbarData" :key="index">
        <van-tabbar-item :to="item.path">
          <span class="text">{{ item.text }}</span>
          <template #icon>
            <img v-if="index !== currentIndex" :src="getImgUrl(item.image)" />
            <img v-else :src="getImgUrl(item.imageActive)" alt="" />
          </template>
        </van-tabbar-item>
      </template>
    </van-tabbar>
  </div>
</template>

<script setup>
import { ref, watch } from "vue";

import tabbarData from "@/assets/data/tabbar";
import getImgUrl from "@/utils/load_url";
import { useRoute } from "vue-router";

const currentIndex = ref(0);
const route = useRoute();
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path);
  currentIndex.value = index;
});
</script>

<style lang="less" scoped>
.tab-bar {
  img {
    height: 26px;
  }
}
</style>
