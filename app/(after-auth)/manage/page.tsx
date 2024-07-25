import CreateOrg from "@/components/forms/create-org";
import { useOrganizations } from "@/hooks/use-org";
import { Organization } from "@prisma/client";
import React from "react";
import Organizations from "@/components/organizations";

const ManageOrgs = async () => {
  const organizations: Organization[] = await useOrganizations();

  if (organizations.length === 0)
    return (
      <div className="flex h-screen w-full items-center justify-center">
        <CreateOrg />
      </div>
    );

  return (
    <div className="min-h-screen py-20 w-full">
      <Organizations />
    </div>
  );
};

export default ManageOrgs;
