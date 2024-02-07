

import { INavigation } from "@/common/interfaces/navigation.interface";
import { ActiveLink } from "../ActiveLink";


function DropdownMenu({children}: {children: INavigation[]}) {
  return (
    <div className="hidden absolute top-full peer-hover:flex hover:flex w-[200px] flex-col bg-white drop-shadow-lg z-10 p-2 rounded-md">
      {children.map(({ path, label }) => (
        <ActiveLink
          key={path}
          href={path}
          activeClassName="group is-active font-[900] text-primary"
          className="uppercase pt-3 pb-2 font-medium"
        >
          <div className="relative group-[.is-active]:before:block before:absolute before:w-full before:border-primary before:top-[-14px] before:hidden">
            {label}
          </div>
        </ActiveLink>
      ))}
    </div>
  );
}

export default DropdownMenu;
