import CysRequest from "../request";

export function getDetailInfos(houseId) {
  return CysRequest.get({
    url: "/detail/infos",
    params: {
      houseId,
    },
  });
}
