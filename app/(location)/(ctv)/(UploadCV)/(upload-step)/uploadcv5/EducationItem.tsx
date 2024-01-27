"use client";

import { IconButton } from "@mui/material";
import { EducationItemProps } from "./type";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import CustomSelect from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";
import { academicDegree } from "./mockData";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addEducation, changeEducation, removeEducation } from "@/lib/redux/slices";
import utc from 'dayjs/plugin/utc';
dayjs.extend(utc);

export default function EducationItem({
  index,
  initialValues,
  newest,
}: EducationItemProps) {
  const dispatch = useDispatch()
  return (
    <div className={`flex flex-col gap-5  ${!newest && "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"}`}>
      <div className="flex flex-row gap-10 items-center">
        <span className="font-bold text-primary">{`Bằng cấp ${
          index + 1
        }`}</span>
        {newest ? (
          <IconButton onClick={() => dispatch(addEducation())}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(removeEducation(index))}>
            <SquareXmark className="fill-red-600" />
          </IconButton>
        )}
      </div>
      <div className="flex flex-row gap-10">
          <CustomSelect
            instanceId={"academic_degree"}
            isMulti={false}
            options={academicDegree}
            value={{value: initialValues.degree, label: initialValues.degree}}
            label="Học vị"
            onChange={(prop) => dispatch(changeEducation({value: prop?.value as string, key: 'degree', index: index}))}
          />
        <Input
          label="Tên trường, tổ chức"
          placeholder="Please type here"
          value={initialValues.institute_name}
          onChange={(e) => dispatch(changeEducation({value: e.target.value, key: 'institute_name', index: index}))}
        />
      </div>
      <div className="flex flex-row gap-10">
        <Input
          label="Chuyên ngành"
          placeholder="Please type here"
          value={initialValues.major}
          onChange={(e) => dispatch(changeEducation({value: e.target.value, key: 'major', index: index}))}
        />
        <Input
          label="GPA"
          placeholder="Please type here"
          value={initialValues.gpa}
          onChange={(e) => dispatch(changeEducation({value: e.target.value, key: 'gpa', index: index}))}
        />
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full">
          <p className="font-medium text-primary  text-sm">
            Thời gian bắt đầu<span className="text-red-500">*</span>
          </p>
          <DatePicker
            value={dayjs(initialValues.start_time)}
            onChange={(date) => dispatch(changeEducation({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'start_time', index: index}))}
            slotProps={{
              openPickerButton: {
                color: "primary",
              },
              textField: {
                fullWidth: true,
                sx: {
                  bgcolor: "white",
                  fieldset: {
                    borderColor: "primary.main",
                    borderRadius: "10px",
                  },
                },
              },
            }}
          />
        </div>
        <div className="flex flex-col w-full">
          <p className="font-medium text-primary text-sm">
            Thời gian kết thúc<span className="text-red-500">*</span>
          </p>
          <DatePicker
            value={dayjs(initialValues.end_time)}
            onChange={(date) => dispatch(changeEducation({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'end_time', index: index}))}
            slotProps={{
              openPickerButton: {
                color: "primary",
              },
              textField: {
                fullWidth: true,
                sx: {
                  bgcolor: "white",
                  fieldset: {
                    borderColor: "primary.main",
                    borderRadius: "10px",
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
