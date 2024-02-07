"use client";

import { getCtvJobList } from "@/common/apis/job-list-ctv";
import { ICtvJobList } from "@/interfaces/ctv-job-list";
import { CustomPagination } from "@/modules/job-list-ctv/components/pagination";
import { TableSearchBar } from "@/modules/job-list-ctv/components/searchbar";
import { CtvJobListTable } from "@/modules/job-list-ctv/sections/CtvJobListTable";
import { TabButtonStyle, TabTextStyle } from "@/modules/job-list-ctv/styles";
import {
  Autocomplete,
  Box,
  Button,
  Divider,
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

  const [uvListData, setUvListData] = useState<ICtvJobList[]>([]);
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
      getCtvJobList(payload).then((res) => {
        setMetaData({
          ...metaData,
          total_pages: res.data.data.total_pages,
          total_items: res.data.data.total_items,
        });
        setUvListData(res.data.data.item_lst);
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
          Danh sách công việc
        </Typography>
      </Box>
      <Box mt="25px">
        <Box display="flex" flexDirection="row" gap="30px">
          {/* tab */}
          <Button sx={TabButtonStyle()} onClick={() => changeState("referred")}>
            <Typography
              sx={TabTextStyle(searchParams.get("state") === "referred")}
            >
              ĐÃ GIỚI THIỆU
            </Typography>
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button sx={TabButtonStyle()} onClick={() => changeState("favorite")}>
            <Typography
              sx={TabTextStyle(searchParams.get("state") === "favorite")}
            >
              QUAN TÂM
            </Typography>
          </Button>
          <Divider orientation="vertical" flexItem />
          <Button
            sx={TabButtonStyle()}
            onClick={() => changeState("unreferred")}
          >
            <Typography
              sx={TabTextStyle(searchParams.get("state") === "unreferred")}
            >
              CÔNG VIỆC MỚI
            </Typography>
          </Button>
          <Divider orientation="vertical" flexItem />
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
              options={[10, 20, 30, 40, 50]}
              renderInput={(params) => <TextField {...params} label="" />}
              onChange={(event, value) => handleChangeNumPerPage(value)}
              getOptionLabel={(option) => option.toString()}
              size="small"
              sx={{
                width: "100px",
                "& .MuiInputBase-root": {
                  borderRadius: "10px",
                  color: "#063776",
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
        <CtvJobListTable data={uvListData} />
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
