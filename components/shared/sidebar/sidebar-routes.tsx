"use client";

import { sidebarRoutes } from "@/constants";
import { Organization } from "@prisma/client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { icons } from "lucide-react";

import SidebarItem from "./sidebar-item";

const SidebarRoutes = ({
  organizations,
}: {
  organizations: Organization[];
}) => {
  const pathname = usePathname();
  const [activeOrg, setActiveOrg] = useState<Organization>();

  const orgKey = pathname.split("/")[2];
  const routes = sidebarRoutes(orgKey);

  useEffect(() => {
    setActiveOrg(organizations.find((org) => org.key === orgKey));
  }, []);

  if (orgKey === undefined) return;

  return (
    <nav className="flex flex-col gap-5">
      {routes.map((route, index) => (
        <div className="flex flex-col gap-3" key={index}>
          <h2 className="uppercase text-neutral-400 font-medium">
            {route.title}
          </h2>
          <ul className="flex flex-col gap-1">
            {route.routes.map((item, index) => {
              //some code here

              return (
                <SidebarItem
                  key={index}
                  href={item.href}
                  label={item.label}
                  icon={item.icon as keyof typeof icons}
                />
              );
            })}
          </ul>

          {routes.length - 1 !== index && <hr className="my-5" />}
        </div>
      ))}
    </nav>
  );
};

export default SidebarRoutes;
