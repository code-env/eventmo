import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";

export async function getCurrentUser() {
  try {
    const user = await currentUser();

    if (!user) return;

    const userInDb = await db.user.findUnique({
      where: {
        clerkId: user?.id,
      },
    });

    if (userInDb) return userInDb;

    const createNewUserInDb = await db.user.create({
      data: {
        clerkId: user.id,
        username: user.username as string,
        email: user.emailAddresses[0].emailAddress,
      },
    });

    console.log("user:", userInDb);

    return createNewUserInDb;
  } catch (error: any) {
    console.log(error.message);
  }
}
