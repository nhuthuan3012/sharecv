"use client";
import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import Box from "@mui/material/Box";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Typography } from "@mui/material";

const styles = () => ({
  select: {
    "&:before": {
      borderColor: "white",
    },
    "&:after": {
      borderColor: "white",
    },
  },
  icon: {
    fill: "white",
  },
});

function SearchCV() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    return;
  }

  return (
    // <Box height="100px" display="flex" sx={{ backgroundColor: "#E3E3E3" }}>
    <Box
      component="form"
      sx={{
        height: "70px",
        p: "2px 4px",
        display: "flex",
        borderRadius: "30px",
        alignItems: "center",
        backgroundColor: "#E3E3E3",
        width: 800,
      }}
      onSubmit={handleSubmit}
    >
      <Box
        display="flex"
        flexDirection={"row"}
        sx={{
          width: "27%",
          borderRight: 1,
          borderColor: "white",
        }}
      >
        <IconButton
          type="button"
          sx={{ p: "10px", color: "white" }}
          aria-label="search"
        >
          <SearchIcon />
        </IconButton>
        <InputBase
          sx={{
            "&:placeholder" :{
                color: "white",
                opacity: 1, /* Firefox */
            }
          }}
          placeholder="job title or keyword"
          inputProps={{ "aria-label": "search google maps" }}
        />
      </Box>
      <Box
        sx={{
          width: "27%",
          borderRight: 1,
          borderColor: "white",
          "&::placeholder": {
            color: "#ffffff",
          },
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          // value={age}
          sx={{
            width: "100%",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.Mui-selected": {
              color: "white",
            },
            '&:active': {

                outline: 'none',
          
              },
          }}
          id="role"
        //   label="Vai trò"
        >
          <MenuItem value={"admin"}>Admin</MenuItem>
          <MenuItem value={"recruiter"}>Người tuyển dụng</MenuItem>
        </Select>
      </Box>
      <Box
        sx={{
          width: "27%",
          borderRight: 1,
          borderColor: "white",
          "&::placeholder": {
            color: "#ffffff",
          },
        }}
      >
        <Select
          labelId="demo-simple-select-label"
          // value={age}
          sx={{
            width: "100%",
            ".MuiOutlinedInput-notchedOutline": { border: 0 },
            "&.Mui-selected": {
              color: "white",
            },
          }}
          id="role"
        //   label="Vai trò"
        >
          <MenuItem value={"admin"}>Admin</MenuItem>
          <MenuItem value={"recruiter"}>Người tuyển dụng</MenuItem>
        </Select>
      </Box>
      <Box width={"19%"} p={2}>
        <Button
          type="submit"
          className={"bg-primary"}
          sx={{ p: "10px", color: "white", borderRadius: "10px" }}
          aria-label="search"
          startIcon={<SearchIcon />}
        >
          <Typography sx={{ fontSize: 15 }} className="font-medium">
            Tìm Kiếm
          </Typography>
        </Button>
      </Box>
    </Box>
  );
}
export default SearchCV;
