import NavHeader from "@/components/shared/navbar/header";
import Sidebar from "@/components/shared/sidebar";
import { getCurrentUser } from "@/hooks/use-user";
import GlobalProvider from "@/providers/global-provider";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AfterAuthLayOut = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");

  return (
    <GlobalProvider>
      <div className="bg-muted w-full">
        <div className="max-w-7xl mx-auto w-full flex">
          <Sidebar />
          <div className="flex-1 bg-background">
            <NavHeader />
            {children}
          </div>
        </div>
      </div>
    </GlobalProvider>
  );
};

export default AfterAuthLayOut;
