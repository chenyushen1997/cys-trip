<template>
  <div class="city-group">
    <div>
      <van-index-bar
        :sticky="false"
        :index-list="indexList"
        highlight-color="#ff9854"
      >
        <van-index-anchor :index="'#'">热门</van-index-anchor>
        <div class="list">
          <template
            v-for="(item, index) in currentGroup.hotCities"
            :key="index"
          >
            <div class="city" @click="cityClick(item)">{{ item.cityName }}</div>
          </template>
        </div>

        <template v-for="(item, index) in currentGroup.cities" :key="index">
          <van-index-anchor :index="item.group" />
          <template v-for="(iten, index) in item.cities" :key="index">
            <van-cell :title="iten.cityName" @click="cityClick(iten)" />
          </template>
        </template>
      </van-index-bar>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import useCityStore from "@/stores/modules/city";
import router from "@/router";

const props = defineProps({
  currentGroup: {
    type: Object,
    default: () => ({}),
  },
});

const indexList = computed(() => {
  const list = props.currentGroup.cities.map((item) => item.group);
  list.unshift("#");
  return list;
});

const cityStore = useCityStore();
const cityClick = (value) => {
  cityStore.currentCity = value;
  router.back();
};
</script>

<style lang="less" scoped>
.city-group {
  height: calc(100vh - 98px);
  overflow-y: auto;
  .list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 10px 25px 10px 10px;

    .city {
      width: 70px;
      height: 28px;
      border-radius: 14px;
      font-size: 12;
      color: #000;
      text-align: center;
      line-height: 28px;
      background-color: #fff4ec;
      margin: 6px 0;
    }
  }
}
</style>
