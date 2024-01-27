"use client";
import Header from "@/common/components/Header/Header";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux/store";
import { ReduxStore } from "@/lib/redux/store";
import { useRef } from 'react'
import { getAccessCookies, getRole } from "@/common/helpers/setCookies";
import { redirect, RedirectType } from "next/navigation";
import Cookies from 'js-cookie';

export default function UploadCVLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const storeRef = useRef<ReduxStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = reduxStore()
  }

  if (getRole() !== "collaborator") {
    redirect("/home", RedirectType.replace);
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Provider store={storeRef.current}>
        <Header />
        {children}
      </Provider>
    </LocalizationProvider>
  )
}