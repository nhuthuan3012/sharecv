"use client";
import { getCookie } from "@/common/helpers/getCookies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Introduce from "@/modules/home/section/introduce/Introduce";
import Service from "@/modules/home/section/service/Service";
import WhyUs from "@/modules/home/section/why-us/WhyUs";
import Benefit from "@/modules/home/section/benefit/Benefit";
import Review from "@/modules/home/section/review/Review";
function Home() {
  // if (!getCookie("token")) {

  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      // alignItems="center"
      // justifyContent="center"
      sx={{overflow:"auto"}}
    >
      <Introduce/>
      <Service/>
      <WhyUs/>
      <Benefit/>
      <Review/>
    </Box>
  );
}

export default Home;
