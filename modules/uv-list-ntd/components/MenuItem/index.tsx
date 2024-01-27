import { Box, MenuItem, Typography } from "@mui/material";

export interface MenuItemProps {
    data: string;
}

export const CustomMenuItem = ({
    data,
}: MenuItemProps) => {
    return (
        <MenuItem>
            <Typography>{data}</Typography>
        </MenuItem>
    )
}