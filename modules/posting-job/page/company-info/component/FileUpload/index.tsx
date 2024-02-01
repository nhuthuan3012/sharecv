"use client";
import React, { ChangeEvent, useEffect, useRef } from "react";
import { MuiFileInput } from "mui-file-input";
import { Box, Button, IconButton, Typography } from "@mui/material";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";
import FileItem from "./FileItem";
import { Clear } from "@mui/icons-material";
interface FileType {
  video: "video";
  image: "image";
}
export interface UploadFileProps {
  fileId: string;
  title: string;
  file: File[] | null;
  decription: string;
  type: string;
  onChange: (event: File[] | null) => void;
  maxImage?: number;
  dataURLKey?: string;
  isMultiple: Boolean;
}
const FileUpload = ({
  fileId,
  file,
  title,
  decription,
  type,
  onChange,
  isMultiple,
  maxImage,
  dataURLKey,
}: UploadFileProps) => {
  // const [file, setFile] = React.useState<File | null>(null);

  // const handleChange = (value: File | null) => {
  //   console.log(value);
  //   setValue(value);
  // };
  const inputElement = useRef<any>();
  const [imageURL, setImageURL] = React.useState<string[]>([]);
  const onFileDrop = (e: ChangeEvent<HTMLInputElement> | null) => {
    if (e != null) {
      const fileInput = e.target;
      if (fileInput.files && fileInput.files.length > 0) {
        const file = fileInput.files;
        const files: File[] = Array.from(file);
        // setFile(file)
        onChange(files);
        const newImageURLs = files.map((file) => URL.createObjectURL(file));

        // set the image URLs for all files
        setImageURL(newImageURLs);
  
        console.log("file", file);
      }
    } else {
      // setFile(null);
      onChange(null);
    }
  };
  const focusInput = () => {
    if (inputElement.current != undefined) {
      onFileDrop(null);
      inputElement.current.value = null;
    }
  };
  const onRemove = (index:number) => {
    if (inputElement.current != undefined) {
    if(file!=null){
      const updatedFiles = [...file];
      const updateURL = [...imageURL]
      updatedFiles.splice(index, 1);
      updateURL.splice(index, 1);
      setImageURL(updateURL);
      // console.log(index)
      // Update your state or perform any other necessary actions
      onChange(updatedFiles);
    }
  }
  }
  return (
    <Box alignContent={"center"} height="100%" style={{ width: "100%" }}>
      <Typography variant="h6" className="text-primary font-medium">
        {title}
      </Typography>
      <Box
        height="70%"
        mt={2}
        display="flex"
        flexDirection="column"
        alignContent={"center"}
        justifyContent="center"
        sx={{
          // gap:10,
          border: 1,
          backgroundColor: "white",
          borderColor: "rgba(217, 217, 217, 1)",
          borderRadius: 2,
          flexWrap: "wrap",
          // overflow:"auto"
        }}
      >
        <input
          ref={inputElement}
          accept={type == "video" ? "video/*" : "image/*"}
          id={fileId}
          style={{ display: "none" }}
          onChange={onFileDrop}
          multiple={isMultiple ? true : false}
          type="file"
        />
        <Box width="100%">
          <Box
            display="flex"
            width="100%"
            alignContent={"center"}
            justifyContent={(file != null)&&(file.length!=0) ? "right" : "center"}
            p={1}
          >
            <label htmlFor={fileId}>
              <Button
                variant="contained"
                className="bg-primary"
                startIcon={<FileUploadOutlinedIcon />}
                component="span"
                // disabled={noEdit}
                sx={{
                  textTransform: "none",
                  // mx: 2,
                }}
                // onClick={onImageUpload}
              >
                <Typography className="font-bold">Upload</Typography>
              </Button>
            </label>
          </Box>
          {/* </label> */}
        </Box>
        {(file != null)&&(file.length!=0) ? (
          <Box
            display="flex"
            alignItems={"center"}
            justifyContent={"center"}
            gap="10px"
            sx={{ flexWrap: "wrap" }}
            height="210px"
            overflow="auto"
          >

            {/* <VideoItem file={video} onDelete={onFileDrop} onUpdate={onFileDrop} />\ */}
            {file.map((fileItem, index) => (
            <Box
              key={index}
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
                src={type == "video" ? "/video-banner.png" : imageURL[index]}
                // sx={{ objectFit: "contain" }}
              />
              {/* <img src={"/Logo.png"} alt="" /> */}
              <Typography> {fileItem.name} </Typography>
              <Box position="absolute" top={0} right={0}>
                <IconButton onClick={()=>onRemove(index)}>
                  <Clear />
                </IconButton>
              </Box>
            </Box>
            ))}
          </Box>
        ) : (
          <></>
        )}
      </Box>
    </Box>
  );
};
export default FileUpload;
