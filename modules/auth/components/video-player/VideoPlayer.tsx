"use client";
import React, { useState } from "react";
import ReactPlayer from "react-player";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import { FaRegPlayCircle } from "react-icons/fa";
import { Box, Button, IconButton, Typography } from "@mui/material";
import Image from "next/image";
export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className={`video-player ${isPlaying ? "playing" : ""}`}>
      {!isPlaying && (
        <Box
          width="400px"
          height="600px"
          position="relative"
          sx={{
            p: 5,
            backdropFilter: "blur(2px)",
            backgroundColor: "rgba(0,0,0,0.05)",
            borderRadius: "50px",
          }}
        >
          <Typography
            variant="h6"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              // fontFamily: 'monospace',
              fontWeight: 700,
              fontSize: "35px",
              // letterSpacing: '.1rem',
              color: "white",
              textDecoration: "none",
            }}
          >
            {" "}
            Very good candidates are waiting for you! Login Now!!
          </Typography>
          <IconButton
            sx={{
              backgroundColor: "white",
              p: 0,
              height: 100,
              width: 100,
              position: "absolute",
              borderRadius: "50%",
              left: "0",
              bottom: "0",
              transform: " translate(-50%, -150%)",
              "&:hover": { backgroundColor: "gba(217, 217, 217, 0.9)" },
            }}
            onClick={handlePlayClick}
          >
            <FaRegPlayCircle
              style={{
                padding: 0,
                // stroke: "white",
                color: "#063776",
                height: 100,
                width: "100%",
              }}
            />
          </IconButton>
          <Box
            sx={{
              p: 0,
              height: 300,
              width: 300,
              position: "absolute",
              right: "0",
              bottom: "0",
              transform: " translate(0%, 0%)",
            }}
            onClick={handlePlayClick}
          >
            <Image src="/robot.png" height={300} width={300} alt="" />
          </Box>
        </Box>
      )}
      {/* <div className="video-container"> */}
      {isPlaying && (
        <Box
          sx={{
            borderRadius: "20px",
            "& .player-wrapper": {
              width: "auto",
              // Reset width
              height: "auto",
            },
            "& .react-player": {
              width: "400px",
              paddingTop: "0", // Percentage ratio for 16:9
              position: "relative", // Set to relative}
            },
            "& .react-player > div": {
              position: "absolute", // Scaling will occur since parent is relative now
            },
          }}
        >
          <ReactPlayer
            sx={{ borderRadius: "20px" }}
            width="400px"
            height={"500px"}
            controls
            file="mp4"
            url="./video.mp4"
          />
        </Box>
        // <video controls poster={posterUrl}>
        //   <source src={videoUrl} type="video/mp4" />
        //   Your browser does not support the video tag.
        // </video>
      )}
      {/* </div> */}
    </div>
  );

  // <ReactPlayer width="700" controls file='mp4' url='./video.mp4' />
}
