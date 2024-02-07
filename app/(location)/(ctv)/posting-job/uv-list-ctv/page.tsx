"use client";

import {
  Autocomplete,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";

import { getUvListCtv } from "@/common/apis/uv-list";
import { IUvList } from "@/interfaces/uv-list-admin";
import { CustomPagination } from "@/modules/uv-list-ctv/components/pagination";
import { TableSearchBar } from "@/modules/uv-list-ctv/components/searchbar";
import { CtvUvListTable } from "@/modules/uv-list-ctv/sections/CtvUvListTable";
import { TabButtonStyle, TabTextStyle } from "@/modules/uv-list-ctv/styles";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function UVListCtvPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [pagination, setPagination] = useState({
    page_index: 1,
    limit: 5,
  });
  const [metaData, setMetaData] = useState({
    total_pages: 5,
    total_items: 20,
  });

  const [uvListData, setUVListData] = useState<IUvList[]>([]);

  useEffect(() => {
    try {
      let payload: any = {
        page_index: pagination.page_index,
        limit: pagination.limit,
        is_draft: searchParams.get("is_draft") === "true" ? true : false,
      };
      getUvListCtv(payload).then((res) => {
        setMetaData({
          ...metaData,
          total_pages: res.data.data.total_pages,
          total_items: res.data.data.total_items,
        });
        setUVListData(res.data.data.item_lst);
      });
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

  const changeState = (state: string) => {
    router.push(`${pathname}?is_draft=${state}`);
  };
  const handleChangePageNumber = (page: number) => {
    setPagination({
      ...pagination,
      page_index: page,
    });
  };

  return (
    <Box
      sx={{
        width: "auto",
        marginTop: "100px",
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
          Danh sách ứng viên
        </Typography>
      </Box>
      <Box mt="25px">
        <Box display="flex" flexDirection="row" gap="30px">
          {/* tab */}
          <Button sx={TabButtonStyle()} onClick={() => changeState("false")}>
            <Typography
              sx={TabTextStyle(
                !searchParams.get("is_draft") ||
                  searchParams.get("is_draft") === "false"
              )}
            >
              ứNG VIÊN ĐÃ GỬI
            </Typography>
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button sx={TabButtonStyle()} onClick={() => changeState("true")}>
            <Typography
              sx={TabTextStyle(searchParams.get("is_draft") === "true")}
            >
              ĐANG NHÁP
            </Typography>
          </Button>
        </Box>
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
              options={[5, 10, 15, 20, 25, 30]}
              renderInput={(params) => <TextField {...params} label="" />}
              onChange={(event, value) => handleChangeNumPerPage(value)}
              getOptionLabel={(option) => option.toString()}
              size="small"
              sx={{
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
        <CtvUvListTable data={uvListData} />
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

export default UVListCtvPage;
