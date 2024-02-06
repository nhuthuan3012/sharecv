import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import { ChangeJobDescription, ChangeOtherCertificatePayload, initialLanguageCertificate, initialOtherCertificate, initialState } from "./types";

export const uploadJdSlice = createSlice({
  name: "uploadJD",
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    // JobDescription
    changeJobDescription: (state, action: PayloadAction<ChangeJobDescription>) => {
      const { key, value } = action.payload;
      state.jobDescription = { ...state.jobDescription, [key]: value };
    },
    // LanguageCertificate
    addLanguageCertificate: (state) => {
      state.languageCerttificate = [...state.languageCerttificate, initialLanguageCertificate];
    },
    removeLanguageCertificate: (state, action: PayloadAction<number>) => {
      state.languageCerttificate = state.languageCerttificate.filter(
        (_, i) => i !== action.payload
      );
    },
    changeLanguageCertificate: (state) => {
      state.status = "failed"
    },
    // OtherCertificate
    addOtherCertificate: (state) => {
      state.otherCertificate = [...state.otherCertificate, initialOtherCertificate];
    },
    removeOtherCertificate: (state, action: PayloadAction<number>) => {
      state.otherCertificate = state.otherCertificate.filter(
        (_, i) => i !== action.payload
      );
    },
    changeOtherCertificate: (state, action:PayloadAction<ChangeOtherCertificatePayload>) => {
      const { index, key, value } = action.payload;
      state.otherCertificate[index][key] = value
    },
  },
 
});

export const {
  changeJobDescription,
  addLanguageCertificate,
  removeLanguageCertificate,
  changeLanguageCertificate,
  addOtherCertificate,
  removeOtherCertificate,
  changeOtherCertificate,
  
} = uploadJdSlice.actions

