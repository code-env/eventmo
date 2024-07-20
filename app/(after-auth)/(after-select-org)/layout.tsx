import Sidebar from "./manage/_components/sidebar";
import React, { ReactNode } from "react";
import Header from "./manage/_components/header";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganizations } from "@/lib/user-org";
import { cn } from "@/lib/utils";
import GlobalProvider from "@/providers/after-auth-provider";

const MangeLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();
  const organizaitons = await useOrganizations();

  if (!user) return;

  return (
    <GlobalProvider>
      <div className="min-h-screen flex max-w-7xl w-full mx-auto">
        <Sidebar userId={user.id} organizations={organizaitons} />
        <main className={cn("flex flex-[3] flex-col gap-4 lg:gap-6 border-r border-border")}>
          {children}
        </main>
      </div>
    </GlobalProvider>
  );
};

export default MangeLayout;
