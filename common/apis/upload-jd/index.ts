import { IParseJdResponse } from "@/common/interfaces/upload-jd";
import { UploadJdSliceState } from "@/lib/redux/slices/uploadJdSlice/types";
import { Education } from "@/modules/posting-job/page/upload-jd/component/education-form/resolver";
import { LanguageCertificate } from "@/modules/posting-job/page/upload-jd/component/language-form/resolver";
import { OtherCertificate } from "@/modules/posting-job/page/upload-jd/component/other-certificate-form/resolver";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const parseJD = (data: File): Promise<AxiosResponse<IParseJdResponse>> => {
    const formData = new FormData();
    formData.append('uploaded_file', data)
    
    return axiosClient.post("/postjob/recruiter/upload-jd", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };

export const fillFormUploadJD = async (data: UploadJdSliceState): Promise<AxiosResponse<IParseJdResponse>> => {
  
  const formData = new FormData();
  const jdFile = await fetch(data.jdFile)
      .then((r) => r.blob())
      .then((blob): void => {
        const file = new File([blob], data.jdFilename);
        formData.append("jd_file", file)
      });
  
  formData.append("job_title", data.jobDescription.job_title)
  data.jobDescription.industries?.map((item: string) => {
    formData.append("industries[]", item)
  })
  formData.append("gender", data.jobDescription.gender)
  data.jobDescription.skills?.map((item: string) => {
    formData.append("skills[]",item)
  })
  formData.append("received_job_time", data.jobDescription.received_job_time)
  formData.append("working_time", `${data.jobDescription.start_days_of_week}-${data.jobDescription.end_days_of_week} ${data.jobDescription.start_work_hours}-${data.jobDescription.end_work_hours}`)
  formData.append("descriptions", data.jobDescription.descriptions)
  formData.append("requirements", data.jobDescription.requirements)
  formData.append("benefits", data.jobDescription.benefits)
  data.jobDescription.levels?.map((item: string) => {
    formData.append("levels[]", item)
  })
  data.jobDescription.roles?.map((item: string) => {
    formData.append("roles[]", item)
  })
  formData.append("yoe", `${data.jobDescription.yoe_from}-${data.jobDescription.yoe_to}`)
  formData.append("num_recruit", data.jobDescription.num_recruit.toString())
  data.education.map((item: Education) => {
    formData.append("education[]", JSON.stringify(item));
  });
  data.languageCerttificate.map((item: LanguageCertificate) => {
    formData.append("language_certificates[]", JSON.stringify(item))
  })
  data.otherCertificate.map((item: OtherCertificate) => {
    formData.append("other_certificates[]", JSON.stringify(item))
  })
  formData.append("address", data.workAddress.address)
  formData.append("city", data.workAddress.city)
  formData.append("country", data.workAddress.country)
  formData.append("min_salary", data.salary.min_salary.toString())
  formData.append("max_salary", data.salary.max_salary.toString())
  formData.append("currency", data.salary.currency)


  return axiosClient.post("/postjob/recruiter/fill-extracted-job", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

}