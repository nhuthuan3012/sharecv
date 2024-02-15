"use client";


import { Footer } from "@/common/components/Footer";
// import AppHeader from "@/common/components/AppHeader";
// import { hasAuthCookies } from "@/common/helpers/authCookies";
// import dayjs from "dayjs";
// import "dayjs/locale/vi";
import { checkIsLogin } from "@/common/helpers/checkIsLogin";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import AppHeader from "@/common/components/AppHeader";
import { getRole } from "@/common/helpers/getCookies";

export default function MainLayout({ children }: PropsWithChildren) {
  const isLogin = checkIsLogin();
  const role = getRole();
  const router = useRouter();
  //   useEffect(() => {
  //     dayjs.locale("vi");
  //   }, []);
  useEffect(() => {
    if (!isLogin) {
      // router.push("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <AppHeader isAuth={isLogin} role={role as string} />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
