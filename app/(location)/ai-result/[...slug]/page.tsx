"use client"
import { styled } from '@mui/material/styles';
import { Box, Button, Grid, Paper, Typography } from "@mui/material"
import { detailPointTextStyles, header1Styles, headerStyles, percentageDetailTextStyles, percentageTextStyles, returnButtonStyles } from "../styles";
import { PieChart } from '@mui/x-charts/PieChart';
import LinearProgress, { linearProgressClasses } from '@mui/material/LinearProgress';
import { useRouter } from 'next/navigation'
import { use, useEffect, useLayoutEffect, useState } from 'react';
import { getAdminMatchingCVResult, getCTVMatchingCVResult } from '@/common/apis/ai_result';
import { ICvMatchingResult } from '@/common/interfaces/ai-results';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

const BorderLinearProgress = styled(LinearProgress)(({ theme: any }) => ({
    height: 33,
    width: 482,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
        backgroundColor: "#D9D9D9",
    },
    [`& .${linearProgressClasses.bar}`]: {
        borderRadius: 5,
        backgroundColor: '#063776',
    },
}));

const LinearProgressWithLabel = ({ value, isMatched }: { value: number, isMatched: boolean }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box sx={{ width: '100%', mr: 1 }}>
                <BorderLinearProgress variant="determinate" value={value}
                    sx={{
                        [`&.${linearProgressClasses.colorPrimary}`]: {
                            backgroundColor: "#D9D9D9",
                        },
                        [`& .${linearProgressClasses.bar}`]: {
                            borderRadius: 5,
                            backgroundColor: isMatched ? '#063776' : '#E31D1C',
                        },
                    }}
                />
            </Box>
            <Box sx={{ minWidth: 35 }}>
                <Typography variant="body2" color="text.secondary">{`${Math.round(
                    value
                )}%`}</Typography>
            </Box>
        </Box>
    );
}

const initialCVMatchingDetail: ICvMatchingResult = {
    resume_id: 0,
    match_data: {
        job_title: {
            score: 50,
            explanation: "",
        },
        experience: {
            score: 50,
            explanation: "",
        },
        skill: {
            score: 50,
            explanation: "",
        },
        education: {
            score: 50,
            explanation: "",
        },
        orientation: {
            score: 50,
            explanation: "",
        },
        overall: {
            score: 50,
            explanation: "",
        }
    },
}

function AIResultPage({ params }: { params: { slug: string } }) {
    const user_role = params.slug[0];
    const cv_id = params.slug[1];
    const [cvMatchingDetail, setCVMatchingDetail] = useState<ICvMatchingResult>(initialCVMatchingDetail);
    const [isMatched, setIsMatched] = useState<boolean>(false);
    const router = useRouter();

    useEffect(() => {
        if (cv_id && user_role) {
            // query for cv_matching detail
            if (user_role == "admin") {
                let payload: any = {
                    cv_id: cv_id,
                }
                getAdminMatchingCVResult(payload).then((res) => {
                    console.log(res.data.data);
                    setCVMatchingDetail(res.data.data);
                    let overall_percentage = res.data.data.match_data.overall.score;
                    setIsMatched(overall_percentage >= 50);
                })
            } else if (user_role == "collaborator") {
                let payload: any = {
                    cv_id: cv_id,
                }
                getCTVMatchingCVResult(payload).then((res) => {
                    console.log(res.data.data);
                    setCVMatchingDetail(res.data.data);
                    let overall_percentage = res.data.data.match_data.overall.score;
                    setIsMatched(overall_percentage >= 50);
                })
            }
        }
    }, [cv_id]);

    console.log(cvMatchingDetail);

    return (
        <Box padding={2}
            sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
            <Box sx={{

                display: "flex",
                justifyContent: "center",
            }}>
                <Typography sx={headerStyles()}>Kết quả phân tích AI</Typography>
            </Box>

            <Box sx={{
                marginTop: "50px",
                width: "1200px",
                background: "rgba(183, 218, 237, 0.10)",
            }}>
                <Button sx={{
                    padding: "10px",
                    textTransform: "none"
                }}
                    startIcon={<ArrowBackIosIcon />}
                    onClick={() => router.back()}
                >
                    <Typography sx={{
                        fontSize: "20px",
                    }}>Quay lại</Typography>
                </Button>
                <Box sx={{}}>
                    <Grid container spacing={3}>
                        {/* First Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Box sx={{ display: "flex", alignItems: "center", flexDirection: "column" }} >
                                    <Box sx={{}} paddingLeft="50%">
                                        <Typography sx={percentageTextStyles()}>{cvMatchingDetail.match_data.overall.score}%</Typography>
                                    </Box>
                                    <PieChart
                                        series={[
                                            {
                                                data: [
                                                    { value: cvMatchingDetail.match_data.overall.score * 360 / 100, color: isMatched ? '#063776' : '#E31D1C' },
                                                    { value: (100 - cvMatchingDetail.match_data.overall.score) * 360 / 100, color: '#fff' },
                                                ],
                                                innerRadius: 30,
                                                outerRadius: 100,
                                                paddingAngle: 0,
                                                cornerRadius: 5,
                                                startAngle: 0,
                                                endAngle: 360,
                                                cx: 160,
                                                cy: 160,
                                            },
                                        ]}
                                        width={320}
                                        height={320}
                                        sx={{

                                        }}
                                    />
                                </Box>

                                <Box sx={{
                                    marginTop: "80px",
                                }}>
                                    <Box>
                                        <Typography sx={header1Styles()}>Điểm chi tiết</Typography>
                                    </Box>

                                    <Box display="flex" flexDirection="column" gap="10px" justifyContent="center" alignItems="center" mt="10px">
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Vị trí công việc</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={cvMatchingDetail.match_data.job_title.score} isMatched={isMatched} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Kinh nghiệm</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={cvMatchingDetail.match_data.experience.score} isMatched={isMatched} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Kỹ năng</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={cvMatchingDetail.match_data.skill.score} isMatched={isMatched} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Học vấn</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={cvMatchingDetail.match_data.education.score} isMatched={isMatched} />
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Box>
                                                <Typography sx={detailPointTextStyles()}>Định hướng</Typography>
                                            </Box>
                                            <Box sx={{ position: "relative", marginTop: "20px" }}>
                                                <LinearProgressWithLabel value={cvMatchingDetail.match_data.orientation.score} isMatched={isMatched} />
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>

                                {/* notification card */}
                                {isMatched ? (
                                    <Paper
                                        sx={{
                                            mt: "100px",
                                            padding: "26px",
                                            borderRadius: '12px',
                                            backgroundColor: "rgba(0, 171, 86, 0.53)",
                                            animation: "shake 0.5s ease-in-out", // Apply the shake animation
                                            transition: "transform 0.3s ease-in-out",
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>
                                            <Button onClick={() => console.log("click")} sx={{ width: "20px", height: "20px", position: "absolute", right: "0", top: "0", textTransform: "none" }}>
                                                <CloseIcon />
                                            </Button>
                                            <Box mt="10px">
                                                <Typography className="text-white text-center font-montserrat text-16 font-semibold">
                                                    Xin chúc mừng!
                                                </Typography>
                                            </Box>
                                            <Box mt="25px">
                                                <Typography className='text-white text-justify font-montserrat text-base font-medium leading-7'>
                                                    Hệ thống đã gửi email xác nhận đến Ứng viên!
                                                    Vui lòng liên lạc Ứng viên xác nhận ứng tuyển vị trí.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>) : (
                                    <Paper
                                        sx={{
                                            mt: "100px",
                                            padding: "26px",
                                            borderRadius: '12px',
                                            backgroundColor: "#D33D3D",
                                            animation: "shake 0.5s ease-in-out", // Apply the shake animation
                                            transition: "transform 0.3s ease-in-out",
                                            '&:hover': {
                                                transform: 'scale(1.05)',
                                            },
                                        }}
                                    >
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" sx={{ position: 'relative' }}>
                                            <Button onClick={() => console.log("click")} sx={{ width: "20px", height: "20px", position: "absolute", right: "0", top: "0", textTransform: "none" }}>
                                                <CloseIcon />
                                            </Button>
                                            <Box mt="10px">
                                                <Typography className="text-white text-center font-montserrat text-16 font-semibold">
                                                    Hồ sơ chưa phù hợp!
                                                </Typography>
                                            </Box>
                                            <Box mt="25px">
                                                <Typography className='text-white text-justify font-montserrat text-base font-medium leading-7'>
                                                    Hồ sơ chưa đạt yêu cầu kiểm duyệt của AI!
                                                    Bạn có thể <a className="text-green-500 font-montserrat text-base font-medium leading-7 underline" style={{ cursor: "pointer" }}> chỉnh sửa </a> lại phù hợp với yêu cầu công việc hơn.
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Paper>
                                )}
                            </Paper>

                        </Grid>

                        {/* Second Column */}
                        <Grid item xs={6}>
                            <Paper style={{ padding: 16 }}>
                                <Box display="flex" flexDirection="row" justifyContent="flex-end" alignItems="center" gap="30px">
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "20px",
                                        }}
                                    >Xem CV</Button>
                                    <Button
                                        variant="outlined"
                                        sx={{
                                            borderRadius: "20px",
                                        }}
                                    >Xem JD</Button>
                                </Box>

                                <Box mt="40px" sx={{
                                    display: "flex",
                                    flexDirection: "column",
                                    alignItems: "center",
                                    gap: "30px",
                                }}>
                                    <Box className="text-blue-900 font-montserrat text-2xl font-semibold">Tổng quan</Box>
                                    <Box>
                                        <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                            {cvMatchingDetail.match_data.overall.explanation}
                                        </Typography>
                                    </Box>
                                </Box>

                                <Box sx={{
                                    marginTop: "130px",
                                }}>
                                    <Box>
                                        <Typography sx={header1Styles()}>Giải thích</Typography>
                                    </Box>
                                    <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" gap="20px" mt="20px">
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Vị trí công việc</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    {cvMatchingDetail.match_data.job_title.explanation}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Kinh nghiệm</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    {cvMatchingDetail.match_data.experience.explanation}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Kỹ năng</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    {cvMatchingDetail.match_data.skill.explanation}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Học vấn</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    {cvMatchingDetail.match_data.education.explanation}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                                            <Box>
                                                <Typography className="text-gray-600 font-montserrat text-xl font-semibold" sx={{ color: "#868686" }}>Định hướng</Typography>
                                            </Box>
                                            <Box>
                                                <Typography className="text-gray-700 text-justify font-montserrat text-base font-normal">
                                                    {cvMatchingDetail.match_data.orientation.explanation}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>

            </Box>
        </Box>
    )
}

export default AIResultPage;
