import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const requiredMsg = "Trường thông tin này là bắt buộc";

const otherCertificateSchema = yup.object().shape({
    certificate_name: yup.string().required(requiredMsg),
    certificate_point_level: yup.string().required(requiredMsg)
  })
export const resolver = yupResolver(
    otherCertificateSchema
);

export interface OtherCertificate extends yup.InferType<typeof otherCertificateSchema> {}
