export interface ICvMatchingResult {    
    resume_id: number;
    match_data: {
        job_title: {
            score: number;
            explanation: string;
        },
        experience: {
            score: number;
            explanation: string;
        },
        skill: {
            score: number;
            explanation: string;
        },
        education: {
            score: number;
            explanation: string;
        },
        orientation: {
            score: number;
            explanation: string;
        },
        overall: {
            score: number;
            explanation: string;
        }
    },
}

export interface ICvMatchingResultResponse {
    message: string,
    data: ICvMatchingResult
}
    

