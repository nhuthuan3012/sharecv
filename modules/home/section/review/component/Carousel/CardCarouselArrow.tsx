"use client";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

const PrevSliderArrow = ({ className, onClick, style }: any) => (
  <Box
    className={"slick-arrow"}
    onClick={onClick}
    position="absolute"
    top="60%"
    left="30%"
    borderRadius={25}
    display='flex'
    alignItems='center'
    justifyContent='center'
    p={1}
    zIndex={10}
    sx={{
      cursor: "pointer",
      transform: "translate(100%,-50%)",
      transition: ".3s",
      "&:hover": {
        transform: "translate(100%,-50%) scale(1.25)",
      },
    }}
  >
    <KeyboardArrowLeft className="text-orange" />
    <Typography className="text-orange">Prev </Typography>
  </Box>
);

const NextSliderArrow = ({ className, onClick, style }: any) => (
  <Box
    className={"slick-arrow"}
    onClick={onClick}
    position="absolute"
    top="60%"
    right="30%"
    borderRadius={25}
    display='flex'
    alignItems='center'
    justifyContent='center'
    p={1}
    sx={{
      cursor: "pointer",
      transform: "translate(-100%,-50%)",
      transition: ".3s",
      "&:hover": {
        transform: "translate(-100%,-50%) scale(1.25)",
      },
    }}
  >
    <Typography className="text-orange">Next </Typography>
    <KeyboardArrowRight className="text-orange"/>
  </Box>
);

export { PrevSliderArrow, NextSliderArrow };