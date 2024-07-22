import { cn } from "@/lib/utils";
import { icons } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

interface sidebarItemProps {
  href: string;
  icon: keyof typeof icons;
  label: string;
}

const SidebarItem = ({ href, icon, label }: sidebarItemProps) => {
  const pathname = usePathname();

  const Icon = icons[icon];
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "flex items-center gap-3 rounded-lg relative px-3 py-2 transition-all text-black dark:text-white",
        {
          "before:absolute before:-left-5 before:top-0 before:bg-primary before:w-1  before:h-full before:rounded-r-lg bg-background border border-border":
            isActive,
        }
      )}
    >
      <Icon
        className={cn("h-4 w-4 text-", {
          "text-muted-foreground": isActive,
        })}
      />
      <span className={cn("capitalize", { "text-primary": isActive })}>
        {label}
      </span>
    </Link>
  );
};

export default SidebarItem;
