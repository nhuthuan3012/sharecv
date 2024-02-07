"use client";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

function RecruiterRoutesLayout({ children }: PropsWithChildren) {
  useEffect(() => {
    // check if account is recruiter
    if (!true) {
      redirect("/login");
    }
  }, []);
  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </>
  );
}

export default RecruiterRoutesLayout;
