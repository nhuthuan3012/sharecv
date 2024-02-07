import { INavigation } from "@/common/types";
import { LinkProps } from "next/link";


export type TActiveLink = Omit<
  React.AnchorHTMLAttributes<HTMLAnchorElement>,
  keyof LinkProps
> &
  LinkProps & {
    childPath?: INavigation[];
    activeClassName?: string;
    children?: React.ReactNode;
  } & React.RefAttributes<HTMLAnchorElement>;
