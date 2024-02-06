"use client";

import { Input } from "@/common/components/control/Input";
import {CustomSelect} from "@/common/components/control/select/Select";
import {
  daysOfWeek,
  gender,
  industries,
  jobLevelOpt,
  jobType,
  responsibilityOpt,
  skills,
} from "./mockdata";
import {
  DatePicker,
  LocalizationProvider,
  TimePicker,
  renderTimeViewClock,
} from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Textarea } from "@/common/components/control/textarea";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { useDispatch, useSelector } from "react-redux";
import { changeJobDescription, selectUploadJD } from "@/lib/redux/slices";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { JobDescription, resolver } from "./resolver";
import Option, { ActionMeta } from "react-select"
import { SelectOption } from "@/common/components/control/select/types";


function JDForm() {
  const dispatch = useDispatch();
  const uploadJD = useSelector(selectUploadJD);
  const {
    control,
    handleSubmit,
    setError,
    formState: { errors, isDirty, isValid },
  } = useForm<JobDescription>({
    resolver,
    defaultValues: uploadJD.jobDescription,
  });
  const onSubmit: SubmitHandler<JobDescription> = (data) => console.log(data)
  

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <p className="text-primary font-bold">Thông tin công việc</p>
        <form className="grid grid-cols-2 gap-8" onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="job_title"
            render={({ field }) => (
              <Input
                {...field}
                value={uploadJD.jobDescription.job_title}
                onChange={(e) =>
                  dispatch(
                    changeJobDescription({
                      key: "job_title",
                      value: e.target.value,
                    })
                  )
                }
                required
                placeholder="Please type here"
                label="Tên công việc"
                errorMsg={errors.job_title?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="industries"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={{
                  label: uploadJD.jobDescription.industries,
                  value: uploadJD.jobDescription.industries,
                }}

                onChange={(newValue) =>
                  dispatch(
                    changeJobDescription({
                      value: (newValue as SelectOption)?.value ?? "",
                      key: "job_type",
                    })
                  )
                }
                instanceId={"industry"}
                isMulti={false}
                required
                label="Ngành nghề"
                options={industries}
              />
            )}
          />

          <Controller
            control={control}
            name="job_type"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={{
                  label: uploadJD.jobDescription.job_type,
                  value: uploadJD.jobDescription.job_type,
                }}
                onChange={(option) =>
                  dispatch(
                    changeJobDescription({
                      value: (option as SelectOption)?.value ?? "",
                      key: "job_type",
                    })
                  )
                }
                instanceId={"job-type"}
                isMulti={false}
                required
                label="Loại công việc"
                options={jobType}
              />
            )}
          />

          <Controller
            control={control}
            name="skills"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={uploadJD.jobDescription.skills?.map((item) => ({
                  value: item,
                  label: item,
                }))}
                onChange={(option) => {
                  const skills = (option as SelectOption[]).map((item) => item.value);
                  dispatch(
                    changeJobDescription({
                      value: skills,
                      key: "skills",
                    })
                  );
                }}
                instanceId={"skill"}
                isMulti={true}
                required
                label="Kỹ năng"
                options={skills}
              />
            )}
          />
          <Controller
            control={control}
            name="gender"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={{
                  label: uploadJD.jobDescription.gender.toString(),
                  value: uploadJD.jobDescription.gender.toString(),
                }}
                // onChange={(option) =>
                //   dispatch(
                //     changeJobDescription({
                //       value: option?.value ?? "",
                //       key: "gender",
                //     })
                //   )
                // }
                instanceId={"gender"}
                isMulti={false}
                required
                label="Giới tính"
                options={gender}
              />
            )}
          />

          <div>
            <p className="mb-2 text-sm font-medium text-primary mt-0">
              Ngày bắt đầu nhận việc<span className="text-red-500"> *</span>
            </p>
            <Controller
              control={control}
              name="received_job_time"
              render={({ field }) => (
                <DatePicker
                  {...field}
                  value={dayjs(uploadJD.jobDescription.received_job_time)}
                  onChange={(date) =>
                    dispatch(
                      changeJobDescription({
                        value:
                          date?.format("YYYY-MM-DD HH:mm:ss").toString() ?? "",
                        key: "received_job_time",
                      })
                    )
                  }
                  slotProps={{
                    openPickerButton: {
                      color: "primary",
                    },
                    textField: {
                      fullWidth: true,
                      sx: {
                        bgcolor: "white",
                        borderRadius: "10px",
                        fieldset: {
                          borderColor: "primary.main",
                          borderRadius: "10px",
                        },
                      },
                    },
                  }}
                />
              )}
            />
          </div>
          <div className="col-span-2">
            <p className="mb-2 text-sm font-medium text-primary mt-0 ">
              Thời gian làm việc<span className="text-red-500"> *</span>
            </p>
            <div className="flex flex-row gap-8">
              <div className="w-1/2 flex flex-row gap-8">
                <Controller
                  control={control}
                  name="start_days_of_week"
                  render={({ field }) => (
                    <CustomSelect
                      {...field}
                      value={{
                        label: uploadJD.jobDescription.start_days_of_week,
                        value: uploadJD.jobDescription.start_days_of_week,
                      }}
                      // onChange={(option) =>
                      //   dispatch(
                      //     changeJobDescription({
                      //       value: option?.value ?? "",
                      //       key: "start_days_of_week",
                      //     })
                      //   )
                      // }
                      instanceId={"start-date"}
                      isMulti={false}
                      options={daysOfWeek}
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="end_days_of_week"
                  render={({ field }) => (
                    <CustomSelect
                      {...field}
                      value={{
                        label: uploadJD.jobDescription.end_days_of_week,
                        value: uploadJD.jobDescription.end_days_of_week,
                      }}
                      // onChange={(option) =>
                      //   dispatch(
                      //     changeJobDescription({
                      //       value: option?.value ?? "",
                      //       key: "end_days_of_week",
                      //     })
                      //   )
                      // }
                      instanceId={"end-date"}
                      isMulti={false}
                      options={daysOfWeek}
                    />
                  )}
                />
              </div>
              <div className="w-1/2 flex flex-row gap-8 items-center">
                <div>
                  <label className="block mb-2"></label>
                  <Controller
                    control={control}
                    name="start_work_hours"
                    render={({ field }) => (
                      <TimePicker
                        {...field}
                        value={dayjs(uploadJD.jobDescription.start_work_hours)}
                        onChange={(hours) =>
                          // console.log(`${hours?.hour()}:${hours?.minute()}`)
                          dispatch(
                            changeJobDescription({
                              value:
                                hours
                                  ?.format("YYYY-MM-DD HH:mm:ss")
                                  .toString() ?? "",
                              key: "start_work_hours",
                            })
                          )
                        }
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

                              borderRadius: "10px",
                              fieldset: {
                                borderColor: "primary.main",
                                borderRadius: "10px",
                              },
                            },
                          },
                        }}
                      />
                    )}
                  />
                </div>
                <HorizontalRuleIcon sx={{ color: "primary.main" }} />
                <div>
                  <label className="block mb-2"></label>
                  <Controller
                    control={control}
                    name="end_work_hours"
                    render={({ field }) => (
                      <TimePicker
                        {...field}
                        value={dayjs(uploadJD.jobDescription.end_work_hours)}
                        onChange={(hours) =>
                          // console.log(`${hours?.hour()}:${hours?.minute()}`)
                          dispatch(
                            changeJobDescription({
                              value:
                                hours
                                  ?.format("YYYY-MM-DD HH:mm:ss")
                                  .toString() ?? "",
                              key: "end_work_hours",
                            })
                          )
                        }
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

                              borderRadius: "10px",
                              fieldset: {
                                borderColor: "primary.main",
                                borderRadius: "10px",
                              },
                            },
                          },
                        }}
                      />
                    )}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-2">
            <Controller
              control={control}
              name="descriptions"
              render={({ field }) => (
                <Textarea
                  {...field}
                  value={uploadJD.jobDescription.descriptions}
                  required
                  label="Mô tả công việc"
                  placeholder="Please type here (maximum 500 words)"
                  rows={8}
                  onChange={(e) =>
                    dispatch(
                      changeJobDescription({
                        value: e.target.value,
                        key: "descriptions",
                      })
                    )
                  }
                />
              )}
            />
          </div>
          <div className="col-span-2">
            <Controller
              control={control}
              name="requirements"
              render={({ field }) => (
                <Textarea
                  {...field}
                  value={uploadJD.jobDescription.requirements}
                  onChange={(e) =>
                    dispatch(
                      changeJobDescription({
                        value: e.target.value,
                        key: "requirements",
                      })
                    )
                  }
                  required
                  label="Yêu cầu công việc"
                  placeholder="Please type here (maximum 500 words)"
                  rows={8}
                />
              )}
            />
          </div>
          <div className="col-span-2">
            <Controller
              control={control}
              name="benefits"
              render={({ field }) => (
                <Textarea
                  {...field}
                  value={uploadJD.jobDescription.benefits}
                  onChange={(e) =>
                    dispatch(
                      changeJobDescription({
                        value: e.target.value,
                        key: "benefits",
                      })
                    )
                  }
                  required
                  label="Quyền lợi"
                  placeholder="Please type here (maximum 500 words)"
                  rows={8}
                />
              )}
            />
          </div>
          <Controller
            control={control}
            name="levels"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={uploadJD.jobDescription.levels?.map((item) => ({
                  value: item,
                  label: item,
                }))}
                // onChange={(option) => {
                //   dispatch(
                //     changeJobDescription({
                //       value: option.map((item) => item.value),
                //       key: "levels",
                //     })
                //   );
                // }}
                instanceId={"jobLevelOpt"}
                isMulti={true}
                required
                label="Cấp bậc đảm nhiệm"
                options={jobLevelOpt}
                isOptionDisabled={() =>
                  (uploadJD.jobDescription.levels?.length ?? 0) >= 3
                }
              />
            )}
          />
          <Controller
            control={control}
            name="roles"
            render={({ field }) => (
              <CustomSelect
                {...field}
                value={uploadJD.jobDescription.roles?.map((item) => ({
                  value: item,
                  label: item,
                }))}
                // onChange={(option) => {
                //   dispatch(
                //     changeJobDescription({
                //       value: option.map((item) => item.value),
                //       key: "roles",
                //     })
                //   );
                // }}
                instanceId={"responsibilityOpt"}
                isMulti={true}
                required
                label="Vai trò đảm nhiệm"
                placeholder={"custom placeholder component"}
                options={responsibilityOpt}
                isOptionDisabled={() =>
                  (uploadJD.jobDescription.roles?.length ?? 0) >= 3
                }
              />
            )}
          />

          <div className="col-span-2">
            <p className="mb-2 text-sm font-medium text-primary mt-0 ">
              Số năm kinh nghiệm<span className="text-red-500"> *</span>
            </p>
            <div className="flex flex-row gap-8 ">
              <div className="w-1/2 flex flex-row gap-8 items-center">
                <Controller
                  control={control}
                  name="yoe_from"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={uploadJD.jobDescription.yoe_from}
                      onChange={(e) =>
                        dispatch(
                          changeJobDescription({
                            value: e.target.value,
                            key: "yoe_from",
                          })
                        )
                      }
                      required
                      placeholder="Please type here"
                      label="From"
                    />
                  )}
                />

                <HorizontalRuleIcon
                  sx={{ color: "primary.main" }}
                  className="mt-5"
                />
                <Controller
                  control={control}
                  name="yoe_to"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={uploadJD.jobDescription.yoe_to}
                      onChange={(e) =>
                        dispatch(
                          changeJobDescription({
                            value: e.target.value,
                            key: "yoe_to",
                          })
                        )
                      }
                      required
                      placeholder="Please type here"
                      label="To"
                    />
                  )}
                />
              </div>
              <div className="w-1/2">
                <Controller
                  control={control}
                  name="num_recruit"
                  render={({ field }) => (
                    <Input
                      {...field}
                      value={uploadJD.jobDescription.num_recruit}
                      onChange={(e) =>
                        dispatch(
                          changeJobDescription({
                            value: e.target.value,
                            key: "num_recruit",
                          })
                        )
                      }
                      required
                      placeholder="Please type here"
                      label="Số lượng tuyển dụng"
                    />
                  )}
                />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </form>
      </div>
    </LocalizationProvider>
  );
}

export default JDForm;
