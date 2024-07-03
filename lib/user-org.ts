// import { currentUser } from "@clerk/nextjs/server";
import { getCurrentUser } from "./current-user";
import { db } from "./db";

export async function useOrganization() {
  try {
    const user = await getCurrentUser();

    const organization = await db.organization.findFirst({
      where: {
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
