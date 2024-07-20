"use client";

import { Organization } from "@prisma/client";
import { AnimatePresence, motion } from "framer-motion";
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
        className="border p-2 rounded-lg h-14"
        onClick={() => setIsClicked((prev) => !prev)}
      >
        <div className="flex gap-2 items-center">
          <div className="h-10 w-10 min-w-10 relative rounded-md overflow-hidden">
            <Image fill src={activeOrg?.imageUrl!} alt="" />
          </div>
          <div className="flex flex-col gap-1">
            <p>{activeOrg?.name}</p>
            <span>{activeOrg?.plan}</span>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default SidebarHeader;
