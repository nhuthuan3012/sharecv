"use client";

import { Box, Button, Typography } from "@mui/material";
import Image from 'next/image'
import { useState } from "react";
import { LoginForm } from "../components/login-form";
import Link from "next/link";
import ReturnButton from "@/common/components/button/ReturnButton";
export const LoginFormHolderer = () => {
  return (
    <Box>
      <Box
      display="flex"
      flex={1}
      flexDirection="row"
      py={5}
      justifyContent="center"
      alignItems="center"
      >
        <Box width={"50%"}>
          <ReturnButton/>
        </Box>
        <Box width={"50%"}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="right">
          <Typography> Bạn chưa có tài khoản?</Typography>
              <Button sx={{ boxShadow: 5 }} component={Link} href="./register" style={{color:"white",marginLeft:"5%" ,marginRight:"5%" }} variant="contained">Đăng kí</Button>
        </Box>
      </Box>
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
        <Typography display="flex" justifyContent="center" className="font-bold text-primary text-2xl">
          Dành cho nhà tuyển dụng
        </Typography>
        <Box width="100%" className="py-2">
          <LoginForm redirect="/home" />
        </Box>
        <Box display="flex" justifyContent="center" marginTop={2}>
          <Typography>Chưa có tài khoản?</Typography>
{/*           
            Đăng ký ngay
          </Typography> */}
        </Box>
      </Box>
    </Box>
    </Box>
  );
};
