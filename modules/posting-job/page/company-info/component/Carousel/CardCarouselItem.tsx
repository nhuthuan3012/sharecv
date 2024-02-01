// import { TEventCardProps } from "@/common/components/EventCard";
"use client";
import { GroupsOutlined } from "@mui/icons-material";
import { Paper, Box, Typography } from "@mui/material";

import Image from "next/image";

export const CardCarouselItem = ({
  img,
  title,
  description,
  location,
  participant,
  carouselCenter,
  ...boxProps
}: { img: string, title: string, description: string, location: string, participant: string, carouselCenter: boolean }) => {
  return (
    <Box
      // width="100%"
      // height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      // sx={{
      //   transform: carouselCenter ? "scale(1)" : "scale(0.9) translateY(50%)",
      //   transition: "transform 0.7s ease 0s",
      // }}
    >
      <Paper
        sx={{
          height: carouselCenter ? "auto" : "200px",
          width: "200px",
          m: 3,
          transition: "height 0.3s ease 0s",
          translateY: carouselCenter ? 0 : "-100%",
          ...boxProps,
        }}
      >
        <Box
          display="flex"
          flex={1}
          height="200px"
          width="200px"
          position="relative"
          zIndex={2}
        >
          <Image
            src={img}
            alt="Event image"
            fill
            style={{
              objectFit: "cover",
              maxWidth: "100%",
            }} />
        </Box>
        <Box
          sx={{
            p: 2,
            display: "flex",
            // height: carouselCenter ? "300px" : 0,
            overflow: "hidden",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            opacity: carouselCenter ? 1 : 0,
            transform: carouselCenter ? "translateY(0)" : "translateY(-100%)",
            transition: "transform 0.3s ease 0s",
          }}
        >
          <Typography className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#D7C7FF] py-5">
            {title}
          </Typography>
          <Typography className="font-light py-2">{description}</Typography>
          <Box
            display="flex"
            justifyContent="space-between"
            flex={1}
            width="100%"
            className="text-primary"
          >
            <Typography
              sx={{
                display: "flex",
                flex: 1,
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {location}
            </Typography>
            <Box display="flex">
              <GroupsOutlined sx={{ mx: 1 }} />
              <Typography>{`Upto ${participant}`}</Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Box>
  );
};
