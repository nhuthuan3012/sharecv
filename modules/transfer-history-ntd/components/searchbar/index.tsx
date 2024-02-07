import { Box } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export interface InputFieldProps {
    onClick?: () => void;
    value?: string;
}

export const TableSearchBar = ({
    onClick,
    value,
}: InputFieldProps) => {

    const [inputValue, setInputValue] = useState(value ? value : "");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={{
            width: "250px",
            height: "40px",
            flexShrink: 0,
            borderRadius: "22px",
            background: "#fff",
            boxShadow: "0px 8px 24px -4px rgba(255, 255, 255, 0.08), 0px 6px 12px -6px rgba(255, 255, 255, 0.12)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "stretch",
            gap: "10px",
            alignItems: "center",
            padding: '2px 2px 2px 6px',
            border: "1px solid #063776;"
        }}>
            <Box mt="5px">
                <Image src="/image/job-list/search.png" alt="search" width="24" height="24" />
            </Box >
            <input aria-invalid="false" id="outlined-required" required type="text" value={inputValue} placeholder=""
                onChange={handleChange}
                style={{
                    width: "70%",
                    background: "transparent",
                    border: "none",
                    color: "#B1B5BB",
                    fontFamily: "Montserrat",
                    fontSize: "18px",
                    fontStyle: "italic",
                    fontWeight: "400",
                    lineHeight: "normal",
                    flexGrow: "8",
                }} />
        </div>
    )
}