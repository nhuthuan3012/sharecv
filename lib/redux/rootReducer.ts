/* Instruments */
import { counterSlice, uploadJdSlice } from "./slices";
import { uploadCVSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  uploadCV: uploadCVSlice.reducer,
  uploadJD: uploadJdSlice.reducer,
};