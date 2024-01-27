"use client"

import { useEffect, useMemo, useState } from 'react';
import {
    MRT_Table,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';

import { Box, Button, Chip, Menu, Typography } from "@mui/material";
import Image from 'next/image';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import { CustomMenuItem } from '../../components/MenuItem';
import { CustomMenu } from '../../components/CustomMenu';
import dayjs from 'dayjs';
import { API_URL } from "@/config/_constant";
import DocumentScannerIcon from '@mui/icons-material/DocumentScanner';
import { ICtvJobList } from '@/common/interfaces/ctv-job-list';
import { useRouter } from 'next/navigation';

// redux
import { useDispatch, useSelector } from "react-redux";
import { selectJobListCtv, setData } from '@/lib/redux/slices/jobListCtvSlice';


export interface UVListTableProps {
    data: ICtvJobList[];
}

export const CtvJobListTable = ({
    data,
}: UVListTableProps) => {
    const router = useRouter();

    let uvListData: ICtvJobList[] = useSelector(selectJobListCtv);

    const handleClickJobDetail = (index: any) => {
        router.push(`job-description/collaborator/${data[index].job_id}`);
    }

    useEffect(() => {
        console.log(data);
    }, [data])

    console.log(data);

    const columns: MRT_ColumnDef<ICtvJobList>[] = [
        {
            accessorKey: 'job_id',
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
            accessorKey: 'logo',
            header: 'Logo',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
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
            )
        },
        {
            accessorKey: 'company_name',
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
            accessorKey: 'industries',
            header: 'Ngành nghề',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
                </Box>
            ),
            Cell: ({ cell }) => (
                <Box display="flex" flexDirection="column" justifyContent="flex-start" alignItems="center" gap="5px">
                    {cell.getValue<any>().map((item: any, index: any) => (
                        <Chip label={item} variant="outlined" key={index} />
                    ))}
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
            accessorKey: 'created_at',
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
            accessorKey: 'count',
            header: 'Số CV',
            Header: ({ column }) => (
                <Box display="flex" flexDirection="row" gap="1px" justifyContent="center" alignItems="center">
                    <p>{column.columnDef.header}</p>
                    <KeyboardArrowDownIcon />
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
                    <Button variant="contained" color="primary" onClick={() => {
                        handleClickJobDetail(cell.row.index);
                    }}>
                        <DocumentScannerIcon />
                    </Button>
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
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <MRT_Table table={table} />
        </Box>
    )
}