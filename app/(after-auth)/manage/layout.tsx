import { getCurrentUser } from "@/hooks/use-user";
import GlobalProvider from "@/providers/global-provider";
import { redirect } from "next/navigation";
import React, { ReactNode } from "react";

const ManageOrgLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) redirect("/sign-in");
  return (
    <GlobalProvider>
      {children}
    </GlobalProvider>
  );
};

export default ManageOrgLayout;
