export interface IInterviewInfo {
  candidate_id: number;
  company_logo: string;
  company_name: string;
  collaborator_name: string;
  collaborator_phone: string;
  candidate_name: string;
  job_title: string;
  status: string;
  interview_date: string;
  interview_time: string;
  interview_location: string;
}

export interface IInterviewListResponse {
  message: string;
  data: {
    total_pages: number;
    total_items: number;
    item_lst: IInterviewInfo[];
  };
}

export interface IFormInterview {
  cv_id: number;
  date: string;
  location: string;
  start_time: string;
  end_time: string;
  note?: string;
}

export interface IInterviewDateResponse {
  message: string;
  data: IFormInterview;
}
