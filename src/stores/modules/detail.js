import { defineStore } from "pinia";
import { getDetailInfos } from "@/service";

const useDetailStore = defineStore("detail", {
  state: () => ({
    detailInfos: {},
  }),
  getters: {
    mainPart(state) {
      return state.detailInfos.mainPart;
    },
  },
  actions: {
    async fetchDetailInfos(houseId) {
      const res = await getDetailInfos(houseId);
      this.detailInfos = res.data;
    },
  },
});

export default useDetailStore;
