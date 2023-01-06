import CysRequest from "../request";

export function getHotSuggestsDate() {
  return CysRequest.get({
    url: "home/hotSuggests",
  });
}

export function getCategoriesData() {
  return CysRequest.get({
    url: "home/categories",
  });
}

export function getHouseListData(currentPage) {
  return CysRequest.get({
    url: "home/houselist",
    params: {
      page: currentPage,
    },
  });
}
