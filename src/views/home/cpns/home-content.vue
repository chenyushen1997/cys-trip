<template>
  <div class="content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="(item, index) in houseList" :key="item.data.houseId">
        <houseItemT3
          v-if="item.discoveryContentType === 3"
          :item-data="item.data"
        ></houseItemT3>
        <houseItemT9 v-else :item-data="item.data"></houseItemT9>
      </template>
    </div>
  </div>
</template>

<script setup>
import houseItemT3 from "@/components/house-item-t3/house-item-t3.vue";
import houseItemT9 from "@/components/house-item-t9/house-item-t9.vue";
import useHomeStore from "@/stores/modules/home";
import { storeToRefs } from "pinia";

const homeStore = useHomeStore();
const { houseList } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.content {
  padding: 10px 8px;

  .title {
    font-size: 22px;
    padding: 10px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
  }
}
</style>
