<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>

    <div
      class="section date-range bottom-gray-line"
      @click="showCalendar = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
        <div class="stay">共{{ stayCount }}晚</div>
      </div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>

    <van-calendar
      v-model:show="showCalendar"
      color="#ff9854"
      type="range"
      :round="false"
      @confirm="onConfirm"
    />

    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>

    <div class="section hot-suggests">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color,
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<script setup>
import router from "@/router";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import useCityStore from "@/stores/modules/city";
import useHomeStore from "@/stores/modules/home";
import { formartDate, diffDate } from "@/utils/formart_date";

const cityClick = () => {
  router.push("/city");
};

const cityStore = useCityStore();
const { currentCity } = storeToRefs(cityStore);

const nowDate = new Date();
const newDate = new Date();
newDate.setDate(new Date().getDate() + 1);

const startDate = ref(formartDate(nowDate));
const endDate = ref(formartDate(newDate));
const stayCount = ref(diffDate(nowDate, newDate));

const showCalendar = ref(false);
const onConfirm = (value) => {
  startDate.value = formartDate(value[0]);
  endDate.value = formartDate(value[1]);
  stayCount.value = diffDate(value[0], value[1]);
  showCalendar.value = false;
};

const homeStore = useHomeStore();
homeStore.fetchHotSuggestsData();
const { hotSuggests } = storeToRefs(homeStore);
</script>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
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
        color: #666;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 5px;
      }
    }
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;

    .start {
      flex: 1;
      display: flex;
      height: 44px;
      align-items: center;
    }

    .end {
      min-width: 30%;
      padding-left: 20px;
    }

    .date {
      display: flex;
      flex-direction: column;

      .tip {
        font-size: 12px;
        color: #999;
      }

      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
}

.date-range {
  height: 44px;
  .stay {
    flex: 1;
    text-align: center;
    font-size: 12px;
    color: #666;
  }
}

.price-counter {
  .start {
    border-right: 1px solid var(--line-color);
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}

.hot-suggests {
  margin: 10px 0;
  height: auto;

  .item {
    padding: 4px 8px;
    margin: 4px;
    border-radius: 14px;
    font-size: 12px;
    line-height: 1;
  }
}
</style>
