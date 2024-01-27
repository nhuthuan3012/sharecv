"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import RegistryForm from "./component/registry-form/RegistryForm";
import { useState } from "react";
import { ExtFile } from "@files-ui/react";
import {  useForm } from "react-hook-form";
import { ICompanyInfo } from "../../types";
import { addCompany } from "@/common/apis/posting-job"; 
import { ITitleImageItem } from "../../types";
function UploadJD() {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  return (
    <Box width="100%"
    px={"120px"}>
        <Box> this is test</Box>
      <RegistryForm></RegistryForm>
    </Box>
  );
}

export default UploadJD;
