import { Input } from "@/common/components/control/Input";
import {CustomSelect} from "@/common/components/control/select/Select";

const AwardPrizeForm = () => {
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Treo thưởng</p>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-row gap-8">
            <Input
              required
              placeholder="Please type here"
              label="Treo điểm thưởng (cho 1 Ứng viên)"
            />
            <CustomSelect
              instanceId={"academic-degree"}
              isMulti={false}
              required
              label="Giá trị tương ứng"
            />
          </div>

          <CustomSelect
            instanceId={"academic-degree"}
            isMulti={false}
            required
            label="Thời gian bảo hành"
          />
        </div>
      </div>
    </>
  );
};

export default AwardPrizeForm;
