/* Instruments */
import { counterSlice } from "./slices";
import { uploadCVSlice } from "./slices";

export const reducer = {
  counter: counterSlice.reducer,
  uploadCV: uploadCVSlice.reducer,
};