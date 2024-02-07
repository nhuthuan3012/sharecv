import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const requiredMsg = "Trường thông tin này là bắt buộc";

const salarySchema = yup.object().shape({
  min_salary: yup.number().required(requiredMsg),
  max_salary: yup.number().required(requiredMsg),
  currency: yup.string().required(requiredMsg),
});
export const resolver = yupResolver(salarySchema);

export interface Salary
  extends yup.InferType<typeof salarySchema> {}
