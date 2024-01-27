"use client";

import { Box } from "@mui/material";
import Slider, { Settings } from "react-slick";
import { PrevSliderArrow, NextSliderArrow } from "./CardCarouselArrow";
import { useState } from "react";
import { CardCarouselItem } from "./CardCarouselItem";

export function CardCarousel() {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const listImage=[{img: "/pic2.png"},{img: "/pic2.png"},{img: "/pic2.png"},{img: "/pic2.png"},{img: "/pic2.png"}]
  const sliderSetting: Settings = {
    className: "center",
    // dots: true,
    // centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 1,
    // speed: 300,
    prevArrow: <PrevSliderArrow />,
    nextArrow: <NextSliderArrow />,
    beforeChange: (current, next) => {
      setCurrentIndex(next);
    },
    // afterChange: (current) => {
    //   setCurrentIndex(current);
    // },
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        },
      },
    ],
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      width="100%"
      position="relative"
      // px={5}
      // my={5}
      // bgcolor="white"
      sx={{}}
    >
      <Slider {...sliderSetting}>
        {listImage.map((data, index) => {
          // const eventProps = convertEventDataToCardProps(data);
          return (
            <CardCarouselItem key={index} img={data.img} title={""} description={""} location={""} participant={""} carouselCenter={false}              
            />
          );
        })} 
      </Slider>
    </Box>
  );
}
