import { getCookie } from "@/common/helpers/getCokkies";
import { LoginFormHolderer } from "@/modules/auth/page";
import { Box, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";
import VideoPlayer from "@/modules/auth/components/video-player/VideoPlayer"
import Image from "next/image"
// import ReturnButton from "@/common/components/button/ReturnButton"
function LoginPage() {
  console.log(getCookie("token"))

  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }

  return (
    <Box className="flex w-full" height='100vh'>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minWidth='60%'
        height='100%'
        sx={{ backgroundColor: "#F8F8FA", overflow: "auto" }}
      >
        <LoginFormHolderer />
      </Box>
      <Box display="flex" flexDirection="column" sx={{ backgroundImage: `url(${"/login-background.png"})`, backgroundSize: 'cover' }} justifyContent="center"
        alignItems="center" flex={1} border={0} height='100%'>
        {/* <img src="/login-background.png"/> */}
        {/* Banner */}
        <VideoPlayer />
        <Image src='/sign-in-title.png' height={300} width={600} alt="" />
        {/* <ReturnButton/> */}
      </Box>
    </Box>
  );
}

export default LoginPage;
