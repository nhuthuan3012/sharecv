"use client";

import { ArrowDropDown } from "@mui/icons-material";
import { Avatar, Box, Button, Typography, keyframes } from "@mui/material";
import classNames from "classnames";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { ActiveLink } from "../ActiveLink";
import DropdownMenu from "../DropdownMenu";
// import SideDrawerBtn from "../SideDrawerBtn";
// import Notification from "./notification";
import {
  recruiterRoutes,
  collaboratorRoutes,
  adminRoutes,
  defaultRoutes,
} from "./roleBasedRoutes";

import { INavigation } from "@/common/interfaces/navigation.interface";
import { removeAccessCookies, removeRoleCookies } from "@/common/helpers/setCookies";

const descendAnimation = keyframes`
  from {
    transform: translateY(-100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

function AppHeader({ isAuth, role }: { isAuth: boolean; role: string }) {
  const headerRef = useRef(null);
  // const headerOnScreen = useOnScreen(headerRef);
  const router = useRouter();

  const [navigation, setNavigation] = useState<INavigation[]>(defaultRoutes);

  useEffect(() => {
    if (role === "recruiter") {
      // console.log("organization");
      setNavigation(recruiterRoutes);
    } else if (role === "collaborator") {
      // console.log("business");
      setNavigation(collaboratorRoutes);
    } else if (role === "admin") {
      // console.log("admin");
      setNavigation(adminRoutes);
    }    
    else {
      setNavigation(defaultRoutes);
    }
  }, [role, isAuth]);

  // console.log(authCookies)

  return (
    <div ref={headerRef} className="flex h-24 relative w-full">
      <Box
        className={classNames(
          "flex border-2 pl-2.5 h-24 items-center gap-7 justify-center z-[500] bg-slate-50 w-full fixed"
        )}
        sx={{
          // position: headerOnScreen ? "fixed" : "fixed",
          // boxShadow: headerOnScreen ? "none" : "0 0 5px 0px #000000",
          transition: `${descendAnimation} .2s ease-out forwards`,
          top: 0,
          left: 0,
        }}
      >
        <div className="flex w-full max-w-[1200px] mx-4 items-center">
          <Box
            className="h-20 aspect-[2/1] md:h-14 relative"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <Image
              src="/logo.png"
              alt="Logo"
              fill
              style={{
                maxHeight: "100%",
                objectFit: "contain",
                left: 0,
              }}
            />
          </Box>
          <div className="hidden flex-auto px-5 md:flex">
            <div className="flex w-full max-w-[900px] gap-12 px-5">
              {navigation.map(({ path, label, children }) => (
                <div key={path + label} className="flex relative">
                  <ActiveLink
                    href={path}
                    childPath={children}
                    activeClassName="group is-active font-[900] text-primary"
                    // activeClassName="group is-active font-bold text-transparent bg-clip-text bg-gradient-to-b from-[#659FDF] to-[#B7B5F1]"
                    className="group peer relative uppercase pt-3 pb-2 font-bold flex items-center"
                  >
                    <div>{label}</div>
                    {children && (
                      <ArrowDropDown className="h-4 w-4 absolute -right-4 top-1/2 -translate-y-1/2 transform transition-transform duration-200 group-hover:rotate-180 text-black group-hover:text-primary group-[.is-active]:text-primary" />
                    )}
                  </ActiveLink>
                  {children && <DropdownMenu childPath={children} />}
                </div>
              ))}
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7">
            {isAuth ? (
              <div className="flex items-center space-x-4">
                {/* <Notification position="bottom" /> */}

                {/* <AvatarMenu full_name={profile.full_name} /> */}
                {/* <Typography>{profile.full_name}</Typography> */}
                <Button
                  disableFocusRipple
                  sx={{
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.6,
                    },
                  }}
                  onClick={() => {
                    removeAccessCookies();
                    removeRoleCookies();
                    router.push("/login");
                  }}
                >
                  Đăng xuất
                </Button>
              </div>
            ) : (
              <>
                <Button
                  disableFocusRipple
                  sx={{
                    textTransform: "capitalize",
                    "&:hover": {
                      backgroundColor: "transparent",
                      opacity: 0.6,
                    },
                  }}
                  onClick={() => router.push("/login")}
                >
                  Đăng nhập
                </Button>
                <Button
                  variant="contained"
                  sx={{
                    boxShadow: "none",
                    textTransform: "none",
                    borderRadius: "20px",
                  }}
                  onClick={() => router.push("/register")}
                >
                  Đăng ký
                </Button>
              </>
            )}
          </div>
        </div>
      </Box>
    </div>
  );
}

export default AppHeader;
