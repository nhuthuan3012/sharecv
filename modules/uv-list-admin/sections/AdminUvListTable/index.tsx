import { useMemo, useState } from 'react';
import {
    MRT_Table,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';

import { Box, Button, Chip, Menu, Tooltip, Typography } from "@mui/material";
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CustomMenuItem } from '../../components/MenuItem';
import { CustomMenu } from '../../components/CustomMenu';
import dayjs from 'dayjs';
import { API_URL } from "@/config/_constant";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { useRouter } from 'next/navigation';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { IUvListAdmin } from '@/common/interfaces/uv-list-admin';


export interface UVListTableProps {
    data: IUvListAdmin[];
}

export const AdminUvListTable = ({
    data,
}: UVListTableProps) => {
    const router = useRouter();

    const handleClickDetail = (index: number) => {
        router.push(`/posting-job/uv-info/${data[index].id}`)
    }

    const handleDeleteItem = (index: number) => {
        console.log(index)
    }

    const columns: MRT_ColumnDef<IUvListAdmin>[] = [
        {
            accessorKey: 'id',
            header: 'ID',
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
                    }}>
                    <p>{column.columnDef.header}</p>
                </Box>
            )
        },
        {
            accessorKey: 'fullname',
            header: 'Tên công ty',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            )
        },
        {
            accessorKey: 'job_title',
            header: 'Tên công việc',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            )
        },
        {
            accessorKey: 'industry',
            header: 'Ngành nghề',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            ),
            Cell: ({ cell }) => (
                <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" gap="5px">
                    <Chip label={cell.getValue<any>()} variant="outlined" key={cell.getValue<any>()} />
                </Box>
            )
        },
        {
            accessorKey: 'job_service',
            header: 'Tên dịch vụ',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            )
        },
        {
            accessorKey: 'status',
            header: 'Trạng thái',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            )
        },
        {
            accessorKey: 'referred_time',
            header: 'Ngày giới thiệu',
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
                    }}>
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            ),
            Cell: ({ cell }) => (
                <Box>
                    <Typography>{dayjs(cell.getValue<string>()).format('MM-DD-YYYY')}</Typography>
                </Box>
            )
        },
        {
            accessorKey: 'num_cvs',
            header: 'Thao tác',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            ),
            Cell: ({ cell }) => (
                <Box display="flex" flexDirection="row" justifyContent="flex-start" alignItems="center" gap="5px">
                    <Tooltip title="Xem chi tiết ứng viên">
                        <Button variant="outlined" color="primary" onClick={() => handleClickDetail(cell.row.index)}>
                            <DocumentScannerIcon />
                        </Button>
                    </Tooltip>
                </Box>
            )
        },
    ]

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
            fontFamily: 'Montserrat',
        }),
        muiTableProps: {
            sx: {
                border: "2px solid #D6D0D0",
                borderRadius: "10px",
                background: "#FFF",
                boxShadow: "2px 8px 24px -4px rgba(255, 255, 255, 0.08), 0px 6px 12px -6px rgba(255, 255, 255, 0.12)",
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

            }
        },
        muiTableBodyCellProps: {
            sx: {
                color: "#000",
                fontFamily: "Poppins",
                fontSize: "14.671px",
                fontStyle: "normal",
                fontWeight: "500",
                lineHeight: "69.039px",
            }
        }
    })

    return (
        <Box
            sx={{
                // border: "1px solid #063776",
            }}
        >
            <MRT_Table table={table} />
        </Box>
    )
}