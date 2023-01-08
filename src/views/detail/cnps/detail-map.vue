<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div id="container"></div>
    </detail-section>
  </div>
</template>

<script setup>
import DetailSection from "@/components/detail-section/detail-secion.vue";
import AMapLoader from "@amap/amap-jsapi-loader";
import { shallowRef } from "@vue/reactivity";
import { onMounted } from "vue";

const props = defineProps({
  position: {
    type: Object,
    default: () => ({}),
  },
});

const map = shallowRef(null);

const initMap = () => {
  AMapLoader.load({
    key: "632ddfee80ae02af74fe4703a005c04a", // 申请好的Web端开发者Key，首次调用 load 时必填
    version: "", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: ["AMap.Marker"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map("container", {
        //设置地图容器id
        viewMode: "3D", //是否为3D地图模式
        zoom: 13, //初始化地图级别
        center: [props.position.longitude, props.position.latitude], //初始化地图中心点位置
      });
      const marker = new AMap.Marker({
        position: new AMap.LngLat(
          props.position.longitude,
          props.position.latitude
        ), // 经纬度对象，也可以是经纬度构成的一维数组[116.39, 39.9]
      });
      map.value.add(marker);
    })
    .catch((e) => {
      console.log(e);
    });
};

onMounted(() => {
  initMap();
});

// 将创建的点标记添加到已有的地图实例：
</script>

<style lang="less" scoped>
.map {
  #container {
    height: 250px;
  }
}
</style>
