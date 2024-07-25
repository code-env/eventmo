import NavHeader from "@/components/shared/navbar/header";
import Sidebar from "@/components/shared/sidebar";
import React, { ReactNode } from "react";

const AfterAuthLayOut = ({ children }: { children: ReactNode }) => {
  return (
    <div className="bg-muted w-full">
      <div className="max-w-7xl mx-auto w-full flex">
        <Sidebar />
        <div className="flex-1 bg-background border-border border-r dark:border-neutral-700">
          <NavHeader />
          {children}
        </div>
      </div>
    </div>
  );
};

export default AfterAuthLayOut;
