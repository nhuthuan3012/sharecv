"use client";

import { Box, Button } from "@mui/material";
import ExperienceItem from "./ExperienceItem";
import { useSelector } from "react-redux";
import { selectUploadCV } from "@/lib/redux/slices";

function ExperienceForm() {
 

  const uploadCV = useSelector(selectUploadCV)

  return (
    <Box display="flex" flexDirection="column" width="100%" maxWidth="1000px">
      <Box display="flex" flexDirection="column-reverse" className="gap-6">
        {uploadCV.experiences.map((experience, index) => (
          <ExperienceItem
            key={index}
            index={index}
            newest={index === uploadCV.experiences.length - 1}
            initialValues={experience}
          />
        ))}
      </Box>
      <div className="w-full flex justify-end my-4">
        <Button
          variant="contained"
          sx={{
            textTransform: "none",
            padding: "10px 30px",
            borderRadius: "22px",
          }}
        >
          Tiếp tục
        </Button>
      </div>
    </Box>
  );
}

export default ExperienceForm;
