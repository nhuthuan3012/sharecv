import { IListPointRespone } from "@/interfaces/point-package";
import { axiosClient } from "@/utils/axios";

export const getListPointPackage = (): Promise<IListPointRespone> => {
  return axiosClient.get(`/money2point/recruiter/list-point-package`);
};
export const getPointPackage = (id: string): Promise<IListPointRespone> => {
  return axiosClient.get(`/money2point/recruiter/get-point-package`,{ params: { package_id: id } });
};