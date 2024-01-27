// import { TEventCardProps } from "@/common/components/EventCard";
"use client";
import { GroupsOutlined } from "@mui/icons-material";
import { Paper, Box, Typography } from "@mui/material";

import Image from "next/image";

export const CardCarouselItem = ({
  name,
  start,
  end,
  achie
}: { name: string,start: Date, end: Date, achie:string[] }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Paper
        sx={{
          height:   "200px",
          width: "200px",
          m: 3,
          transition: "height 0.3s ease 0s",
          translateY:  "-100%",
        }}
      >
        <Box
          display="flex"
          flex={1}
          height="200px"
          width="200px"
          zIndex={2}
        >
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
            transform:  "translateY(-100%)",
            transition: "transform 0.3s ease 0s",
          }}
        >
          <Typography className="font-bold text-center text-transparent bg-clip-text bg-gradient-to-b from-primary to-[#D7C7FF] py-5">
            {name}
          </Typography>
          <Typography className="font-light py-2">{start.toLocaleString()}</Typography>
        </Box>
      </Paper>
    </Box>
  );
};
