"use client";
import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getCompanyInfo } from "@/common/apis/posting-job";
import { useEffect, useState, useCallback } from "react";
import { ICompanyInfo, ICompanyInfoResponse, ValuateCV } from "@/common/interfaces";
import { getAccessCookies } from "@/common/helpers/setCookies";
import PdfViewer from "./component/PdfViewer/PdfViewer";
import { Controller, useForm } from "react-hook-form";
import RevaluateForm from "./component/RevaluateForm/RevaluateForm";
import Valuation from "./component/Valuation/Valuation";
import { IRevaluate } from "../../types";

function CVPricing({ data }: { data: ValuateCV }) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  const [isEdit, setIsEdit] = useState<boolean>(false);


  return (
    <Box
      width="100%"
      px={5}
      py={5}
      className="grid grid-cols-12 gap-5  bg-white"
      alignItems={"center"}
      justifyContent={"center"}
    >
      <Box
        className="col-span-6"
        // height="200px"
        display="flex"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"left"}
      >
        <Typography
          sx={{ fontSize: "20px" }}
          className="text-primary font-medium"
        >
          Tổng điểm:
        </Typography>
        <Typography
          sx={{ fontSize: "20px" }}
          className="text-primary font-bold"
        >
          {data && data.total_point}
        </Typography>
      </Box>
      <Box
        className="col-span-6"
        // height="200px"
        display="flex"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"right"}
      >

        <Button
          disabled={isEdit}
          variant="outlined"
          sx={{ width: "200px", height: "50px", borderRadius: "20px", ml: 3 }}
          className="hover:border-primary hover:bg-white hover:text-primary"
          onClick={() => setIsEdit(true)}
        >
          Định giá lại
        </Button>
      </Box>
      <Box
        className="col-span-7"
        display="flex"
        height="1200px"
        // height="900px"
        flexDirection="row"
        alignItems={"top"}
        justifyContent={"left"}
        sx={{ overflow: "auto" }}
      >
        <PdfViewer link={data.cv_pdf ? data.cv_pdf : ""} />
      </Box>
      <Box
        className="col-span-5"
        py={"1em"}
        display="flex"
        height="100%"
        flexDirection="column"
        alignItems={"top"}
        justifyContent={"left"}
        sx={{ overflow: "auto" }}
      >
        {isEdit ? <RevaluateForm data={data} /> : <Valuation data={data} />}
        {/* <Valuation/>
          <RevaluateForm /> */}
      </Box>
    </Box>
  );
}

export default CVPricing;
