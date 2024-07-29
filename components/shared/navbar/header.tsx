"use client";

import ShareOrg from "@/components/modal/share-org";
import { usePathname } from "next/navigation";
import React from "react";

const NavHeader = () => {
  const pathname = usePathname();

  let path = pathname.split("/")[3];

  if (path === undefined) {
    path = "Dashboard";
  }

  return (
    <div className="border-border h-14 border-b flex items-center px-8 justify-between">
      <h1 className="capitalize font-semibold text-2xl">{path}</h1>
      <div className="flex items-center gap-3">
        <ShareOrg />
      </div>
    </div>
  );
};

export default NavHeader;
