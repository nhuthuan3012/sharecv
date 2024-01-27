"use client"

import { redirect } from "next/navigation"
import { useEffect } from "react";

const MainPage = () => {

    useEffect(() => {
        redirect("/login");
    }, []);

    return <div></div>;
}


export default MainPage;