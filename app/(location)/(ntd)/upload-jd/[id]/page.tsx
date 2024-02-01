"use client";
import { redirect, RedirectType } from "next/navigation";
import UploadJD from "@/modules/posting-job/page/upload-jd/UploadJD";
import { IconButton } from "@mui/material";
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Input } from "@/common/components/control/Input";
import JDForm from "@/modules/posting-job/page/upload-jd/component/jd-form/JDForm";
function UploadJDPage({ params }: { params: any }) {
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
      <div className="container">
        <IconButton aria-label="delete">
          <ArrowCircleLeftIcon sx={{color: '#063776', fontSize: 40}}/>
        </IconButton>


        <JDForm/>
      </div>
    </>
  );
}

export default UploadJDPage;
