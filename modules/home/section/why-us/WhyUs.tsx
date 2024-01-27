"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
function WhyUs() {
  const number = 500000;
  const formattedNumber = number.toLocaleString("vi-VN"); // Định dạng số theo quy tắc tiếng Việt

  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="top"
      justifyContent="left"
      px={"120px"}
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
      >
        <Typography
          sx={{ fontSize: 42 }}
          className="font-semibold text-primary"
        >
          Tại sao nên chọn ShareCV?
        </Typography>
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          alignItems="top"
          justifyContent="left"
          p={3}
        >
          {/* <Box
            display="flex"
            width="100%"
            flexDirection="column"
            alignItems="top"
            justifyContent="left"
          > */}
          <Box
            display="flex"
            flexDirection={"column"}
            width="100%"
            alignItems="top"
            justifyContent="left"
            p={3}
          >
            <div style={{ display: "flex", flexDirection: "row", padding: 5 }}>
              <Image src={"/ai.png"} width={100} height={100} alt={""} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 5,
                }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-semibold text-primary"
                >
                  AI Lọc CV theo JD
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  className="font-medium text-primary"
                >
                  desciption of AI lọc theo JD
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", padding: 5 }}>
              <Image src={"/ai.png"} width={100} height={100} alt={""} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 5,
                }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-semibold text-primary"
                >
                  AI Lọc CV theo JD
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  className="font-medium text-primary"
                >
                  desciption of AI lọc theo JD
                </Typography>
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", padding: 5 }}>
              <Image src={"/ai.png"} width={100} height={100} alt={""} />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  padding: 5,
                }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-semibold text-primary"
                >
                  AI Lọc CV theo JD
                </Typography>
                <Typography
                  sx={{ fontSize: 15 }}
                  className="font-medium text-primary"
                >
                  desciption of AI lọc theo JD
                </Typography>
              </div>
            </div>
          </Box>
          <Box
            display="flex"
            // flexDirection={"row"}
            width="100%"
            height="100%"
            alignItems="center"
            justifyContent="center"
            p={3}
          >
            <Box
              display="flex"
              flexDirection={"column"}
              width="100%"
              height="300px"
              alignItems="center"
              justifyContent="space-between"
              p={3}
            >
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{
                  minWidth: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: 40 }}
                  className="font-semibold text-orange"
                >
                  {" "}
                  2.000.000+{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: 25 }}
                  className="font-semibold text-primary"
                >
                  {" "}
                  Hồ sơ ứng viên{" "}
                </Typography>
              </Box>
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{
                  minWidth: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: 40 }}
                  className="font-semibold text-orange"
                >
                  {" "}
                  1000+{" "}
                </Typography>
                <Typography
                  sx={{ fontSize: 25 }}
                  className="font-semibold text-primary"
                >
                  {" "}
                  Doanh nghiệp{" "}
                </Typography>
              </Box>
            </Box>
            <Box
              display="flex"
              flexDirection={"column"}
              height="300px"
              width="100%"
              alignItems="center"
              justifyContent="space-between"
              p={3}
            >
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{
                  minWidth: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: 40 }}
                  className="font-semibold text-orange"
                >
                  {formattedNumber + "+"}
                </Typography>
                <Typography
                  sx={{ fontSize: 25 }}
                  className="font-semibold text-primary"
                >
                  Hồ sơ ứng viên
                </Typography>
              </Box>
              <Box
                alignItems="center"
                justifyContent="center"
                sx={{
                  minWidth: "50%",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Typography
                  sx={{ fontSize: 40 }}
                  className="font-semibold text-orange"
                >
                  {formattedNumber + "+"}
                </Typography>
                <Typography
                  sx={{ fontSize: 25 }}
                  className="font-semibold text-primary"
                >
                  Công việc mới
                </Typography>
              </Box>
            </Box>
          </Box>
          {/* </Box> */}
        </Box>
      </Box>
    </Box>
  );
}

export default WhyUs;
