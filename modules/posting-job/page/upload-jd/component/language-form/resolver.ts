import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const requiredMsg = "Trường thông tin này là bắt buộc";

const languageCertificationSchema = yup.object().shape({
  certificate_language: yup.string().required(requiredMsg),
  certificate_name: yup.string().required(requiredMsg),
  certificate_point_level: yup.string().required(requiredMsg),
});
export const resolver = yupResolver(languageCertificationSchema);

export interface LanguageCertificate
  extends yup.InferType<typeof languageCertificationSchema> {}
