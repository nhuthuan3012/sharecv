"use client";
import { PropsWithChildren, useEffect } from "react";
import redirect from "next/navigation";

function CollaboratorRoutesLayout({ children }: PropsWithChildren) {
    useEffect(() => {
        // check if account is collaborator
        if(!true){
            redirect("/login");
        }
     }, []);
  return <>{children}</>;
}

export default CollaboratorRoutesLayout;
