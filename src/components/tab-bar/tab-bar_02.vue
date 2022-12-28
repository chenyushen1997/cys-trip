<template>
  <div class="tab-bar">
    <template v-for="(item, index) in tabbarData">
      <div
        class="tab-bar-item"
        :class="{ active: index === currentIndex }"
        @click="itemClick(item, index)"
      >
        <img
          v-if="index !== currentIndex"
          :src="getImgUrl(item.image)"
        />
        <img v-else :src="getImgUrl(item.imageActive)" alt="" />
        <span class="text">{{ item.text }}</span>
      </div>
    </template>
  </div>
</template>

<script setup>
import { ref } from "vue";
import router from "@/router";
import tabbarData from "@/assets/data/tabbar";
import getImgUrl from "@/utils/load_url";

const currentIndex = ref(0);
const itemClick = (item, index) => {
  currentIndex.value = index;
  router.push(item.path);
};
</script>

<style lang="less" scoped>
.tab-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  border-top: 1px solid #f3f3f3;
  display: flex;
  .tab-bar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }
    img {
      height: 36px;
    }
    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
