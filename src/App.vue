<template>
  <div id="app">
    <RouterView v-slot="props">
      <KeepAlive include="home">
        <component :is="props.Component"></component>
      </KeepAlive>
    </RouterView>
    <TabBar v-show="!$route.meta.hideTabBar"></TabBar>
    <loading />
  </div>
</template>

<script setup>
import TabBar from "@/components/tab-bar/tab-bar.vue";
import Loading from "./components/loading/loading.vue";
</script>

<style scoped></style>
