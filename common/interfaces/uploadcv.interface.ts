import { Award, Education, Experience } from "@/lib/redux/slices";

export interface IUploadCVResponse {
  data: {
    message: string;
  data: {
    job_title: string[];
    education: Education[];
    work_experience: Experience[];
    skills: string[];
    awards: {
      award_name: string,
      time: string,
      descriptions: string
    }[];
    projects: {
      project_name: string;
      start_time: string;
      end_time: string;
      detailed_descriptions: string[];
    }[];
    levels: string[];
    certificates: {
      language_certificates: [
        {
          certificate_language: string;
          certificate_name: string;
          certificate_point: string;
        }
      ];
      other_certificates: string[];
    };
    industry: string[];
    objectives: string;
    personal_information: {
      name: string;
      current_job_position: string;
      gender: string;
      linkedin: string;
      website: string;
      facebook: string;
      instagram: string;
      earliest_university_year: string;
      birthday: string;
    };
    contact_information: {
      phone: string;
      email: string;
      country: string;
      city: string;
      address: string[];
    };
    orientation: string[];
  };
  }
}
