import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  ChangeEducationJDPayload,
  ChangeJobDescription,
  ChangeOtherCertificatePayload,
  changeLanguageCertificatePayload,
  changeSalaryJDPayload,
  changeWorkAddressJDPayload,
  initialEducation,
  initialLanguageCertificate,
  initialOtherCertificate,
  initialState,
} from "./types";
import { parseJD } from "@/common/apis/upload-jd";
import { getAdminJobDetail } from "@/common/apis/job-description";

// Redux-async-thunk
export const actionParseJD = createAsyncThunk(
  "uploadJD/actionParseJD",
  async (data: any, thunkAPI) => {
    const response = await parseJD(data);
    return response.data;
  }
);

export const actionGetDetailJD = createAsyncThunk(
  "uploadJD/actionGetDetailJD",
  async (jd_id: any, thunkAPI) => {
    const response = await getAdminJobDetail(jd_id);
    return response.data;
  }
);

export const uploadJdSlice = createSlice({
  name: "uploadJD",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // JdFile
    changeJdFile: (state, action: PayloadAction<string>) => {
      state.jdFile = action.payload;
    },
    changeJdFileName: (state, action: PayloadAction<string>) => {
      state.jdFilename = action.payload;
    },
    // JobDescription
    changeJobDescription: (
      state,
      action: PayloadAction<ChangeJobDescription>
    ) => {
      const { key, value } = action.payload;
      state.jobDescription = { ...state.jobDescription, [key]: value };
    },
    // Education
    addEducationJD: (state) => {
      state.education = [...state.education, initialEducation];
    },
    removeEducationJD: (state, action: PayloadAction<number>) => {
      state.education = state.education.filter((_, i) => i !== action.payload);
    },
    changeEducationJD: (
      state,
      action: PayloadAction<ChangeEducationJDPayload>
    ) => {
      const { index, key, value } = action.payload;
      state.education[index][key] = value;
    },
    // LanguageCertificate
    addLanguageCertificate: (state) => {
      state.languageCerttificate = [
        ...state.languageCerttificate,
        initialLanguageCertificate,
      ];
    },
    removeLanguageCertificate: (state, action: PayloadAction<number>) => {
      state.languageCerttificate = state.languageCerttificate.filter(
        (_, i) => i !== action.payload
      );
    },
    changeLanguageCertificate: (
      state,
      action: PayloadAction<changeLanguageCertificatePayload>
    ) => {
      const { index, value, key } = action.payload;
      state.languageCerttificate[index][key] = value;
    },
    // OtherCertificate
    addOtherCertificate: (state) => {
      state.otherCertificate = [
        ...state.otherCertificate,
        initialOtherCertificate,
      ];
    },
    removeOtherCertificate: (state, action: PayloadAction<number>) => {
      state.otherCertificate = state.otherCertificate.filter(
        (_, i) => i !== action.payload
      );
    },
    changeOtherCertificate: (
      state,
      action: PayloadAction<ChangeOtherCertificatePayload>
    ) => {
      const { index, key, value } = action.payload;
      state.otherCertificate[index][key] = value;
    },
    changeSalaryJD: (state, action: PayloadAction<changeSalaryJDPayload>) => {
      const { key, value } = action.payload;
      state.salary = { ...state.salary, [key]: value };
    },
    changeWorkAddressJD: (
      state,
      action: PayloadAction<changeWorkAddressJDPayload>
    ) => {
      const { key, value } = action.payload;
      state.workAddress = { ...state.workAddress, [key]: value };
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(actionParseJD.fulfilled, (state, action) => {
      state.jobDescription.job_title = action.payload.data.job_title[0];
      state.jobDescription.industries = action.payload.data.industries;
      state.jobDescription.gender = action.payload.data.gender[0];
      state.jobDescription.job_type = action.payload.data.job_type[0];
      state.jobDescription.skills = action.payload.data.skills;
      state.jobDescription.received_job_time =
        action.payload.data.received_job_time[0];
      state.jobDescription.start_work_hours =
        action.payload.data.working_time[0];
      state.jobDescription.end_work_hours = action.payload.data.working_time[0];
      state.jobDescription.descriptions =
        action.payload.data.descriptions.join("");
      state.jobDescription.requirements =
        action.payload.data.requirements.join("");
      state.jobDescription.benefits = action.payload.data.benefits[0];
      state.jobDescription.levels = action.payload.data.levels;
      state.jobDescription.roles = action.payload.data.roles;
      state.jobDescription.num_recruit = parseInt(
        action.payload.data.number_candidate[0]
      );
      state.education = action.payload.data.education.map((item) => ({
        degree: item.degree[0],
        major: item.major[0],
        gpa: item.gpa[0],
      }));
      state.languageCerttificate =
        action.payload.data.certificates.language_certificates.map((item) => ({
          certificate_language: item.certificate_language[0],
          certificate_name: item.certificate_name[0],
          certificate_point_level: item.certificate_point_level[0],
        }));
      state.otherCertificate =
        action.payload.data.certificates.other_certificates.map((item) => ({
          certificate_name: item.certificate_name[0],
          certificate_point_level: item.certificate_point_level[0],
        }));
      state.workAddress.address = action.payload.data.location.address[0];
      state.workAddress.city = action.payload.data.location["city/province"][0];
      state.workAddress.country = action.payload.data.location.country[0];
      state.salary.min_salary = parseInt(
        action.payload.data.salary.min_salary[0]
      );
      state.salary.max_salary = parseInt(
        action.payload.data.salary.max_salary[0]
      );
      // Add user to the state array
      state.status = "fulfilled";
    });
    builder.addCase(actionParseJD.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(actionParseJD.pending, (state, action) => {
      state.status = "loading";
    });
    builder.addCase(actionGetDetailJD.fulfilled, (state, action) => {
      const [startTime, endTime] = action.payload.data.working_time.time.split("-");
      const [yoeStart, yoeEnd] = action.payload.data.yoe.split("-");
      const [startDay, endDay] = action.payload.data.working_time.week.split("-");
      console.log(startDay, endDay, yoeStart, yoeEnd)
      state.jobDescription.job_title = action.payload.data.job_title;
      state.jobDescription.industries = action.payload.data.industries;
      state.jobDescription.gender = action.payload.data.gender;
      state.jobDescription.job_type = action.payload.data.job_type;
      state.jobDescription.skills = action.payload.data.skills;
      state.jobDescription.received_job_time = action.payload.data.received_job_time;
      state.jobDescription.start_days_of_week = startDay;
      state.jobDescription.end_days_of_week = endDay;
      state.jobDescription.start_work_hours = startTime;
      state.jobDescription.end_work_hours = endTime;
      state.jobDescription.descriptions = action.payload.data.descriptions.join("");
      state.jobDescription.requirements = action.payload.data.requirements.join("");
      state.jobDescription.benefits = action.payload.data.benefits[0];
      state.jobDescription.levels = action.payload.data.levels;
      state.jobDescription.roles = action.payload.data.roles;
      state.jobDescription.num_recruit = action.payload.data.num_recruit;
      state.education = action.payload.data.education.map((item) => ({
        degree: item.degree,
        major: item.major,
        gpa: item.gpa,
      }));
      state.languageCerttificate = action.payload.data.language_certificate.map(
        (item) => ({
          certificate_language: item.language,
          certificate_name: item.certificate_name,
          certificate_point_level: item.certificate_level,
        })
      );
      state.otherCertificate = action.payload.data.other_certificate.map(
        (item) => ({
          certificate_name: item.certificate_name,
          certificate_point_level: item.certificate_level ?? "",
        })
      );
      state.workAddress.address = action.payload.data.address;
      state.workAddress.city = action.payload.data.city;
      state.workAddress.country = action.payload.data.country;
      state.salary.min_salary = action.payload.data.min_salary;
      state.salary.max_salary = state.salary.max_salary;
      state.jobDescription.yoe_from = yoeStart;
      state.jobDescription.yoe_to = yoeEnd;
      // Add user to the state array
      state.status = "fulfilled";
    });
    builder.addCase(actionGetDetailJD.rejected, (state, action) => {
      state.status = "failed";
    });
    builder.addCase(actionGetDetailJD.pending, (state, action) => {
      state.status = "loading";
    });
  },
});

export const {
  changeJdFile,
  changeJdFileName,
  changeJobDescription,
  addEducationJD,
  removeEducationJD,
  changeEducationJD,
  addLanguageCertificate,
  removeLanguageCertificate,
  changeLanguageCertificate,
  addOtherCertificate,
  removeOtherCertificate,
  changeOtherCertificate,
  changeSalaryJD,
  changeWorkAddressJD,
} = uploadJdSlice.actions;
