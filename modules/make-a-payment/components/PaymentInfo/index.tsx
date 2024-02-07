"use client";
import { PointPackage } from "@/interfaces/point-package";
import { Box, Button, FormControlLabel, Grid, Typography } from "@mui/material";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import Checkbox from "@mui/material/Checkbox";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { IPaymentInfo } from "../../type"
function PaymentInfo({ data }: { data: IPaymentInfo }) {
  const [number, setNumber] = useState(0);
  const router = useRouter();
  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleDecrement = () => {
    if (number > 0) {
      setNumber((prevNumber) => prevNumber - 1);
    }
    if (number < 0) {
      setNumber(0);
    }
  };

  return (
    <Box
      px={3}
      py={5}
      width="100%"
      display="flex"
      flexDirection={"column"}
      className="border-primary bg-background gap-10"
      sx={{
        borderRadius: "10px",
        border: 1,
      }}
    >
      <Box
        display="flex"
        className="gap-2"
        flexDirection="row"
        alignItems={"center"}
      >
        <Typography className="text-primary font-bold text-2xl">
          Chọn phương thức thanh toán
        </Typography>
        {/* <FormControlLabel
          className="text-primary "
          label="Chuyển khoản"
          sx={{ fontSize: 10 }}
          control={
            <Checkbox
              icon={<CircleOutlinedIcon />}
              checkedIcon={<TaskAltIcon className="text-green-400" />}
            />
          }
        /> */}
        <TaskAltIcon className="text-green-400" />
        <Typography className="text-green-400 font-bold text-medium">
          Chuyển khoản
        </Typography>
      </Box>
      <Box
        display="flex"
        className="gap-1"
        flexDirection="row"
        alignItems={"center"}
      >
        <Typography className="text-primary font-bold text-lg">
          Nhập mã thanh toán
        </Typography>
        <Typography className="text-red-500 font-bold text-lg">
          {data.id_code}
        </Typography>
        <Typography className="text-primary font-bold text-lg">vào</Typography>
        <Typography className="text-red-500 font-bold text-lg">
          Nội dung thanh toán
        </Typography>
        <Typography className="text-primary font-bold text-lg">
          theo cú pháp sau:
        </Typography>
      </Box>
      <Box
        display="flex"
        className="gap-1 w-full"
        flexDirection="row"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display="flex"
          px={5}
          className="gap-1 border-red-500 bg-white"
          flexDirection="row"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{ border: 1, borderRadius: "10px" }}
        >
          <Typography className="text-2xl">{`${data.id_code} Họ và tên Tên dịch vụ`}</Typography>
        </Box>
      </Box>
      <Box
        width="100%"
        display="flex"
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box
          display="flex"
          width="80%"
          className="gap-10"
          flexDirection="column"
          alignItems={"center"}
          justifyContent={"center"}
          sx={{
            borderTop: 1,
            borderColor: "gray",
          }}
        >
          <Typography mt={5} className="text-2xl font-semibold">
            Thông tin chuyển khoản
          </Typography>
          <Box
            display="flex"
            className="gap-1"
            flexDirection="column"
            alignItems={"left"}
          >
            <Box width="100%" display="flex" className="gap-1">
              <Typography className="text-lg">Tên ngân hàng:</Typography>
              <Typography className="text-lg font-bold">
                {data.bank_name}
              </Typography>
            </Box>
            <Box width="100%" display="flex" className="gap-1">
              <Typography className="text-lg">Phòng giao dịch:</Typography>
              <Typography className="text-lg font-bold">
                {data.transaction}
              </Typography>
            </Box>
            <Box width="100%" display="flex" className="gap-1">
              <Typography className="text-lg ">Tên chủ tài khoản:</Typography>
              <Typography className="text-lg font-bold">
                {data.account_owner}
              </Typography>
            </Box>
            <Box width="100%" display="flex" className="gap-1">
              <Typography className="text-lg">Số tài khoản:</Typography>
              <Typography className="text-lg font-bold">
                {data.account_number}
              </Typography>
            </Box>
          </Box>
          <Typography
            component={Link}
            href=""
            className="text-primary font-bold text-xl"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Xem mã QR
          </Typography>
          <Box position="relative" height="300px" width="300px">
          <Image
            src={data.qr_code}
            alt="history"
            fill
            style={{
              maxHeight: "100%",
              objectFit: "contain",
            }}
          />
        </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentInfo;
