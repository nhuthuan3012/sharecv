import { ICvMatchingResultResponse } from "@/common/interfaces/ai-results";
import { axiosClient, subaxiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getCTVMatchingCVResult = (data: {cv_id: number}): Promise<AxiosResponse<ICvMatchingResultResponse>> => {
    const formData = new FormData();
    let payload: any = {
        cv_id: data.cv_id,
    }

    return axiosClient.post("/postjob/collaborator/get-matching-result", payload, { headers: { "Content-Type": "application/json", } });
};

export const getAdminMatchingCVResult = (data: {cv_id: number}): Promise<AxiosResponse<ICvMatchingResultResponse>> => {
    let payload: any = {
        cv_id: data.cv_id,
    }
    return axiosClient.post("/postjob/admin/get-matching-result", payload, { headers: { "Content-Type": "application/json", } });
};
