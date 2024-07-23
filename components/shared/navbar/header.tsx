"use client";

import { usePathname } from "next/navigation";
import React from "react";

const NavHeader = () => {
  const pathname = usePathname();

  let path = pathname.split("/")[3];

  if (path === undefined) {
    path = "Dashboard";
  }

  return (
    <div className="border-border h-14 border-b flex items-center px-8">
      NavHeader
    </div>
  );
};

export default NavHeader;
