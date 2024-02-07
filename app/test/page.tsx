"use client";
import { getCookie } from "@/common/helpers/getCookies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";

import SearchCV from "@/common/components/search-cv/SearchCV";
function Homepage() {
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
    >
      <Typography variant="h2">THIS IS THE HOMEPAGE</Typography>
      <SearchCV/>
    </Box>
  );
}

export default Homepage;
