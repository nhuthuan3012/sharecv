import { Input } from "@/common/components/control/Input";
import CustomSelect from "@/common/components/control/select/Select";
import { daysOfWeek, gender, industries, jobLevelOpt, jobType, responsibilityOpt } from "./mockdata";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Textarea } from "@/common/components/control/textarea";
import { useState } from "react";
import { GroupBase } from "react-select";
import { IJobLevelOpt } from "./type";

function JDForm() {
    const [selectedOptions, setSelectedOptions] = useState([]);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="border-2 border-solid rounded-xl p-8 border-primary ">
        <p className="text-primary font-bold">Thông tin công việc</p>
        <div className="grid grid-cols-2 gap-8">
          <Input
            required
            placeholder="Please type here"
            label="Tên công việc"
          />
          <CustomSelect
            instanceId={"industry"}
            isMulti={false}
            required
            label="Ngành nghề"
            options={industries}
          />
          <CustomSelect
            instanceId={"job-type"}
            isMulti={false}
            required
            label="Loại công việc"
            options={jobType}
          />
          <CustomSelect
            instanceId={"skill"}
            isMulti={false}
            required
            label="Kỹ năng"
            options={industries}
          />
          <CustomSelect
            instanceId={"gender"}
            isMulti={false}
            required
            label="Giới tính"
            options={gender}
          />
          <div>
            <p className="mb-2 text-sm font-medium text-primary mt-0">
              Ngày bắt đầu nhận việc<span className="text-red-500"> *</span>
            </p>
            <DatePicker
              value={dayjs("2024-01-01")}
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
          <div className="col-span-2">
            <p className="mb-2 text-sm font-medium text-primary mt-0 ">
              Thời gian làm việc<span className="text-red-500"> *</span>
            </p>
            <div className="flex flex-row gap-8">
              <div className="w-1/2 flex flex-row gap-8">
                <CustomSelect
                  instanceId={"start-date"}
                  isMulti={false}
                  options={daysOfWeek}
                />
                <CustomSelect
                  instanceId={"end-date"}
                  isMulti={false}
                  options={daysOfWeek}
                />
              </div>
              <div className="w-1/2 flex flex-row gap-8">
                <div>
                  <label className="block mb-2"></label>
                  <TimePicker
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
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
                <div>
                  <label className="block mb-2"></label>
                  <TimePicker
                    viewRenderers={{
                      hours: renderTimeViewClock,
                      minutes: renderTimeViewClock,
                      seconds: renderTimeViewClock,
                    }}
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
          </div>
          <div className="col-span-2">
            <Textarea
              required
              label="Mô tả công việc"
              placeholder="Please type here (maximum 500 words)"
              rows={8}
            />
          </div>
          <div className="col-span-2">
            <Textarea
              required
              label="Yêu cầu công việc"
              placeholder="Please type here (maximum 500 words)"
              rows={8}
            />
          </div>
          <div className="col-span-2">
            <Textarea
              required
              label="Quyền lợi"
              placeholder="Please type here (maximum 500 words)"
              rows={8}
            />
          </div>
          {/* <CustomSelect
            instanceId={"jobLevelOpt"}
            value={selectedOptions}
            onChange={(o) => setSelectedOptions(o || [])}
            isMulti={false}
            required
            label="Cấp bậc đảm nhiệm"
            isOptionDisabled={() => selectedOptions.length >= 3}
            options={jobLevelOpt}
            
          /> */}
          <CustomSelect
            instanceId={"responsibilityOpt"}
            isMulti={true}
            required
            label="Vai trò đảm nhiệm"
            options={responsibilityOpt}
          />
        </div>
      </div>
    </LocalizationProvider>
  );
}

export default JDForm;
