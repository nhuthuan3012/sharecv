import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

import { IJobListCreateResponse, IJobListDraftResponse } from "@/common/interfaces/job-list";

export const getCreatedJobList = (data: { page_index: number, limit: number }): Promise<AxiosResponse<IJobListCreateResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
        is_draft: false,
    }
    return axiosClient.post(`/postjob/recruiter/list-job`, payload, { headers: { "Content-Type": "application/json", } });
};

export const getDraftJobList = (data: { page_index: number, limit: number }): Promise<AxiosResponse<IJobListDraftResponse>> => {
    let payload: any = {
        page_index: data.page_index,
        limit: data.limit,
        is_draft: true,
    }
    return axiosClient.post(`/postjob/recruiter/list-job`, payload, { headers: { "Content-Type": "application/json", } });
};

