import { useState } from "react";

export interface InputFieldProps {
    onClick?: () => void;
    value?: string;
}

export const InputField = ({
    onClick,
    value,
}: InputFieldProps) => {

    const [inputValue, setInputValue] = useState(value ? value : "");

    const handleChange = (event: any) => {
        setInputValue(event.target.value);
    };

    return (
        <div style={{
            width: "672px",
            height: "40px",
            flexShrink: 0,
            borderRadius: "22px",
            background: "#E5E7EB",
            boxShadow: "0px 8px 24px -4px rgba(255, 255, 255, 0.08), 0px 6px 12px -6px rgba(255, 255, 255, 0.12)",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            padding: '2px 2px 2px 20px',
        }}>
            <input aria-invalid="false" id="outlined-required" required type="text" value={inputValue} placeholder="Nhập email của bạn"
                onChange={handleChange}
                style={{
                    width: "70%",
                    background: "transparent",
                    border: "none",
                    color: "#B1B5BB",
                    fontFamily: "Montserrat",
                    fontSize: "16px",
                    fontStyle: "italic",
                    fontWeight: "400",
                    lineHeight: "normal",
                }} />
            <button
                style={{
                    width: "176px",
                    height: "32px",
                    background: "#fff",
                    color: "#063776",
                    borderRadius: "22px",
                    border: "none",
                    cursor: "pointer",
                    marginTop: "auto",
                    marginBottom: "auto",
                    textAlign: "center",
                    fontSize: "16px",
                    fontWeight: "400",
                    lineHeight: "16px",
                    letterSpacing: "0.05em",
                    fontFamily: "Roboto",
                    transition:"background 0.3s ease",
                    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                }}>Đăng ký</button>
        </div>
    )
}