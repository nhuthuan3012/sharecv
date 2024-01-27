"use client"

import { useEffect, useLayoutEffect, useMemo, useState } from 'react';
import {
    MaterialReactTable,
    useMaterialReactTable,
    type MRT_ColumnDef,
} from 'material-react-table';
import { Autocomplete, Box, Button, Divider, Tab, TextField, Typography } from '@mui/material';
import { TabButtonStyle, TabTextStyle } from './styles';
import { TableSearchBar } from './components/searchbar';
import { CustomPagination } from './components/pagination';

import dayjs from 'dayjs';
import { getCtvJobList } from '@/common/apis/job-list-ctv';
import { AdminUvListTable } from './sections/AdminUvListTable';
import { IUvListAdmin } from '@/common/interfaces/uv-list-admin';
import { getUvListAdmin } from '@/common/apis/uv-list-admin';

const pageTabs = {
    1: "all",
    2: "pending",
    3: "approved",
    4: "declined"
}

function UVListAdminPage() {
    const [currentTab, setCurrentTab] = useState<1 | 2 | 3 | 4>(1);
    const [pagination, setPagination] = useState({
        page_index: 1,
        limit: 5,
    });
    const [metaData, setMetaData] = useState({
        total_pages: 5,
        total_items: 20,
    })

    const [uvListData, setUVListData] = useState<IUvListAdmin[]>([]);

    useEffect(() => {
        try {
            let payload: any = {
                page_index: pagination.page_index,
                limit: pagination.limit,
                state: pageTabs[currentTab],
            }
            getUvListAdmin(payload).then((res) => {
                console.log(res.data.data.item_lst);
                console.log("request be uv list admin")
                setMetaData({
                    ...metaData,
                    total_pages: res.data.data.total_pages,
                    total_items: res.data.data.total_items,
                })
                setUVListData(res.data.data.item_lst);
            })
        } catch (err) {
            console.log(err);
        }
    }, [pagination, currentTab]);

    const handleChangeNumPerPage = (value: any) => {
        setPagination({
            ...pagination,
            limit: value,
        })
    }

    const handleChangePageNumber = (page: number) => {
        setPagination({
            ...pagination,
            page_index: page,
        })
    }

    return (
        <Box sx={{
            width: 'auto',
            marginTop: '100px',
        }}>
            <Box>
                <Typography variant="h5" sx={{
                    color: '#063776',
                    fontFamily: 'Montserrat',
                    fontSize: '36px',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    lineHeight: '80px',
                    padding: '5px'
                }}>Danh sách ứng viên</Typography>
            </Box>
            <Box mt="25px">
                <Box display="flex" flexDirection="row" gap="30px">
                    {/* tab */}
                    <Button sx={TabButtonStyle()} onClick={() => setCurrentTab(1)}>
                        <Typography sx={TabTextStyle(currentTab === 1)}>CHỜ DUYỆT</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()} onClick={() => setCurrentTab(2)}>
                        <Typography sx={TabTextStyle(currentTab === 2)}>ĐANG DUYỆT</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()} onClick={() => setCurrentTab(3)}>
                        <Typography sx={TabTextStyle(currentTab === 3)}>ĐANG TUYỂN</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()} onClick={() => setCurrentTab(4)}>
                        <Typography sx={TabTextStyle(currentTab === 4)}>TẠM DỪNG</Typography>
                    </Button>
                </Box>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="space-between" alignItems="center" mt="50px" >
                <Box display="flex" flexDirection="row" gap="15px" alignItems="center" p={"5px"}>
                    <Box>
                        <Typography sx={{
                            color: '#063776',
                            fontFamily: 'Montserrat',
                            fontSize: '22px',
                            fontStyle: 'normal',
                            fontWeight: 400,
                            lineHeight: '76.296px',
                        }}>Show</Typography>
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

            <Box sx={{
                marginTop: '50px',
            }}>
                <AdminUvListTable data={uvListData} />
                <Box
                    sx={{
                        marginTop: '25px',
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
    )
}

export default UVListAdminPage;
