"use client";
import { PropsWithChildren, useEffect } from "react";
import { redirect } from "next/navigation";
import { getRole } from "@/common/helpers/getCookies";

function CollaboratorRoutesLayout({ children }: PropsWithChildren) {
    const role = getRole();

    useEffect(() => {
        // check if account is admin
        if (role !== "collaborator") {
            // redirect("/login"); // redirect to general home page
        }
    }, [role]);

    return <>{children}</>;
}

export default CollaboratorRoutesLayout;
