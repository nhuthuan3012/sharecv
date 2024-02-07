import { Input } from "@/common/components/control/Input";
import { CustomSelect } from "@/common/components/control/select/Select";
import { cityOpt, countryOpt } from "./mockData";
import { useDispatch, useSelector } from "react-redux";
import { changeWorkAddressJD, selectUploadJD } from "@/lib/redux/slices";
import { ReduxDispatch } from "@/lib/redux/store";
import { SelectOption } from "@/common/components/control/select/types";

const WorkingAddressForm = () => {
  const uploadJd = useSelector(selectUploadJD);
  const dispatch = useDispatch<ReduxDispatch>();
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Địa điểm làm việc</p>
        </div>
        <div className="flex flex-col gap-5">
          <Input
            value={uploadJd.workAddress.address}
            onChange={(e) =>
              dispatch(
                changeWorkAddressJD({
                  value: e.target.value,
                  key: "address",
                })
              )
            }
            required
            placeholder="Please type here"
            label="Địa chỉ"
          />
          <div className="flex flex-row gap-8">
            <CustomSelect
              value={{
                value: uploadJd.workAddress.city,
                label: uploadJd.workAddress.city,
              }}
              onChange={(newValue) => {
                // field.onChange((newValue as SelectOption)?.value ?? "")
                dispatch(
                  changeWorkAddressJD({
                    value: (newValue as SelectOption)?.value ?? "",
                    key: "city",
                  })
                );
              }}
              instanceId={"city"}
              isMulti={false}
              required
              label="Tỉnh/ Thành phố"
              options={cityOpt}
            />
            <CustomSelect
              value={{
                value: uploadJd.workAddress.country,
                label: uploadJd.workAddress.country,
              }}
              onChange={(newValue) => {
                // field.onChange((newValue as SelectOption)?.value ?? "")
                dispatch(
                  changeWorkAddressJD({
                    value: (newValue as SelectOption)?.value ?? "",
                    key: "country",
                  })
                );
              }}
              instanceId={"country"}
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
