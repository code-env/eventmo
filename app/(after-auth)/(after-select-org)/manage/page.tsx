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
  const organizaton = await useOrganization();

  if (!user) return;

  if (organizaton) return redirect(`/manage/${organizaton.key}`);

  return redirect("/select-org");
};

export default Manage;
