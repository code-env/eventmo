import CreateOrg from "@/components/forms/create-org";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganization } from "@/lib/user-org";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Manage",
  description: "Manage your content in one clicks",
};

const Manage = async () => {
  const user = await getCurrentUser();

  if (!user) return;

  const organizaiton = await useOrganization();

  if (organizaiton) return <div className="calc-height"></div>;

  return (
    <div className="create-page flex center">
      <CreateOrg />
    </div>
  );
};

export default Manage;
