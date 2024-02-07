"use client";

import { getPointHistoryListAdmin } from "@/common/apis/point-package";
import { IPointBuyingHistory } from "@/interfaces/point-package";
import { CustomPagination } from "@/modules/point-buying-history-admin/components/pagination";
import { TableSearchBar } from "@/modules/point-buying-history-admin/components/searchbar";
import { AdminPointBuyingHistoryListTable } from "@/modules/point-buying-history-admin/sections/AdminInterviewListTable";
import { Autocomplete, Box, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";

function PointBuyingHistoryListAdminPage() {
  const [pagination, setPagination] = useState({
    page_index: 1,
    limit: 5,
  });
  const [metaData, setMetaData] = useState({
    total_pages: 5,
    total_items: 20,
  });

  const [pointListData, setPointListData] = useState<IPointBuyingHistory[]>([]);

  useEffect(() => {
    try {
      let payload: any = {
        page_index: pagination.page_index,
        limit: pagination.limit,
      };
      getPointHistoryListAdmin(payload).then((res) => {
        setMetaData({
          ...metaData,
          total_pages: res.data.data.total_pages,
          total_items: res.data.data.total_items,
        });
        setPointListData(res.data.data.item_lst);
      });
    } catch (err) {
      console.log(err);
    }
  }, [pagination]);

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
          Lịch sử mua điểm
        </Typography>
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
        <AdminPointBuyingHistoryListTable data={pointListData} />
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

export default PointBuyingHistoryListAdminPage;
