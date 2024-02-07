import { IInterviewListResponse } from "@/interfaces/interviews";
import { IUvListResponse } from "@/interfaces/uv-list-admin";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const getUvListCtv = (data: {
  page_index: number;
  limit: number;
  is_draft: boolean;
}): Promise<AxiosResponse<IUvListResponse>> => {
  let payload: any = {
    page_index: data.page_index,
    limit: data.limit,
    is_draft: data.is_draft,
  };
  console.log(payload);
  return axiosClient.post(`/postjob/collaborator/list-candidate`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const getUvListAdmin = (data: {
  page_index: number;
  limit: number;
  candidate_status: string;
}): Promise<AxiosResponse<IUvListResponse>> => {
  let payload: any = {
    page_index: data.page_index,
    limit: data.limit,
    candidate_status: data.candidate_status,
  };
  console.log(payload);
  return axiosClient.post(`/postjob/admin/list-candidate`, payload, {
    headers: { "Content-Type": "application/json" },
  });
};

export const deactiveUv = (job_id: number): Promise<AxiosResponse<any>> => {
  return axiosClient.put(`/postjob/admin/deactive-job`, {
    job_id,
  });
};

export const getInterviewList = (data: {
  page_index: number;
  limit: number;
}): Promise<AxiosResponse<IInterviewListResponse>> => {
  return axiosClient.get(
    `general/admin/list-interview-schedule?limit=${data.limit}&page_index=${data.page_index}`
  );
};
