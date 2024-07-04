"use server";

import { utapi } from "@/app/server/uploadthing";
import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { generateId } from ".";

const key = generateId();

export async function createNewOrg(
  userId: string,
  name: string,
  imageUrl: string
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

export async function useFindOrg(orgId: string) {
  if (!orgId) return;

  const org = await db.organization.findUnique({
    where: {
      key: orgId,
    },
  });

  if (org) return org;

  return null;
}
