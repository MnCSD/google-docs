import Link from "next/link";
import { UserButton, OrganizationSwitcher } from "@clerk/nextjs";

import React from "react";
import { SearchInput } from "./search-input";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between h-full w-full">
      <div className="flex gap-3 items-center shrink-0 pr-6 ">
        <Link href={"/"}>
          <img
            src="https://www.gstatic.com/images/branding/product/1x/docs_2020q4_48dp.png"
            alt="Logo"
            className="w-[36px] h-[36px]"
          />
        </Link>
        <h3 className="text-xl ">Docs</h3>
      </div>
      <SearchInput />
      <div className="flex gap-3 items-center pl-6">
        <OrganizationSwitcher
          afterCreateOrganizationUrl={"/"}
          afterLeaveOrganizationUrl="/"
          afterSelectOrganizationUrl={"/"}
          afterSelectPersonalUrl={"/"}
        />
        <UserButton />
      </div>
    </nav>
  );
};
