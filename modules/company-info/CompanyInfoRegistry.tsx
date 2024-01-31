"use client";
import { Box, Button, Grid, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import RegistryForm from "./component/registry-form/RegistryForm";
import { useState } from "react";
import { ExtFile } from "@files-ui/react";
import { Controller, useForm } from "react-hook-form";
import { addCompany } from "@/common/apis/posting-job";
import { ICompanyInfo, ITitleImageItem } from "./types";
function CompanyInfoRegistry() {
  // if (!true) {
  //   redirect("/login", RedirectType.replace);
  // }
  // const [formImageList, setFormImageList] = useState<ITitleImageItem[]>([]);
  // const [formData, setFormData] = useState(new FormData());
  // const [file, setFile] = useState<ExtFile[]>([]);
  // const {
  //   control,
  //   handleSubmit,
  //   setError,
  //   setValue,
  //   formState: { errors, isDirty = false, isValid = true },
  // } = useForm<ICompanyInfo>({
  //   // resolver,
  // });
  // const onSubmit = handleSubmit(async (data) => {
  //   const res = await addCompany(data);

  //   if (res.status !== 200) {
  //     console.log(res);
  //     setError("root", { message: "Đăng nhập thất bại" });
  //     return;
  //   }

  //   console.log(res);
  //   window.location.reload();
  // });
  return (
    <Box width="100%" p={0}>
      <RegistryForm></RegistryForm>
    </Box>
  );
}

export default CompanyInfoRegistry;
