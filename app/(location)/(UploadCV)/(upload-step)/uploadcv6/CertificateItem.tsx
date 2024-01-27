import { DatePicker } from "@mui/x-date-pickers";
import { CertificateItemProps } from "./types";
import dayjs from "dayjs";
import { IconButton } from "@mui/material";
import SquareAdd from "../uploadcv4/search-cv/icons/SquareAdd";
import SquareXmark from "../uploadcv4/search-cv/icons/SquareXmark";
import CustomSelect from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";
import { languageOptions, languageCertificationOptions } from "./mockData";
import { useDispatch } from "react-redux";
import { addCertificate, changeCertificate, removeCertificate } from "@/lib/redux/slices";

export default function CertificateItem({
  index,
  initialValues,
  newest,
}: CertificateItemProps) {
  const dispatch = useDispatch()
  return (
    <div
      className={`flex flex-col gap-5  ${
        !newest &&
        "border-t-2 border-r-0 border-b-0 border-l-0 border-solid border-slate-200"
      }`}
    >
      <div className="flex flex-row gap-10 items-center">
        <span className="font-bold text-primary">{`Chứng chỉ ${
          index + 1
        }`}</span>
        {newest ? (
          <IconButton onClick={() => dispatch(addCertificate())}>
            <SquareAdd className="fill-green-500" />
          </IconButton>
        ) : (
          <IconButton onClick={() => dispatch(removeCertificate(index))}>
            <SquareXmark className="fill-red-600" />
          </IconButton>
        )}
      </div>
      <div>
        <CustomSelect
          instanceId={"language"}
          isMulti={false}
          options={languageOptions}
          label="Tên ngoại ngữ"
          value={{ label: initialValues.certificate_language, value: initialValues.certificate_language }}
          onChange={(value) => dispatch(changeCertificate({value: value?.value as string, key: 'certificate_language', index: index}))}
        />
      </div>
      <div className="flex flex-row gap-10">
        <CustomSelect
          label="Tên chứng chỉ"
          instanceId={"certificate_name"}
          isMulti={false}
          options={languageCertificationOptions}
          value={{ label: initialValues.certificate_name, value: initialValues.certificate_name }}
          onChange={(value) => dispatch(changeCertificate({value: value?.value as string, key: 'certificate_name', index: index}))}
        />
        <Input
          label="Level"
          placeholder="Please type here"
          value={initialValues.certificate_point_level}
          onChange={(e) => dispatch(changeCertificate({value: e.target.value, key: 'certificate_point_level', index: index}))}
        />
      </div>
      <div className="flex flex-row gap-10">
        <div className="flex flex-col w-full">
          <p className="font-medium text-primary  text-sm">From</p>
          <DatePicker
            views={["month", "year"]}
            value={dayjs(initialValues.start_time)}
            onChange={(date) => dispatch(changeCertificate({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'start_time', index: index}))}
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
            onChange={(date) => dispatch(changeCertificate({value: date?.format('YYYY-MM-DD HH:mm:ss') as string , key: 'end_time', index: index}))}
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
