import { IListPointRespone } from "@/interfaces/point-package";
import { axiosClient } from "@/utils/axios";

export const getListPointPackage = (): Promise<IListPointRespone> => {
  return axiosClient.get(`/money2point/recruiter/list-point-package`);
};
export const getPointPackage = (id: string): Promise<IListPointRespone> => {
  return axiosClient.get(`/money2point/recruiter/get-point-package`,{ params: { package_id: id } });
};
export const getPaymentInfo = (package_id: string,quantity: string,total_price: string,transaction_form: string,): Promise<IListPointRespone> => {
  let payload: any = {
    package_id: package_id,
    quantity: quantity,
    total_price: total_price,
    transaction_form: transaction_form
  }
  return axiosClient.post(`/money2point/recruiter/purchase-point`, payload);
};
