import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from 'yup';

const requiredMsg = "Trường thông tin này là bắt buộc";

export enum Gender {
    Male = 'male',
    Female = 'female',
    Other = 'other',
  }

const jobDescriptionSchema = yup.object().shape({
    job_title: yup.string().required(requiredMsg),  
    industries: yup.string().required(requiredMsg),
    job_type: yup.string().required(requiredMsg),
    skills: yup.array(yup.string().required(requiredMsg)),
    gender: yup.string().required(requiredMsg).oneOf(Object.values(Gender)),
    received_job_time: yup.string().required(requiredMsg),
    start_days_of_week: yup.string().required(requiredMsg),
    end_days_of_week: yup.string().required(requiredMsg),
    start_work_hours: yup.string().required(requiredMsg),
    end_work_hours: yup.string().required(requiredMsg),
    descriptions: yup.string().required(requiredMsg),
    requirements: yup.string().required(requiredMsg),
    benefits: yup.string().required(requiredMsg),
    levels: yup.array(yup.string().required(requiredMsg)),
    roles: yup.array(yup.string().required(requiredMsg)),
    yoe_from: yup.string().required(requiredMsg),
    yoe_to: yup.string().required(requiredMsg),
    num_recruit: yup.number().required(requiredMsg),
  })
export const resolver = yupResolver(
    jobDescriptionSchema
);

export interface JobDescription extends yup.InferType<typeof jobDescriptionSchema> {}
