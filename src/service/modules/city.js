import CysRequest from "../request";

export function getCityData() {
  return CysRequest.get({
    url: "/city/all",
  });
}
