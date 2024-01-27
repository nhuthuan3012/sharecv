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
import { CreateJobTable } from './sections/CreatedJobTable';
import { IJobListCreate, IJobListDraft } from '@/common/interfaces/job-list';
import { CustomPagination } from './components/pagination';
import { DraftJobTable } from './sections/DraftJobTable';
import { getCreatedJobList, getDraftJobList } from '@/common/apis/job_list';
import dayjs from 'dayjs';

function JobListPage() {
    const [isDraftPage, setIsDraftPage] = useState<boolean>(false);
    const [pagination, setPagination] = useState({
        page_index: 1,
        limit: 10,
    });
    const [metaData, setMetaData] = useState({
        total_pages: 0,
        total_items: 0,
    })

    const [jobListCreatedData, setJobListCreateData] = useState<IJobListCreate[]>([]);
    const [jobListDraftData, setJobListDraftData] = useState<IJobListDraft[]>([]);

    const handleReloadData = () => {
        try {
            let payload: any = {
                page_index: pagination.page_index,
                limit: pagination.limit,
            }
            if (!isDraftPage) {
                getCreatedJobList(payload).then((res) => {
                    setMetaData({
                        ...metaData,
                        total_pages: res.data.data.total_pages,
                        total_items: res.data.data.total_items,
                    })
                    setJobListCreateData(res.data.data.item_lst);
                    console.log(res.data.data.item_lst);
                })
            } else {
                getDraftJobList(payload).then((res) => {
                    setMetaData({
                        ...metaData,
                        total_pages: res.data.data.total_pages,
                        total_items: res.data.data.total_items,
                    })
                    setJobListDraftData(res.data.data.item_lst);
                    console.log(res.data.data.item_lst);
                })
            }
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        handleReloadData();
    }, [isDraftPage, pagination, handleReloadData]);

    const handleChangeNumPerPage = (value: any) => {
        setPagination({
            ...pagination,
            limit: value,
        })
        handleReloadData();
    }

    const handleChangePageNumber = (page: number) => {
        setPagination({
            ...pagination,
            page_index: page,
        })
        handleReloadData();
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
                }}>Danh sách công việc</Typography>
            </Box>
            <Box mt="25px">
                <Box display="flex" flexDirection="row" gap="30px">
                    {/* tab */}
                    <Button sx={TabButtonStyle()} onClick={() => setIsDraftPage(false)}>
                        <Typography sx={TabTextStyle(isDraftPage === false)}>Công việc đã tạo</Typography>
                    </Button>
                    <Divider orientation="vertical" flexItem />
                    <Button sx={TabButtonStyle()} onClick={() => setIsDraftPage(true)}>
                        <Typography sx={TabTextStyle(isDraftPage === true)}>Bản nháp</Typography>
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
                            options={[10, 20, 30, 40, 50]}
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
                {!isDraftPage ?
                    <CreateJobTable data={jobListCreatedData} /> : <DraftJobTable data={jobListDraftData} />
                }
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

export default JobListPage;
