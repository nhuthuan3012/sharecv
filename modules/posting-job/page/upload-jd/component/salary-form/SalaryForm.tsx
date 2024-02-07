import { Input } from "@/common/components/control/Input";
import {CustomSelect} from "@/common/components/control/select/Select";
import { IconButton } from "@mui/material";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { currencyUnitOpt } from "./mockData";

const SalaryForm = () => {
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Lương</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className=" flex flex-row w-full gap-4">
            <div className="flex flex-row w-full gap-8">
              <div className="w-1/2">
                <span className="block mb-2 text-sm font-medium text-primary">
                  Lương min <span className="text-red-500"> *</span>
                </span>
                
                <div className="flex flex-row gap-4 ">
                  <Input placeholder="Please type here" />
                  <CustomSelect
                    instanceId={"currency-unit"}
                    isMulti={false}
                    options={currencyUnitOpt}
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="block mb-2 text-sm font-medium text-primary">
                  Lương max <span className="text-red-500"> *</span>
                </label>
                
                <div className="flex flex-row gap-4 ">
                  <Input placeholder="Please type here" />
                  <CustomSelect
                    instanceId={"currency-unit"}
                    isMulti={false}
                    options={currencyUnitOpt}
                  />
                </div>
              </div>
            </div>
            <div className="mt-11">
              <IconButton>
                <HighlightOffIcon color="error" />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SalaryForm;
