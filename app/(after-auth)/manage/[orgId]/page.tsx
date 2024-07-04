import { useFindOrg } from "@/actions/organisation";
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

  return <div>NOthing</div>;
};

export default OrgId;
