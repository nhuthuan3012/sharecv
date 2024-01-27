export interface IResumeExperience {
    job_title: string;
    company_name: string;
    start_time: Date;
    end_time: Date;
    levels: string;
    roles: string;
}

export interface IResumeEducation {
    institute: string;
    degree: string;
    major: string;
    start_time: Date;
    end_time: Date;
}

export interface IResumeProject {
    project_name: string;
    start_time: Date;
    end_time: Date;
    descriptions: string[];
}

export interface IResumeAward {
    name: string;
    time: Date;
    description: string;
}

export interface ILanguageCertificates {
    certificate_language: string;
    certificate_name: string;
    certificate_level: string;
}

export interface IOtherCertificates {
    certificate_name: string;
    certificate_level: string;
}

export interface IResume {
    cv_id: number;
    status: string;
    job_service: string | null;
    avatar: string | null;
    candidate_name: string;
    current_job: string;
    industry: string;
    birthday: Date;
    gender: string;
    objectives: string[];
    email: string;
    phone: string;
    identification_code: string;
    address: string;
    city: string;
    country: string;
    linkedin: string | null;
    website: string | null;
    facebook: string | null;
    instagram: string | null;
    skills: string[];
    total_point: number;
    experience: IResumeExperience[];
    educations: IResumeEducation[];
    projects: IResumeProject[];
    awards: IResumeAward[];
    certificates: {
        language_certificates: ILanguageCertificates[];
        other_certificate: IOtherCertificates[];
    };
    [key: string]: any;
}
