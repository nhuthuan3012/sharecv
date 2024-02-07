"use client";
import { getInterviewInfo } from "@/common/apis/interview";
import { IFormInterview } from "@/interfaces/interviews";
import InterviewDialog from "@/modules/interview-ctv-popup";
import { useEffect, useState } from "react";

export default function ConfirmInterview() {
  const [open, setOpen] = useState(true);
  const [defaultValues, setDefaultValues] = useState<IFormInterview>({
    cv_id: 13,
    date: "",
    location: "",
    start_time: "",
    end_time: "",
    note: "",
  });
  useEffect(() => {
    getInterviewInfo(13).then((res) => {
      if (res.data) {
        console.log("Hello: ", res.data);
        setDefaultValues(res.data);
      }
    });
  }, []);
  return (
    <InterviewDialog
      open={open}
      setOpen={setOpen}
      isBooking={false}
      defaultValues={defaultValues!}
    />
  );
}
