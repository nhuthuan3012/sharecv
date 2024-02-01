export interface IUvListAdmin {
    id: number;
    fullname: string;
    job_title: string;
    industry: string;
    job_service: string;
    status: string;
    referred_time: string; // mm-dd-yyyy
}

export interface IUvListAdminResponse {
    message: string,
    data: {
        total_pages: number,
        total_items: number,
        item_lst: IUvListAdmin[]
    }
}