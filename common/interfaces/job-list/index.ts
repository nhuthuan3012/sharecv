export interface IJobListCreate {
    job_id: number;
    job_title: string;
    industry: string;
    recruited_time: string; // mm-dd-yyyy
    job_service: string;
    num_cvs: number;
    status: string;
}

export interface IJobListDraft {
    job_id: number;
    job_title: string;
    industry: string;
    created_time: string; // mm-dd-yyyy
    job_service: string;
}

export interface ITablePagination {
    page: number;
    limit: number;
}

export interface IJobListCreateResponse {
    message: any,
    data: {
        total_pages: number,
        total_items: number,
        item_lst: IJobListCreate[]
    }
}

export interface IJobListDraftResponse {
    message: any,
    data: {
        total_pages: number,
        total_items: number,
        item_lst: IJobListDraft[]
    }
}





