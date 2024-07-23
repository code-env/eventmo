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
      <h1 className="capitalize font-semibold text-2xl">{path}</h1>
    </div>
  );
};

export default NavHeader;
