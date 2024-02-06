import { Clear, Delete } from "@mui/icons-material";

import UploadFileIcon from "@mui/icons-material/UploadFile";
import { Box, Button, Chip, IconButton, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { ChangeEvent, useState } from "react";

export interface FileItemProps {
  file: File;
  onUpdate: (e: ChangeEvent<HTMLInputElement>) => void;
  onDelete: (e: ChangeEvent<HTMLInputElement>|null) => void;
}
const ListItem = styled("div")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

const FileItem = ({
  file,
  onDelete,
  onUpdate,
}: FileItemProps) => {
  return (
    <ListItem>
      {/* <Chip label={name} icon={<UploadFileIcon />} variant="outlined" sx={{ maxWidth: 200 }} onDelete={onDelete} /> */}
      <Box
        position="relative"
        width={200}
        height={200}
        border={1}
        borderColor="divider"
      >
        <Box
          width="100%"
          height="100%"
          component="img"
          src={"/video-banner.png"}
          // sx={{ objectFit: "contain" }}
        />
        {/* <img src={"/Logo.png"} alt="" /> */}
        <Typography> {file.name}</Typography>
        <Box position="absolute" top={0} right={0}>
          <IconButton onClick={()=>onDelete(null)}>
            <Clear/>
          </IconButton>
        </Box>
      </Box>
    </ListItem>
  );
};

export default FileItem;
