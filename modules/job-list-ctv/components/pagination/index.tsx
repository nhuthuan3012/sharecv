import { Box, Button, PaginationItem, Typography } from "@mui/material"
import Pagination from '@mui/material/Pagination';
import { paginationTextStyles } from "../../styles";

export interface PaginationProps {
    numsPerPage: number,
    totalPage: number,
    total_items: number,
    currentPage: number,
    onChangePage: (pageNumber: number) => void
}

export const CustomPagination = ({
    numsPerPage,
    totalPage,
    total_items,
    currentPage,
    onChangePage,
}: PaginationProps) => {

    return (
        <Box display="flex" flexDirection="row" justifyContent="space-between">
            <Box>
                <Typography sx={paginationTextStyles()}>
                    Kết quả {numsPerPage * (currentPage - 1)} - {numsPerPage * (currentPage)} của {total_items}
                </Typography>
            </Box>
            <Box display="flex" flexDirection="row" justifyContent="center" alignItems="center" gap="10px">
                <Button
                    onClick={() => onChangePage(1)}
                    sx={{
                        textTransform: "none",

                    }}
                >
                    <Typography sx={{ ...paginationTextStyles() }}>Trước</Typography>
                </Button>
                <Pagination
                    count={totalPage}
                    variant="outlined"
                    shape="rounded"
                    color="secondary"
                    onChange={(event: any, page: any) => onChangePage(page)}
                    page={currentPage}
                    hideNextButton
                    hidePrevButton
                    siblingCount={1}
                    size="large"
                    renderItem={(item) => <PaginationItem {...item} sx={{
                        border: "1px solid blue",
                        width: "50px",
                        height: "50px",
                        ...paginationTextStyles()
                    }} />}
                    sx={{
                        // ".mui-zy3q8l-MuiButtonBase-root-MuiPaginationItem-root > .Mui-selected": {
                        //     backgroundColor: "!#fff",
                        // }
                    }}
                />
                <Button
                    onClick={() => onChangePage(totalPage)}
                    sx={{
                        textTransform: "none",
                    }}
                >
                    <Typography sx={{ ...paginationTextStyles() }}>Cuối</Typography>
                </Button>
            </Box>
        </Box>
    )
}
