import { DatePicker } from "@mui/x-date-pickers";
import { ProjectItemProps } from "./type";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import { Input } from "@/common/components/control/Input";
import { useDispatch } from "react-redux";
import { addProject, addProjectAchive, changeProject, changeProjectAchive, removeProject, removeProjectAchive } from "@/lib/redux/slices";


export default function ProjectItem({
    index,
  initialValues,
  newest,
}: ProjectItemProps) {
    const dispatch = useDispatch()
    return (
      <div
        className={`flex flex-col gap-5  ${
          !newest &&
          "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"
        }`}
      >
        <div className="flex flex-row gap-10 items-center">
          <span className="font-bold text-primary">{`Dự án ${index + 1}`}</span>
          {newest ? (
            <IconButton onClick={() =>  dispatch(addProject())}>
              <SquareAdd className="fill-green-500" />
            </IconButton>
          ) : (
            <IconButton onClick={() => dispatch(removeProject(index))}>
              <SquareXmark className="fill-red-600" />
            </IconButton>
          )}
        </div>
        <div></div>
        <div className="flex flex-row gap-10">
          <Input
            label="Tên dự án"
            placeholder="Please type here"
            value={initialValues.name_project}
            onChange={(e) => dispatch(changeProject({key: 'name_project', index: index, value: e.target.value}))}
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-full">
            <p className="font-medium text-primary  text-sm">From</p>
            <DatePicker
              views={["month", "year"]}
              value={dayjs(initialValues.start_time)}
              onChange={(date) => dispatch(changeProject({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'start_time', index: index}))}
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
            <p className="font-medium text-primary text-sm">To</p>
            <DatePicker
              views={["month", "year"]}
              value={dayjs(initialValues.end_time)}
              onChange={(date) => dispatch(changeProject({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'end_time', index: index}))}
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
        <div>
          <div className="flex flex-row gap-5">
          <p className="block mb-2 text-sm font-medium text-primary">
            Thành tựu
          </p>
          <IconButton onClick={() => dispatch(addProjectAchive(index))}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
          </div>
          <div className="flex flex-col gap-5 my-0">
            {initialValues.description?.map((item, awardIndex) => (
              <div key={awardIndex} className="flex flex-row gap-5">
                <Input
                  value={item}
                  placeholder="Please type here"
                  onChange={(e) =>
                    dispatch(changeProjectAchive({index: index,achiveIndex: awardIndex,value: e.target.value}))
                  }
                />
                 <IconButton onClick={() => dispatch(removeProjectAchive({index: index, achiveIndex: awardIndex}))}>
              <SquareXmark className="fill-red-600" />
            </IconButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}