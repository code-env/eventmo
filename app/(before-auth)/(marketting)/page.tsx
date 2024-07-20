import { buttonVariants } from "@/components/ui/button";
import { getCurrentUser } from "@/hooks/use-user";
import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const HomePage = async () => {
  const user = await getCurrentUser();

  if (!user) return redirect("/manage");

  return (
    <div className="flex h-screen items-center justify-center gap-10">
      <Link href="/sign-in" className={buttonVariants({ variant: "default" })}>
        Sign In
      </Link>
      <Link href="/sign-up" className={buttonVariants({ variant: "default" })}>
        Sign up
      </Link>
    </div>
  );
};

export default HomePage;
