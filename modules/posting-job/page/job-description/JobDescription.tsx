"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  ICompanyInfo,
  ICompanyInfoResponse,
  IJobDetailResponse,
} from "@/common/interfaces";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DashboardOutlinedIcon from "@mui/icons-material/DashboardOutlined";

function JobDescription({
  data,
  role,
}: {
  data: IJobDetailResponse;
  role: string;
}) {
  const [showButton, setShowButton] = useState<boolean>(false);
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <Box width="100%">
      <Box
        display="flex"
        width="100%"
        minHeight="400px"
        maxHeight="500px"
        sx={{backgroundImage:`url(${"/background-posting-job.png"})`}}
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography variant="h3">Thêm vị trí</Typography>
      </Box>

      <Box
        sx={{ mt: 10 }}
        px={"120px"}
        width="100%"
        alignItems="center"
        // py={5}
        justifyContent="center"
      >
        <Grid
          container
          spacing={2}
          py={5}
          className="flex w-full"
          sx={{
            backgroundSize: "cover",
          }}
        >
          <Grid
            item
            xs={12}
            height="50px"
            display="flex"
            flexDirection="row"
            justifyContent={"space-between"}
          >
            <Box
              display="flex"
              flexDirection="row"
              width="100%"
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Box display="flex" className="gap-3">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-600 rounded-full" />
                  <Typography
                    className="font-medium text-green-600"
                    sx={{ fontSize: "16px" }}
                  >
                    {data.status ? data.status : "Đang tuyển"}
                  </Typography>
                </div>
                <Typography className="font-medium text-primary">
                  Đăng tin tuyển dụng
                </Typography>
              </Box>
              <Button variant="text">
                <Typography
                  display="inline"
                  sx={{ textDecoration: "underline" }}
                  className="font-bold text-primary"
                >
                  Tạm dừng
                </Typography>
              </Button>
            </Box>
          </Grid>
          <Grid
            item
            xs={8}
            height="200px"
            display="flex"
            flexDirection="column"
            alignItems={"left"}
            justifyContent={"left"}
          >
            <Box
              display="flex"
              flexDirection="row"
              alignItems={"center"}
              justifyContent={"left"}
            >
              <Image
                src={data.company_logo ? data.company_logo : "/Logo.png"}
                height={100}
                width={100}
                alt=""
              />
              <Box
                display="flex"
                py={1}
                px={2}
                height="100%"
                flexDirection="column"
                alignContent={"top"}
                justifyContent={"space-between"}
              >
                <Typography
                  className="font-bold text-primary"
                  sx={{ fontSize: "36px" }}
                >
                  {data.job_title}
                </Typography>
                <Box display="flex" className="gap-5">
                  <Box
                    display="flex"
                    p="5px"
                    className="bg-secondary"
                    sx={{ borderRadius: "20px" }}
                  >
                    <HomeOutlinedIcon className="text-primary" />
                    <Typography className="font-normal text-green-600">
                      {data.company_name}
                    </Typography>
                  </Box>
                  <Box
                    display="flex"
                    p="5px"
                    className="bg-secondary"
                    sx={{ borderRadius: "20px" }}
                  >
                    <DashboardOutlinedIcon className="text-primary" />
                    <Typography className="font-normal text-green-600">
                      {data.industry ? data.industry : "Công nghệ"}
                    </Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box display="flex" className="gap-5">
              <Box
                display="flex"
                flexDirection="row"
                py={3}
                alignContent={"top"}
              >
                <FmdGoodOutlinedIcon className="text-primary" />
                <Typography className="font-normal text-green-600">
                  {data.address}
                </Typography>
              </Box>
              <Box
                display="flex"
                flexDirection="row"
                py={3}
                alignContent={"top"}
              >
                <AccessTimeIcon className="text-primary" />
                <Typography className="font-normal text-green-600">
                  {data.job_type}
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid
            item
            xs={4}
            className="gap-5"
            display="flex"
            height="100px"
            justifyContent={"right"}
          >
            <Box
              height="100px"
              className="gap-5"
              display="flex"
              flexDirection={"row"}
              justifyContent={"right"}
            >
                {role === "collaborator" ? (
                  <Box
                    className="gap-5"
                    display="flex"
                    flexDirection={"row"}
                    justifyContent={"right"}
                  >
                    <Box
                      className="gap-5"
                      display="flex"
                      flexDirection={"column"}
                      justifyContent={"right"}
                    >
                      <Button
                        className="hover:text-primary"
                        variant="contained"
                        onClick={() => setShowButton(!showButton)}
                        sx={{
                          minHeight: "50px",
                          width: "150px",
                          borderRadius: "20px",
                        }}
                      >
                        Giới thiệu
                      </Button>
                      {showButton ? (
                        <Box
                          className="gap-1"
                          display="flex"
                          flexDirection={"column"}
                        >
                          <Button
                            className="hover:text-primary"
                            variant="contained"
                            component={Link}
                            href="http://localhost:3000/uploadcv1"
                            sx={{
                              height: "50px",
                              width: "200px",
                              borderRadius: "10px",
                            }}
                          >
                            Thêm ứng viên
                          </Button>
                          <Button
                            className="hover:text-primary"
                            variant="contained"
                            component={Link}
                            href=""
                            sx={{
                              height: "50px",
                              width: "200px",
                              borderRadius: "10px",
                            }}
                          >
                            Chọn từ danh sách
                          </Button>
                        </Box>
                      ) : (
                        <></>
                      )}{" "}
                    </Box>
                    <Button
                      component={Link}
                      className="hover:text-primary"
                      href=""
                      sx={{
                        height: "50px",
                        width: "150px",
                        borderRadius: "20px",
                      }}
                      variant="contained"
                    >
                      Quan tâm
                    </Button>
                  </Box>
                ) : (
                  <Box
                    className="gap-5"
                    display="flex"
                    flexDirection={"row"}
                    justifyContent={"right"}
                  >
                  <Button
                    className="hover:text-primary"
                    variant="contained"
                    // onClick={() => setShowButton(!showButton)}
                    sx={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "20px",
                    }}
                  >
                    Chỉnh sửa
                  </Button>
                  <Button
                    className="hover:text-primary"
                    variant="contained"
                    // onClick={() => setShowButton(!showButton)}
                    sx={{
                      height: "50px",
                      width: "150px",
                      borderRadius: "20px",
                    }}
                  >
                    Tạo bản sao
                  </Button>
                  </Box>
                )}
              </Box>
          </Grid>
          <Grid
            item
            xs={8}
            display="flex"
            flexDirection="column"
            alignItems={"left"}
            justifyContent={"left"}
          >
            <Box
              py={5}
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Mô tả công việc
              </Typography>
              {data.descriptions ? (
                data.descriptions.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{ mt: 2 }}
                  >{`- ${item}`}</Typography>
                ))
              ) : (
                <></>
              )}
            </Box>
            <Box
              py={5}
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Yêu cầu
              </Typography>
              {data.requirements ? (
                data.requirements.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{ mt: 2 }}
                  >{`- ${item}`}</Typography>
                ))
              ) : (
                <></>
              )}
            </Box>
            <Box
              py={5}
              className={"border-primary"}
              sx={
                {
                  // borderTop: 1,
                  // borderBottom: 1,
                }
              }
            >
              <Typography
                className="text-primary"
                variant="h6"
                sx={{
                  display: { xs: "none", md: "flex" },
                  fontWeight: 700,
                  textDecoration: "none",
                }}
              >
                Quyền lợi
              </Typography>
              {data.benefits ? (
                data.benefits.map((item, index) => (
                  <Typography
                    key={index}
                    sx={{ mt: 2 }}
                  >{`- ${item}`}</Typography>
                ))
              ) : (
                <></>
              )}
            </Box>
            {data.skills !== null ? (
              <Box
                className="bg-background"
                display="flex"
                py={2}
                px={1}
                flexDirection="column"
                alignItems={"left"}
                justifyContent={"left"}
                sx={{ borderRadius: "20px" }}
              >
                <Box
                  className={"border-primary"}
                  sx={
                    {
                      // borderTop: 1,
                      // borderBottom: 1,
                    }
                  }
                >
                  <Typography
                    className="text-primary"
                    variant="h6"
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 700,
                      textDecoration: "none",
                    }}
                  >
                    Kỹ năng
                  </Typography>
                  <Box display="flex">
                    {data.skills.map((item, index) => (
                      <Box
                        key={index}
                        className="bg-secondary"
                        // width="200px"
                        display="flex"
                        my={2}
                        p={2}
                        justifyContent={"center"}
                        alignItems={"center"}
                        sx={{ borderRadius: "20px" }}
                      >
                        <Typography>{item}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            ) : (
              <></>
            )}
          </Grid>
          <Grid
            item
            width="100%"
            xs={4}
            display="flex"
            flexDirection="column"
            justifyContent={"right"}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              justifyContent={"right"}
              sx={
                {
                  // p: 3,
                }
              }
            >
              <Box
                display="flex"
                flexDirection={"column"}
                justifyContent={"right"}
                className="border-primary bg-background"
                sx={{
                  color: "black",
                  // border: 1,
                  // borderColor: "primary",
                  borderRadius: "20px",
                  p: 5,
                }}
              >
                <Typography
                  variant="h6"
                  className="text-primary"
                  sx={{
                    mr: 2,
                    display: { xs: "none", md: "flex" },
                    fontWeight: 700,
                    extDecoration: "none",
                  }}
                >
                  Yêu cầu
                </Typography>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Giới tính
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.gender}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Ngày bắt đầu công việc
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.received_job_time}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Thời gian làm việc
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.working_time}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Ngoại ngữ
                  </Typography>
                  {data.language_certificate ? (
                    data.language_certificate.map((item, index) => (
                      <Typography
                        key={index}
                        className="text-primary"
                        sx={{
                          mr: 2,
                          display: { xs: "none", md: "flex" },
                          fontWeight: 400,
                          fontSize: 15,
                          textDecoration: "none",
                        }}
                      >
                        {`${item.certificate_language} - ${item.certificate_name} - ${item.certificate_point_level}`}
                      </Typography>
                    ))
                  ) : (
                    <></>
                  )}
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Chứng chỉ khác
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.founded_year}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Lương tối thiểu
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.min_salary}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    sx={{
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      color: "gray",
                      textDecoration: "none",
                    }}
                  >
                    Lương tối đa
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.max_salary}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    // className={"text-primary"}
                    sx={{
                      color: "gray",
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    Cấp bậc đảm nhiệm
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.levels}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    // className={"text-primary"}
                    sx={{
                      color: "gray",
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    Vai trò đảm nhiệm
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.roles}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    // className={"text-primary"}
                    sx={{
                      color: "gray",
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    Số năm kinh nghiệm
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.yoe}
                  </Typography>
                </Box>
                <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                  <Typography
                    // className={"text-primary"}
                    sx={{
                      color: "gray",
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    Số lượng tuyển dụng
                  </Typography>
                  <Typography
                    className="text-primary"
                    sx={{
                      mr: 2,
                      display: { xs: "none", md: "flex" },
                      fontWeight: 400,
                      fontSize: 15,
                      textDecoration: "none",
                    }}
                  >
                    {data.num_recruit}
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default JobDescription;
