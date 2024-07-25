"use client";

import { sidebarRoutes } from "@/constants";
import { Organization } from "@prisma/client";

import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { icons } from "lucide-react";

import SidebarItem from "./sidebar-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

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
  }, [orgKey]);

  if (orgKey === undefined) return;

  return (
    <nav className="flex flex-1 justify-between flex-col">
      <div className="flex-col gap-5 flex">
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
      </div>

      {}
      <div className="mt-auto">
        <Card>
          <CardHeader>
            <CardTitle>Upgrade to Pro</CardTitle>
            <CardDescription>
              Unlock all features and get unlimited access to our support team.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="sm" className="w-full">
              Upgrade
            </Button>
          </CardContent>
        </Card>
      </div>
    </nav>
  );
};

export default SidebarRoutes;
