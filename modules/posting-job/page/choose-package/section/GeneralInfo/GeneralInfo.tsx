"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { ICompanyInfoResponse } from "@/common/interfaces";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
import { CardCarousel } from "../../component/Carousel/CardCarousel";
const initialForm: ICompanyInfoResponse = {
  company_name: "",
  industry: "",
  description: "quản lí",
  tax_code: "",
  phone: "",
  email: "",
  founded_year: 0,
  company_size: 0,
  address: "",
  city: "",
  country: "",
  logo: "/Logo.png",
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function GenaralInfo() {
  const [allowView, setAllowView] = useState<boolean>(false);
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  const projects: Project[] = [
    {
        name: 'Project A',
        start: new Date('2022-01-01'),
        end: new Date('2022-02-28'),
        achie: ['Milestone 1', 'Milestone 2', 'Milestone 3']
    },
    {
        name: 'Project B',
        start: new Date('2022-03-01'),
        end: new Date('2022-04-30'),
        achie: ['Task 1', 'Task 2', 'Task 3']
    },
    {
        name: 'Project C',
        start: new Date('2022-05-01'),
        end: new Date('2022-06-30'),
        achie: ['Goal 1', 'Goal 2', 'Goal 3']
    }
];
  return (
    <Box
      width="100%"
      className="bg-white gap-10"
      display="flex"
      alignItems={"center"}
      flexDirection={"column"}
      justifyContent={"space-around"}
    >
      <Box
        width="100%"
        p={5}
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box width="100%" display={"flex"} justifyContent={"space-between"}>
          <Box display="flex">
            <Image
              src={data.logo ? data.logo : "/Logo.png"}
              height={100}
              width={100}
              alt=""
            />
            <Box
              display="flex"
              py={1}
              flexDirection={"column"}
              justifyContent={"space-between"}
            >
              <Typography
                className="text-primary"
                //   variant="h4"
                sx={{
                  fontSize: "22px",
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                Tên ứng viên
              </Typography>
              <Box display="flex">
                <Typography
                  className="text-green-400"
                  //   variant="h6"
                  sx={{
                    fontSize: "16px",
                    display: { xs: "none", md: "flex" },
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  Vị trí
                </Typography>
                <Typography
                  className="text-black"
                  //   variant="h6"
                  sx={{
                    fontSize: "16px",
                    display: { xs: "none", md: "flex" },
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  ngành
                </Typography>
                <Typography
                  className="text-green-400"
                  //   variant="h6"
                  sx={{
                    fontSize: "16px",
                    display: { xs: "none", md: "flex" },
                    fontWeight: 500,
                    textDecoration: "none",
                  }}
                >
                  phòng ban
                </Typography>
              </Box>
            </Box>
          </Box>
          <Box
            className="bg-secondary"
            width="200px"
            display="flex"
            my={2}
            p={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ borderRadius: "20px" }}
          >
            <Typography>{data.description}</Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-primary"
            sx={{
              fontSize: "16px",
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              textDecoration: "none",
            }}
          >
            Ngày sinh:
          </Typography>
          <Typography
            className="text-primary"
            sx={{
              fontSize: "16px",
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              textDecoration: "none",
            }}
          >
            Tuổi
          </Typography>
          <Typography
            className="text-primary"
            sx={{
              fontSize: "16px",
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              textDecoration: "none",
            }}
          >
            Giới tính
          </Typography>
        </Box>
        <Box
          width="100%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-primary"
            sx={{
              mt: 3,
              mb: 1,
              display: { xs: "none", md: "flex" },
              fontSize: "22px",
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Mục tiêu nghề nghiệp
          </Typography>
          <Typography
            className="text-primary"
            sx={{
              fontSize: "16px",
              display: { xs: "none", md: "flex" },
              fontWeight: 200,
              textDecoration: "none",
            }}
          >
            Ngày sinh:
          </Typography>
        </Box>
      </Box>
      <Box
        p={5}
        width="100%"
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box
          width="100%"
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Box
            display="flex"
            py={1}
            flexDirection={"column"}
            justifyContent={"space-between"}
          >
            <Typography
              className="text-primary"
              //   variant="h4"
              sx={{
                fontSize: "22px",
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              Kỹ năng
            </Typography>
          </Box>
          <Box display="flex" className="gap-10">
            <Box
              className="bg-secondary"
              width="200px"
              display="flex"
              my={2}
              p={2}
              justifyContent={"center"}
              alignItems={"center"}
              sx={{ borderRadius: "20px" }}
            >
              <Typography
                className="text-primary"
                //   variant="h4"
                sx={{
                  fontSize: "20px",
                  display: { xs: "none", md: "flex" },
                  fontWeight: 600,
                  textDecoration: "none",
                }}
              >
                {data.description}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        p={5}
        width="100%"
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box
          display="flex"
          py={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-black"
            //   variant="h4"
            sx={{
              fontSize: "22px",
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Kinh Nghiệm làm việc
          </Typography>
        </Box>
        <Box
          width="100%"
          mt={1}
          display="flex"
          flexDirection="column"
          className="gap-5"
        >
          <Box width="100%" display="flex" flexDirection="column">
            <Typography
              className="text-black"
              //   variant="h4"
              sx={{
                fontSize: "26px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Tên công việc
            </Typography>
          </Box>
          <Box width="100%" display="flex">
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ngành
            </Typography>
            <Typography
              className="text-green-400"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Công ty
            </Typography>
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Thời gian
            </Typography>
          </Box>
          <Box
            className="bg-secondary"
            width="200px"
            display="flex"
            my={2}
            p={2}
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ borderRadius: "20px" }}
          >
            <Typography
              className="text-primary"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 600,
                textDecoration: "none",
              }}
            >
              {data.description}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        p={5}
        width="100%"
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box
          display="flex"
          py={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-black"
            //   variant="h4"
            sx={{
              fontSize: "22px",
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Học vấn
          </Typography>
        </Box>
        <Box
          width="100%"
          mt={1}
          display="flex"
          flexDirection="column"
          className="gap-5"
        >
          <Box width="100%" display="flex" flexDirection="column">
            <Typography
              className="text-black"
              //   variant="h4"
              sx={{
                fontSize: "26px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Tên công việc
            </Typography>
          </Box>
          <Box width="100%" display="flex">
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ngành
            </Typography>
            <Typography
              className="text-green-400"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Công ty
            </Typography>
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Thời gian
            </Typography>
          </Box>
        </Box>
      </Box>
      
      <Box
        p={5}
        width="100%"
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box
          display="flex"
          py={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-black"
            //   variant="h4"
            sx={{
              fontSize: "22px",
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Chứng chỉ
          </Typography>
        </Box>
        <Box
          width="100%"
          mt={1}
          display="flex"
          flexDirection="column"
          className="gap-5"
        >
          <Box width="100%" display="flex" flexDirection="column">
            <Typography
              className="text-black"
              //   variant="h4"
              sx={{
                fontSize: "26px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Tên công việc
            </Typography>
          </Box>
          <Box width="100%" display="flex">
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Ngành
            </Typography>
            <Typography
              className="text-green-400"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Công ty
            </Typography>
            <Typography
              className="text-gray"
              //   variant="h4"
              sx={{
                fontSize: "20px",
                display: { xs: "none", md: "flex" },
                fontWeight: 500,
                textDecoration: "none",
              }}
            >
              Thời gian
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        p={5}
        width="100%"
        className="bg-background"
        display="flex"
        flexDirection="column"
        alignItems={"left"}
        justifyContent={"left"}
        sx={{ borderRadius: "20px" }}
      >
        <Box
          display="flex"
          py={1}
          flexDirection={"column"}
          justifyContent={"space-between"}
        >
          <Typography
            className="text-black"
            //   variant="h4"
            sx={{
              fontSize: "22px",
              display: { xs: "none", md: "flex" },
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Dự án
          </Typography>
        </Box>
        <Box
          width="100%"
          mt={1}
          display="flex"
          flexDirection="column"
          className="gap-5"
        >
          <CardCarousel project={projects}/>
        </Box>
      </Box>
    </Box>
  );
}

export default GenaralInfo;
