"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import { describe } from "node:test";
import Link from "next/link";
export interface ServiceItemProp {
  title: string;
  description: string;
  image: string;
  link: string;
}
function ServiceItem({ title, description, image, link }: ServiceItemProp) {
  return (
    <Box
      p={5}
      width="100%"
      height="300px"
      className={"group bg-secondary hover:bg-primary hover:scale-125"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      sx={{
        transition: "transform 0.3s ease-out",
        borderRadius: "10px",
      }}
    >
      <Box position="relative" height="100px" width="100px" my={0}>
        <Image
          src={image}
          alt=""
          fill
          style={{
            maxHeight: "100%",
            objectFit: "contain",
          }}
        />
      </Box>
      <Typography
        fontSize={25}
        className="text-primary font-semibold group-hover:text-white"
      >
        {title}
      </Typography>
      <Typography
        fontSize={15}
        className="text-primary font-light group-hover:text-white"
      >
        {description}
      </Typography>
      <Box width="100%" display="flex" justifyContent="end">
        <Link href={""} className="group-hover:text-white">
          <Typography
            fontSize={15}
            className="text-primary font-semibold group-hover:text-white"
          >
            Xem thêm
          </Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default ServiceItem;
