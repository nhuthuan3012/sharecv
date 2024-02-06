import {
  createAsyncThunk,
  createSlice,
  type PayloadAction,
} from "@reduxjs/toolkit";
import {
  ChangeJobDescription,
  ChangeOtherCertificatePayload,
  initialLanguageCertificate,
  initialOtherCertificate,
  initialState,
} from "./types";
import { parseJD } from "@/common/apis/upload-jd";

// Redux-async-thunk
export const actionParseJD = createAsyncThunk(
  "uploadJD/actionParseJD",
  async (data: any, thunkAPI) => {
    const response = await parseJD(data);
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
    // JobDescription
    changeJobDescription: (
      state,
      action: PayloadAction<ChangeJobDescription>
    ) => {
      const { key, value } = action.payload;
      state.jobDescription = { ...state.jobDescription, [key]: value };
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
    changeLanguageCertificate: (state) => {
      state.status = "failed";
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
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(actionParseJD.fulfilled, (state, action) => {
      state.jobDescription.job_title = action.payload.data.job_title[0]
      state.jobDescription.industries = action.payload.data.industries[0]
      state.jobDescription.gender = action.payload.data.gender[0]
      state.jobDescription.job_type = action.payload.data.job_type[0]
      state.jobDescription.skills = action.payload.data.skills
      state.jobDescription.received_job_time = action.payload.data.received_job_time[0]
      state.jobDescription.start_work_hours = action.payload.data.working_time[0]
      state.jobDescription.end_work_hours = action.payload.data.working_time[0]
      state.jobDescription.descriptions = action.payload.data.descriptions.join("")
      state.jobDescription.requirements = action.payload.data.requirements.join("")
      state.jobDescription.benefits = action.payload.data.benefits[0]
      state.jobDescription.levels = action.payload.data.levels
      state.jobDescription.roles = action.payload.data.roles
      state.jobDescription.num_recruit = parseInt(action.payload.data.number_candidate[0])
      state.education = action.payload.data.education.map(item => ({
        degree: item.degree[0],
        major: item.major[0],
        gpa: item.gpa[0]
      }))
      state.languageCerttificate = action.payload.data.certificates.language_certificates.map(item => ({
        certificate_language: item.certificate_language[0],
        certificate_name: item.certificate_name[0],
        certificate_point_level: item.certificate_point_level[0],
      }))
      state.otherCertificate = action.payload.data.certificates.other_certificates.map(item => ({
        certificate_name: item.certificate_name[0],
        certificate_point_level: item.certificate_point_level[0]
      }))
      state.workAddress.address = action.payload.data.location.address[0]
      state.workAddress.city = action.payload.data.location["city/province"][0]
      state.workAddress.country = action.payload.data.location.country[0]
      state.salary.min_salary = parseInt(action.payload.data.salary.min_salary[0])
      state.salary.max_salary = parseInt(action.payload.data.salary.max_salary[0])
      // Add user to the state array
      state.status = "fulfilled";
    });
    builder.addCase(actionParseJD.rejected, (state, action) => {
      state.status = "failed"
    });
    builder.addCase(actionParseJD.pending, (state, action) => {
      state.status = "loading"
    })
  },
});

export const {
  changeJdFile,
  changeJobDescription,
  addLanguageCertificate,
  removeLanguageCertificate,
  changeLanguageCertificate,
  addOtherCertificate,
  removeOtherCertificate,
  changeOtherCertificate,
} = uploadJdSlice.actions;
