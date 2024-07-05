import Sidebar from "./manage/_components/sidebar";
import React, { ReactNode } from "react";
import Header from "./manage/_components/header";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganization, useOrganizations } from "@/lib/user-org";
import { cn } from "@/lib/utils";
import NextTopLoader from "nextjs-toploader";

const MangeLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return;
  const organizaitons = await useOrganizations();

  return (
    <div className="min-h-screen flex flex-col ">
      <NextTopLoader
        color="black"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        showSpinner={false}
        easing="ease"
      />
      <Header userId={user.id} />
      <div className="flex flex-1 h-full lg:max-w-7xl w-full mx-auto">
        <Sidebar userId={user.id} organizations={organizaitons} />
        <main className={cn("flex flex-[3] flex-col gap-4 lg:gap-6")}>
          {children}
        </main>
      </div>
    </div>
  );
};

export default MangeLayout;
