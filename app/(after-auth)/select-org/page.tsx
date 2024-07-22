import CreateOrg from "@/components/forms/create-org";
import { useOrganizations } from "@/hooks/use-org";
import { Organization } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SelectOrganization = async () => {
  const organizations: Organization[] = await useOrganizations();

  if (organizations.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
        <CreateOrg />
      </div>
    );

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="">
        {organizations.map((org) => (
          <Link
            key={org.id}
            href={`/manage/${org.key}`}
            className="flex gap-2 items-center hover:bg-muted p-2 rounded-lg"
          >
            <div className="h-10 w-10 rounded-lg relative overflow-hidden">
              <Image
                src={org.imageUrl}
                fill
                alt="nothing"
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-1">
              <p>{org.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SelectOrganization;
