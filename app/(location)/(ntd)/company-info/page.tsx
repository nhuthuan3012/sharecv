"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import CompanyInfo from "@/modules/posting-job/page/company-info/CompanyInfo";
function CompanyInfoPage() {
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
      sx={{overflow:"auto"}}
    >
      <Box display="flex" width="100%" minHeight="400px" maxHeight="500px" sx={{backgroundImage:`url(${"/background-posting-job.png"})`}} justifyContent="center"
      alignItems="center" flex={1}>
       <Typography variant="h3">Thêm vị trí</Typography>
       </Box>
      <CompanyInfo/>
    </Box>
  );
}

export default CompanyInfoPage;
