"use client";

import { useSelector } from "react-redux";
import ProjectItem from "./ProjectItem";
import { selectUploadCV } from "@/lib/redux/slices";

export default function UploadCV7() {
  const uploadCV = useSelector(selectUploadCV)

  return (
    <>
      <div className="container">
        <div className="p-10 bg-background rounded-3xl">
          <div className="flex flex-col-reverse gap-10">
            {uploadCV.projects.map((project, index) => (
              <ProjectItem
                key={index}
                index={index}
                newest={index === uploadCV.projects.length - 1}
                initialValues={project}
              />
            ))}
          </div>
        </div>
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
}
