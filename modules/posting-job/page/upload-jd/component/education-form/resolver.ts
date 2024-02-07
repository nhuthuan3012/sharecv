import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const requiredMsg = "Trường thông tin này là bắt buộc";

const educationSchema = yup.object().shape({
    degree: yup.string().required(requiredMsg),
    major: yup.string().required(requiredMsg),
    gpa: yup.string().required(requiredMsg),
  })
export const resolver = yupResolver(
    educationSchema
);

export interface Education extends yup.InferType<typeof educationSchema> {}
