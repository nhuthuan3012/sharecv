import {CustomSelect} from "@/common/components/control/select/Select";
import { Input } from "@/common/components/control/Input";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useDispatch, useSelector } from "react-redux";
import { addLanguageCertificate, changeLanguageCertificate, removeLanguageCertificate, selectUploadJD } from "@/lib/redux/slices";
import { certiNameOpt, languageOpt } from "./mockData";
import { SelectOption } from "@/common/components/control/select/types";

const LanguageForm = () => {
  const uploadJD = useSelector(selectUploadJD);
  const dispatch = useDispatch();
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Ngoại ngữ</p>
          <button
            onClick={() => dispatch(addLanguageCertificate())}
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </div>
        <div className="flex flex-col gap-5">
          {uploadJD.languageCerttificate.map((item, index) => (
            <div className=" flex flex-row w-full gap-4 border-2 border-slate-300 border-solid p-5 rounded-2xl" key={index}>
              <div className="flex flex-row gap-8 w-full">
                <CustomSelect
                  value={{value: item.certificate_language, label: item.certificate_language}}
                  onChange={(newValue) =>
                    {
                      // field.onChange((newValue as SelectOption)?.value ?? "")
                      dispatch(
                        changeLanguageCertificate({
                          index: index,
                          value: (newValue as SelectOption)?.value ?? "",
                          key: "certificate_language",
                        })
                      )
                    }
                  }
                  instanceId={"academic-degree"}
                  isMulti={false}
                  required
                  label="Tên ngoại ngữ"
                  options={languageOpt}
                />
                <CustomSelect
                  value={{value: item.certificate_name, label: item.certificate_name}}
                  onChange={(newValue) =>
                    {
                      // field.onChange((newValue as SelectOption)?.value ?? "")
                      dispatch(
                        changeLanguageCertificate({
                          index: index,
                          value: (newValue as SelectOption)?.value ?? "",
                          key: "certificate_name",
                        })
                      )
                    }
                  }
                  instanceId={"certificate-name"}
                  isMulti={false}
                  required
                  label="Tên chứng chỉ"
                  options={certiNameOpt[item.certificate_language]}
                />
                <Input
                value={item.certificate_point_level}
                onChange={(e) => dispatch(changeLanguageCertificate({
                  value: e.target.value,
                  index: index, 
                  key: "certificate_point_level"
                }))} 
                required placeholder="Please type here" label="Level" />
              </div>
              <div className="mt-8">
                <IconButton onClick={() => dispatch(removeLanguageCertificate(index))}>
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

export default LanguageForm;
