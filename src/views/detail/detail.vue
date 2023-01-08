<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swipe :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule" />
      <detail-facility
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">诗忆旅途，永无止境</div>
    </div>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import router from "@/router";
import useDetailStore from "@/stores/modules/detail";
import useScroll from "@/hooks/useScroll";
import DetailSwipe from "./cnps/detail-swipe.vue";
import DetailInfos from "./cnps/detail-infos.vue";
import DetailFacility from "./cnps/detail-facility.vue";
import DetailLandlord from "./cnps/detail-landlord.vue";
import DetailComment from "./cnps/detail-comment.vue";
import DetailNotice from "./cnps/detail-notice.vue";
import DetailMap from "./cnps/detail-map.vue";
import DetailIntro from "./cnps/detail-intro.vue";

const onClickLeft = () => {
  router.back();
};

const DetailStore = useDetailStore();
const route = useRoute();
DetailStore.fetchDetailInfos(route.params.id);
const { mainPart } = storeToRefs(DetailStore);

const { scrollTop } = useScroll();
const isShowTabBar = computed(() => {
  return scrollTop.value > 300;
});
</script>

<style lang="less" scoped>
.detail {
  .tabs {
    position: fixed;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 120px;

    img {
      width: 123px;
    }

    .text {
      margin-top: 12px;
      font-size: 12px;
      color: #7688a7;
    }
  }
}
</style>
