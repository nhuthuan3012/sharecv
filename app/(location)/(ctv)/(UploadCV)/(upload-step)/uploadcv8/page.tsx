"use client";

import AwardItem from "./AwardItem";
import { useSelector } from "react-redux";
import { selectUploadCV } from "@/lib/redux/slices";
import { fillResume } from "@/common/apis/upload_cv";
import { useRouter } from "next/navigation";


export default function UploadCV8() {
  const router = useRouter();
  const uploadCV = useSelector(selectUploadCV);


  const handleFillResume = async (e: any) => {
    let avatar = await fetch(uploadCV.personal_infor.avatar).then(r => r.blob());
    let cv_file = await fetch(uploadCV.personal_infor.cv_file).then(r => r.blob())
    const other = [
      {certificate_name: "ACCA", certificate_point_level: "B1", start_time: "2022-01-22 10:16:09", end_time: "2023-01-22 10:16:09"},
      {certificate_name: "CPA", certificate_point_level: "", start_time: "2019-01-22 10:16:09", end_time: "2023-01-22 10:16:09"}
      ]
    e.preventDefault()
    await fillResume({
      job_id: "1",
      avatar: avatar,
      cv_file: cv_file,
      name: uploadCV.personal_infor.name,
      industry: uploadCV.personal_infor.industry,
      level: uploadCV.personal_infor.level,
      current_job: uploadCV.personal_infor.job,
      phone: uploadCV.personal_infor.phone,
      email: uploadCV.personal_infor.email,
      address: uploadCV.personal_infor.address,
      city: uploadCV.personal_infor.city,
      country: uploadCV.personal_infor.country,
      objectives: uploadCV.personal_infor.objective,
      birthday: uploadCV.personal_infor.birthday,
      gender: uploadCV.personal_infor.gender,
      descriptions: "",
      projects: uploadCV.projects,
      identification_code: uploadCV.personal_infor.id,
      linkedin: uploadCV.personal_infor.linkedln,
      website: uploadCV.personal_infor.website,
      facebook: uploadCV.personal_infor.facebook,
      instagram: uploadCV.personal_infor.youtube,
      education: uploadCV.educations,
      work_experiences: uploadCV.experiences,
      skills: uploadCV.skills,
      awards: uploadCV.awards,
      language_certificates: uploadCV.certificates,
      other_certificates: JSON.stringify(other),
    });
  };
  return (
    <>
      <div className="container">
        <div className="p-10 bg-background rounded-3xl">
          <div className="flex flex-col-reverse gap-10">
            {uploadCV.awards.map((award, index) => (
              <AwardItem
                key={index}
                index={index}
                newest={index === uploadCV.awards.length - 1}
                initialValues={award}
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
              onClick={(e) => handleFillResume(e)}
              type="button"
              className=" bg-primary rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-none cursor-pointer text-white"
            >
              Gửi ứng viên
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
