import React, { ForwardedRef, forwardRef } from "react";
import Select, { GroupBase, Props } from "react-select";
import type {} from 'react-select/base';
// This import is necessary for module augmentation.
// It allows us to extend the 'Props' interface in the 'react-select/base' module
// and add our custom property 'myCustomProp' to it.

declare module 'react-select/base' {
  export interface Props<
    Option,
    IsMulti extends boolean,
    Group extends GroupBase<Option>
  > {
    id?: string;
    label?: string;
    required?: boolean;
  }
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    height: '100%',
  }),

  control: (provided: any) => ({
    ...provided,
    minHeight: '54px',
    height: '100%',
    borderWidth: '2px',
    borderColor: "#073776",
    ":hover": {
      borderColor: "#073776",
    },
    ":active": {
        ...provided[":active"],
        borderColor: "#073776",
      },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? "#EEEEEE" : "white",
    color: state.isSelected ? "black" : "black",
    ":active": {
      ...provided[":active"],
      backgroundColor: "black",
    },
    ":hover": {
      backgroundColor: "#EFEFEF",
    },
  }),
};

function Component  <
  Option,
  IsMulti extends boolean = false ,
  Group extends GroupBase<Option> = GroupBase<Option>
>(props: Props<Option, IsMulti, Group>,
  ref: ForwardedRef<HTMLInputElement>) {
  const { id, label, required, placeholder, ...selectProps } = props;

  return (
    <div className="w-full">
      <label className="block mb-2 font-medium text-sm text-primary">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="">
      <Select 
       {...selectProps} styles={customStyles} theme={(theme) => ({ ...theme, borderRadius: 8 })} />
      </div>
    </div>
  );
}

export const CustomSelect = forwardRef(Component);
