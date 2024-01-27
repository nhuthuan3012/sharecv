"use client";

import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";
import { checkIsLogin } from "@/common/helpers/checkIsLogin";
import { getRole } from "@/common/helpers/getCookies";

export default function AuthLayout({ children }: PropsWithChildren) {
  const isLogin = checkIsLogin();
  const role = getRole();

  useEffect(() => {
    if (isLogin) {
      console.log('User logged in is: ', role);
      // if (role === "admin") return redirect("/admin/dashboard");
      // else if (role === "recruiter") return redirect("/employer/dashboard");
      // else if (role === "collaborator") return redirect("/collaborator/dashboard");
      // else redirect(`/home`);
    }
  }, [isLogin]);

  return <>{children}</>;
}
