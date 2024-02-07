"use client";
import { getCookie } from "@/common/helpers/getCookies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import CompanyInfo from "@/modules/company-info/CompanyInfo";
import BuyPoint from "@/modules/buy-point/BuyPoint";
import { IListPointRespone, PointPackage } from "@/interfaces/point-package";
import { useEffect, useState } from "react";
import { getListPointPackage } from "@/common/apis/money-2-point";
function BuyPointPage() {
  // if (!getCookie("token")) {
    const [data, setData] = useState<PointPackage[]>([{
        package_id:  0,
        point: 0 ,
        price: 0 ,
        currency: "string"
    }]);
    console.log("point package", data)
    useEffect(() => {
      (async () => {
        try {
          const res = await getListPointPackage();
          setData(res.data.data);
        } catch (error) {
          console.log(error);
        }
      })();
    }, []);
  return (
    <Box
      display="flex"
      width="100%"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      sx={{overflow:"auto"}}
    >
        <BuyPoint data={data}/>
    </Box>
  );
}

export default BuyPointPage;
