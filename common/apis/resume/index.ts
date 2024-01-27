import { axiosClient } from "@/utils/axios";
import {
  IAuthResponse,
  ICompanyInfo,
  IRevaluate,
  IRegisterResponse,
  IResetPasswordRequest,
  ValuateCV,
} from "@/common/interfaces";
import qs from "qs";
import { IUserLogin, IUserRegister } from "@/modules/auth/types";

export const getValuateCV = (id:string): Promise<ValuateCV> => {
    return axiosClient.get(`/postjob/collaborator/get-resume-valuate`, { params: { cv_id: id } });
  };

export const revaluate = (data: IRevaluate): Promise<IAuthResponse> => {
  return axiosClient.put("/postjob/collaborator/update-resume-valuate", data);
};
export const confrimRevaluate = (data: IRevaluate): Promise<IAuthResponse> => {
  return axiosClient.post("/postjob/collaborator/confirm-resume-valuate", data);
};