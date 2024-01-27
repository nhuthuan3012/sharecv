import { ILanguageCertificates } from "@/common/interfaces";

export interface IJobDetail {
  company_logo: string;
  company_name: string;
  company_cover_image: string;
  status: string;
  job_title: string;
  industry: string;
  gender: string;
  job_type: string | null;
  skills: string[] | null;
  received_job_time: string | null;
  working_time: string | null;
  descriptions: string[] | null;
  requirements: string[] | null;
  benefits: string[] | null;
  levels: string | null;
  roles: string | null;
  yoe: string | null;
  num_recruit: string | null;
  education: string[] | null;
  language_certificate: ILanguageCertificates[] | null;
  other_certificate:
    | [
        {
          certificate_name: string;
          certificate_level: string;
        }
      ]
    | null;
  min_salary: number;
  max_salary: number;
  address: string;
  city: string;
  country: string;
  admin_decline_reason: string;
  [key: string]: any;
}
