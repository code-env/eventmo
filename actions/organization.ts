"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { ROLE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { generateId } from "./generate-id";

export async function createOrg(
  name: string,
  imageUrl: string,
  imageKey: string
) {
  const user = await currentUser();

  if (!user) throw new Error("Unathorized");

  const userInDb = await db.user.findUnique({
    where: {
      clerkId: user.id,
    },
  });

  if (!userInDb) throw new Error("User not found in Db");

  const newOrg = await db.organization.create({
    data: {
      imageUrl,
      name,
      creatorId: userInDb.id,
      imageKey,
      key: generateId(),
      members: {
        create: [
          {
            userId: userInDb.id,
            role: ROLE.ADMIN,
          },
        ],
      },
    },
  });

  revalidatePath("/manage");

  return newOrg;
}
