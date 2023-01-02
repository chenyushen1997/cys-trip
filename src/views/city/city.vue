<template>
  <div class="city">
    <div class="top">
      <van-search
        v-model="searchValue"
        shape="round"
        placeholder="城市/区域/位置"
        show-action
        @cancel="onCancel"
      />

      <van-tabs v-model:active="tabActive" color="#ff9854" line-height="3">
        <template v-for="(value, key, index) in allGroups" :key="index">
          <van-tab :title="value.title" :name="key"></van-tab>
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key, index) in allGroups" :key="index">
        <cityGroupVue
          v-show="tabActive === key"
          :current-group="value"
        ></cityGroupVue>
      </template>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import { storeToRefs } from "pinia";
import cityGroupVue from "./cpns/city-group.vue";

const searchValue = ref();
const onCancel = () => {
  router.back();
};

const tabActive = ref();

const cityStore = useCityStore();
cityStore.fetchCityData();
const { allGroups } = storeToRefs(cityStore);
</script>

<style lang="less" scoped>
.city {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
  overflow-y: auto;

  .content {
    height: calc(100vh - 98px);
    overflow-y: auto;
  }
}
</style>
