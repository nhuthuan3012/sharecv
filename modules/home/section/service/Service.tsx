"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ServiceItem from "./component/ServiceIItem";
function Service() {
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
      py={5}
      px={"120px"}
    >
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={5}
      >
        <Typography
          py={5}
          sx={{ fontSize: 42 }}
          className="font-semibold text-primary"
        >
          Dịch vụ của chúng tôi
        </Typography>
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="space-between"
          py={5}
        >
          <Box width={"30%"}>
            <ServiceItem
              title={"Đăng tin tuyển dụng"}
              description={"description"}
              image={"/robot.png"}
              link={""}
            />
          </Box>
          <Box width={"30%"}>
            <ServiceItem
              title={"Đăng tin tuyển dụng"}
              description={"đăng tin tuyển dụng lên bất cứ lúc nào, ai cũng có thể xem rồi tải về hoặc không tải về"}
              image={"/robot.png"}
              link={""}
            />
          </Box>
          <Box width={"30%"}>
            <ServiceItem
              title={"Đăng tin tuyển dụng"}
              description={"description"}
              image={"/robot.png"}
              link={""}
            />
          </Box>
        </Box>
      </Box>
      
    </Box>
  );
}

export default Service;
