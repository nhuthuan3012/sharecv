"use client";

import Header from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer";
// import AppHeader from "@/common/components/AppHeader";
// import { hasAuthCookies } from "@/common/helpers/authCookies";
// import dayjs from "dayjs";
// import "dayjs/locale/vi";
import { PropsWithChildren, useEffect } from "react";
import { useRouter } from "next/navigation";
import { checkIsLogin } from "@/common/helpers/checkIsLogin";
import { getAccessCookies } from "@/common/helpers/setCookies";

export default function MainLayout({ children }: PropsWithChildren) {
  const isLogin = checkIsLogin();
  const router = useRouter();
  //   useEffect(() => {
  //     dayjs.locale("vi");
  //   }, []);
  useEffect(() => {
    console.log("isLogin", isLogin);
    if (!isLogin) {
      router.push("/login");
    }
  }, [isLogin]);

  return (
    <div>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
