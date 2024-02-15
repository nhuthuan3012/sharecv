
import { Language, Monitor } from "@mui/icons-material";
import { Avatar, Box, Button, Typography } from "@mui/material";
import dayjs from "dayjs";
import { GENDER, RESUME_STATUS } from "../_constant";
import ExperienceItem from "../components/ExperienceItem";
import ProjectCarousel from "../components/ProjectCarousel";
import { SocialIcon } from "react-social-icons/component";
import { useState } from "react";
import { IResume } from "../resume.interface";

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
  const today = dayjs();
  const birthdayDate = dayjs(new Date(birthday));

  const [allown, setAllown] = useState<boolean>(false);
  const [showButton, setShowButton] = useState<boolean>(false);
  return (
    <Box display="flex" flexDirection="column" width="100%" p={"120px"}>
      <div className="flex w-full items-center mb-8">
        <div className="flex items-center">
          <div className="w-2 h-2 bg-green-600 rounded-full" />
          <Typography className="text-green-600">{RESUME_STATUS[status]}</Typography>
        </div>

        <Box display="flex" alignItems="center" mx={3}>
          <Monitor color="primary" className="mr-2" />
          <Typography className="text-primary">Đăng tin tuyển dụng</Typography>
        </Box>

        <div className="flex-1" />

        {/* <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "22px",
            px: 5,
            py: 1,
            mx: 1,
          }}
        >
          <Typography className="font-bold">Xem kết quả AI</Typography>
        </Button>

        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            borderRadius: "22px",
            px: 5,
            py: 1,
            mx: 1,
          }}
        >
          <Typography className="font-bold">Xem định giá</Typography>
        </Button> */}

        <Typography className="text-[22px] font-bold text-amber-400">
          {total_point} điểm
        </Typography>
      </div>

      <div className="w-full grid grid-cols-3 gap-5">
        <div
          className={`w-full ${
            allown ? "col-span-2" : "col-span-3"
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
              <Avatar src={avatar ?? candidate_name} alt="" className="mr-3" />
              <Box display="flex" flexDirection="column">
                <Typography className="text-[22px] text-primary font-bold">
                  {allown ? candidate_name:"Họ và tên"}
                </Typography>
                <Typography className="text-green-600 capitalize">
                  {current_job}{" "}
                  <span className="text-black lowercase">ngành</span> {industry}
                </Typography>
              </Box>
            </Box>

            <div className="flex flex-col my-5">
              <Typography>
                Ngày sinh: {birthdayDate.format("DD/MM/YYYY")}
              </Typography>
              <Typography>Tuổi: {today.diff(birthdayDate, "year")}</Typography>
              <Typography>Giới tính: {GENDER[gender]}</Typography>
            </div>

            <Typography className="mb-3 font-bold text-[22px]">
              Mục tiêu nghề nghiệp
            </Typography>
            <ul className="list-disc list-inside">
              {objectives.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Kỹ năng
            </Typography>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Box
                  key={skill}
                  bgcolor="#B7DAED"
                  borderRadius="22px"
                  py={1}
                  px={2}
                >
                  <Typography className="text-primary">{skill}</Typography>
                </Box>
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Kinh nghiệm làm việc
            </Typography>
            <div className="flex flex-col gap-8">
              {experience.map((workExp) => (
                <ExperienceItem
                  key={workExp.job_title}
                  title={workExp.job_title}
                  subTitle1={workExp.levels}
                  subTitle2={workExp.company_name}
                  startDate={workExp.start_time}
                  endDate={workExp.end_time}
                />
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Chứng chỉ
            </Typography>
            <div className="flex flex-col gap-8">
              {certificates.language_certificates.map((item) => (
                <ExperienceItem
                  key={item.certificate_name}
                  title={item.certificate_language}
                  subTitle1={item.certificate_name}
                  subTitle2={item.certificate_level}
                  // startDate={item.startDate}
                  // endDate={item.endDate}
                />
              ))}
              {certificates.other_certificate.map((item) => (
                <ExperienceItem
                  key={item.certificate_name}
                  title={item.certificate_name}
                  subTitle2={item.certificate_level ?? ""}
                  // startDate={item.startDate}
                  // endDate={item.endDate}
                />
              ))}
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Dự án
            </Typography>
            <div className="flex flex-col gap-8">
              <ProjectCarousel initialData={projects} />
            </div>
          </Box>

          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Giải thưởng
            </Typography>
            <div className="flex flex-col gap-8">
              {awards.map((item) => (
                <ExperienceItem
                  key={item.name}
                  title={item.name}
                  startDate={item.time}
                  description={[item.description]}
                />
              ))}
            </div>
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
                      onClick={() => setAllown(true)}
                      sx={{ height: "50px", borderRadius: "20px" }}
                    >
                      Mua thông tin
                    </Button>
                    <Button
                      variant="outlined"
                      sx={{ height: "50px", borderRadius: "20px" }}
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
        {allown ? (
          <div className="flex flex-col w-full">
          <Box
            width="100%"
            display="flex"
            flexDirection="column"
            p={5}
            bgcolor="#F8FBFD"
            borderRadius="22px"
          >
            <Typography className="text-[22px] font-bold mb-3">
              Thông tin cá nhân
            </Typography>
            <div className="flex flex-col gap-8">
              <div>
                <Typography className="text-zinc-500">Email</Typography>
                <Typography className="text-primary font-medium">
                  {email}
                </Typography>
              </div>

              <div>
                <Typography className="text-zinc-500">Số điện thoại</Typography>
                <Typography className="text-primary font-medium">
                  {phone}
                </Typography>
              </div>

              <div>
                <Typography className="text-zinc-500">Số CMND/CCCD</Typography>
                <Typography className="text-primary font-medium">
                  {identification_code}
                </Typography>
              </div>

              <div>
                <Typography className="text-zinc-500">Quốc gia</Typography>
                <Typography className="text-primary font-medium">
                  {country}
                </Typography>
              </div>

              <div>
                <Typography className="text-zinc-500">
                  Tỉnh/Thành phố
                </Typography>
                <Typography className="text-primary font-medium">
                  {city}
                </Typography>
              </div>

              <div>
                <Typography className="text-zinc-500">Địa chỉ</Typography>
                <Typography className="text-primary font-medium">
                  {address}
                </Typography>
              </div>

              <div className="flex items-center">
                {website && (
                  <Language
                    onClick={() =>
                      window.open(website, "_blank", "noopener,noreferrer")
                    }
                    className="mr-3"
                  />
                )}
                {/* {linkedin && <SocialIcon url={linkedin} className="mr-3" />}
                {facebook && <SocialIcon url={facebook} className="mr-3" />}
                {instagram && <SocialIcon url={instagram} className="mr-3" />} */}
              </div>
            </div>
          </Box>
        </div>
        ) : (
          <></>
        )}
      </div>
    </Box>
  );
}

export default CvInfoPage;
