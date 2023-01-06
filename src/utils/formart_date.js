import dayjs from "dayjs";
export function formartDate(nowDate, formatType = "MM月DD日") {
  return dayjs(nowDate).format(formatType);
}

export function diffDate(startDate, endDate) {
  return dayjs(endDate).diff(startDate, "day");
}
