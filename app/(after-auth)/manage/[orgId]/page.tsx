import { useFindOrg } from "@/actions/organisation";
import OrgEvents from "@/components/shared/org-events";
import React from "react";

const OrgId = async ({ params }: { params: { orgId: string } }) => {
  const organizaiton = await useFindOrg(params.orgId);

  console.log(organizaiton);

  if (!organizaiton)
    return (
      <div className="calc-height flex items-center justify-center">
        organizaiton not found
      </div>
    );

  return <OrgEvents orgKey={organizaiton.key} />;
};

export default OrgId;
