import { ICtvJobListResponse } from "@/interfaces/ctv-job-list";
import { axiosClient, subaxiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getCtvJobList = (data: { page_index: number, limit: number, state: string }): Promise<AxiosResponse<ICtvJobListResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
        job_status: data.state
    }
    console.log(payload);
    return axiosClient.post(`/postjob/collaborator/list-job`, payload, { headers: { "Content-Type": "application/json", } });
};
