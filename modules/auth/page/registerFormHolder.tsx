"use client";

import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { RegistForm } from "../components/regist-form";
import Link from "next/link";
import Image from "next/image"

export const RegisterFormHolder = () => {
  return (
    <Box
      display="flex"
      flex={1}
      flexDirection="column"
      py={5}
      justifyContent="center"
      alignItems="center"
    >
      <Box width="100%" display="flex" flexDirection="column" alignItems="center" maxWidth="600px" className="">
        <Image src="/Logo.png"
          width={500}
          height={400}
          alt="Picture of the author"/>
        <Typography display="flex" justifyContent="center" className="font-bold text-orange text-2xl">
          Dành cho nhà tuyển dụng
        </Typography>
        <Typography className="font-bold text-primary text-2xl">
          Đăng ký tài khoản
        </Typography>
        <div className="py-2">
          <RegistForm redirect="/login" />
        </div>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Typography>Bạn đã có tài khoản?</Typography>
          <Typography
            component={Link}
            href="/login"
            className="text-primary"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Đăng nhập ngay
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
