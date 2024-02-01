"use client";
import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CardCarousel } from "./component/Carousel/CardCarousel";
import ReactPlayer from "react-player";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState } from "react";
import { ICompanyInfo, ICompanyInfoResponse } from "@/common/interfaces";
import { getAccessCookies } from "@/common/helpers/setCookies";
import { FaRegPlayCircle } from "react-icons/fa";
import React from "react";
const initialForm: ICompanyInfoResponse = {
  company_name: "",
  industry: "",
  description: "",
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
function CompanyInfo() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  const [data,setData] = useState<ICompanyInfoResponse>(initialForm);
  useEffect(() => {
    try {
      getCompanyInfo().then(res => {
        setData(res.data.data);
        console.log(res);
      })
    } catch(e){
      console.log(e)
    }
  }, [])

  return (
    <Box
      sx={{ mt: 10 }}
      // display="flex"
      width="80%"
      // flexDirection="column"
      alignItems="center"
      // py={5}
      justifyContent="center"
    >
      <Grid
        container
        spacing={5}
        py={5}
        // px={5}
        className="flex w-full"
        // height="700px"
        sx={{
          backgroundSize: "cover",
          // backgroundColor: "rgba(217, 217, 217, 0.1)",
        }}
      >
        <Grid
          item
          xs={8}
          height="100px"
          display="flex"
          flexDirection="row"
          alignItems={"top"}
          justifyContent={"left"}
        >
          <Image src={data.logo? data.logo:"/Logo.png"} height={100} width={100} alt="" />
          <Box display="flex" flexDirection="column" px={3}  alignContent={"top"}>
            <Typography className="font-bold text-primary" sx={{fontSize:"36px"}}>{data.company_name}</Typography>
            <Typography className="font-medium text-primary" sx={{fontSize:"14px"}}>{data.address+","+data.city+","+data.country}</Typography>
          </Box>
        </Grid>
        <Grid
          item
          xs={4}
          display="flex"
          height="100px"
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
            <Button
              component={Link}
              href="/posting-job/company-info-registry"
              sx={{ boxShadow: 5 }}
              style={{
                color: "white",
                // backgroundColor: "primary",
                borderRadius: 10,
                // marginRight: "5%",
              }}
              variant="contained"
            >
              Chỉnh sửa
            </Button>
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
            sx={{
              // borderTop: 1,
              // borderBottom: 1,
            }}
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
              Mô tả công ty
            </Typography>
            <Typography sx={{ mt: 2 }}>
              {data.description}
            </Typography>
          </Box>
          {data.company_images!== null? 
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"left"}
            sx={{ pt: 3 }}
          >
            <Typography
              className="text-primary"
              variant="h6"
              sx={{
                // mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Hình ảnh
            </Typography>
            <CardCarousel listImage={data.company_images} />
          </Box>
          : <></>}
          <Box
            display="flex"
            flexDirection={"column"}
            justifyContent={"left"}
            sx={{ pt: 3 }}
          >
            <Typography
              className="text-primary"
              variant="h6"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontWeight: 700,
                textDecoration: "none",
              }}
            >
              Video
            </Typography>
            {/* <Box
              sx={{
                "& .player-wrapper": {
                  width: "auto",
                  // Reset width
                  height: "auto",
                },
                "& .react-player": {
                  width: "500px",
                  paddingTop: "0", // Percentage ratio for 16:9
                  position: "relative", // Set to relative}
                },
                "& .react-player > div": {
                  position: "absolute", // Scaling will occur since parent is relative now
                },
              }}
            >
              <ReactPlayer
                width="100%"
                height={"200px"}
                controls
                file="mp4"
                url="/video.mp4"
              />
            </Box> */}
            <Box
                display="flex"
                width="100%"
                className={"bg-background"}
                sx={{
                  p: 5,
                }}
              >
                <div
                  className={`video-player ${
                    isPlaying ? "playing" : ""
                  } w-full`}
                >
                  {!isPlaying && (
                    <Box
                      width="100%"
                      height="300px"
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{
                        p: 5,
                        // backdropFilter: "blur(2px)",
                        backgroundColor: "white",
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          p: 0,
                          height: 100,
                          width: 100,
                          borderRadius: "50%",
                          "&:hover": {
                            backgroundColor: "gba(217, 217, 217, 0.9)",
                          },
                        }}
                        onClick={handlePlayClick}
                      >
                        <FaRegPlayCircle
                          style={{
                            padding: 0,
                            // stroke: "white",
                            color: "#063776",
                            height: 100,
                            width: "100%",
                          }}
                        />
                      </IconButton>
                    </Box>
                  )}
                  {isPlaying && (
                    <Box
                      sx={{
                        "& .player-wrapper": {
                          width: "auto",
                          height: "auto",
                        },
                        "& .react-player": {
                          width: "100%",
                        },
                      }}
                    >
                      <ReactPlayer
                        width="100%"
                        height={"500px"}
                        controls
                        file="mp4"
                        url="./video.mp4"
                      />
                    </Box>
                  )}
                </div>
              </Box>
          </Box>
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
              className="border-primary bg-secondary"
              sx={{
                color: "black",
                // border: 1,
                // borderColor: "primary",
                borderRadius: "20px",
                p: 3,
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
                Thông tin công ty
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
                  Ngành Nghề
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
                  {data.industry}
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
                  Số điện thoại
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
                  {data.phone}
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
                  Email công ty
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
                  {data.email}
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
                  Quy mô
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
                  {data.company_size}
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
                  Năm thành lập
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
                  Mã số thuế
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
                  {data.tax_code}
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
                  Quốc gia
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
                  {data.country}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                className={"text-primary"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Tình/ Thành phố
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
                  {data.city}
                </Typography>
              </Box>
              <Box sx={{ mt: 2 }} display="flex" flexDirection="column">
                <Typography
                className={"text-primary"}
                  sx={{
                    display: { xs: "none", md: "flex" },
                    fontWeight: 400,
                    fontSize: 15,
                    textDecoration: "none",
                  }}
                >
                  Địa chỉ
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
                  {data.address}
                </Typography>
              </Box>
            </Box>
            <Box
              mt={5}
              // py={20}
              sx={{
                backgroundImage: `url(${"/map.png"})`,
                borderRadius: "20px",
              }}
              display="flex"
              position="relative"
              alignItems="center"
              justifyContent="center"
              // zIndex={2}
              height="200px"
              width="100%"
            >
              <Button
                href="/register"
                sx={{
                  textTransform: "none",
                  boxShadow: 5,
                  color: "white",
                  borderRadius: 3,
                }}
                variant="contained"
                color="primary"
              >
                View map
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default CompanyInfo;
