"use client";

import CustomSelect from "@/common/components/control/select/Select";
import { changeSkill, selectUploadCV } from "@/lib/redux/slices";
import { useDispatch, useSelector } from "react-redux";
const options = [
  { value: "figma", label: "Figma" },
  { value: "UI", label: "UI" },
  { value: "Design", label: "Design" },
];

const UploadCV3 = () => {
  const dispatch = useDispatch()
  const uploadCV = useSelector(selectUploadCV);
  return (
    <>
      <div className="container p-10 bg-background rounded-xl">
        <CustomSelect
          isMulti
          required
          label="Kỹ năng"
          options={options}
          instanceId={"skill"}
          value={uploadCV.skills.map((item) => ({ value: item, label: item }))}
          onChange={(value) => dispatch(changeSkill(value.map(item => item.value)))}
        />
      </div>
      <div className="container mt-10">
        <div className="flex flex-row justify-between">
          <button
            type="button"
            className=" bg-primary rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-none cursor-pointer text-white"
          >
            Hủy
          </button>
          <div className="flex flex-row gap-5">
            <button
              type="button"
              className=" bg-primary rounded-3xl border-none text-sm px-16 py-2.5 me-2 mb-2 font-bold cursor-pointer text-white"
            >
              Lưu nháp
            </button>
            <button
              type="button"
              className=" bg-primary rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-none cursor-pointer text-white"
            >
              Tiếp tục
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadCV3;
