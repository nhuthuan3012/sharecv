import { IResume } from "@/modules/cv-info-ntd/resume.interface";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const candidateInfoApi = {
  getById(id: number, role:string|undefined): Promise<AxiosResponse<IResume>> {
    if (role==="admin"){
      return axiosClient.post(`/postjob/admin/get-detailed-candidate`, {
        cv_id: id,
      });
    }
    else if(role==="collaborator"){
      return axiosClient.post(`/postjob/collaborator/get-detailed-candidate`, {
        cv_id: id,
      });
    }
    else if(role==="recruiter"){
      return axiosClient.post(`/postjob/recruiter/get-detail-candidate`, {
        cv_id: id
      });
    }
    return axiosClient.post(`/postjob/${role}/get-detailed-candidate`, {
      cv_id: id,
    });
  },
};
