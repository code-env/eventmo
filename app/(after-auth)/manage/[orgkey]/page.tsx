import { useOrganization } from "@/hooks/use-org";
import { redirect } from "next/navigation";
import React from "react";

const OrgPage = async ({ params }: { params: { orgkey: string } }) => {
  const organization = await useOrganization(params.orgkey);

  if (!organization) return redirect("/select-org");

  return <div>OrgPage</div>;
};

export default OrgPage;
