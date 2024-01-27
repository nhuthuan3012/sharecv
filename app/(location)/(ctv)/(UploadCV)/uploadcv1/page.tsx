"use client";

import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import { FilePondFile } from "filepond";
import "../UploadCV1.css"
import { uploadCV } from "@/common/apis/upload_cv";
import { useRouter } from 'next/navigation'
import { useDispatch, useSelector } from "react-redux";
import { addUploadCV, selectUploadCV } from "@/lib/redux/slices";
import {  UnknownAction } from "@reduxjs/toolkit";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

const UploadCV1 = () => {
  const dispatch = useDispatch()
  const uploadCV = useSelector(selectUploadCV)
  const navigate = useRouter()
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      const res =  dispatch(addUploadCV(files[0]) as unknown as UnknownAction);
      
      if (res){
        navigate.push("/uploadcv2")
      }
    }
    catch(err){
      console.log(err)
    }
    
  }
  

  const [files, setFiles] = useState<File[]>([]);

  return (
    <div className="container">
      <div className="flex flex-col gap-16">
        <div
          className="rounded-xl flex justify-center items-center"
          style={{
            backgroundImage: 'url("/image/uploadCV/ctv1.svg")',
            height: "355px",
          }}
        >
          <div>
            <p className="text-white font-bold text-3xl mb-0">
              Giới thiệu ứng viên
            </p>
            <div>
              <span className="text-white">Chi tiết công việc/ </span>
              <span className="font-semibold" style={{ color: "#d98c26" }}>
                Giới thiệu ứng viên
              </span>
            </div>
          </div>
        </div>

        <form className="rounded-xl p-9" style={{ backgroundColor: "#f8fbfd" }} 
            onSubmit={(e) => handleSubmit(e)}>
          <div >
            <FilePond
              required
              files={files}
              onupdatefiles={(files: FilePondFile[]) =>
                setFiles(files.map((file) => file.file as File))
              }
              allowMultiple={false}
              instantUpload={false}
              credits={false}
              name="files"
              labelIdle='<span class="flex flex-row gap-4 items-center filepond--label-action bg-blue-700 hover:bg-blue-600 py-2 px-4 text-white font-bold no-underline rounded-xl"><svg width="16px" height="16px" viewBox="0 -2 30 30" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:sketch="http://www.bohemiancoding.com/sketch/ns" fill="#000000"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>upload</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" sketch:type="MSPage"> <g id="Icon-Set" sketch:type="MSLayerGroup" transform="translate(-569.000000, -674.000000)" fill="#ffffff"> <path d="M579.732,681.7 L583,677.74 L583,691.998 C583,692.552 583.447,693 584,693 C584.553,693 585,692.552 585,691.998 L585,677.702 L588.299,681.7 C588.69,682.095 589.326,682.095 589.719,681.7 C590.11,681.307 590.11,680.668 589.719,680.274 L584.776,674.283 C584.566,674.073 584.289,673.983 584.016,673.998 C583.742,673.983 583.465,674.073 583.256,674.283 L578.313,680.274 C577.921,680.668 577.921,681.307 578.313,681.7 C578.705,682.095 579.341,682.095 579.732,681.7 L579.732,681.7 Z M598,690 C597.447,690 597,690.448 597,691 L597,698 L571,698 L571,691 C571,690.448 570.553,690 570,690 C569.447,690 569,690.448 569,691 L569,699 C569,699.553 569.447,700 570,700 L598,700 C598.553,700 599,699.553 599,699 L599,691 C599,690.448 598.553,690 598,690 L598,690 Z" id="upload" sketch:type="MSShapeGroup"> </path> </g> </g> </g></svg> Upload File</span>'
            />
          </div>

          <div className="flex flex-row justify-end gap-7 mt-10">
            <button
              type="button"
              className=" bg-white hover:bg-slate-50  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer"
              style={{ color: "#073776", borderColor: "#073776" }}
            >
              Hủy
            </button>
            <button
              type="submit"
              className=" bg-white hover:bg-slate-50  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer"
              style={{ color: "#073776", borderColor: "#073776" }}
            >
              Tiếp tục
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UploadCV1;
