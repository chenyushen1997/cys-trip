import { defineStore } from "pinia";
import { getHotSuggestsDate } from "@/service";

const useHomeStore = defineStore("home", {
  state: () => ({
    hotSuggests: [],
  }),
  actions: {
    async fetchHotSuggestsData() {
      const res = await getHotSuggestsDate();
      this.hotSuggests = res.data;
    },
  },
});

export default useHomeStore;
