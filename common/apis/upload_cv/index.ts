import { axiosClient } from "@/utils/axios";
import {
    IUploadCVResponse,
} from "@/common/interfaces";


export const uploadCV = (data: File): Promise<IUploadCVResponse> => {
  const formData = new FormData();
  formData.append('job_id', "1")
  formData.append('cv_pdf', data)
  
  return axiosClient.post("/postjob/collaborator/add-candidate", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};

export const fillResume = (data: any): Promise<IUploadCVResponse> => {

  // Add your code here
  const formData = new FormData();
  formData.append('job_id', '1')
  formData.append('avatar', data.avatar)
  formData.append('cv_file', data.cv_file)
  formData.append('name',data.name)
  formData.append('industry',data.industry)
  formData.append('level',data.level)
  formData.append('current_job',data.current_job)
  formData.append('phone',data.phone)
  formData.append('email',data.email)
  formData.append('address',data.address)
  formData.append('city',data.city)
  formData.append('country', data.city.country)
  formData.append('objectives',data.objectives)
  formData.append('birthday',data.birthday)
  formData.append('gender',data.gender)
  formData.append('descriptions',"test")
  formData.append('identification_code',data.identification_code)
  formData.append('linkedin',data.linkedin)
  formData.append('website',data.website)
  formData.append('facebook',data.facebook)
  formData.append('instagram',data.instagram)
  formData.append('education',JSON.stringify(data.education))
  formData.append('work_experiences',JSON.stringify(data.work_experiences))
  formData.append('skills',JSON.stringify(data.skills))
  formData.append('awards',JSON.stringify(data.awards))
  formData.append('language_certificates',JSON.stringify(data.language_certificates))
  formData.append('other_certificates',data.other_certificates)


  return axiosClient.post("/postjob/collaborator/fill-extracted-resume", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
}
