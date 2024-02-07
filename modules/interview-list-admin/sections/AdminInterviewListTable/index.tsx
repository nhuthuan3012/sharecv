"use client";

import { IInterviewInfo } from "@/interfaces/interviews";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import {
  MRT_Table,
  useMaterialReactTable,
  type MRT_ColumnDef,
} from "material-react-table";

export interface UVListTableProps {
  data: IInterviewInfo[];
}

function formatInterviewTime(interviewTime: string): string {
  const [startTime, endTime] = interviewTime.split(" - ");

  // Parse start and end times using dayjs
  const startDate = dayjs(startTime);
  const endDate = dayjs(endTime);

  // Format start and end times as HH:MM
  const formattedStartTime = startDate.format("HH:mm");
  const formattedEndTime = endDate.format("HH:mm");

  // Concatenate formatted start and end times
  return `${formattedStartTime} - ${formattedEndTime}`;
}
export const AdminInterviewListTable = ({ data }: UVListTableProps) => {
  let columns: MRT_ColumnDef<IInterviewInfo>[] = [
    {
      accessorKey: "candidate_id",
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
      accessorKey: "collaborator_name",
      header: "Tên CTV",
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
      accessorKey: "collaborator_phone",
      header: "Phone CTV",
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
      accessorKey: "candidate_name",
      header: "Tên ứng viên",
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
      accessorKey: "job_title",
      header: "Tên công việc",
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
      Cell: ({ cell }) => (
        <Box>
          <Typography>{cell.getValue<string>()}</Typography>
        </Box>
      ),
    },
    {
      accessorKey: "interview_date",
      header: "Ngày PV",
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
      accessorKey: "interview_time",
      header: "Thời gian",
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
            {formatInterviewTime(cell.getValue<string>())}
          </Typography>
        </Box>
      ),
    },
    {
      accessorKey: "interview_location",
      header: "Địa điểm",
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
