"use client";
import { getCookie } from "@/common/helpers/getCookies";
import { removeAccessCookies } from "@/common/helpers/setCookies";
import { Box, Button, Typography } from "@mui/material";
import { redirect, RedirectType, useSearchParams } from "next/navigation";
import { IListPointRespone, PointPackage } from "@/interfaces/point-package";
import { useEffect, useState } from "react";
import { getListPointPackage, getPointPackage } from "@/common/apis/point-package";
import MakeAPayment from "@/modules/make-a-payment/MakeAPayment";
function BuyPointPage() {
  const searchParams = useSearchParams()
  // if (!getCookie("token")) {
    const [data, setData] = useState<PointPackage>({
        package_id:  0,
        point: 0 ,
        price: 0 ,
        currency: "string"
    });
    console.log("point package", data)
    const id=searchParams.get("id");
    useEffect(() => {
      (async () => {
        try {
          if(id!=null){
            const res = await getPointPackage(id);
            setData(res.data.data);
          }
          // setData(res.data.data);
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
        <MakeAPayment data={data} num={searchParams.get("number")?Number(searchParams.get("number")):0}/>
    </Box>
  );
}

export default BuyPointPage;
