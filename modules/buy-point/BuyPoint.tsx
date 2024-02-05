"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
import PointPackageComponent from "./component/PointPackage";
import { IListPointRespone,PointPackage } from "@/interfaces/point-package";
function BuyPoint({ data }: { data: PointPackage[] }) {
  return (
    <Box
      width="100%"
      px={"120px"}
      className="grid grid-cols-10 gap-10"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ borderRadius: "5px" }}
    >
        <Box display={"flex"} justifyContent={"flex-start"} className="col-span-10">
            <Typography className=" text-2xl text-primary font-bold"> Mua điểm</Typography>
        </Box>
      {data&&data.map((item, index) => (
        <Box key={index} className="col-span-5">
          <PointPackageComponent data={item} />
        </Box>
      ))}
    </Box>
  );
}

export default BuyPoint;
