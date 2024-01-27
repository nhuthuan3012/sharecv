import classNames from "classnames";
import { TTextarea } from ".";
import { ForwardedRef, forwardRef } from "react";

const Component = (
  { id, label, required, className,value, ...props }: TTextarea,
  ref: ForwardedRef<HTMLTextAreaElement>
) => {
  return (
    <div className="w-full">
      <label htmlFor={id} className="block mb-1 text-sm font-medium text-primary">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <textarea
        {...props}
        id={id}
        required={required}
        className={classNames(
          className,
          "w-full px-4 py-2 border-2 border-primary bg-white rounded-lg placeholder-placeholder"
        )}
        value={value}
      >
      </textarea>
    </div>
  );
};

export const Textarea = forwardRef<HTMLTextAreaElement, TTextarea>(Component);
