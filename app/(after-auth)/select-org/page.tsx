import CreateOrg from "@/components/forms/create-org";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganization } from "@/lib/user-org";
import { redirect } from "next/navigation";
import React from "react";

const SelectOrg = async () => {
  const user = await getCurrentUser();

  if (!user) return;

  const organizaton = await useOrganization();

  if (organizaton) return redirect(`/manage/${organizaton.key}`);

  return (
    <div className="create-page flex center">
      <CreateOrg />
    </div>
  );
};

export default SelectOrg;
