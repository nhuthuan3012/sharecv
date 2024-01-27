import { ForwardedRef, forwardRef } from "react";
import { TInput } from ".";


const Component = (
  { id, label, required, placeholder, className, ...props }: TInput,
  ref: ForwardedRef<HTMLInputElement>
) => {
  return (
    <div className="w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-primary"
      >
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <input
        {...props}
        id={id}
        className="bg-gray-50 border-solid border-2 border-primary text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder-placeholder"
        placeholder={placeholder}
        required
      ></input>
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, TInput>(Component);
