import { Menu, MenuItem, Typography } from "@mui/material"
import { CustomMenuItem } from "../MenuItem"

export interface MenuProps {
    options: string[]
    anchorEl: null | HTMLElement;
    openMenu: boolean;
    handleCloseMenu: () => void;
    onChange: (data: any) => void;
}

export const CustomMenu = ({
    options,
    anchorEl,
    openMenu,
    handleCloseMenu,
    onChange,
}: MenuProps) => {

    const handleChooseItem = (data: any) => {
        onChange(data);
        handleCloseMenu();
    }

    return (
        <Menu
            anchorEl={anchorEl}
            anchorReference={undefined}
            anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
            }}
            open={openMenu}
            onClose={handleCloseMenu}
            sx={{ mt: 0.5, padding: 2 }}
        >
            {options.map((option) => {
                return (
                    <MenuItem key={option} onClick={() => handleChooseItem(option)}>
                        <Typography>{option}</Typography>
                    </MenuItem>
                )
            })}
        </Menu>
    )
}