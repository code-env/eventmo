"use server";

"use server";

import { utapi } from "@/app/server/uploadthing";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function createNewOrg(
  userId: string,
  name: string,
  imageUrl: string,
  key: string
) {
  if (userId) return new Error("User id");

  const newOrg = await db.organization.create({
    data: {
      imageUrl,
      name,
      creatorId: userId,
      key,
      members: {
        create: [
          {
            userId,
            role: ROLE.ADMIN,
          },
        ],
      },
    },
  });
  return newOrg;
}
