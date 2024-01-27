"use client";
import { Box, Button, IconButton, Typography } from "@mui/material";
import SearchCV from "@/common/components/search-cv/SearchCV";
import Image from "next/image";
import { FaRegPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";
import NorthEastIcon from "@mui/icons-material/NorthEast";
import React from "react";
function Introduce() {
  const [isPlaying, setIsPlaying] = React.useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };
  return (
    <Box>
      <Box
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={0}
        px={"120px"}
        sx={{
          backgroundImage: `url(${"/home-background-1.png"})`,
          backgroundSize: "contain",
        }}
      >
        <Typography
          py={5}
          sx={{ fontSize: 30 }}
          className="font-medium text-primary"
        >
          Tìm Kiếm Hồ Sơ
        </Typography>
        <SearchCV />
        <Box mt={10} display={"flex"} flexDirection={"row"}>
          <Box mt={5} width={"60%"} display={"flex"} flexDirection={"column"}>
            <Typography>
              Trusted by leading brands and big corporations
            </Typography>
            <Box width="100%" display={"flex"} flexDirection={"column"}>
              <Box position="relative" height="100px" width="70%" my={0}>
                <Image
                  src={"/trust1.png"}
                  alt=""
                  fill
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
              <Box position="relative" height="50px" width="60%" my={0}>
                <Image
                  src={"/trust2.png"}
                  alt=""
                  fill
                  style={{
                    maxHeight: "100%",
                    objectFit: "contain",
                  }}
                />
              </Box>
            </Box>
            <Box
              mt={20}
              // my={10}
              p={5}
              width="100%"
              height="400px"
              className={"bg-secondary"}
              display={"flex"}
              flexDirection={"row"}
            >
              <Box
                width="40%"
                display="flex"
                flexDirection={"column"}
                justifyContent={"space-around"}
              >
                <Box>
                  <Typography
                    fontSize={25}
                    className="text-primary font-medium"
                  >
                    Đồng hành cùng ShareCV
                  </Typography>
                  <Typography
                    fontSize={25}
                    className="text-primary font-medium"
                  >
                    Tìm kiếm ứng viên xuất sắc
                  </Typography>
                </Box>
                <Button
                  variant="outlined"
                  className="bg-primary hover:bg-white hover:border-primary hover:text-primary"
                  sx={{
                    width: "200px",
                    height: "60px",
                    color: "white",
                    border: 1,
                    borderColor: "white",
                    borderRadius: "20px",
                    // "&:hover": {
                    //   backgroundColor: "white",
                    // },
                  }}
                >
                  Xem Thêm
                </Button>
              </Box>
              <Box
                display="flex"
                sx={{
                  p: 5,
                  width: "60%",
                  "&:hover": {
                    backgroundColor: "gba(217, 217, 217, 0.9)",
                  },
                }}
              >
                <div
                  className={`video-player ${
                    isPlaying ? "playing" : ""
                  } w-full`}
                >
                  {!isPlaying && (
                    <Box
                      width="100%"
                      height="300px"
                      display="flex"
                      alignItems={"center"}
                      justifyContent={"center"}
                      sx={{
                        p: 5,
                        // backdropFilter: "blur(2px)",
                        backgroundColor: "white",
                      }}
                    >
                      <IconButton
                        sx={{
                          backgroundColor: "white",
                          p: 0,
                          height: 100,
                          width: 100,
                          borderRadius: "50%",
                          "&:hover": {
                            backgroundColor: "gba(217, 217, 217, 0.9)",
                          },
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
                    </Box>
                  )}
                  {isPlaying && (
                    <Box
                      sx={{
                        "& .player-wrapper": {
                          width: "auto",
                          height: "auto",
                        },
                        "& .react-player": {
                          width: "100%",
                        },
                      }}
                    >
                      <ReactPlayer
                        width="100%"
                        height={"500px"}
                        controls
                        file="mp4"
                        url="./video.mp4"
                      />
                    </Box>
                  )}
                </div>
              </Box>
            </Box>
          </Box>
          <Box
            mt={0}
            width={"40%"}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            {/* <img
              width="70%"
              src={"/pic1.png"}
              style={{ objectFit: "contain", maxWidth: "100%" }}
              alt={""}
            /> */}
            <Box width="300px" height="300px" position="relative">
              <Box
                position="absolute"
                bottom={0}
                right={0}
                height="200px"
                width="200px"
                my={0}
                sx={{
                  transform: " translate(50%, 50%)",
                  zIndex: "2",
                  borderRadius: "20px",
                  border: 3,
                  borderColor: "white",
                  overFlow: "hidden",
                }}
              >
                <Image
                  src={"/pic2.png"}
                  alt=""
                  fill
                  style={{
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius:"15px"
                  }}
                />
              </Box>
              <Box
                position="absolute"
                height="300px"
                width="300px"
                my={0}
                sx={{
                  zIndex: 1,
                  borderRadius: "20px",
                  border: 3,
                  borderColor: "white",
                  overFlow: "hidden",
                }}
              >
                <Image
                  src={"/pic1.png"}
                  alt=""
                  fill
                  style={{
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius: "15px",
                  }}
                />
              </Box>
              <Box
                position="absolute"
                top={0}
                left={0}
                height="200px"
                width="200px"
                my={0}
                sx={{
                  transform: " translate(-40%, -40%)",
                  zIndex: "0",
                  borderRadius: "20px",
                  border: 3,
                  borderColor: "white",
                  overFlow: "hidden",
                }}
              >
                <Image
                  src={"/pic3.png"}
                  alt=""
                  fill
                  style={{
                    maxHeight: "100%",
                    objectFit: "cover",
                    borderRadius:"15px"
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        className={"bg-tertiary"}
        display="flex"
        width="100%"
        flexDirection="column"
        alignItems="top"
        justifyContent="left"
        py={5}
        px={"120px"}
      >
        <Box
          display="flex"
          width="100%"
          flexDirection="row"
          alignItems="top"
          justifyContent="left"
        >
          <Box
            width="100%"
            p={5}
            mt={10}
            display={"flex"}
            flexDirection={"row"}
          >
            <Box display={"flex"} flexDirection={"column"}>
              <Typography fontSize={40} className="text-orange font-semibold">
                NỀN TẢNG SỬ DỤNG AI
              </Typography>
              <Typography
                fontSize={40}
                mt={2}
                className="text-primary font-semibold"
              >
                TINH GỌN QUY TRÌNH TUYỂN DỤNG
              </Typography>
            </Box>
          </Box>

          <Box position="relative" height="300px" width="500px" my={0}>
            <Image
              src={"/home-robot.png"}
              alt=""
              fill
              style={{
                maxHeight: "100%",
                objectFit: "contain",
              }}
            />
          </Box>
        </Box>
        <Box
          width="60%"
          p={5}
          mt={5}
          display="flex"
          justifyContent={"space-between"}
        >
          <Button
            className="bg-primary text-lg"
            sx={{ width: "220px", height: "60px" }}
            endIcon={<NorthEastIcon />}
            variant="contained"
          >
            Doanh Nghiệp
          </Button>
          <Button
            className="border-primary bg-white text-primary text-lg"
            sx={{ width: "220px", height: "60px" }}
            endIcon={<NorthEastIcon />}
            variant="outlined"
          >
            Cộng tác viên
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Introduce;
