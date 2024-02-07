import { WorkAddress } from "@/modules/posting-job/page/upload-jd/component/address-form/resolver";
import { Education } from "@/modules/posting-job/page/upload-jd/component/education-form/resolver";
import {
  Gender,
  JobDescription,
} from "@/modules/posting-job/page/upload-jd/component/jd-form/resolver";
import { LanguageCertificate } from "@/modules/posting-job/page/upload-jd/component/language-form/resolver";
import { OtherCertificate } from "@/modules/posting-job/page/upload-jd/component/other-certificate-form/resolver";
import { Salary } from "@/modules/posting-job/page/upload-jd/component/salary-form/resolver";

export interface UploadJdSliceState {
  jdFile: string;
  jdFilename: string;
  jobDescription: JobDescription;
  education: Education[];
  languageCerttificate: LanguageCertificate[];
  otherCertificate: OtherCertificate[];
  salary: Salary;
  workAddress: WorkAddress;
  status: "idle" | "loading" | "failed" | "fulfilled";
}

// Initial Value
const initialJobDescription: JobDescription = {
  job_title: "",
  industries: ["Education"],
  job_type: "parttime",
  skills: ["Analyze data"],
  gender: Gender.Male,
  received_job_time: "2024-01-01",
  start_days_of_week: "",
  end_days_of_week: "",
  start_work_hours: "2024-01-01 00:00",
  end_work_hours: "2024-01-01 00:00",
  descriptions: "",
  requirements: "",
  benefits: "",
  levels: ["Fresher"],
  roles: ["Develop and maintain web applications"],
  yoe_from: "",
  yoe_to: "",
  num_recruit: 0,
};

export const initialEducation: Education = {
  degree: "",
  major: "",
  gpa: "",
};

export const initialLanguageCertificate: LanguageCertificate = {
  certificate_language: "",
  certificate_name: "",
  certificate_point_level: "",
};

export const initialOtherCertificate: OtherCertificate = {
  certificate_name: "",
  certificate_point_level: "",
};

export const initialSalary: Salary = {
  min_salary: 0,
  max_salary: 0,
  currency: 'VND'
};

export const initialworkAddress: WorkAddress = {
  address: "",
  country: "",
  city: "",
};

export const initialState: UploadJdSliceState = {
  jdFile: '',
  jdFilename: '',
  jobDescription: initialJobDescription,
  education: [initialEducation],
  languageCerttificate: [initialLanguageCertificate],
  otherCertificate: [initialOtherCertificate],
  salary: initialSalary,
  workAddress: initialworkAddress,
  status: "idle",
};

// interface for payload
export interface changeWorkAddressJDPayload {
  key: keyof WorkAddress;
  value: string ;
}

export interface changeSalaryJDPayload {
  key: keyof Salary;
  value: string ;
}

export interface ChangeOtherCertificatePayload {
  index: number;
  key: keyof OtherCertificate;
  value: string;
}

export interface ChangeEducationJDPayload {
  index: number;
  key: keyof Education;
  value: string;
}

export interface changeLanguageCertificatePayload {
  index: number;
  key: keyof LanguageCertificate;
  value: string;
}

export interface ChangeJobDescription {
  key: keyof JobDescription;
  value: string | string[];
}
