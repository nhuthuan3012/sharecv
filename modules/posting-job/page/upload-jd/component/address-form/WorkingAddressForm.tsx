import { Input } from "@/common/components/control/Input";
import {CustomSelect} from "@/common/components/control/select/Select";
import { cityOpt, countryOpt } from "./mockData";

const WorkingAddressForm = () => {
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Địa điểm làm việc</p>
        </div>
        <div className="flex flex-col gap-5">
          <Input required placeholder="Please type here" label="Địa chỉ" />
          <div className="flex flex-row gap-8">
            <CustomSelect
              instanceId={"academic-degree"}
              isMulti={false}
              required
              label="Tỉnh/ Thành phố"
              options={cityOpt}
            />
            <CustomSelect
              instanceId={"academic-degree"}
              isMulti={false}
              required
              label="Quốc gia"
              options={countryOpt}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default WorkingAddressForm;
