"use client";

import { Organization } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronsUpDown } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

const SidebarHeader = ({
  organizations,
}: {
  organizations: Organization[];
}) => {
  const pathname = usePathname();
  const [isClicked, setIsClicked] = useState(false);
  const [activeOrg, setActiveOrg] = useState<Organization>();

  const orgKey = pathname.split("/")[2];

  useEffect(() => {
    setActiveOrg(organizations.find((org) => org.key === orgKey));
  }, []);

  if (orgKey === undefined) return;

  return (
    <AnimatePresence>
      <motion.div
        className="border p-2 rounded-lg h-14 flex items-center cursor-pointer hover:bg-muted/50 slowmo justify-between bg-background"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 min-w-10 relative rounded-md overflow-hidden">
            <Image fill src={activeOrg?.imageUrl!} alt="" />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold">{activeOrg?.name}</p>
            <span className="text-xs text-primary">
              {activeOrg?.plan === "FREE" ? "Free plan" : activeOrg?.plan}
            </span>
          </div>
        </div>
        <ChevronsUpDown className="w-4 h-4 text-neutral-500" />
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarHeader;
