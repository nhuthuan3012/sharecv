"use client";
import { getCookie } from "@/common/helpers/getCookies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header"
import CompanyInfo from "@/modules/company-info/CompanyInfo";
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
      <CompanyInfo/>
    </Box>
  );
}

export default CompanyInfoPage;
