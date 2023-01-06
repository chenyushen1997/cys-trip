<template>
  <div class="search">
    <h2>{{ $route.query.startDate }}</h2>
    <h2>{{ $route.query.endDate }}</h2>
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.search {
  color: red;
}
</style>
