"use client";

import {
  Box,
  Typography,
  OutlinedInput,
  Select,
  MenuItem,
  Autocomplete,
  TextField,
  Chip,
  IconButton,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import { ExperienceItemProps } from "./type";
import {
  departmentOpt,
  jobLevelOpt,
  jobTitleOpt,
  responsibilityOpt,
} from "./mockData";
import { useState } from "react";
import dayjs from "dayjs";
import { useDispatch } from "react-redux";
import { addExperience, changeExperience, removeExperience } from "@/lib/redux/slices";
import SquareAdd from "../../icons/SquareAdd";
import SquareXmark from "../../icons/SquareXmark";

function ExperienceItem({
  index,
  initialValues,
  newest,
}: ExperienceItemProps) {
  const [disabledPosition, setDisabledPosition] = useState(false);
  const [disabledResponsibilities, setDisabledResponsibilities] =
    useState(false);
  const dispatch = useDispatch()


  return (
    <Box
      p={5}
      border={1}
      borderColor="divider"
      borderRadius="22px"
      className="bg-slate-50 grid grid-cols-2 gap-8"
    >
      <div className="col-span-2 flex items-center">
        <Typography className="font-bold text-primary mr-14">
          Kinh nghiệm {index + 1}
        </Typography>
        {newest ? (
          <IconButton onClick={() => dispatch(addExperience())}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(removeExperience(index))}>
            <SquareXmark className="fill-red-600" />
          </IconButton>
        )}
      </div>

      <div className="col-span-2">
        <Typography className="font-medium text-primary mb-2">
          Tên công ty<span className="text-red-500">*</span>
        </Typography>
        <OutlinedInput
          fullWidth
          placeholder="Please type here"
          sx={{
            bgcolor: "white",
            fieldset: {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
          }}
          value={initialValues.company_name}
          onChange={(e) => dispatch(changeExperience({value: e.target.value, key: 'company_name',index: index}))}
        />
      </div>

      <div>
        <Typography className="font-medium text-primary mb-2">
          Tên công việc<span className="text-red-500">*</span>
        </Typography>
        <Select
          fullWidth
          sx={{
            bgcolor: "white",
            fieldset: {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
            "& .MuiSelect-select .notranslate::after": "Select an option"
              ? {
                  content: `"${"Select an option"}"`,
                  opacity: 0.42,
                }
              : {},
          }}
          value={initialValues.job_title}
          onChange={(e) => dispatch(changeExperience({value: e.target.value, key: 'job_title',index: index}))}
        >
          {jobTitleOpt.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <Typography className="font-medium text-primary mb-2">
          Ngành nghề<span className="text-red-500">*</span>
        </Typography>
        <Select
          fullWidth
          sx={{
            bgcolor: "white",
            fieldset: {
              borderColor: "primary.main",
              borderRadius: "10px",
            },
            "& .MuiSelect-select .notranslate::after": "Select an option"
              ? {
                  content: `"${"Select an option"}"`,
                  opacity: 0.42,
                }
              : {},
          }}
          value={initialValues.working_industry}
          onChange={(e) => dispatch(changeExperience({value: e.target.value, key: 'working_industry',index: index}))}
        >
          {departmentOpt.map((item, index) => (
            <MenuItem key={index} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </div>

      <div>
        <Typography className="font-medium text-primary mb-2">
          Cấp bậc đảm nhiệm<span className="text-red-500">*</span>
        </Typography>
        <Autocomplete
          multiple={false}
          fullWidth
          filterSelectedOptions
          options={jobLevelOpt}
          getOptionLabel={(option) => option}
          value={initialValues.levels}
          disabled={disabledPosition}
          onChange={(_, value) => {
            dispatch(changeExperience({value: value as string, key: 'levels', index: index}));
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                disabled={false}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              variant="outlined"
              {...params}
              placeholder="Max 3 options"
              sx={{
                bgcolor: "white",
                fieldset: {
                  borderColor: "primary.main",
                  borderRadius: "10px",
                },
              }}
            />
          )}
        />
      </div>

      <div>
        <Typography className="font-medium text-primary mb-2">
          Vai trò đảm nhiêm<span className="text-red-500">*</span>
        </Typography>
        <Autocomplete
          multiple = {false}
          fullWidth
          filterSelectedOptions
          options={responsibilityOpt}
          getOptionLabel={(option) => option}
          value={initialValues.roles}
          disabled={disabledResponsibilities}
          onChange={(_, value) => {
            dispatch(changeExperience({value: value as string, key: 'roles', index: index}))
          }}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                {...getTagProps({ index })}
                key={index}
                label={option}
                disabled={false}
              />
            ))
          }
          renderInput={(params) => (
            <TextField
              variant="outlined"
              {...params}
              placeholder="Max 3 options"
              sx={{
                bgcolor: "white",
                fieldset: {
                  borderColor: "primary.main",
                  borderRadius: "10px",
                },
              }}
            />
          )}
        />
      </div>

      <div>
        <Typography className="font-medium text-primary mb-2">
          Thời gian bắt đầu<span className="text-red-500">*</span>
        </Typography>
        <DatePicker
          value={dayjs(initialValues.start_time)}
          onChange={(date) => dispatch(changeExperience({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'start_time', index: index}))}
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
        <Typography className="font-medium text-primary mb-2">
          Thời gian kết thúc<span className="text-red-500">*</span>
        </Typography>
        <DatePicker
          value={dayjs(initialValues.end_time)}
          onChange={(date) => dispatch(changeExperience({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'end_time', index: index}))}
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
    </Box>
  );
}

export default ExperienceItem;
