"use client";
import { PropsWithChildren, useEffect } from "react";
import redirect from "next/navigation";

function AdminRoutesLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        // check if account is admin
        if(!true){
            redirect("/login");
        }
     }, []);
  return <>{children}</>;
}

export default AdminRoutesLayout;
