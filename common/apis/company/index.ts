import { IResponse } from "@/common/interfaces";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const checkHasCompanyInfo = (): Promise<
  AxiosResponse<IResponse<{
    is_exist: boolean;
  }>>
> => {
  return axiosClient.get("/company/check-company-exist/");
};
