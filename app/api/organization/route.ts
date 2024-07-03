import { NextResponse } from "next/server";

import { getCurrentUser } from "@/lib/current-user";
import { db } from "@/lib/db";
import { ROLE } from "@prisma/client";
import { generateId } from "@/actions";

export async function POST(req: Request) {
  try {
    const { name, imageUrl } = await req.json();

    if (!name || !imageUrl) {
      return new NextResponse("This fields are required", { status: 400 });
    }

    const profile = await getCurrentUser();

    if (!profile) return new NextResponse("Unauthorized", { status: 401 });

    const team = await db.organization.create({
      data: {
        name,
        imageUrl,
        creatorId: profile.id,
        key: generateId(),
        members: {
          create: [
            {
              userId: profile.id,
              role: ROLE.ADMIN,
            },
          ],
        },
      },
    });

    return NextResponse.json(team);
  } catch (error: any) {
    console.log("[CREATE TEAM ERROR", error.message);
    return new NextResponse("Internal server error", { status: 500 });
  }
}