import { Box, Typography } from "@mui/material";
import dayjs from "dayjs";

interface ExperienceItemProps {
  title: string;
  subTitle1?: string;
  subTitle2?: string;
  description?: string[];
  startDate?: Date;
  endDate?: Date;
  keywords?: string[];
}

function ExperienceItem({
  title,
  subTitle1,
  subTitle2,
  description,
  startDate,
  endDate,
  keywords = [],
}: ExperienceItemProps) {
  console.log("ExperienceItem", title);
  return (
    <Box display="flex" flexDirection="column" gap={1}>
      <Typography className="text-[22px]">{title}</Typography>
      <div className="flex items-center text-base font-medium">
        <Typography className=" text-neutral-400">{subTitle1}</Typography>

        {subTitle2 && (
          <>
            <div className="w-[5px] h-[5px] bg-zinc-300 rounded-full mx-4" />
            <Typography className="text-emerald-300">{subTitle2}</Typography>
          </>
        )}

        <div className="w-[5px] h-[5px] bg-zinc-300 rounded-full mx-4" />
        <Typography className=" text-zinc-500">
          {startDate && dayjs(startDate).format("MM/YYYY")}
          {startDate && endDate && " - "}
          {endDate && dayjs(endDate).format("MM/YYYY")}
        </Typography>
      </div>

      <Typography className="text-base text-zinc-500">{description}</Typography>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword) => (
          <Box
            key={keyword}
            bgcolor="#B7DAED"
            borderRadius="22px"
            py={1}
            px={2}
          >
            <Typography className="text-primary">{keyword}</Typography>
          </Box>
        ))}
      </div>
    </Box>
  );
}

export default ExperienceItem;
