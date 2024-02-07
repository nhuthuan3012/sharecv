import { IFormInterview } from "@/interfaces/interviews";
import {
  IListPointRespone,
  IPointHistoryListResponse,
} from "@/interfaces/point-package";
import { axiosClient } from "@/utils/axios";
import { http } from "@/utils/http";
import { AxiosResponse } from "axios";

export const getListPointPackage = (): Promise<IListPointRespone> => {
  return axiosClient.get(`/money2point/recruiter/list-point-package`);
};

export const getPointHistoryListAdmin = (data: {
  page_index: number;
  limit: number;
}): Promise<AxiosResponse<IPointHistoryListResponse>> => {
  return axiosClient.get(
    `/general/admin/purchase-point-history?limit=${data.limit}&page_index=${data.page_index}`
  );
};

export const getListNtdTransferHistory = (data: {
  page_index: number;
  limit: number;
}): Promise<AxiosResponse<IPointHistoryListResponse>> => {
  return axiosClient.get(
    `general/recruiter/transaction-history?limit=${data.limit}&page_index=${data.page_index}`
  );
};

export const checkHasEnoughPoint = (cv_id: number) => {
  return http.post("postjob/recruiter/choose-candidate-basic", { cv_id });
};

export const NtdBookInterview = (data: IFormInterview) => {
  return http.post(
    "/postjob/recruiter/choose-candidate-platinum/book-interview",
    data
  );
};

export const NtdCancelInterview = (cv_id: number) => {
  return http.delete(
    `/postjob/recruiter/choose-candidate-platinum/cancel-interview?cv_id=${cv_id}`
  );
};

export const NtdCheckEnoughPointInterview = (cv_id: number) => {
  return http.post(
    "/postjob/recruiter/choose-candidate-platinum/confirm-interview",
    {
      cv_id,
    }
  );
};
