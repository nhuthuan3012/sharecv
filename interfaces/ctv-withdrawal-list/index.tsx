export interface ICtvWithDrawalList {
  company_id: number;
  logo: string;
  job_id: number;
  job_title: string;
  industries: string[];
  created_at: string;
  job_service: any;
  status: string;
  count: number;
}

export interface ICtvWithDrawalListResponse {
  message: string;
  data: {
    total_items: number;
    total_pages: number;
    item_lst: ICtvWithDrawalList[];
  };
}
