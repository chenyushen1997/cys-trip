<template>
  <div class="notice">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <template v-for="(item, index) in orderRules" :key="index">
        <div class="item">
          <span class="title">{{ item.title }}</span>
          <span class="intro">{{ item.introduction }}</span>
          <span class="tip" v-if="item.tip">查看说明</span>
        </div>
      </template>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-secion.vue";

defineProps({
  orderRules: {
    type: Array,
    default: () => [],
  },
});
</script>

<style lang="less" scoped>
.notice {
  .item {
    display: flex;
    margin: 10px 0 20px;
    font-size: 12px;
    .title {
      width: 64px;
      color: #666;
    }
    .intro {
      flex: 1;
      color: #333;
    }
  }
}
</style>
