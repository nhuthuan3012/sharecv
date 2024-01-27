import { getCookie } from "@/common/helpers/getCokkies";
import VideoPlayer from "@/modules/auth/components/video-player/VideoPlayer";
import { RegisterFormHolder } from "@/modules/auth/page";
import { Box, Typography } from "@mui/material";
import { redirect, RedirectType } from "next/navigation";

function RegisterPage() {

  if (getCookie("token")) {
    redirect("/home", RedirectType.replace);
  }
  
  return (
    <Box className="flex w-full" height="100vh">
      <Box display="flex" sx={{backgroundImage:`url(${"/login-background.png"})`,backgroundSize: 'cover'}} justifyContent="center"
      alignItems="center" flex={1} border={0} height="100%">
        <VideoPlayer/>
      </Box>
      <Box
        display="flex"
        flexDirection="column"
        flex={1}
        minWidth='60%'
        height="100%"
        sx={{overflow:"auto"}}
      >
        <RegisterFormHolder />
      </Box>
      {/* <Box display="flex" flex={1} border={1} height='100vh'>
        Banner
      </Box> */}
    </Box>
  );
}

export default RegisterPage;
