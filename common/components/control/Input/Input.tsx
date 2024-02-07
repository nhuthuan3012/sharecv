import { ForwardedRef, forwardRef } from "react";
import { TInput } from ".";

const Component = (
  { id, label, required, placeholder, className,errorMsg, ...props }: TInput,
  ref: ForwardedRef<HTMLInputElement>,
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
        className={`bg-gray-50 border-solid border-2  text-gray-900 text-sm rounded-lg  block w-full p-2.5 placeholder-placeholder h-[55px] ${errorMsg ? 'border-red-500' : 'border-primary'}` }
        placeholder={placeholder}
        required
      ></input>
      {errorMsg && (
        <span className="flex items-center font-medium text-red-500 text-xs">
          {errorMsg}
        </span>
      )}
    </div>
  );
};

export const Input = forwardRef<HTMLInputElement, TInput>(Component);
