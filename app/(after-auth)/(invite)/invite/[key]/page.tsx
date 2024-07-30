import { useOrganization } from "@/hooks/use-org";
import { getCurrentUser } from "@/hooks/use-user";
import { db } from "@/lib/db";
import { Organization } from "@prisma/client";
import { redirect } from "next/navigation";

const InvitePage = async ({ params }: { params: { key: string } }) => {
  const user = await getCurrentUser();

  if (!user) return redirect("/sign-in");

  const org: Organization = await useOrganization(params.key);

  if (org) return redirect(`/manage/${org.key}`);

  const organization = await db.organization.update({
    where: {
      key: params.key,
    },
    data: {
      members: {
        create: [
          {
            userId: user.id,
          },
        ],
      },
    },
  });

  return redirect(`/manage/${organization.key}`);
};
loca
export default InvitePage;
