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
import { useSelector } from "react-redux";
import { selectUploadJD } from "@/lib/redux/slices";
import { fillFormUploadJD } from "@/common/apis/upload-jd";
import { toast } from "react-toastify";
function UploadJDPage({ params }: { params: any }) {
  const uploadJd = useSelector(selectUploadJD);
  const router = useRouter();
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }

  const handleClick = async () => {
    try {
      fillFormUploadJD(uploadJd);
    } catch (err) {
      console.log(err);
    }
  };
  const handleSumbit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const toastId = toast.loading("Đang tạo JD...", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
    fillFormUploadJD(uploadJd)
      .then((res) => {
        router.push("/job-list");
        toast.update(toastId, {
          render: `${res.data.message}, Upload JD Thành công....`,
          type: "success",
          isLoading: false,
          autoClose: 3000,
        });
      })
      .catch((err) => {
        toast.update(toastId, {
          render: "Upload thất bại",
          type: "error",
          isLoading: false,
          autoClose: 3000,
        });
      });
  };

  return (
    <>
      <p
        className="font-bold text-3xl text-center py-10"
        style={{ backgroundColor: "#E4F2F9", color: "#073776" }}
      >
        Mô tả công việc
      </p>
      <form
        className="container flex flex-col gap-10"
        onSubmit={(e) => handleSumbit(e)}
      >
        <div>
          <IconButton
            aria-label="delete"
            onClick={() => router.push("/parse-jd")}
          >
            <ArrowCircleLeftIcon sx={{ color: "#063776", fontSize: 40 }} />
          </IconButton>
        </div>
        <JDForm />
        <EducationForm />
        <LanguageForm />
        <OtherCertificateForm />
        <SalaryForm />
        <WorkingAddressForm />
        {/* <AwardPrizeForm/> */}
        <div className="flex flex-row justify-end gap-8">
          <button
            onClick={() => handleClick()}
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Lưu nháp
          </button>

          <button
            type="submit"
            className=" bg-primary hover:  rounded-3xl text-sm px-16 py-2.5 me-2 mb-2 font-bold border-solid cursor-pointer transform active:scale-75 transition-transform"
            style={{ color: "white", borderColor: "#073776" }}
          >
            Gửi
          </button>
        </div>
      </form>
    </>
  );
}

export default UploadJDPage;
