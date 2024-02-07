"use client";
import { removeAuthCookies } from "@/common/helpers/authCookies";
import { IUserProfile } from "@/types/auth-data";
import { AccountCircle } from "@mui/icons-material";
import { Avatar, IconButton, Menu, MenuItem } from "@mui/material";
import { CookieValueTypes } from "cookies-next";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

function AvatarMenu({ full_name }: { full_name: CookieValueTypes }) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton onClick={handleClick}>
        <Avatar
          sx={{
            width: "30px",
            height: "30px",
            "&:hover": {
              cursor: "pointer",
            },
          }}
        >
          <AccountCircle />
        </Avatar>
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        disableScrollLock
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        sx={{ mt: "25px", zIndex: 1000 }}
      >
        <MenuItem
          onClick={() => {
            handleClose();
            router.push("/account-info");
          }}
        >
          Tài khoản của tôi
        </MenuItem>
        <MenuItem
          onClick={() => {
            handleClose();
            removeAuthCookies();
            router.replace("/");
          }}
        >
          Đăng xuất
        </MenuItem>
      </Menu>
    </>
  );
}

export default AvatarMenu;
