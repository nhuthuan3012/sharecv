import { IParseJdResponse } from "@/common/interfaces/upload-jd";
import { axiosClient } from "@/utils/axios";
import { AxiosResponse } from "axios";

export const parseJD = (data: File): Promise<AxiosResponse<IParseJdResponse>> => {
    const formData = new FormData();
    formData.append('uploaded_file', data)
    
    return axiosClient.post("/postjob/recruiter/upload-jd", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };