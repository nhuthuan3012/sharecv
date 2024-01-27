"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import EnterpriseBenefit from "../../component/enterprise-benefit/EnterpriseBenefit";
function Benefit() {
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
      sx={{ bgcolor:"rgba(217, 217, 217, 0.15)"}}
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
          <EnterpriseBenefit/>
        </Box>
      </Box>
      
    </Box>
  );
}

export default Benefit;
