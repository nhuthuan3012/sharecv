"use client";
import { ICtvWalletList } from "@/interfaces/ctv-wallet-list";
import { CustomPagination } from "@/modules/wallet-list-ctv/components/pagination";
import { TableSearchBar } from "@/modules/wallet-list-ctv/components/searchbar";
import { CtvWalletListTable } from "@/modules/wallet-list-ctv/sections/CtvWalletListTable";
import {
  Autocomplete,
  Box,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

function UVListPage() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const [pagination, setPagination] = useState({
    page_index: 1,
    limit: 10,
  });
  const router = useRouter();
  const [metaData, setMetaData] = useState({
    total_pages: 5,
    total_items: 20,
  });

  const [uvListData, setUvListData] = useState<ICtvWalletList[]>([]);
  const changeState = (state: string) => {
    router.push(`${pathname}?state=${state}`);
  };
  useEffect(() => {
    try {
      let payload: any = {
        page_index: pagination.page_index,
        limit: pagination.limit,
        state: searchParams.get("state") || "referred",
        role: "collaborator",
      };
      /*getCtvWalletList(payload).then((res) => {
        setMetaData({
          ...metaData,
          total_pages: res.data.data.total_pages,
          total_items: res.data.data.total_items,
        });
        setUvListData(res.data.data.item_lst);
      });*/
    } catch (err) {
      console.log(err);
    }
  }, [pagination, searchParams]);

  const handleChangeNumPerPage = (value: any) => {
    setPagination({
      ...pagination,
      limit: value,
    });
  };

  const handleChangePageNumber = (page: number) => {
    setPagination({
      ...pagination,
      page_index: page,
    });
  };

  const handleGetJobDetail = (index: number) => {
    console.log(uvListData);
    // router.push(`job-description/collaborator/1`)
  };

  return (
    <Box
      sx={{
        width: "auto",
        marginTop: "10px",
      }}
      className="mx-10"
    >
      <Box>
        <Typography
          variant="h5"
          sx={{
            color: "#063776",
            fontFamily: "Montserrat",
            fontSize: "36px",
            fontStyle: "normal",
            fontWeight: 700,
            lineHeight: "80px",
            padding: "5px",
          }}
        >
          Ví của tôi
        </Typography>
      </Box>
      <Box mt="25px">
        <p>
          {" "}
          Số điểm hiện có trong ví{" "}
          <span className="ml-2 text-[#00AB56]"> 100 điểm </span>{" "}
        </p>
        <p>
          {" "}
          Số điểm tối đa được rút{" "}
          <span className="ml-2 text-[#00AB56]"> 50 điểm </span>{" "}
        </p>
        <p>
          {" "}
          Số điểm đang bảo hành{" "}
          <span className="ml-2 text-[#00AB56]"> 50 điểm </span>{" "}
        </p>
        <div className="flex items-center gap-4">
          <p className="font-medium"> Số điểm muốn rút </p>
          <form className="flex gap-20 items-center">
            <input
              className="bg-gray-50 border-solid border-primary 
              text-gray-900 text-sm rounded-full h-10 block w-full p-2"
              required
            />
            <Button
              variant="outlined"
              sx={{
                borderRadius: "20px",
              }}
              className="w-full font-bold"
            >
              Gửi yêu cầu
            </Button>
          </form>
        </div>
        <p className="text-2xl text-primary font-bold"> Lịch sử giới thiệu </p>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        mt="50px"
      >
        <Box
          display="flex"
          flexDirection="row"
          gap="15px"
          alignItems="center"
          p={"5px"}
        >
          <Box>
            <Typography
              sx={{
                color: "#063776",
                fontFamily: "Montserrat",
                fontSize: "22px",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "76.296px",
              }}
            >
              Show
            </Typography>
          </Box>
          <Box>
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              value={pagination.limit}
              options={[10, 20, 30, 40, 50]}
              renderInput={(params) => <TextField {...params} label="" />}
              onChange={(event, value) => handleChangeNumPerPage(value)}
              getOptionLabel={(option) => option.toString()}
              sx={{
                height: "40px",
                width: "100px",
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                  color: "#063776",
                  height: "40px",
                  width: "100px",
                },
                "& .input": {
                  height: "20px",
                },
              }}
            />
          </Box>
        </Box>
        <Box>
          <TableSearchBar />
        </Box>
      </Box>

      <Box
        sx={{
          marginTop: "50px",
        }}
      >
        <CtvWalletListTable data={uvListData} />
        <Box
          sx={{
            marginTop: "25px",
          }}
        >
          <CustomPagination
            onChangePage={(page: number) => handleChangePageNumber(page)}
            numsPerPage={pagination.limit}
            totalPage={metaData.total_pages}
            total_items={metaData.total_items}
            currentPage={pagination.page_index}
          />
        </Box>
      </Box>
    </Box>
  );
}

export default UVListPage;
