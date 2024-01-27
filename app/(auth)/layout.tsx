"use client" ;

import { redirect } from "next/navigation";
import { PropsWithChildren, useEffect } from "react";

export default function AuthLayout({ children }: PropsWithChildren) {
  const isLogin = hasAuthCookies();
  const profile = getProfileCookies();

  useEffect(() => {
    if (isLogin) {
      // console.log('Role là gì: ', role);
      if (profile.role === "admin") return redirect("/admin/dashboard");
      return redirect(`/home`);
    }
  }, [isLogin]);
  return <>{children}</>;
}
