import { defineStore } from "pinia";
import { getCityData } from "@/service";

const useCityStore = defineStore("city", {
  state: () => ({
    allGroups: {},
    currentCity: { cityName: "广州" },
  }),
  actions: {
    async fetchCityData() {
      const res = await getCityData();
      this.allGroups = res.data;
    },
  },
});

export default useCityStore;
