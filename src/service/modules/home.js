import CysRequest from "../request";

export function getHotSuggestsDate() {
  return CysRequest.get({
    url: 'home/hotSuggests'
  })
}