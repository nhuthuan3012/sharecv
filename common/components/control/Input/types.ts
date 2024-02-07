import { InputHTMLAttributes } from "react";

export type TInput = InputHTMLAttributes<HTMLInputElement> & {
  errorMsg?: string;
  label?: string;
};