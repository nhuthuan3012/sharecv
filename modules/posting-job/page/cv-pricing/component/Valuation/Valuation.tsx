"use client";
import {
  Box,
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import { useEffect, useState, useCallback } from "react";
import {
  IConfirm,
  IRevaluate,
  ValuateCV,
} from "@/common/interfaces";
import { Controller, useForm } from "react-hook-form";
import { confrimRevaluate } from "@/common/apis/resume";
import Link from "next/link";

function Valuation({ data }: { data: ValuateCV }) {
  if (!true) {
    redirect("/login", RedirectType.replace);
  }
  // const {
  //   control,
  //   handleSubmit,
  //   setError,
  //   setValue,
  //   formState: { errors, isDirty = false, isValid = true },
  // } = useForm<IConfirm>({
  //   // resolver,
  //   defaultValues: {
  //     hard_item: data.hard_item.,
  // hard_point: 0,
  // degrees: string[];
  // degree_point: number;
  // certificates: ILanguageCertificates[];
  // certificates_point: number;
  // total_point: number;
  //   },
  // });

  // const onSubmit = handleSubmit(async (data) => {
  //   console.log("DATAAAAAA", data);
  //   const res = await confrimRevaluate(data);

  //   if (res.status !== 200) {
  //     console.log(res);
  //     setError("root", { message: "Đăng nhập thất bại" });
  //     return;
  //   }

  //   console.log(res);
  //   window.location.reload();
  // });

  return (
    <Box width="100%" alignItems={"center"} justifyContent={"center"}>
      <Box
        display="flex"
        className="gap-2 border-primary bg-white"
        width="100%"
        flexDirection={"column"}
        alignItems={"top"}
        justifyContent={"right"}
        sx={{
          border: 1,
          // borderColor: "primary",
          borderRadius: "20px",
          p: 5,
          overflow: "auto",
        }}
      >
        <Box width="100%" display="flex" justifyContent={"center"}>
          <Typography
            sx={{ fontSize: 30 }}
            className="font-semibold text-primary"
          >
            Điểm cứng
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent={"start"}>
          <Typography
            sx={{ fontSize: 23 }}
            className={
              data && data.hard_item.level
                ? "text-primary font-semibold"
                : "text-gray font-semibold"
            }
          >
            Cấp bậc hiện tại
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent={"space-between"}>
          <Box
            width="60%"
            height="40px"
            className={
              data && data.hard_item.level ? "border-primary" : "border-gray"
            }
            display="flex"
            pl={2}
            justifyContent={"start"}
            alignItems={"center"}
            sx={{ border: 1, borderRadius: "10px" }}
          >
            <Typography
              sx={{ fontSize: 20 }}
              className="font-medium text-primary"
            >
              {data && data.hard_item.level ? data.hard_item.level : ""}
            </Typography>
          </Box>
          <Box
            width="40px"
            height="40px"
            className={data.hard_item.level ? "border-primary" : "border-gray"}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ border: 1, borderRadius: "10px" }}
          >
            <Typography
              sx={{ fontSize: 20 }}
              className="font-medium text-primary"
            >
              {data.hard_item.level ? data.hard_point : ""}
            </Typography>
          </Box>
        </Box>
        <Box width="100%" display="flex" justifyContent={"start"}>
          <Typography
            sx={{ fontSize: 23 }}
            className="font-semibold text-primary"
          >
            Lương hiện tại
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent={"space-between"}>
          <Box
            width="60%"
            height="40px"
            className={
              data && data.hard_item.salary ? "border-primary" : "border-gray"
            }
            display="flex"
            pl={2}
            justifyContent={"start"}
            alignItems={"center"}
            sx={{ border: 1, borderRadius: "10px" }}
          >
            <Typography
              sx={{ fontSize: 20 }}
              className="font-medium text-primary"
            >
              {data && data.hard_item.salary ? data.hard_item.salary : ""}
            </Typography>
          </Box>
          <Box
            width="40px"
            height="40px"
            className={data.hard_item.level ? "border-primary" : "border-gray"}
            display="flex"
            justifyContent={"center"}
            alignItems={"center"}
            sx={{ border: 1, borderRadius: "10px" }}
          >
            <Typography
              sx={{ fontSize: 20 }}
              className="font-medium text-primary"
            >
              {data.hard_item.salary ? data.hard_point : ""}
            </Typography>
          </Box>
        </Box>
        <Box
          width="100%"
          className="border-primary"
          mt={2}
          py={3}
          sx={{ borderTop: 1 }}
          display="flex"
          justifyContent={"center"}
        >
          <Typography
            sx={{ fontSize: 30 }}
            className="font-semibold text-primary"
          >
            Điểm tham chiếu
          </Typography>
        </Box>
        <Box width="100%" display="flex" justifyContent={"start"}>
          <Typography
            sx={{ fontSize: 23 }}
            className="font-semibold text-primary"
          >
            Bằng cấp
          </Typography>
        </Box>
        {data &&
          data.degrees.map((item, index) => (
            <Box
              key={index}
              width="100%"
              display="flex"
              justifyContent={"space-between"}
            >
              <Box
                width="60%"
                height="40px"
                className="border-primary"
                display="flex"
                pl={2}
                justifyContent={"start"}
                alignItems={"center"}
                sx={{ border: 1, borderRadius: "10px" }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-medium text-primary"
                >
                  {`${item}`}
                </Typography>
              </Box>
              <Box
                width="40px"
                height="40px"
                className="border-primary"
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ border: 1, borderRadius: "10px" }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-medium text-primary"
                >
                  0.5
                </Typography>
              </Box>
            </Box>
          ))}
        <Box width="100%" display="flex" justifyContent={"start"}>
          <Typography
            sx={{ fontSize: 23 }}
            className="font-semibold text-primary"
          >
            Ngoại ngữ
          </Typography>
        </Box>
        {data &&
          data.certificates.map((item, index) => (
            <Box
              key={index}
              width="100%"
              display="flex"
              justifyContent={"space-between"}
            >
              <Box
                width="60%"
                height="40px"
                className="border-primary"
                display="flex"
                pl={2}
                justifyContent={"start"}
                alignItems={"center"}
                sx={{ border: 1, borderRadius: "10px" }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-medium text-primary"
                >
                  {`${item.certificate_language} - ${item.certificate_name} - ${item.certificate_point_level}`}
                </Typography>
              </Box>
              <Box
                width="40px"
                height="40px"
                className="border-primary"
                display="flex"
                justifyContent={"center"}
                alignItems={"center"}
                sx={{ border: 1, borderRadius: "10px" }}
              >
                <Typography
                  sx={{ fontSize: 20 }}
                  className="font-medium text-primary"
                >
                  0.5
                </Typography>
              </Box>
            </Box>
          ))}
      </Box>
      <Box width="100%" display="flex" my={2} justifyContent={"end"}>
        <Button
          variant="outlined"
          sx={{ width: "auto", height: "50px", borderRadius: "20px", ml: 3,}}
          className="bg-primary border-primary font-bold text-white hover:border-primary hover:bg-white hover:text-primary"
          component={Link}
          href={`http://localhost:3000/posting-job/ai-result/collaborator/${data.cv_id}`}
        >
          Xem kết quả đánh giá AI
        </Button>
      </Box>
    </Box>
  );
}

export default Valuation;
