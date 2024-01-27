"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { ICompanyInfoResponse } from "@/common/interfaces";
import { Box, Button, Typography } from "@mui/material";
import Image from "next/image";
import { redirect, RedirectType } from "next/navigation";
import { useState } from "react";
import GeneralInfo from "./section/GeneralInfo/GeneralInfo";
const initialForm: ICompanyInfoResponse = {
  company_name: "",
  industry: "",
  description: "",
  tax_code: "",
  phone: "",
  email: "",
  founded_year: 0,
  company_size: 0,
  address: "",
  city: "",
  country: "",
  logo: "/Logo.png",
  cover_image: null,
  company_images: null,
  company_video: null,
  linkedin: null,
  website: null,
  facebook: null,
  instagram: null,
};
function ChoosePackage() {
  const [allowView, setAllowView] = useState<boolean>(false);
  const [data, setData] = useState<ICompanyInfoResponse>(initialForm);
  return (
    <Box
      width={allowView ? "60%" : "100%"}
      px={"120px"}
      py={5}
      className="bg-white"
      alignItems={"center"}
      flexDirection={"row"}
      justifyContent={"center"}
    >
      <Box width="100%" display="flex" justifyContent={"end"}>
        <Typography className="text-yellow-400 font-semibold" sx={{fontSize:"20px"}}>
          50 Điểm
        </Typography>
      </Box>
      <GeneralInfo/>
    </Box>
  );
}

export default ChoosePackage;
