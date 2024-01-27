"use client";

import Header from "@/common/components/Header/Header";
import { Footer } from "@/common/components/Footer";
// import AppHeader from "@/common/components/AppHeader";
// import { hasAuthCookies } from "@/common/helpers/authCookies";
// import dayjs from "dayjs";
// import "dayjs/locale/vi";
import { PropsWithChildren, useEffect } from "react";
import { redirect } from "next/navigation";
import { checkIsLogin } from "@/common/helpers/checkIsLogin";

export default function MainLayout({ children }: PropsWithChildren) {
  const isLogin = checkIsLogin();
  //   const router = useRouter();
  //   useEffect(() => {
  //     dayjs.locale("vi");
  //   }, []);

  if (!isLogin) {
    redirect("/login");
  }

  return (
    < div  >
      <Header />
      <div className="flex justify-center">{children}</div>
      <Footer />
    </div >
  );
}