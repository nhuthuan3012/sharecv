import { axiosClient } from "@/utils/axios";
import {
  IAuthResponse,
  IRegisterResponse,
  IResetPasswordRequest,
} from "@/common/interfaces";
import qs from "qs";
import { IUserLogin, IUserRegister } from "@/modules/auth/types";
import { AxiosResponse } from "axios";

export const login = (
  data: IUserLogin
): Promise<AxiosResponse<IAuthResponse>> => {
  const formData = new FormData();
  formData.append("username", data.username);
  formData.append("password", data.password);
  return axiosClient.post("/auth/login", formData,{headers: {
    "Content-Type": "application/x-www-urlencoded",
  }})
};

export const register = (
  data: IUserRegister
): Promise<IRegisterResponse> => {
  const role = "recruiter"
  return axiosClient.post("/auth/sign-up",data,{headers: {
    "Content-Type": "application/json",
  }});
};

export const forgetPassword = (email: string) => {
  return axiosClient.post("/auth/forget", { email });
};

export const resetPassword = (data: IResetPasswordRequest) => {
  return axiosClient.post("/auth/reset-password", { ...data });
};

export const resendOPT = (data: { id: string }) => {
  return axiosClient.post("/auth/resend-opt", { ...data });
};

export const verifyCode = (data: { id: string; code: string }) => {
  return axiosClient.post("/auth/verify-code", { ...data });
};

export const logout = () => {};
