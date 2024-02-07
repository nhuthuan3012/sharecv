import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const requiredMsg = "Trường thông tin này là bắt buộc";

const workAddressSchema = yup.object().shape({
    address: yup.string().required(requiredMsg),  
    country: yup.string().required(requiredMsg),
    city: yup.string().required(requiredMsg)
  })
export const resolver = yupResolver(
    workAddressSchema
);

export interface WorkAddress extends yup.InferType<typeof workAddressSchema> {}
