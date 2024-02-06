"use client";
import { PropsWithChildren, useEffect } from "react";
import { getRole } from "@/common/helpers/getCookies";
import { redirect } from "next/navigation";


function AdminRoutesLayout({ children }: PropsWithChildren) {
    const role = getRole();

    useEffect(() => {
        // check if account is admin
        if (role !== "admin") {
            // redirect("/login"); // redirect to general home page
        }
    }, [role]);
    return <>{children}</>;
}

export default AdminRoutesLayout;
