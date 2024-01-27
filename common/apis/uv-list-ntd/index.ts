import { ICvMatchingResultResponse } from "@/common/interfaces/ai-results";
import { IUVListNtdResponse } from "@/common/interfaces/uv-list-ntd";
import { axiosClient, subaxiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getUvListNtd = (data: { page_index: number, limit: number, state: string }): Promise<AxiosResponse<IUVListNtdResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
        state: data.state,
    }
    console.log(payload);
    return axiosClient.post(`/postjob/recruiter/list-candidate`, payload, { headers: { "Content-Type": "application/json", } });
};
