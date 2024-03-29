import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { Box } from "@mui/material";

const PrevSliderArrow = ({ className, onClick, style }: any) => (
  <Box
    className={"slick-arrow"}
    onClick={onClick}
    position="absolute"
    top="50%"
    left="-50px"
    borderRadius={25}
    display="flex"
    alignItems="center"
    justifyContent="center"
    p={1}
    zIndex={10}
    bgcolor="rgba(51,51,51,.6)"
    sx={{
      cursor: "pointer",
      transform: "translateY(-50%)",
      transition: ".3s",
      "&:hover": {
        transform: "translateY(-50%) scale(1.25)",
      },
    }}
  >
    <KeyboardArrowLeft style={{ color: "white" }} />
  </Box>
);

const NextSliderArrow = ({ className, onClick, style }: any) => (
  <Box
    className={"slick-arrow"}
    onClick={onClick}
    position="absolute"
    top="50%"
    right="-50px"
    borderRadius={25}
    display="flex"
    alignItems="center"
    justifyContent="center"
    p={1}
    bgcolor="rgba(51,51,51,.6)"
    sx={{
      cursor: "pointer",
      transform: "translateY(-50%)",
      transition: ".3s",
      "&:hover": {
        transform: "translateY(-50%) scale(1.25)",
      },
    }}
  >
    <KeyboardArrowRight style={{ color: "white" }} />
  </Box>
);

export { PrevSliderArrow, NextSliderArrow };
