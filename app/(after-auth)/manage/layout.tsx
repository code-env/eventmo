import Sidebar from "@/components/shared/sidebar";
import { useOrganization } from "@/hooks/use-org";
import { getCurrentUser } from "@/hooks/use-user";
import GlobalProvider from "@/providers/global-provider";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const AfterAuthLayOut = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  const organizations = await useOrganization();

  if (!user) redirect("/sign-in");

  return (
    <GlobalProvider>
      <div>
        <div className="max-w-7xl mx-auto w-full flex">
          <Sidebar />
          {children}
        </div>
      </div>
    </GlobalProvider>
  );
};

export default AfterAuthLayOut;
