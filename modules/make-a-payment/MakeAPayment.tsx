"use client";
import {
  Box,
  Button,
  Checkbox,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import ArrowCircleLeftOutlinedIcon from "@mui/icons-material/ArrowCircleLeftOutlined";
import { IListPointRespone, PointPackage } from "@/interfaces/point-package";
import { useRouter } from "next/navigation";
function MakeAPayment({ data,num }: { data: PointPackage,num:number }) {
  const router = useRouter();
  const [checked, setChecked] = useState(false);
  const handleCheckbox = (event: any) => {
    setChecked(event.target.checked);
  };
  const onClickReturn = () => {
    router.push("/buy-point")
  };
  return (
    <Box
      width="100%"
      px={"120px"}
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      justifyContent={"center"}
      sx={{ borderRadius: "5px" }}
    >
      <Box display="flex" py={5} width="100%">
        <Box display="flex" width="10%">
          <IconButton color="primary" onClick={onClickReturn}>
            <ArrowCircleLeftOutlinedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box display="flex" justifyContent={"center"} width="80%">
          <Typography className="text-2xl text-primary font-bold">
            Thanh toán
          </Typography>
        </Box>
      </Box>
      <Box width="100%" px={"100px"}>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th className="text-primary">Tên gói</th>
              <th className="text-primary">Đơn giá</th>
              <th className="text-primary">Số lượng</th>
              <th className="text-primary">Thành tiền</th>
              <th className="text-primary">Thao tác</th>
              {/* Add more column headers as needed */}
            </tr>
          </thead>
          <tbody
            className="bg-background w-full rounded-xl"
            style={{ height: "50px" }}
          >
            {/* {data.map((row) => ( */}
              <tr className="gap-0" key={data.package_id}>
                <td
                  style={{
                    borderBottomLeftRadius: "10px",
                    borderTopLeftRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <Typography className="text-black">
                    {" "}
                    {`Gói ${data.point} Điểm`}{" "}
                  </Typography>
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Typography className="text-black">
                    {" "}
                    {data.price.toLocaleString("en-US")}
                  </Typography>
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  {num}
                </td>
                <td
                  style={{
                    textAlign: "center",
                  }}
                >
                  <Typography className="text-black">
                    {" "}
                    {(data.price * num).toLocaleString("en-US")}
                  </Typography>
                </td>
                <td
                  style={{
                    borderBottomRightRadius: "10px",
                    borderTopRightRadius: "10px",
                    textAlign: "center",
                  }}
                >
                  <IconButton aria-label="delete" color="primary">
                    <DeleteIcon />
                  </IconButton>
                </td>
                {/* Add more cells based on your data structure */}
              </tr>
            {/* ))} */}
          </tbody>
        </table>
      </Box>
      <Box
        width="100%"
        py={5}
        px="100px"
        display="flex"
        flexDirection="row"
        justifyContent={"space-between"}
      >
        <Box display="flex" alignItems="center">
          <Checkbox checked={checked} onChange={handleCheckbox} />
          <Typography>Tôi đã đọc và đồng ý với</Typography>
          <Typography
            className="text-primary"
            sx={{
              paddingLeft: 1,
              "&:hover": {
                cursor: "pointer",
                textDecoration: "underline",
              },
            }}
          >
            Điều khoản dịch vụ
          </Typography>
          <Typography
            sx={{
              paddingLeft: 1,
            }}
          >
            của ShareCV
          </Typography>
        </Box>
        <Button className={"hover:text-primary border-primary hover:border-primary hover:bg-white"} sx={{border:1,borderRadius:"20px"}} variant="contained"> Thanh toán</Button>
      </Box>
    </Box>
  );
}

export default MakeAPayment;
