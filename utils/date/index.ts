import dayjs from "dayjs";

export const dateFormat = (format = "DD/MM/YYYY HH:mm:ss", date = new Date()) =>
  dayjs(date).format(format);
