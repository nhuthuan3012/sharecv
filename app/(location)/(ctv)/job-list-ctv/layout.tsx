"use client"

import Header from "@/common/components/Header/Header";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Provider } from "react-redux";
import { reduxStore } from "@/lib/redux/store";
import { ReduxStore } from "@/lib/redux/store";
import { useRef } from 'react'

export default function JobListCtvLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const storeRef = useRef<ReduxStore>()
    if (!storeRef.current) {
        // Create the store instance the first time this renders
        storeRef.current = reduxStore()
    }
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Provider store={storeRef.current}>
                {children}
            </Provider>
        </LocalizationProvider>
    )
}