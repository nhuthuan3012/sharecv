"use client";
import { redirect, RedirectType, useRouter } from "next/navigation";
import { IconButton } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import JDForm from "@/modules/posting-job/page/upload-jd/component/jd-form/JDForm";
import EducationForm from "@/modules/posting-job/page/upload-jd/component/education-form/EducationForm";
import LanguageForm from "@/modules/posting-job/page/upload-jd/component/language-form/page";
import OtherCertificateForm from "@/modules/posting-job/page/upload-jd/component/other-certificate-form/OtherCertificateForm";
import SalaryForm from "@/modules/posting-job/page/upload-jd/component/salary-form/SalaryForm";
import WorkingAddressForm from "@/modules/posting-job/page/upload-jd/component/address-form/WorkingAddressForm";
import AwardPrizeForm from "@/modules/posting-job/page/upload-jd/component/award-prize-form/AwardPrizeForm";
function UploadJDPage({ params }: { params: any }) {
  const router = useRouter()
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  return (
    <>
      <p
        className="font-bold text-3xl text-center py-10"
        style={{ backgroundColor: "#E4F2F9", color: "#073776" }}
      >
        Mô tả công việc
      </p>
      <div className="container flex flex-col gap-10">
        <div>
          <IconButton aria-label="delete" onClick={() => router.push('/parse-jd')}>
            <ArrowCircleLeftIcon sx={{ color: "#063776", fontSize: 40 }} />
          </IconButton>
        </div>
        <JDForm />
        <EducationForm />
        <LanguageForm />
        <OtherCertificateForm/>
        <SalaryForm/>
        <WorkingAddressForm/>
        <AwardPrizeForm/>
        <div className="flex flex-row justify-end gap-8">
          
        <button
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Lưu nháp
          </button>
          
          <button
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Thêm
          </button>
        </div>
      </div>
    </>
  );
}

export default UploadJDPage;
