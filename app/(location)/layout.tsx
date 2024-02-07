"use client";

import { Footer } from "@/common/components/Footer";
import Header from "@/common/components/Header/Header";
// import AppHeader from "@/common/components/AppHeader";
// import { hasAuthCookies } from "@/common/helpers/authCookies";
// import dayjs from "dayjs";
// import "dayjs/locale/vi";
import { checkIsLogin } from "@/common/helpers/checkIsLogin";
import { useRouter } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  const isLogin = checkIsLogin();
  const router = useRouter();
  //   useEffect(() => {
  //     dayjs.locale("vi");
  //   }, []);
  useEffect(() => {
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
