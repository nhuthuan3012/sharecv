import { axiosClient } from "@/utils/axios";
import {
  IAuthResponse,
  ICompanyInfo,
  IRevaluate,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";
import qs from "qs";
import { IUserLogin, IUserRegister } from "@/modules/auth/types";

export const addCompany = (data: ICompanyInfo): Promise<IAuthResponse> => {
  console.log("data api", data);
  const formData = new FormData();
  for (const key in data) {
    if (data.hasOwnProperty(key)) {
      if (key === "logo" && data.logo) {
        formData.append(key, data.logo);
      }
      else if (key === "cover_image" && data.cover_image) {
        formData.append(key, data.cover_image);
      }
      else if (key === "company_images" && data.company_images) {
        const size=data.company_images.length
        for(let i =0 ;i<size;i++){
          formData.append(key, data.company_images[i]);
        }
      }
      else if (key === "company_video" && data.company_video) {
        formData.append(key, data.company_video);
      }
      else if (data[key] !== null && data[key] !== undefined) {
        // if (typeof data !== 'string' && !(data instanceof Blob)) {
        //   continue;
        // }
        // else {
          formData.append(key, data[key]);
        // }
      }
    
    }
  }
  return axiosClient.post("/postjob/recruiter/add-company-info", formData, {
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });
};

export const revaluate = (data: IRevaluate): Promise<IAuthResponse> => {
  return axiosClient.put("/postjob/collaborator/update-resume-valuate", data);
};
export const getCompanyInfo = (): Promise<ICompanyInfo> => {
  return axiosClient.get("/postjob/recruiter/get-company-info");
};
