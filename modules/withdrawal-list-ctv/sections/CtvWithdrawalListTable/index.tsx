"use client";

import {
  MRT_Table,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";
import { useEffect } from "react";

import { ICtvWithDrawalList } from "@/interfaces/ctv-withdrawal-list";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Chip } from "@mui/material";
import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

export interface WithdrawalListTableProps {
  data: ICtvWithDrawalList[];
}

export const CtvWithDrawalListTable = ({ data }: WithdrawalListTableProps) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  let uvListData: ICtvWithDrawalList[] = data;

  const handleClickWithdrawalDetail = (index: any) => {
    router.push(
      `Withdrawal-description/collaborator/${data[index].company_id}`
    );
  };

  useEffect(() => {
    console.log(data);
  }, [data]);

  console.log(data);

  let columns: MRT_ColumnDef<ICtvWithDrawalList>[] = [
    {
      accessorKey: "Withdrawal_id",
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
      accessorKey: "logo",
      header: "Số điểm rút",
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
          <Image
            src={`${cell.getValue<string>()}`}
            alt="Picture of the author"
            width={60}
            height={60}
          />
        </Box>
      ),
    },
    {
      accessorKey: "company_name",
      header: "Thành tiền",
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
      accessorKey: "Withdrawal_title",
      header: "Phương thức nhận tiền",
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
      accessorKey: "industries",
      header: "Ngày nhận tiền",
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
          display="flex"
          flexDirection="column"
          justifyContent="flex-start"
          alignItems="center"
          gap="5px"
        >
          {cell.getValue<any>()?.map((item: any, index: any) => (
            <Chip label={item} variant="outlined" key={index} />
          ))}
        </Box>
      ),
    },
  ];

  const table = useMaterialReactTable({
    columns,
    data,
    enablePagination: false,
    enableColumnFilterModes: true,
    enableColumnActions: true,
    enableColumnFilters: true,
    enableSorting: true,

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
    >
      <MRT_Table table={table} />
    </Box>
  );
};
