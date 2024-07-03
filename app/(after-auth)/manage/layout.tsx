import Sidebar from "./_components/sidebar";
import React, { ReactNode } from "react";
import Header from "./_components/header";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganization } from "@/lib/user-org";
import { redirect } from "next/navigation";
import { cn } from "@/lib/utils";

const MangeLayout = async ({ children }: { children: ReactNode }) => {
  const user = await getCurrentUser();

  if (!user) return;
  const organizaiton = await useOrganization();

  if (organizaiton) return redirect(`/manage/${organizaiton.key}`);

  return (
    <div className="min-h-screen flex flex-col ">
      <Header userId={user.id} />
      <div className="flex flex-1 h-full lg:max-w-7xl w-full mx-auto">
        <Sidebar userId={user.id} isOrg={organizaiton ? true : false} />
        <main
          className={cn("flex flex-[3] flex-col gap-4 p-4 lg:gap-6 lg:p-6")}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default MangeLayout;
