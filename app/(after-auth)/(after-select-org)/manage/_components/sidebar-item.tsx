"use client";

import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { sidebarRoutes } from "@/constants";
import { cn } from "@/lib/utils";
import { Organization } from "@prisma/client";
import { icons } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface sidebarItemProps {
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (key: string) => void;
}

const SidebarItem = ({
  isActive,
  isExpanded,
  organization,
  onExpand,
}: sidebarItemProps) => {
  const pathname = usePathname();
  const path = pathname.split("/")[2];
  const routes = sidebarRoutes(path);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <AccordionItem value={organization.key} className="border-none py-1">
      <AccordionTrigger
        onClick={() => onExpand(organization.key)}
        className={cn(
          "flex items-center gap-x-2 p-1.5 text-neutral-700 rounded-md hover:bg-neutral-500/10 dark:hover:bg-lightBackground transition-all duration-150 text-start no-underline hover:no-underline w-fit",
          isActive && !isExpanded && "bg-neutral-500/10 text-neutral-700"
        )}
      >
        <div className="flex items-center gap-x-2">
          <div className="w-7 h-7 relative rounded-sm overflow-hidden ">
            <Image
              fill
              alt={`Eventmo ${organization.name} profile picture`}
              src={organization.imageUrl}
              className="object-cover "
            />
          </div>
          <span className="font-medium text-sm dark:text-neutral-400">
            {organization.name}
          </span>
        </div>
      </AccordionTrigger>

      <AccordionContent className="text-neutral-700 pt-1">
        {routes.map((route) => {
          //some code here
          const Icon = icons[route.icon as keyof typeof icons];

          return (
            <Link
              href={route.href}
              className={cn(
                "flex items-center gap-x-2 px-7 py-[5px] rounded-sm dark:text-neutral-400",
                pathname === route.href && "bg-neutral-500/10 text-neutral-700"
              )}
              key={route.label}
            >
              <Icon className="w-4 h-4" />
              <span>{route.label}</span>
            </Link>
          );
        })}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SidebarItem;
