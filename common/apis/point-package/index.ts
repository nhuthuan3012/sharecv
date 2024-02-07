import {
  IListPointRespone,
  IPointHistoryListResponse,
} from "@/interfaces/point-package";
import { axiosClient } from "@/utils/axios";
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
