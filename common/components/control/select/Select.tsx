import { BorderColor, Height } from "@mui/icons-material";
import React from "react";
import Select, { GroupBase, Props } from "react-select";

interface SelectProps<
  Option = unknown,
  IsMulti extends boolean = false,
  Group extends GroupBase<Option> = GroupBase<Option>
> {
  id?: string;
  label?: string;
  required?: boolean;
  placeholder?: string;
}

const customStyles = {
  container: (provided: any) => ({
    ...provided,
    height: '100%',
  }),

  control: (provided: any) => ({
    ...provided,
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

function CustomSelect<
  Option,
  IsMulti extends boolean,
  Group extends GroupBase<Option>
>(props: Props<Option, IsMulti, Group> & SelectProps<Option, IsMulti, Group>) {
  const { id, label, required, placeholder, ...selectProps } = props;

  return (
    <div className="w-full">
      <label className="block mb-2 font-medium text-sm text-primary">
        {label}
        {required && <span className="text-red-500"> *</span>}
      </label>
      <div className="h-11">
      <Select  {...selectProps} styles={customStyles} theme={(theme) => ({ ...theme, borderRadius: 8 })} />
      </div>
    </div>
  );
}

export default CustomSelect;
