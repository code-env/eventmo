"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { icons } from "lucide-react";
import Feedback from "@/components/modals/feedback";
import { cn } from "@/lib/utils";

const Sidebar = ({ userId, isOrg }: { userId: string; isOrg: boolean }) => {
  const routes = sidebarRoutes();

  // console.log(isOrg);

  return (
    <div
      className={cn(
        "hidden border-r md:block flex-1 py-4 sticky top-14 sm-height px-4 2xl:px-0",
        {
          "sidebar nothing": isOrg === false,
        }
      )}
    >
      <div className="flex-1">
        <nav className="grid items-start pr-2 text-sm font-medium">
          {routes.map((route, index) => (
            <SidebarItem
              href={route?.href!}
              icon={route.icon as keyof typeof icons}
              label={route.label}
              key={index}
            />
          ))}
          <Feedback userId={userId} />
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
