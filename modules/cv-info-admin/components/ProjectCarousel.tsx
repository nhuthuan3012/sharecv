import { Box, Typography } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { IProjectModel } from "../type";
import { NextSliderArrow, PrevSliderArrow } from "./CarouselArrow";
import dayjs from "dayjs";
import CarouselItem from "./CarouselItem";
import { IResumeProject } from "../resume.interface";


function ProjectCarousel({ initialData }: { initialData: IResumeProject[] }) {
  const sliderSetting: Settings = {
    className: "center",
    dots: true,
    // centerMode: true,
    lazyLoad: "progressive",
    infinite: true,
    centerPadding: "0px",
    slidesToShow: initialData.length > 2 ? 2.99 : initialData.length,
    slidesToScroll: 1,
    speed: 300,
    prevArrow: <PrevSliderArrow />,
    nextArrow: <NextSliderArrow />,
    autoplay: false,
    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 1,
    //       centerMode: false,
    //     },
    //   },
    //   {
    //     breakpoint: 1024,
    //     settings: {
    //       slidesToShow: 2,
    //       centerMode: false,
    //     },
    //   },
    // ],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      px={5}
      my={5}
      // className="bg-slate-50"
      sx={{
        "& .slick-track": {
          bgcolor: "transparent",
        },
        // "& .slick-slide": { transform: "translate(100%, 0)" },
      }}
    >
      <Slider {...sliderSetting}>
        {initialData.map((data, index) => (
          <CarouselItem key={index} {...data} />
        ))}
      </Slider>
    </Box>
  );
}

export default ProjectCarousel;
