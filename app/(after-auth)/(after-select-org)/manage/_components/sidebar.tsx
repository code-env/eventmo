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

  return (
    <aside
      className={cn(
        "hidden border-x md:block flex-1 py-4 sticky top-0 sm-height px-4 2xl:px-0 pb-20  dark:border-border max-w-md h-screen",
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

         
        </div>
      </div>
      <Feedback userId={userId} />
    </aside>
  );
};

export default Sidebar;
