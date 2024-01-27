import { Input } from "@/common/components/control/Input";
import IconButton from "@mui/material/IconButton";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import { AwardItemProps } from "./type";
import { Textarea } from "@/common/components/control/textarea";
import { useDispatch } from "react-redux";
import { addAward, changeAward, removeAward } from "@/lib/redux/slices";


export default function AwardItem({
    index,
  initialValues,
  newest,
}: AwardItemProps) {
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
            <IconButton onClick={() => dispatch(addAward())}>
              <SquareAdd className="fill-green-500" />
            </IconButton>
          ) : (
            <IconButton onClick={() => dispatch(removeAward(index))}>
              <SquareXmark className="fill-red-600" />
            </IconButton>
          )}
        </div>
        <div></div>
        <div className="flex flex-row gap-10">
          <Input
            label="Tên giải thưởng"
            placeholder="Please type here"
            value={initialValues.name}
            onChange={(e) => dispatch(changeAward({value: e.target.value, index: index, key: 'name'}))}
          />
        </div>
        <div className="flex flex-row gap-10">
          <div className="flex flex-col w-full">
            <p className="font-medium text-primary  text-sm">Thời điểm nhận giải</p>
            <DatePicker
              views={["month", "year"]}
              value={dayjs(initialValues.time)}
              onChange={(date) => dispatch(changeAward({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'time', index: index}))}
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
            <Textarea
            label="Mô tả"
            rows={6}
            placeholder="Please type here"
            value={initialValues.description}
            onChange={(e) => dispatch(changeAward({value: e.target.value, index: index, key:'description'}))}
            />
        </div>
        
      </div>
    );
            }