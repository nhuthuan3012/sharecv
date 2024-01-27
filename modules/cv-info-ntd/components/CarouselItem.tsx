import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";
import { IResumeProject } from "@/modules/cv-info/resume.interface";

function CarouselItem({
  project_name,
  start_time,
  end_time,
  descriptions,
}: IResumeProject) {
  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
      maxHeight="580px"
    >
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        width="300px"
        height="300px"
        border={1}
        bgcolor="white"
        borderRadius="22px"
      >
        <Typography className="text-[22px] my-4">{project_name}</Typography>
        <Typography className=" text-emerald-300 mb-4">
          {dayjs(start_time).format("MM/YYYY")} -{" "}
          {dayjs(end_time).format("MM/YYYY")}
        </Typography>
        <div className="flex flex-col flex-1 items-center gap-5">
          {descriptions && descriptions.map((item) => (
            <Typography key={item} className="font-medium text-zinc-500">
              {item}
            </Typography>
          ))}
        </div>
      </Box>
    </Box>
  );
}

export default CarouselItem;
