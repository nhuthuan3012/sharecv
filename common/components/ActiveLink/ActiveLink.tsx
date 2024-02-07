"use client";

import { usePathname } from "next/navigation";
import PropTypes from "prop-types";
import Link from "next/link";
import classNames from "classnames";

import { TActiveLink } from ".";
import { Typography } from "@mui/material";

export const ActiveLink = ({
  childPath,
  children,
  activeClassName,
  ...props
}: TActiveLink) => {
  const asPath = usePathname();

  // pages/index.js will be matched via props.href
  // pages/about.js will be matched via props.href
  // pages/[slug].js will be matched via props.as
  const isActive =
    asPath == props.href ||
    asPath == props.as ||
    childPath?.some((obj) => obj.path === asPath);

  return (
    <Link {...props} style={{ textDecoration: "none", color: 'black' }}>
      <Typography
        className={classNames(
          props.className,
          isActive ? activeClassName || "" : "text-black hover:text-primary"
        )}
      >
        {children}
      </Typography>
    </Link>
  );
};
