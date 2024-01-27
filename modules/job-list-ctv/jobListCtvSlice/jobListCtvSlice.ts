import { ICtvJobList } from "@/common/interfaces/ctv-job-list";
import { JobListCtvState } from "./types";
import { createAsyncThunk, createSlice, type PayloadAction } from "@reduxjs/toolkit";

const initialState: JobListCtvState = {
    data: [],
}

// CtvJobListSlice
export const jobListCtvSlice = createSlice({
    name: 'jobListCtv',
    initialState,
    reducers: {
        setData: (state, action: PayloadAction<ICtvJobList[]>) => {
            state.data = action.payload
        },
    },
})

export const {
    setData,
} = jobListCtvSlice.actions;