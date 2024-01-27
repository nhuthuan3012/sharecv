import { Box, TextField, Typography } from "@mui/material"
import { InputField } from "./components/inputField"
import Image from "next/image"
import { footerTextStyles } from "./styles"

export const Footer = () => {
    return (
        <Box
            sx={{
                minHeight: "420px",
                marginTop: "200px",
                backgroundColor: "#063776",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                alignItems: "stretch",
            }}
        >
            <Box
                width="100%"
                paddingLeft="40%"
                flexGrow="3"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}
            >
                <Box
                    sx={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "left",
                    }}
                >
                    <Box>
                        <InputField
                            onClick={() => { }}
                            value=""
                        />
                    </Box>
                    <Box
                        mt="8px"
                        sx={{
                            width: "fit-content",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "#FFF",
                                fontSize: "16px",
                                fontWeight: "400",
                                lineHeight: "normal",
                                textAlign: "center",
                                fontFamily: "Roboto",
                            }}
                        >
                            Chúng tôi sẽ cập nhật thông tin mới nhất đến với bạn!
                        </Typography>
                    </Box>
                </Box>
            </Box>
            <Box
                width="100%"
                flexGrow="8"
                sx={{
                    borderTop: '2px solid #fff',
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                    alignItems: "left",
                    gap: "180px",
                    padding: "25px 0px 10px 0px",
                }}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "flex-start",
                        alignItems: "center",
                        gap: "110px",
                    }}
                >
                    <Box>
                        <Image src="/Logo.png" height={74} width={97} alt="Logo" />
                    </Box>

                    <Box
                        display="flex"
                        flexDirection="row"
                        justifyContent="space-between"
                        alignItems="center"
                        gap="20px"
                    >
                        <Box>
                            <Image src="/facebook.png" height={20} width={20} alt="Logo" />
                        </Box>
                        <Box>
                            <Image src="/instagram.png" height={20} width={20} alt="Logo" />
                        </Box>
                        <Box>
                            <Image src="/tiktok.png" height={20} width={20} alt="Logo" />
                        </Box>
                        <Box>
                            <Image src="/youtube.png" height={20} width={20} alt="Logo" />
                        </Box>
                    </Box>
                </Box>

                <Box>
                    <Box
                        marginBottom="30px"
                        width="fit-content"
                    >
                        <Typography
                            sx={{
                                color: "#FFF",
                                fontSize: "18px",
                                fontWeight: "700",
                                lineHeight: "normal",
                                textAlign: "center",
                                fontFamily: "Roboto",
                            }}
                        >
                            Dịch Vụ
                        </Typography>
                        <div style={{
                            borderTop: '2px solid #FFC400',
                            width: '48px',
                        }}></div>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                            gap: "20px",
                        }}
                    >
                        <Typography sx={footerTextStyles()}>Đăng tin tuyển dụng</Typography>
                        <Typography sx={footerTextStyles()}>Hỗ trợ tuyển dụng</Typography>
                        <Typography sx={footerTextStyles()}>Tìm CV</Typography>
                        <Typography sx={footerTextStyles()}>Giỏ hàng</Typography>
                        <Typography sx={footerTextStyles()}>Khuyễn mãi</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box
                        marginBottom="30px"
                        width="fit-content"
                    >
                        <Typography
                            sx={{
                                color: "#FFF",
                                fontSize: "18px",
                                fontWeight: "700",
                                lineHeight: "normal",
                                textAlign: "center",
                                fontFamily: "Roboto",
                            }}
                        >
                            Chia Sẻ
                        </Typography>
                        <div style={{
                            borderTop: '2px solid #FFC400',
                            width: '48px',
                        }}></div>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                            gap: "20px",
                        }}
                    >
                        <Typography sx={footerTextStyles()}>Quy định</Typography>
                        <Typography sx={footerTextStyles()}>Chính sách</Typography>
                        <Typography sx={footerTextStyles()}>Điều khoản</Typography>
                        <Typography sx={footerTextStyles()}>Bảo mật</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box
                        marginBottom="30px"
                        width="fit-content"
                    >
                        <Typography
                            sx={{
                                color: "#FFF",
                                fontSize: "18px",
                                fontWeight: "700",
                                lineHeight: "normal",
                                textAlign: "center",
                                fontFamily: "Roboto",
                            }}
                        >
                            Công Ty
                        </Typography>
                        <div style={{
                            borderTop: '2px solid #FFC400',
                            width: '48px',
                        }}></div>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                            gap: "20px",
                        }}
                    >
                        <Typography sx={footerTextStyles()}>Trang chủ</Typography>
                        <Typography sx={footerTextStyles()}>Về chúng tôi</Typography>
                        <Typography sx={footerTextStyles()}>FAQs</Typography>
                        <Typography sx={footerTextStyles()}>Dịch vụ</Typography>
                        <Typography sx={footerTextStyles()}>Liên hệ</Typography>
                    </Box>
                </Box>

                <Box>
                    <Box
                        marginBottom="30px"
                        width="fit-content"
                    >
                        <Typography
                            sx={{
                                color: "#FFF",
                                fontSize: "18px",
                                fontWeight: "700",
                                lineHeight: "normal",
                                textAlign: "center",
                                fontFamily: "Roboto",
                            }}
                        >
                            Liên Hệ
                        </Typography>
                        <div style={{
                            borderTop: '2px solid #FFC400',
                            width: '48px',
                        }}></div>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            alignItems: "left",
                            gap: "20px",
                        }}
                    >
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: "center", gap: "13px" }}>
                            <Image src="/location_icon.png" height={24} width={24} alt="Logo" />
                            <Typography sx={footerTextStyles()}>25 Đào Duy Anh, Phường 9
                                Phú Nhuận, TP. HCM</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: "center", gap: "13px" }}>
                            <Image src="/mail_icon.png" height={24} width={24} alt="Logo" />
                            <Typography sx={footerTextStyles()}>sharecv@gmail.com</Typography>
                        </Box>
                        <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'left', alignItems: "center", gap: "13px" }}>
                            <Image src="/phone_icon.png" height={24} width={24} alt="Logo" />
                            <Typography sx={footerTextStyles()}>(+84) 996691225</Typography>
                        </Box>
                    </Box>
                </Box>


            </Box>
            <Box
                flexGrow="0.05"
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <div style={{
                    borderTop: '1px solid #fff',
                    width: '1142px',

                }}></div>
                <Box
                    mt="2px"
                >
                    <Typography sx={{
                        color: "#FFF",
                        fontSize: "12px",
                        fontWeight: "300",
                        lineHeight: "normal",
                        textAlign: "center",
                        fontFamily: "Roboto",

                    }}>
                        © 2023 ShareCV All Rights Reserved
                    </Typography>
                </Box>
            </Box>
        </Box>
    )
}
