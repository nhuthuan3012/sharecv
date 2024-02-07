import { IParseJdResponse } from "@/common/interfaces/upload-jd";
import { axiosClient } from "@/utils/axios";

export const parseJD = (data: File): Promise<IParseJdResponse> => {
    const formData = new FormData();
    formData.append('uploaded_file', data)
    
    return axiosClient.post("/postjob/recruiter/upload-jd", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  };