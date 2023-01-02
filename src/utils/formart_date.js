import dayjs from "dayjs";
export function formartDate(nowDate) {
  return dayjs(nowDate).format("MM月DD日");
}

export function diffDate(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}
