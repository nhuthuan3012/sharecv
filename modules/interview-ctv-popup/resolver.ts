import { yupResolver } from "@hookform/resolvers/yup";
import { number, object, string } from "yup";

export const resolver = yupResolver(
  object().shape({
    cv_id: number().required("CV không được để trống"),
    date: string().required("Ngày không được để trống"),
    location: string().required("Địa điểm không được để trống"),
    start_time: string().required("Thời gian không được để trống"),
    end_time: string().required("Thời gian không được để trống"),
    note: string(),
  })
);
