"use client";
import { getCookie } from "@/common/helpers/getCokkies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Header from "@common/components/Header/Header";
import CVPricing from "@/modules/posting-job/page/cv-pricing/CVPricing";
import Sample from "@/modules/posting-job/page/cv-pricing/component/PdfViewer/PdfViewer";
import { ValuateCV } from "@/common/interfaces";
import { useEffect, useState } from "react";
import { getValuateCV } from "@/common/apis/resume";
const initialForm: ValuateCV ={
  cv_id: 0,
  cv_pdf: "",
  hard_item: {level: null, salary: null},
  hard_point: 0,
  degrees: [],
  degree_point: 0,
  certificates: [],
  certificates_point: 0,
  total_point: 0
}
function CVPricingPage({params}:{params:any}) {
  // if (!getCookie("token")) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [data,setData] = useState<ValuateCV>(initialForm);
  useEffect(() => {
    try {
      getValuateCV(params.id).then(res => {
        setData(res.data.data);
        console.log(res);
      })
    } catch(e){
      console.log(e)
    }
  }, [])
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
        <Typography className="font-semibold text-primary" variant="h4">
          Định giá điểm CV
        </Typography>
      </Box>
      <Box
        // position = "relative"
        mt={5}
        display="flex"
        width="100%"
        px={"120px"}
        // justifyContent="center"
        // alignItems="center"
        flex={1}
        // py={10}
      >
        <CVPricing data={data} />
      </Box>
    </Box>
  );
}

export default CVPricingPage;
