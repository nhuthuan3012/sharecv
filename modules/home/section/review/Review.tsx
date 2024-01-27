"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { CardCarousel } from "./component/Carousel/CardCarousel";
function Review() {
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
        <Typography
          py={5}
          sx={{ fontSize: 42 }}
          className="font-semibold text-primary"
        >
          Headhunters nói gì về ShareCV
        </Typography>
      <Box
        display="flex"
        width="100%"
        position="relative"
        // height= "500px"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={5}
      >
        <Box position="absolute" sx={{zIndex:0}} height="100%" width="100%" my={0}>
        <Image
          src={"/image/home/wordmap.png"}
          alt=""
          fill
          style={{
            maxWidth: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          py={5}
        >
         <CardCarousel/>
        </Box>
      </Box>
      
    </Box>
  );
}

export default Review;
