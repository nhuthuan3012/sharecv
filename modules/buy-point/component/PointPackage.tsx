"use client";
import { PointPackage } from "@/interfaces/point-package";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useState } from "react";
function PointPackage({data}:{data:PointPackage}) {
  const [number, setNumber] = useState(0);

  const handleIncrement = () => {
    setNumber((prevNumber) => prevNumber + 1);
  };

  const handleDecrement = () => {
    if(number>0){
        setNumber((prevNumber) => prevNumber - 1);
    }
    if(number<0){
        setNumber(0);
    }
  };
  return (
    <Box
      width="100%"
      height="200px"
      className="grid grid-cols-7 gap-0 border-primary"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{
        borderRadius: "10px",
        border: 1,
      }}
    >
      <Box
        display="flex"
        height={"100%"}
        sx={{ borderRight: 1 }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        py={2}
        className="border-primary col-span-1"
      >
        <Typography className="text-primary text-base"> {data.point?data.point: 0} </Typography>
        <Typography className="text-primary text-sm"> điểm </Typography>
      </Box>
      <Box
        display="flex"
        height={"100%"}
        sx={{ borderRight: 1 }}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        py={2}
        className="border-primary col-span-5 gap-10"
      >
        <Typography className="text-primary text-lg">
          {data.price?data.price.toLocaleString('en-US'): "0"}
        </Typography>
        <Button
          variant="contained"
          className="bg-white border-primary text-primary hover:bg-primary hover:text-white"
          sx={{ border: 1,boxShadow:0, borderRadius: "20px" }}
        >
          Mua ngay
        </Button>
      </Box>
      <Box
        display="flex"
        height={"100%"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        py={2}
        className="border-primary col-span-1"
      >
        <Button
          variant="contained"
          className="bg-white border-primary text-primary hover:bg-primary hover:text-white"
          sx={{boxShadow:0,height:"60px", width:"20px",borderRadius: "50%" }}
          onClick={handleIncrement}
        >
            <Typography className="text-xl"> + </Typography>
        </Button>
        <Typography className="text-2xl text-primary">{number}</Typography>
        <Button
          variant="contained"
          className="bg-white border-primary text-primary hover:bg-primary hover:text-white"
          sx={{boxShadow:0,height:"60px", width:"20px",borderRadius: "50%" }}
          onClick={handleDecrement}
        >
            <Typography className="text-xl"> - </Typography>
        </Button>
      </Box>
    </Box>
  );
}

export default PointPackage;
