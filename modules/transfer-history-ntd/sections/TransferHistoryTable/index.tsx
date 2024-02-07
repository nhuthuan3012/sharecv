"use client";

import { IPointBuyingHistory } from "@/interfaces/point-package";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import {
  MRT_Table,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

export interface PointBuyingHistoryListTableProps {
  data: IPointBuyingHistory[];
}

export const TransferHistoryNtdListTable = ({
  data,
}: PointBuyingHistoryListTableProps) => {
  let columns: MRT_ColumnDef<IPointBuyingHistory>[] = [
    {
      accessorKey: "transaction_id",
      header: "ID",
      Header: ({ column }) => (
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            color: "inherit",
          }}
        >
          <p>{column.columnDef.header}</p>
        </Box>
      ),
    },
    {
      accessorKey: "company_logo",
      header: "Logo",
      Header: ({ column }) => (
        <Box
          display="flex"
          flexDirection="row"
          gap="1px"
          justifyContent="center"
          alignItems="center"
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <img
            src={cell.getValue<string>()}
            alt="company logo"
            width="50px"
            height="50px"
          />
        </Box>
      ),
    },
    {
      accessorKey: "company_name",
      header: "Tên công ty",
      Header: ({ column }) => (
        <Box
          display="flex"
          flexDirection="row"
          gap="1px"
          justifyContent="center"
          alignItems="center"
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
    },
    {
      accessorKey: "point_package_name",
      header: "Tên gói điểm",
      Header: ({ column }) => (
        <Box
          display="flex"
          flexDirection="row"
          gap="1px"
          justifyContent="center"
          alignItems="center"
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "price",
      header: "Đơn giá",
      Header: ({ column }) => (
        <Box
          display="flex"
          flexDirection="row"
          gap="1px"
          justifyContent="center"
          alignItems="center"
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
    },
    {
      accessorKey: "quantity",
      header: "Số lượng",
      Header: ({ column }) => (
        <Box
          // onClick={(event: any) => handleOpenMenu(event, "CreateDay")}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            color: "inherit",
          }}
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "total_price",
      header: "Thành tiền",
      Header: ({ column }) => (
        <Box
          // onClick={(event: any) => handleOpenMenu(event, "CreateDay")}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            color: "inherit",
          }}
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "transaction_form",
      header: "Hình thức thanh toán",
      enableSorting: true,
      Header: ({ column }) => (
        <Box
          display="flex"
          flexDirection="row"
          gap="1px"
          justifyContent="center"
          alignItems="center"
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "transaction_date",
      header: "Ngày giao dịch",
      Header: ({ column }) => (
        <Box
          // onClick={(event: any) => handleOpenMenu(event, "CreateDay")}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
            alignItems: "center",
            textTransform: "none",
            color: "inherit",
          }}
        >
          <p>{column.columnDef.header}</p>
          <KeyboardArrowDownIcon />
        </Box>
      ),
      Cell: ({ cell }) => (
        <Box>
          <Typography>
            {dayjs(cell.getValue<string>()).format("MM-DD-YYYY")}
          </Typography>
        </Box>
      ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: false,
    enableColumnFilterModes: false,
    enableColumnActions: false,
    enableColumnFilters: false,
    enableSorting: false,

    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.default, //change default background color
      fontFamily: "Montserrat",
    }),
    muiTableProps: {
      sx: {
        border: "2px solid #D6D0D0",
        borderRadius: "10px",
        background: "#FFF",
        boxShadow:
          "2px 8px 24px -4px rgba(255, 255, 255, 0.08), 0px 6px 12px -6px rgba(255, 255, 255, 0.12)",
      },
    },
    muiTableHeadCellProps: {
      sx: {
        color: "#063776",
        fontFamily: "Poppins",
        fontSize: "17.237px",
        fontStyle: "normal",
        fontWeight: "600",
        borderBottom: "1px solid black",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        color: "#000",
        fontFamily: "Poppins",
        fontSize: "14.671px",
        fontStyle: "normal",
        fontWeight: "500",
        lineHeight: "69.039px",
      },
    },
  });

  return (
    <Box
      sx={{
        // border: "1px solid #063776",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="overflow-x-scroll max-w-[100%]"
    >
      <MRT_Table table={table} />
    </Box>
  );
};
