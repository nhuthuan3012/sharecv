"use client";
import { PropsWithChildren, useEffect } from "react";
import redirect from "next/navigation";

function RecruiterRoutesLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        // check if account is recruiter
        if(!true){
            redirect("/login");
        }
     }, []);
  return <>{children}</>;
}

export default RecruiterRoutesLayout;
