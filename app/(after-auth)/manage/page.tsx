import CreateOrg from "@/components/forms/create-org";
import { getCurrentUser } from "@/lib/current-user";
import { useOrganization } from "@/lib/user-org";
import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Manage",
  description: "Manage your content in one clicks",
};

const Manage = async () => {
  const user = await getCurrentUser();

  if (!user) return;

  const organizaiton = await useOrganization();

  if (organizaiton) return redirect(`/manage/${organizaiton.key}`);

  return (
    <div className="create-page flex center">
      <CreateOrg />
    </div>
  );
};

export default Manage;
