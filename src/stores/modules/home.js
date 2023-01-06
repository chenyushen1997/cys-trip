import { defineStore } from "pinia";
import {
  getHotSuggestsDate,
  getCategoriesData,
  getHouseListData,
} from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
    categories: [],
    houseList: [],
    currentPage: 1,
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsDate();
      this.hotSuggests = res.data;
    },
    async fetchCategoriesData() {
      const res = await getCategoriesData();
      this.categories = res.data;
    },
    async fetchHouseListData() {
      const res = await getHouseListData(this.currentPage++);
      this.houseList.push(...res.data);
    },
  },
});

export default useHomeStore;
