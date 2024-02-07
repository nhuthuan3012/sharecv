import { CustomSelect } from "@/common/components/control/select/Select";
import { academicDegreeOpt, majorOpt } from "./mockData";
import { Input } from "@/common/components/control/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addEducationJD,
  changeEducationJD,
  removeEducationJD,
  selectUploadJD,
} from "@/lib/redux/slices";
import { ReduxDispatch } from "@/lib/redux/store";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { SelectOption } from "@/common/components/control/select/types";

const EducationForm = () => {
  const uploadJD = useSelector(selectUploadJD);
  const dispatch = useDispatch<ReduxDispatch>();

  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Yêu cầu học vấn</p>
          <button
            onClick={() => dispatch(addEducationJD())}
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {uploadJD.education.map((item, index) => (
            <div
              className="flex flex-row gap-4 items-center border-slate-300 border-solid p-5 rounded-2xl"
              key={index}
            >
              <div className="flex flex-col w-full gap-5">
                <CustomSelect
                  value={{ value: item.degree, label: item.degree }}
                  onChange={(newValue) => {
                    // field.onChange((newValue as SelectOption)?.value ?? "")
                    dispatch(
                      changeEducationJD({
                        index: index,
                        value: (newValue as SelectOption)?.value ?? "",
                        key: "degree",
                      })
                    );
                  }}
                  instanceId={"academic-degree"}
                  isMulti={false}
                  required
                  label="Yêu cầu học vấn"
                  options={academicDegreeOpt}
                />
                <div className="flex flex-row gap-8">
                  <CustomSelect
                    value={{ value: item.major, label: item.major }}
                    onChange={(newValue) => {
                      // field.onChange((newValue as SelectOption)?.value ?? "")
                      dispatch(
                        changeEducationJD({
                          index: index,
                          value: (newValue as SelectOption)?.value ?? "",
                          key: "major",
                        })
                      );
                    }}
                    instanceId={"major"}
                    isMulti={false}
                    required
                    label="Chuyên ngành"
                    options={majorOpt}
                  />
                  <Input
                    value={item.gpa}
                    onChange={(e) =>
                      dispatch(
                        changeEducationJD({
                          index: index,
                          value: e.target.value,
                          key: "gpa",
                        })
                      )
                    }
                    required
                    placeholder="Please type here"
                    label="GPA"
                  />
                </div>
              </div>
              <div className="mt-8">
                <IconButton onClick={() => dispatch(removeEducationJD(index))}>
                  <HighlightOffIcon color="error" />
                </IconButton>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default EducationForm;
