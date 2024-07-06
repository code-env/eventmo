"use client";

import { Plus } from "lucide-react";
import { usePathname } from "next/navigation";
import { Organization } from "@prisma/client";
import { useLocalStorage } from "usehooks-ts";
import Link from "next/link";

import SidebarItem from "./sidebar-item";
import Feedback from "@/components/modals/feedback";
import { cn } from "@/lib/utils";
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
  const pathname = usePathname();
  const route = pathname.split("/")[2];
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

  return (
    <aside
      className={cn(
        "hidden border-r md:block flex-1 py-4 sticky top-14 sm-height px-4 2xl:px-0 pb-20  dark:border-border",
        storageKey === "mobile-nav" && "block border-r-0 pt-20"
      )}
    >
      <div className="flex-1  h-full pr-2">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between dark:text-neutral-400">
            <p>Organizations</p>
            <Link href="/select-org">
              <button className="w-8 h-8 center hover:bg-neutral-200 dark:hover:bg-lightBackground rounded transition-all duration-150">
                <Plus className="w-4 h-4" />
              </button>
            </Link>
          </div>

          <Accordion defaultValue={defaultAccordionValue} type="multiple">
            {organizations.map((org) => (
              <SidebarItem
                key={org.id}
                onExpand={onExpand}
                organization={org}
                isActive={org.key === route}
                isExpanded={isExpanded[org.key]}
              />
            ))}
          </Accordion>
        </div>
      </div>
      <Feedback userId={userId} />
    </aside>
  );
};

export default Sidebar;
