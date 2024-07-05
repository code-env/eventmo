"use client";

import { sidebarRoutes } from "@/constants";
import React from "react";
import SidebarItem from "./sidebar-item";
import { Plus, icons } from "lucide-react";
import Feedback from "@/components/modals/feedback";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Organization } from "@prisma/client";
import CreateOrganizationModal from "@/components/modals/create-org";
import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";
import { Accordion } from "@/components/ui/accordion";

const Sidebar = ({
  userId,
  organizations,
  storageKey = "nothing-string",
}: {
  userId: string;
  organizations: Organization[];
  storageKey?: string;
}) => {
  const [isExpanded, setIsExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const defaultAccordionValue: string[] = Object.keys(isExpanded).reduce(
    (acc: string[], key: string) => {
      if (isExpanded[key]) {
        acc.push(key);
      }
      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setIsExpanded((curr) => ({
      ...curr,
      [id]: !isExpanded[id],
    }));
  };

  const pathname = usePathname();
  // console.log(pathname.split("/")[2]);
  const routes = sidebarRoutes(pathname.split("/")[2]);

  return (
    <aside
      className={cn(
        "hidden border-r md:block flex-1 py-4 sticky top-14 sm-height px-4 2xl:px-0"
      )}
    >
      <div className="flex-1  h-full pr-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <p>Organizations</p>
            <Link href="/select-org">
              <button className="w-8 h-8 center hover:bg-neutral-200 rounded transition-all duration-150">
                <Plus className="w-4 h-4" />
              </button>
            </Link>
          </div>
          <Accordion
            defaultValue={defaultAccordionValue}
            type="multiple"
            className="space-y-2"
          >
            {organizations.map((org) => (
              <div key={org.id}>
                <div className="flex items-center justify-between">
                  <p>{org.name}</p>
                </div>
                <nav className="grid items-start pr-2 text-sm font-medium">
                  {routes.map((route, index) => (
                    <SidebarItem
                      href={route?.href!}
                      icon={route.icon as keyof typeof icons}
                      label={route.label}
                      key={index}
                    />
                  ))}
                </nav>{" "}
                *
              </div>
            ))}
          </Accordion>
        </div>
        <Feedback userId={userId} />
      </div>
    </aside>
  );
};

export default Sidebar;
