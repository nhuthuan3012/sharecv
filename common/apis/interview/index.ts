import {
  IFormInterview,
  IInterviewDateResponse,
} from "@/interfaces/interviews";
import { http } from "@/utils/http";

export const rescheduleInterview = async (data: IFormInterview) => {
  return http.put("/postjob/collaborator/reschedule", data);
};

export const getInterviewInfo = async (
  id: number
): Promise<IInterviewDateResponse> => {
  return http.post(`/postjob/collaborator/get-interview-schedule`, {
    cv_id: id,
  });
};

export const confirmInterviewInfo = async (id: number) => {
  return http.put(`/postjob/collaborator/confirm-interview`, { cv_id: id });
};
