"use client";
import { Box, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import UploadJD from "@/modules/posting-job/page/upload-jd/UploadJD";
import { useEffect, useState } from "react";
import { IJobDetailResponse } from "@/common/interfaces";

function UploadJDPage({params}:{params:any}) {
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{ overflow: "auto" }}
    >
      <Box
      className="bg-tertiary"
        display="flex"
        width="100%"
        height="200px"
        py={3}
        justifyContent="center"
        alignItems="center"
        flex={1}
      >
        <Typography className="font-semibold text-primary" variant="h4">Điền thông tin công ty</Typography>
      </Box>

      <Box
        // position = "relative"
        mt={5}
        display="flex"
        width="100%"
        // justifyContent="center"
        // alignItems="center"
        flex={1}
        // py={10}
      >
        <UploadJD/>
      </Box>
    </Box>
  );
}

export default UploadJDPage;
