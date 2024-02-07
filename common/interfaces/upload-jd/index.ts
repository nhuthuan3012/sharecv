import { WorkAddress } from "@/modules/posting-job/page/upload-jd/component/address-form/resolver";
import { Education } from "@/modules/posting-job/page/upload-jd/component/education-form/resolver";
import { JobDescription } from "@/modules/posting-job/page/upload-jd/component/jd-form/resolver";
import { LanguageCertificate } from "@/modules/posting-job/page/upload-jd/component/language-form/resolver";
import { OtherCertificate } from "@/modules/posting-job/page/upload-jd/component/other-certificate-form/resolver";
import { Salary } from "@/modules/posting-job/page/upload-jd/component/salary-form/resolver";

export interface IParseJdResponse {
  message: string;
  data: {
    job_title: string[];
    industries: string[];
    orientation: string[];
    gender: string[];
    job_type: string[];
    received_job_time: string[];
    working_time: string[];
    skills: string[];
    descriptions: string[];
    requirements: string[];
    benefits: string[];
    levels: string[];
    roles: string[];
    number_year_experience: string[];
    number_candidate: string[];
    education: {
      degree: string[];
      major: string[];
      gpa: string[];
    }[];
    certificates: {
      language_certificates: {
        certificate_language: string[];
        certificate_name: string[];
        certificate_point_level: string[];
      }[];
      other_certificates: {
        certificate_name: string[];
        certificate_point_level: string[];
      }[];
    };
    salary: {
      min_salary: string[];
      max_salary: string[];
    };
    location: {
      country: string[];
      "city/province": string[];
      address: string[];
    };
  };
}
