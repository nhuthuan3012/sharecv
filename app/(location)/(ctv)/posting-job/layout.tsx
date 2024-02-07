"use client";
import { getRole } from "@/common/helpers/getCookies";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { PropsWithChildren, useEffect } from "react";

function CollaboratorRoutesLayout({ children }: PropsWithChildren) {
  const role = getRole();

  useEffect(() => {
    // check if account is admin
    if (role !== "collaborator") {
      // redirect("/login"); // redirect to general home page
    }
  }, [role]);

  return (
    <>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        {children}
      </LocalizationProvider>
    </>
  );
}

export default CollaboratorRoutesLayout;
