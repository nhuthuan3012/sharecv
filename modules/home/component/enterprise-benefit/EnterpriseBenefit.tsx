"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import Image from "next/image";
import React from "react";

function EnterpriseBenefit() {
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
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="row"
        alignItems="top"
        justifyContent="left"
      >
        <Box
          display="flex"
          flexDirection={"column"}
          width="40%"
          alignItems="top"
          justifyContent="left"
        >
          <Box
            position="relative"
            display="flex"
            justifyContent="left"
            height="592px"
            width="100%"
            my={0}
          >
            <Image
              src={"/image/home/benefit.png"}
              alt=""
              fill
              style={{
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box
          display="flex"
          // flexDirection={"row"}
          width="60%"
          height="500px"
          alignItems="center"
          justifyContent="center"
          px={5}
        >
          <Box
            display="flex"
            flexDirection={"column"}
            width="100%"
            height="500px"
            alignItems="center"
            // justifyContent="space-between"
          >
            <Box
              className="hover:bg-primary  group"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                height: "250px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <Box  className="border-primary bg-white" display={'flex'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'80px'} sx={{ borderRadius: '50%', border:2 }}>
              <WatchOutlinedIcon className={"text-primary"} />
              </Box>
              <Typography
              mt={3}
                sx={{ fontSize: 25 }}
                className="font-semibold group-hover:text-white text-primary"
              >
                {" "}
                Hồ sơ ứng viên{" "}
              </Typography>
            </Box>
            <Box
              className="hover:bg-primary  group"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                height: "250px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <Box  className="border-primary bg-white" display={'flex'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'80px'} sx={{ borderRadius: '50%', border:2 }}>
              <WatchOutlinedIcon className={"text-primary"} />
              </Box>
              <Typography
              mt={3}
                sx={{ fontSize: 25 }}
                className="font-semibold group-hover:text-white text-primary"
              >
                {" "}
                Hồ sơ ứng viên{" "}
              </Typography>
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={"column"}
            width="100%"
            height="500px"
            alignItems="center"
            // justifyContent="space-between"
          >
            <Box
              className="hover:bg-primary  group"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                height: "250px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <Box  className="border-primary bg-white" display={'flex'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'80px'} sx={{ borderRadius: '50%', border:2 }}>
              <WatchOutlinedIcon className={"text-primary"} />
              </Box>
              <Typography
              mt={3}
                sx={{ fontSize: 25 }}
                className="font-semibold group-hover:text-white text-primary"
              >
                {" "}
                Hồ sơ ứng viên{" "}
              </Typography>
            </Box>
            <Box
              className="hover:bg-primary  group"
              alignItems="center"
              justifyContent="center"
              sx={{
                width: "100%",
                height: "250px",
                display: "flex",
                flexDirection: "column",
                borderRadius: "10px",
              }}
            >
              <Box  className="border-primary bg-white" display={'flex'} alignItems={'center'} justifyContent={'center'} height={'80px'} width={'80px'} sx={{ borderRadius: '50%', border:2 }}>
              <WatchOutlinedIcon className={"text-primary"} />
              </Box>
              <Typography
              mt={3}
                sx={{ fontSize: 25 }}
                className="font-semibold group-hover:text-white text-primary"
              >
                {" "}
                Hồ sơ ứng viên{" "}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default EnterpriseBenefit;
