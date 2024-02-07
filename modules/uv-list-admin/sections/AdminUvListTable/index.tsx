"use client";

import { deactiveUv } from "@/common/apis/uv-list";
import DeleteDialog from "@/common/components/delete-dialog";
import { IUvList } from "@/interfaces/uv-list-admin";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, IconButton, Typography } from "@mui/material";
import dayjs from "dayjs";
import {
  MRT_Table,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useState } from "react";

export interface UVListTableProps {
  data: IUvList[];
}

export const AdminUvListTable = ({ data }: UVListTableProps) => {
  const [open, setOpen] = useState(false);
  const [deleteId, setDeleteId] = useState(0);
  const handleDeactiveJob = (index: any) => {
    deactiveUv(data[index].id).then((res) => {
      console.log(res);
      // need to update the data
    });
  };

  let columns: MRT_ColumnDef<IUvList>[] = [
    {
      accessorKey: "id",
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
      accessorKey: "fullname",
      header: "Họ và tên",
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-start",
            alignItems: "center",
          }}
        >
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "job_title",
      header: "Tên công việc",
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
      accessorKey: "industry",
      header: "Ngành nghề",
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
      accessorKey: "job_service",
      header: "Tên dịch vụ",
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
      accessorKey: "referred_time",
      header: "Ngày giới thiệu",
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
    {
      accessorKey: "status",
      header: "Trạng thái",
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
    },
    {
      accessorKey: "Action",
      header: "Thao tác",
      Header: ({ column }) => <p>{column.columnDef.header}</p>,
      Cell: ({ cell }) => (
        <IconButton
          onClick={() => {
            console.log("Tức lém", data[cell.row.index].id);
            setOpen(true);
            setDeleteId(cell.row.index);
          }}
        >
          <DeleteOutline color="error" />
        </IconButton>
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
    <>
      <DeleteDialog
        open={open}
        setOpen={setOpen}
        action={() => handleDeactiveJob(deleteId)}
      />
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
    </>
  );
};
