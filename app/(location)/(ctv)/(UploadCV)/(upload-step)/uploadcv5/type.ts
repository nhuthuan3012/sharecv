import { Education } from "@/lib/redux/slices";

export interface EducationFormProps {
    academic_degree: string;
    university: string;
    major: string;
    gpa: string;
    start_date: Date;
    end_date: Date;
  }
  
  export interface EducationItemProps {
    index: number;
    newest: boolean;
    initialValues: Education;
  }

  export const initialEducationForm: Education = {
    degree: "",
    institute_name: "",
    major: "",
    gpa: "",
    start_time: '2024-01-01 00:00:00',
    end_time: '2024-01-01 00:00:00',
  }
  