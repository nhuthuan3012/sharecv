import {CustomSelect} from "@/common/components/control/select/Select";
import { academicDegreeOpt, majorOpt } from "./mockData";
import { Input } from "@/common/components/control/Input";

const EducationForm = () => {
  return (
    <>
      <div className="border-2 border-solid rounded-2xl p-8 border-primary bg-light">
        <div className="flex flex-row justify-between">
          <p className="text-primary font-bold">Thông tin công việc</p>
          <button
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </div>
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-5">
            <CustomSelect
              instanceId={"academic-degree"}
              isMulti={false}
              required
              label="Yêu cầu học vấn"
              options={academicDegreeOpt}
            />
            <div className="flex flex-row gap-8">
                <CustomSelect
                instanceId={"major"}
                isMulti={false}
                required
                label="Chuyên ngành"
                options={majorOpt}
                />
              <Input
                required
                placeholder="Please type here"
                label="GPA"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EducationForm;
