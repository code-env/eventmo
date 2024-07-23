import CreateOrg from "@/components/forms/create-org";
import { useOrganizations } from "@/hooks/use-org";
import { Organization } from "@prisma/client";
import React from "react";
import Organizations from "@/components/organizations";

const ManageOrgs = async () => {
  const organizations: Organization[] = await useOrganizations();

  if (organizations.length === 0)
    return (
      <div className="flex h-screen items-center">
        <CreateOrg />
      </div>
    );

  return (
    <div className="flex h-screen items-center justify-center">
      <Organizations organizations={organizations} />
    </div>
  );
};

export default ManageOrgs;
