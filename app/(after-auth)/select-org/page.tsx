import CreateOrg from "@/components/forms/create-org";
import { useOrganizations } from "@/hooks/use-org";
import React from "react";

const SelectOrganization = async () => {
  const organizations = await useOrganizations();

  if (organizations.length === 0)
    return (
      <div className="flex h-screen items-center justify-center">
        <CreateOrg />
      </div>
    );

  return <div className="flex h-screen items-center justify-center"></div>;
};

export default SelectOrganization;
