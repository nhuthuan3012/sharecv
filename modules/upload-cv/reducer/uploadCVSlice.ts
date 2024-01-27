/* Core */
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";
import {
  ChangeAwardPayload,
  ChangeCertificatePayload,
  ChangeEducationPayload,
  ChangeExperiencePayload,
  ChangePersonalInforPayload,
  ChangeProjectAchive,
  ChangeProjectPayload,
  RemoveProjectAchive,
} from "./types";
import { uploadCV } from "@/common/apis/upload_cv";

/* Instruments */

// Initial Value

export const InitialPersonalInfor: PersonalInfor = {
  avatar: '',
  cv_file: '',
  name: "",
  industry: "",
  job: "",
  level: "",
  email: "",
  phone: "",
  address: "",
  city: "",
  country: "",
  objective: "",
  birthday: "2024-01-01 00:00:00",
  gender: "",
  id: "",
  linkedln: "",
  website: "",
  facebook: "",
  youtube: "",
};

export const InitialExperience: Experience = {
  company_name: "",
  job_title: "",
  working_industry: "",
  levels: "",
  roles: "",
  start_time: "2024-01-01 00:00:00",
  end_time: "2024-01-01 00:00:00",
};

export const InitialEducation: Education = {
  degree: "",
  institute_name: "",
  major: "",
  gpa: "",
  start_time: "2024-01-01 00:00:00",
  end_time: "2024-01-01 00:00:00",
};

export const InitialCertificate: Certificate = {
  certificate_language: "",
  certificate_name: "",
  certificate_point_level: "",
  start_time: "2024-01-01 00:00:00",
  end_time: "2024-01-01 00:00:00",
};

export const InitialProject: Project = {
  name_project: "",
  description: [""],
  start_time: "2024-01-01 00:00:00",
  end_time: "2024-01-01 00:00:00",
};

export const InitialAward: Award = {
  name: "",
  time: "2024-01-01 00:00:00",
  description: "",
};

const initialState: UploadCVSlice = {
  personal_infor: InitialPersonalInfor,
  skills: [''],
  experiences: [InitialExperience],
  educations: [InitialEducation],
  certificates: [InitialCertificate],
  projects: [InitialProject],
  awards: [InitialAward],
  status: "idle",
};


// Redux-async-thunk
export const addUploadCV = createAsyncThunk(
  'uploadCV/AddUploadCV',
  async (data: any, thunkAPI) => {
    const response = await uploadCV(data)
    return response.data
  }
)


// uploadCV Slice
export const uploadCVSlice = createSlice({
  name: "uploadCV",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    changePersonalInfor: (  
      state,
      action: PayloadAction<ChangePersonalInforPayload>
    ): void => {
      const { key, value } = action.payload;
      state.personal_infor[key] = value as string & Date; // Explicitly cast the value to the appropriate type
    },
    changeAvatar: (  
      state,
      action: PayloadAction<string>
    ): void => {
      state.personal_infor.avatar = action.payload
    },
    changeSkill: (  
      state,
      action: PayloadAction<string[]>
    ): void => {
      state.skills = action.payload  // Explicitly cast the value to the appropriate type
    },
    addExperience: (state) => {
      state.experiences = [...state.experiences, InitialExperience];
    },
    removeExperience: (state, action: PayloadAction<number>) => {
      state.experiences = state.experiences.filter(
        (_, i) => i !== action.payload
      );
    },
    changeExperience: (state, action: PayloadAction<ChangeExperiencePayload>) => {
      const { key, value, index } = action.payload;
      state.experiences[index][key] = value
    },
    addEducation: (state) => {
      state.educations = [...state.educations, InitialEducation];
    },
    removeEducation: (state, action: PayloadAction<number>) => {
      state.educations = state.educations.filter(
        (_, i) => i !== action.payload
      );
    },
    changeEducation: (state, action: PayloadAction<ChangeEducationPayload>) => {
      const { key, value, index } = action.payload;
      state.educations = state.educations.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      );
    },
    addCertificate: (state) => {
      state.certificates = [...state.certificates, InitialCertificate];
    },
    removeCertificate: (state, action: PayloadAction<number>) => {
      state.certificates = state.certificates.filter(
        (_, i) => i !== action.payload
      );
    },
    changeCertificate: (
      state,
      action: PayloadAction<ChangeCertificatePayload>
    ) => {
      const { key, value, index } = action.payload;
      state.certificates = state.certificates.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      );
    },
    addProject: (state) => {
      state.projects = [...state.projects, InitialProject];
    },
    removeProject: (state, action: PayloadAction<number>) => {
      state.projects = state.projects.filter((_, i) => i !== action.payload);
    },
    changeProject: (state, action: PayloadAction<ChangeProjectPayload>) => {
      const { key, value, index } = action.payload;
      state.projects = state.projects.map((item, i) =>
        i === index ? { ...item, [key]: value } : item
      );
    },
    addProjectAchive: (state, action: PayloadAction<number>) => {
      state.projects[action.payload].description = [
        ...state.projects[action.payload].description,
        "",
      ];
    },
    removeProjectAchive: (
      state,
      action: PayloadAction<RemoveProjectAchive>
    ) => {
      state.projects[action.payload.index].description = state.projects[
        action.payload.index
      ].description.filter((_, i) => i !== action.payload.achiveIndex);
    },
    changeProjectAchive: (
      state,
      action: PayloadAction<ChangeProjectAchive>
    ) => {
      const { index, value, achiveIndex } = action.payload;
      state.projects[index].description[achiveIndex] = value;
    },
    addAward: (state) => {
      state.awards = [...state.awards, InitialAward];
    },
    removeAward: (state, action: PayloadAction<number>) => {
      state.awards = state.awards.filter((_, i) => i !== action.payload);
    },
    changeAward: (state, action: PayloadAction<ChangeAwardPayload>) => {
      const { key, value, index } = action.payload;
      state.awards[index][key] = value
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(addUploadCV.fulfilled, (state, action) => {
      // Add user to the state array
      state.personal_infor.address = action.payload.data.contact_information.address[0]
      state.personal_infor.birthday = action.payload.data.personal_information.birthday
      state.personal_infor.city = action.payload.data.contact_information.city
      state.personal_infor.country = action.payload.data.contact_information.country
      state.personal_infor.email = action.payload.data.contact_information.email
      state.personal_infor.facebook = action.payload.data.personal_information.facebook
      state.personal_infor.gender = action.payload.data.personal_information.gender
      // state.personal_infor.id = action.payload.data.
      state.personal_infor.industry = action.payload.data.industry[0] // !!!!
      state.personal_infor.job = action.payload.data.job_title[0] //!!!
      state.personal_infor.level = action.payload.data.levels[0] //!!!
      state.personal_infor.linkedln = action.payload.data.personal_information.linkedin
      state.personal_infor.name = action.payload.data.personal_information.name
      state.personal_infor.objective = action.payload.data.objectives[0]
      state.personal_infor.phone = action.payload.data.contact_information.phone
      state.personal_infor.website = action.payload.data.personal_information.website
      // state.personal_infor.youtube = action.payload.data.contact_information. 

      state.skills = action.payload.data.skills

      state.educations = action.payload.data.education
      state.experiences = action.payload.data.work_experience
      state.projects = action.payload.data.projects.map((item) => (
        {name_project: item.project_name,
          start_time: item.start_time,
          end_time: item.end_time,
          description: item.detailed_descriptions}
      ))

      if(action.payload.data.certificates.language_certificates.length > 0){
        state.certificates = action.payload.data.certificates.language_certificates.map(item => ({
          certificate_language: item.certificate_language,
          certificate_name: item.certificate_name,
          certificate_point_level: item.certificate_point,
          start_time: "2024-01-01",
          end_time: "2024-01-01",
        }))
      }

      if(action.payload.data.awards.length !== 0){
        state.awards = action.payload.data.awards.map(item => ( {
          name: item.award_name,
          time: item.time,
          description: item.descriptions,
        }))
      }

      state.status='fullfilled'

    })
  },
});

export const {
  changePersonalInfor,
  addEducation,
  removeEducation,
  changeEducation,
  addCertificate,
  removeCertificate,
  changeCertificate,
  addProject,
  removeProject,
  changeProject,
  addProjectAchive,
  removeProjectAchive,
  changeProjectAchive,
  addAward,
  removeAward,
  changeAward,
  addExperience,
  removeExperience,
  changeExperience,
  changeSkill,
  changeAvatar,
} = uploadCVSlice.actions;

/* Types */
export interface UploadCVSlice {
  personal_infor: PersonalInfor;
  skills: string[];
  experiences: Experience[];
  educations: Education[];
  certificates: Certificate[];
  projects: Project[];
  awards: Award[];
  status: "fullfilled" | "loading" | "failed" | "idle";
}

export interface PersonalInfor {
  avatar: string;
  cv_file: string;
  name: string;
  industry: string;
  job: string;
  level: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  country: string;
  objective: string;
  birthday: string;
  gender: string;
  id: string;
  linkedln: string;
  website: string;
  facebook: string;
  youtube: string;
}

export interface Experience {
  company_name: string;
  job_title: string;
  working_industry: string;
  levels: string;
  roles: string;
  start_time: string;
  end_time: string;
}

export interface Education {
  degree: string;
  institute_name: string;
  major: string;
  gpa: string;
  start_time: string;
  end_time: string;
}

export interface Certificate {
  certificate_language: string;
  certificate_name: string;
  certificate_point_level: string;
  start_time: string;
  end_time: string;
}

export interface Project {
  name_project: string;
  start_time: string;
  end_time: string;
  description: string[];
}

export interface Award {
  name: string;
  time: string;
  description: string;
}
