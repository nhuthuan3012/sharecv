"use client";
import { checkHasEnoughPoint } from "@/common/apis/point-package";
import { IResume } from "@/modules/cv-info/resume.interface";
import NtdBookInterviewDialog from "@/modules/interview-ntd-popup/book-interview";
import { NotiEnoughPoint } from "@/modules/interview-ntd-popup/enough-point";
import { Monitor } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { useState } from "react";
import { GENDER, RESUME_STATUS } from "../_constant";
import ViewCV from "../components/ViewCV/ViewCV";

function CvInfoPage({
  cv_id,
  status,
  job_service,
  avatar,
  candidate_name,
  current_job,
  industry,
  birthday,
  gender,
  objectives,
  email,
  phone,
  identification_code,
  address,
  city,
  country,
  linkedin,
  website,
  facebook,
  instagram,
  skills,
  total_point,
  experience,
  educations,
  projects,
  awards,
  certificates,
}: IResume) {
  const initialData: IResume = {
    cv_id: cv_id,
    status: status,
    job_service: job_service,
    avatar: avatar,
    candidate_name: candidate_name,
    current_job: current_job,
    industry: industry,
    birthday: birthday,
    gender: gender,
    objectives: objectives,
    email: email,
    phone: phone,
    identification_code: identification_code,
    address: address,
    city: city,
    country: country,
    linkedin: linkedin,
    website: website,
    facebook: facebook,
    instagram: instagram,
    skills: skills,
    total_point: total_point,
    experience: experience,
    educations: educations,
    projects: projects,
    awards: awards,
    certificates: certificates,
  };
  const today = dayjs();
  const birthdayDate = dayjs(new Date(birthday));
  const [open, setOpen] = useState(false);
  const [missingPoint, setMissingPoint] = useState<number>(-1);

  const handleClose = () => {
    setOpen(false);
  };
  const [iopen, setIOpen] = useState(false);
  const checkEnoughPoint = async () => {
    const res = await checkHasEnoughPoint(cv_id);
    setMissingPoint(res.data);
  };
  const [allown, setAllown] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  return (
    <>
      <Box display="flex" flexDirection="column" width="100%" p={"120px"}>
        <div className="flex w-full items-center mb-8">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-green-600 rounded-full" />
            <Typography className="text-green-600">
              {RESUME_STATUS[status]}
            </Typography>
          </div>

          <Box display="flex" alignItems="center" mx={3}>
            <Monitor color="primary" className="mr-2" />
            <Typography className="text-primary">
              Đăng tin tuyển dụng
            </Typography>
          </Box>

          <div className="flex-1" />

          <Typography className="text-[22px] font-bold text-amber-400">
            {total_point} điểm
          </Typography>
        </div>

        <div className="w-full grid grid-cols-3 gap-5">
          <div
            className={`w-full ${
              allown ? "col-span-3" : "col-span-3"
            } flex flex-col gap-6`}
          >
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              p={5}
              bgcolor="#F8FBFD"
              borderRadius="22px"
            >
              <Box display="flex" alignItems="center">
                <Avatar
                  src={avatar ?? candidate_name}
                  alt=""
                  className="mr-3"
                />
                <Box display="flex" flexDirection="column">
                  <Typography className="text-[22px] text-primary font-bold">
                    {allown ? candidate_name : "Họ và tên"}
                  </Typography>
                  <Typography className="text-green-600 capitalize">
                    {current_job}{" "}
                    <span className="text-black lowercase">ngành</span>{" "}
                    {industry}
                  </Typography>
                </Box>
              </Box>

              <div className="flex flex-col my-5">
                <Typography>
                  Ngày sinh: {birthdayDate.format("DD/MM/YYYY")}
                </Typography>
                <Typography>
                  Tuổi: {today.diff(birthdayDate, "year")}
                </Typography>
                <Typography>Giới tính: {GENDER[gender]}</Typography>
              </div>

              <Typography className="mb-3 font-bold text-[22px]">
                Mục tiêu nghề nghiệp
              </Typography>
              <ul className="list-disc list-inside">
                {objectives?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Box>
            <Box width="100%" display="flex" justifyContent={"center"}>
              <ViewCV {...initialData} />
            </Box>

            <Box width="100%" display="flex" justifyContent={"space-between"}>
              <Button
                variant="outlined"
                sx={{ height: "50px", borderRadius: "20px" }}
              >
                Từ chối
              </Button>
              <Box display="flex" className="gap-5">
                <Button
                  variant="outlined"
                  sx={{ height: "50px", borderRadius: "20px" }}
                >
                  Thêm vào giỏ
                </Button>
                <Box display="flex" className="gap-5" flexDirection={"column"}>
                  <Button
                    className="hover:text-primary"
                    variant="contained"
                    onClick={() => setShowButton(!showButton)}
                    sx={{ height: "50px", borderRadius: "20px" }}
                  >
                    Chọn ứng viên
                  </Button>
                  {showButton ? (
                    <Box display="flex" flexDirection={"column"}>
                      <Button
                        disabled={allown}
                        variant="outlined"
                        onClick={() => {
                          setOpen(true);
                          setAllown(true);
                        }}
                        sx={{ height: "50px", borderRadius: "20px" }}
                      >
                        Mua thông tin
                      </Button>
                      <Button
                        variant="outlined"
                        sx={{ height: "50px", borderRadius: "20px" }}
                        onClick={() => setIOpen(true)}
                      >
                        Đặt lịch phỏng vấn
                      </Button>
                    </Box>
                  ) : (
                    <></>
                  )}
                </Box>
              </Box>
            </Box>
          </div>
        </div>
      </Box>
      <NotiEnoughPoint
        open={open}
        total_point={total_point}
        handleClose={handleClose}
        handleCancel={handleClose}
        missingPoint={missingPoint}
        checkEnoughPoint={checkEnoughPoint}
      />
      <NtdBookInterviewDialog
        total_point={total_point}
        cv_id={cv_id}
        open={iopen}
        setOpen={setIOpen}
      />
    </>
  );
}

export default CvInfoPage;
