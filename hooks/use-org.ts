// import { currentUser } from "@clerk/nextjs/server";
import { getCurrentUser } from "./use-user";
import { db } from "@/lib/db";

export async function useOrganization(key: string) {
  try {
    const user = await getCurrentUser();

    const organization = await db.organization.findFirst({
      where: {
        key,
        members: {
          some: {
            userId: user?.id,
          },
        },
      },
    });

    if (organization) return organization;

    return null;
  } catch (error: any) {
    return error.message;
  }
}

export async function useOrganizations() {
  try {
    const user = await getCurrentUser();

    const organizations = await db.organization.findMany({
      where: {
        members: {
          some: {
            userId: user?.id,
          },
        },
      },
    });

    if (organizations) return organizations;

    return null;
  } catch (error: any) {
    return error.message;
  }
}
